# Usman Ghazanfar — Portfolio v2

React 19 · Vite · Tailwind v4 · Motion · pre-rendered for SEO.

    npm install
    npm run dev       # local dev
    npm run build     # build + pre-render static HTML (dist/)
    npm run preview   # test the production build

Content lives in `src/data/content.js`. SEO: `index.html` (meta/OG), `scripts/prerender.mjs` (JSON-LD, built from content.js), `public/` (sitemap, robots, manifest, og-image).
Domain used everywhere: https://usmanghazanfar.vercel.app/
