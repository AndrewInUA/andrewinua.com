import type { APIRoute } from 'astro';
import { keys } from '../../data/site';

export const prerender = false;

// Public data source. The page never calls it directly: this endpoint does, and
// Vercel's CDN caches the response (see cache-control below), so a burst of
// visitors costs the upstream API one request per cache window.
//
// Field names below were checked against a real response on 2026-09-15
// (score_version 79). If Stakewiz renames a field, that value becomes null and
// the page shows a dash instead of breaking.
const STAKEWIZ_URL = `https://api.stakewiz.com/validator/${keys.vote}`;

const num = (v: unknown): number | null => {
  if (typeof v === 'number' && Number.isFinite(v)) return v;
  if (typeof v === 'string' && v.trim() !== '' && Number.isFinite(Number(v))) return Number(v);
  return null;
};

async function getJson(url: string, timeoutMs = 8000): Promise<any> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const r = await fetch(url, {
      signal: ctrl.signal,
      headers: { accept: 'application/json', 'user-agent': 'andrewinua.com metrics (+https://andrewinua.com)' },
    });
    if (!r.ok) throw new Error(`${url} -> ${r.status}`);
    return await r.json();
  } finally {
    clearTimeout(t);
  }
}

function normaliseStakewiz(s: any) {
  if (!s || typeof s !== 'object' || !s.vote_identity) return null;
  return {
    name: s.name ?? null,
    epoch: num(s.epoch),
    sourceUpdatedAt: typeof s.updated_at === 'string' ? s.updated_at : null,
    activatedStake: num(s.activated_stake),
    commission: num(s.commission),
    isJito: typeof s.is_jito === 'boolean' ? s.is_jito : null,
    jitoCommissionBps: num(s.jito_commission_bps),
    apy: num(s.total_apy), // staking + Jito MEV, the honest headline number
    stakingApy: num(s.staking_apy),
    jitoApy: num(s.jito_apy),
    wizScore: num(s.wiz_score),
    rank: num(s.rank),
    skipRate: num(s.skip_rate),
    voteSuccess: num(s.vote_success),
    creditRatio: num(s.credit_ratio),
    uptime: num(s.uptime),
    version: typeof s.version === 'string' ? s.version : null,
    delinquent: typeof s.delinquent === 'boolean' ? s.delinquent : null,
    firstEpochWithStake: num(s.first_epoch_with_stake),
    city: s.ip_city ?? null,
    country: s.ip_country ?? null,
  };
}

export const GET: APIRoute = async () => {
  let stakewiz: ReturnType<typeof normaliseStakewiz> = null;
  try {
    stakewiz = normaliseStakewiz(await getJson(STAKEWIZ_URL));
  } catch {
    stakewiz = null;
  }

  const body = {
    vote: keys.vote,
    updatedAt: new Date().toISOString(),
    sources: { stakewiz: stakewiz ? 'ok' : 'unavailable' },
    stakewiz,
  };

  const ok = Boolean(stakewiz);
  return new Response(JSON.stringify(body), {
    status: ok ? 200 : 503,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      // 15 min fresh at the edge, then serve stale for a day while revalidating.
      'cache-control': ok ? 'public, s-maxage=900, stale-while-revalidate=86400' : 'public, s-maxage=120',
      'access-control-allow-origin': '*',
    },
  });
};
