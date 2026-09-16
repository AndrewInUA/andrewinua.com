# andrewinua.com

Source of [andrewinua.com](https://andrewinua.com), the website of **AndrewInUA**, an independent Solana validator from Ukraine.

Built with [Astro](https://astro.build) and deployed on Vercel. Everything is static except `/api/metrics.json`, a small server endpoint that fetches public validator data (Stakewiz, Jito) and caches it at the edge, so the page never hits third-party APIs from the browser.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build
```

## Structure

- `src/data/site.ts`: all content that changes over time: links, timeline, projects, stake snapshot.
- `src/components/`: one component per section of the page.
- `src/pages/api/metrics.json.ts`: live metrics endpoint.
- `public/`: images, icons, robots.txt.

## Delegate

Vote account: `3QPGLackJy5LKctYYoPGmA4P8ncyE197jdxr1zP2ho8K`
