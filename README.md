# Usman Ghazanfar — Portfolio v2

Stack: React 19 · Vite · Tailwind CSS v4 · Motion · Lucide · self-hosted variable fonts.

    npm install
    npm run dev      # local dev
    npm run build    # production build -> dist/

All your content (profile, skills, services, projects, timeline) is unchanged in `src/data/content.js`. Edit it there.

## SEO architecture

The home page is the React app (`src/`). Every other page is **statically generated HTML** from plain JS templates in `site/`
(no client JavaScript except the small contact-form helper), so crawlers and visitors get fast, complete pages.

| Path | What it is | Edit here |
| --- | --- | --- |
| `/` | React SPA + build-time crawlable fallback + JSON-LD | `src/`, `index.html`, `seo-plugin.js`, `src/data/content.js` |
| `/web-design-sharjah`, `/ecommerce-website-development-uae`, `/wordpress-development-dubai`, `/website-redesign-uae` | UAE service landing pages (Service + FAQPage schema) | `site/data/services.js` |
| `/ai-automation-services`, `/ai-agent-development`, `/n8n-workflow-automation`, `/shopify-automation-services`, `/nextjs-web-development`, `/portfolio-website-design` | Worldwide service landing pages | `site/data/global-services.js` |
| `/blog`, `/blog/<slug>` | Blog (BlogPosting schema) | `site/data/posts.js` |
| `/portfolio`, `/about`, `/contact` | Trust pages | `site/pages/trust.js`, `site/data/trust.js` |
| `/sitemap.xml`, `/robots.txt`, `/404` | Generated on every build | `seo-plugin.js` |

- `npm run build` runs Vite, then `seo-plugin.js` writes every page, the sitemap and robots.txt into `dist/`.
- `npm run seo:check` validates all generated pages (title/description length, one H1, canonical, JSON-LD, alt text, links, word counts).
- Add a page: create it in `site/pages/`, register it in `site/registry.js`. It is automatically added to the sitemap.
- Restart `npm run dev` after editing files in `site/`.

Open items that need your real information are listed in [`SEO-TODO.md`](./SEO-TODO.md).
