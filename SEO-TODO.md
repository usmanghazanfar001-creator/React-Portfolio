# SEO — things only you can do

Search the code for `TODO(owner)` to find every placeholder.

## Before you publish
1. **Decide your positioning.** Meta titles/descriptions, the new pages and the schema now target *web design in Sharjah / the UAE*.
   The home hero (`src/data/content.js` → `PROFILE.title`, `tagline`, `location`; hero text in `src/App.jsx`) still says
   *"AI & Web Developer, Faisalabad, Pakistan"*. A title that doesn't match the page's visible headline can hurt rankings and trust — align them.
2. **Review the copy for claims that must be true.** `site/data/services.js` and `site/data/trust.js`:
   - WordPress is **not** in your skills/projects list; the WordPress page assumes you offer it.
   - Process/timeline statements ("I reply personally", milestone payments, maintenance) are generic — edit to match how you really work.
   - Titles use "company" as you requested; you present as an individual. Change if you prefer "web designer".
3. **Address / phone / UAE presence.** Schema uses your published Faisalabad address and +92 number. If you have a real UAE address,
   office or UAE number, update `site/schema.js` (`businessNode`) and `src/data/content.js`. Never publish a Sharjah address you don't have.
4. **Add real AED price ranges** to `/blog/how-much-does-a-website-cost-in-sharjah` (marked TODO in `site/data/posts.js`). "How much" queries reward concrete numbers.
5. **Testimonials.** Put real, permissioned quotes in `site/data/trust.js` and remove `placeholder: true`. Placeholders are never published.
6. **Portfolio screenshots.** Export WebP screenshots (with real width/height + descriptive alt) and register them in `PROJECT_IMAGES` (`site/data/trust.js`).
7. **Contact form.** It opens a pre-filled email / WhatsApp message. For real submissions, connect Formspree / Web3Forms / a Vercel function (`site/pages/trust.js`).
8. **Logo.** Schema `logo` uses `/icon-512.png`; supply a proper logo file and update `site/schema.js`.
9. **Social profiles.** Add any other real profiles to `SITE.extraSameAs` in `site/config.js`.

## After deploying
- Run `npm install && npm run build && npm run seo:check` locally (the sandbox used for this work could not run the Windows-built `node_modules`).
- Open each new URL on the live site (clean URLs: `/about`, `/blog/...`) and check the 404 page.
- Test: Google Rich Results Test, PageSpeed Insights (mobile), Search Console → Sitemaps → submit `https://usmanghazanfar.vercel.app/sitemap.xml`, then URL Inspection → *Request indexing* for the new pages. Do the same in Bing Webmaster Tools.
- Build a Google Business Profile **only if you qualify** (physical location or service-area business with a real address) and earn real reviews.
- Pin `"latest"` dependencies in `package.json` (`vite`, `motion`, `lucide-react`, `tailwindcss`, …) so builds stay reproducible.

## Known limitation
The home page is still a client-rendered React app (with a crawlable HTML fallback). Its Largest Contentful Paint depends on the JS bundle.
The new pages are static HTML and fast. If home-page LCP in PageSpeed is poor, pre-render the home page or migrate it to Next.js/Astro.
