import type { APIRoute } from 'astro';
import { keys } from '../../data/site';

export const prerender = false;

// Stake composition by pool, from the public stake-pools data feed documented in
// github.com/SOFZP/Solana-Stake-Pools-Research (DATA_API.md). live.json refreshes about every 20 minutes; status.json tells whether the pipeline is
// healthy. If the live feed is stale or down, the canonical archive on GitHub is used.
// The snapshot is several MB, so this endpoint is cached for hours at the edge and the
// page keeps a static fallback if nothing is available.
const LIVE_URL = 'https://data.cryptovik.info/v1/mainnet-beta/live.json';
const STATUS_URL = 'https://data.cryptovik.info/v1/mainnet-beta/status.json';
const MANIFEST_URL =
  'https://raw.githubusercontent.com/SOFZP/Solana-Stake-Pools-Research/main/stakepool-data/mainnet-beta/manifest.json';

const GROUP_LABELS: Record<string, string> = {
  SFDP_STAKE: 'Solana Foundation Delegation Program',
};
const NAME_LABELS: Record<string, string> = {
  JITO_POOL: 'Jito',
  VAULT_POOL: 'The Vault',
  JPOOL_POOL: 'JPool',
  DOUBLEZERO: 'DoubleZero',
  SELF_STAKE: 'Self-stake',
  BLAZESTAKE: 'BlazeStake',
  MARGINFI_POOL: 'Marginfi',
};
const SMALL_ROW_PERCENT = 0.5; // rows below this share are merged into "Others"

async function getJson(url: string, timeoutMs: number): Promise<any> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const r = await fetch(url, { signal: ctrl.signal, headers: { accept: 'application/json' } });
    if (!r.ok) throw new Error(`${url} -> ${r.status}`);
    return await r.json();
  } finally {
    clearTimeout(t);
  }
}

// Staleness rule from the data docs: delayed when age > 3 x expected interval.
async function liveIsFresh(): Promise<boolean> {
  try {
    const st = await getJson(STATUS_URL, 5000);
    const age = (Date.now() - new Date(st.last_success_utc).getTime()) / 1000;
    const expected = Number(st.expected_interval_seconds) || 1200;
    return Number.isFinite(age) && age <= 3 * expected && Number(st.consecutive_failures || 0) < 3;
  } catch {
    return false;
  }
}

async function loadSnapshot(): Promise<{ data: any; source: string }> {
  if (await liveIsFresh()) {
    try {
      return { data: await getJson(LIVE_URL, 20000), source: LIVE_URL };
    } catch {
      /* fall through to the archive */
    }
  }
  const manifest = await getJson(MANIFEST_URL, 8000);
  return { data: await getJson(manifest.latest_data_url, 20000), source: manifest.latest_data_url };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export const GET: APIRoute = async () => {
  try {
    const { data, source } = await loadSnapshot();

    const validator = (data.validators ?? []).find((v: any) => v?.info?.vote_pubkey === keys.vote);
    if (!validator) throw new Error('validator not found in data set');

    const defs = new Map<string, { long_name?: string; group?: string }>();
    for (const p of data.pool_definitions ?? []) defs.set(p.short_name, p);

    const totalSol = Number(validator.totals?.total_active_lamports ?? 0) / 1e9;

    // Merge pools that belong to one programme (e.g. the two Foundation accounts).
    const merged = new Map<string, { label: string; sol: number; count: number }>();
    for (const p of validator.aggregations?.by_pool ?? []) {
      const def = defs.get(p.name);
      const key = def?.group && GROUP_LABELS[def.group] ? def.group : p.name;
      const label =
        (def?.group && GROUP_LABELS[def.group]) ||
        NAME_LABELS[p.name] ||
        (p.name === 'OTHER' ? 'Individual delegators' : def?.long_name || p.name);
      const cur = merged.get(key) ?? { label, sol: 0, count: 0 };
      cur.sol += Number(p.active_lamports ?? 0) / 1e9;
      cur.count += Number(p.count ?? 0);
      merged.set(key, cur);
    }

    let rows = [...merged.entries()].map(([key, r]) => ({
      key,
      label: key === 'OTHER' ? `${r.label} (${r.count} stake accounts)` : r.label,
      sol: Math.round(r.sol),
      percent: totalSol ? (r.sol / totalSol) * 100 : 0,
    }));

    const isSmall = (r: { percent: number; key: string }) => r.percent < SMALL_ROW_PERCENT && r.key !== 'OTHER';
    const others = rows.filter(isSmall);
    rows = rows.filter((r) => !isSmall(r)).sort((a, b) => b.sol - a.sol);
    if (others.length) {
      const sol = others.reduce((a, r) => a + r.sol, 0);
      const named = others.map((r) => r.label).filter((l) => !/unknown|test/i.test(l)).slice(0, 3);
      rows.push({ key: 'OTHERS', label: named.length ? `Others: ${named.join(', ')}` : 'Others', sol, percent: totalSol ? (sol / totalSol) * 100 : 0 });
    }

    const body = {
      vote: keys.vote,
      epoch: data.metadata?.epoch ?? null,
      asOf: data.metadata?.timestamp_utc ? formatDate(data.metadata.timestamp_utc) : null,
      timestamp: data.metadata?.timestamp_utc ?? null,
      totalSol: Math.round(totalSol),
      stakeAccounts: validator.totals?.total_stake_accounts ?? null,
      rows,
      source,
    };
    return new Response(JSON.stringify(body), {
      status: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        // Fresh for 6 hours at the edge, then stale for two days while revalidating.
        'cache-control': 'public, s-maxage=21600, stale-while-revalidate=172800',
        'access-control-allow-origin': '*',
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'stake data unavailable' }), {
      status: 503,
      headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, s-maxage=300' },
    });
  }
};
