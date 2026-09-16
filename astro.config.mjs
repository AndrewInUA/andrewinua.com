// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// Static site with one server endpoint (/api/metrics.json) that proxies and
// caches public validator APIs. See src/pages/api/metrics.json.ts.
export default defineConfig({
  site: 'https://andrewinua.com',
  output: 'static',
  adapter: vercel({ maxDuration: 30 }),
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
