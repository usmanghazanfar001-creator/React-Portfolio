// Build-time SEO plugin.
// Single source of truth = src/data/content.js. At build (and dev) time it:
//   1. injects crawlable, semantic HTML into #root (React replaces it on load),
//   2. injects JSON-LD structured data (WebSite, ProfilePage, Person, Services, Projects),
//   3. emits sitemap.xml (home + every generated page) with a fresh <lastmod> and robots.txt,
//   4. statically generates the service / blog / about / contact / portfolio pages from ./site (see site/build-pages.js),
//   5. preloads the critical latin web fonts on every page (fewer layout shifts).
import { PROFILE, NAV_LINKS, ABOUT, SKILL_GROUPS, SERVICES, PROJECTS, TIMELINE } from './src/data/content.js'
import { SITE } from './site/config.js'
import { buildPages } from './site/build-pages.js'
import { businessNode, serviceNode } from './site/schema.js'
import { SERVICE_PAGES } from './site/data/services.js'

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const ul = (items) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`

function fallbackHtml() {
  const projects = PROJECTS.map(
    (p) => `<article><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p>
      <p><strong>Problem:</strong> ${esc(p.problem)}</p><p><strong>Solution:</strong> ${esc(p.solution)}</p>
      ${ul(p.features)}<p>Technologies: ${esc(p.tags.join(', '))}</p>
      ${p.link ? `<p><a href="${esc(p.link)}" rel="noopener">${esc(p.linkLabel)}: ${esc(p.title)}</a></p>` : ''}</article>`,
  ).join('')
  const services = SERVICES.map((s) => `<article><h3>${esc(s.title)}</h3><p>${esc(s.description)}</p>${ul(s.points)}</article>`).join('')
  const skills = SKILL_GROUPS.map((g) => `<article><h3>${esc(g.title)}</h3><p>${esc(g.description)}</p>${ul(g.items)}</article>`).join('')
  const timeline = TIMELINE.map((t) => `<article><h3>${esc(t.title)}</h3><p>${esc(t.place)} · ${esc(t.date)}</p>${ul(t.bullets)}</article>`).join('')
  return `<div class="boot" aria-hidden="true"><span></span></div><div class="seo-static">
<header><nav aria-label="Main">${NAV_LINKS.map((l) => `<a href="${l.href}">${esc(l.label)}</a>`).join(' · ')} · ${[...SITE.globalPages, ...SITE.servicePages].map((s) => `<a href="/${s.slug}">${esc(s.label)}</a>`).join(' · ')} · ${SITE.featuredGuides.map((g) => `<a href="/blog/${g.slug}">${esc(g.label)}</a>`).join(' · ')} · <a href="/portfolio">Portfolio</a> · <a href="/blog">Blog</a> · <a href="/about">About</a> · <a href="/contact">Contact</a></nav></header>
<main>
<section id="home"><h1>${esc(PROFILE.name)} — ${esc(PROFILE.title)} in ${esc(PROFILE.location)}</h1><p>${esc(PROFILE.tagline)}</p></section>
<section id="about"><h2>About ${esc(PROFILE.name)}</h2>${ABOUT.intro.map((p) => `<p>${esc(p)}</p>`).join('')}<h3>Interests</h3>${ul(ABOUT.interests)}</section>
<section id="skills"><h2>Skills &amp; Technologies</h2>${skills}</section>
<section id="services"><h2>AI, Automation &amp; Web Development Services</h2>${services}</section>
<section id="projects"><h2>Selected Projects</h2>${projects}</section>
<section id="experience"><h2>Experience &amp; Education</h2>${timeline}</section>
<section id="contact"><h2>Contact ${esc(PROFILE.name)}</h2><ul>
<li><a href="mailto:${esc(PROFILE.email)}">${esc(PROFILE.email)}</a></li>
<li><a href="${esc(PROFILE.whatsappLink)}" rel="noopener">WhatsApp ${esc(PROFILE.whatsapp)}</a></li>
<li><a href="${esc(PROFILE.linkedin)}" rel="me noopener">LinkedIn</a></li>
<li><a href="${esc(PROFILE.github)}" rel="me noopener">GitHub</a></li>
<li><a href="${esc(PROFILE.fiverr)}" rel="me noopener">Fiverr</a></li></ul></section>
</main>
<footer>© ${new Date().getFullYear()} ${esc(PROFILE.name)} · ${esc(PROFILE.location)}</footer>
</div>`
}

function jsonLd() {
  const url = PROFILE.siteUrl + '/'
  const personId = url + '#person'
  const graph = [
    { '@type': 'WebSite', '@id': url + '#website', url, name: `${PROFILE.name} — Portfolio`, inLanguage: 'en', publisher: { '@id': personId } },
    {
      '@type': 'ProfilePage', '@id': url + '#profilepage', url, name: `${PROFILE.name} — ${PROFILE.title}`,
      isPartOf: { '@id': url + '#website' }, mainEntity: { '@id': personId },
      primaryImageOfPage: { '@type': 'ImageObject', url: PROFILE.siteUrl + '/og-image.jpg', width: 1200, height: 630 },
    },
    {
      '@type': 'Person', '@id': personId, name: PROFILE.name, givenName: PROFILE.firstName, familyName: PROFILE.lastName,
      jobTitle: PROFILE.title, url, image: PROFILE.siteUrl + '/icon-512.png', email: `mailto:${PROFILE.email}`,
      description: PROFILE.tagline,
      address: { '@type': 'PostalAddress', addressLocality: 'Faisalabad', addressRegion: 'Punjab', addressCountry: 'PK' },
      knowsAbout: [...new Set(SKILL_GROUPS.flatMap((g) => g.items))],
      alumniOf: { '@type': 'EducationalOrganization', name: 'Punjab Group of Colleges' },
      sameAs: [PROFILE.linkedin, PROFILE.github, PROFILE.fiverr, ...SITE.extraSameAs],
    },
    businessNode({ withCatalog: true }), // ProfessionalService (LocalBusiness) — areaServed Sharjah, Dubai, UAE; see site/schema.js
    ...SERVICE_PAGES.map(serviceNode), // one Service entity per landing page
    {
      '@type': 'ItemList', '@id': url + '#projects', name: 'Selected projects',
      itemListElement: PROJECTS.map((p, i) => ({
        '@type': 'ListItem', position: i + 1,
        item: { '@type': 'CreativeWork', name: p.title, description: p.description, keywords: p.tags.join(', '), creator: { '@id': personId }, ...(p.link ? { url: p.link } : {}) },
      })),
    },
  ]
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>`
}

import fs from 'node:fs'
import path from 'node:path'

const FONT_RE = /^(inter|space-grotesk)-latin-wght-normal-.+\.woff2$/

// Reads the freshly built dist/index.html to learn the hashed CSS / font / image file names.
function discoverAssets(outDir) {
  const indexHtml = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
  const files = fs.existsSync(path.join(outDir, 'assets')) ? fs.readdirSync(path.join(outDir, 'assets')) : []
  const linkTags = [...indexHtml.matchAll(/<link rel="stylesheet"[^>]*>/g)].map((m) => m[0])
  // Performance: inline the (small, ~8 KB gzip) stylesheet so it is never a render-blocking request.
  const cssTexts = linkTags.map((tag) => {
    const href = tag.match(/href="([^"]+)"/)?.[1]
    const file = href && path.join(outDir, href.replace(/^\//, ''))
    return file && fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null
  })
  let inlineCss = linkTags.length && cssTexts.every((t) => t != null) ? `<style>${cssTexts.join('\n')}</style>` : null
  if (!inlineCss) {
    // Home page already optimised (e.g. plugin ran twice): fall back to the built stylesheet(s) in dist/assets.
    const cssFiles = files.filter((f) => f.endsWith('.css'))
    if (cssFiles.length) inlineCss = `<style>${cssFiles.map((f) => fs.readFileSync(path.join(outDir, 'assets', f), 'utf8')).join('\n')}</style>`
  }
  const css = inlineCss ? [inlineCss] : linkTags
  const fonts = files.filter((f) => FONT_RE.test(f)).map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  const profile = files.find((f) => /^profile-[\w-]{8}\.webp$/.test(f))
  return {
    headHtml: [...fonts, ...css].join('\n'),
    preloadHtml: fonts.join('\n'),
    linkTags,
    inlineCss,
    profileImg: profile ? `/assets/${profile}` : null,
  }
}

const devAssets = {
  headHtml: `<script type="module">import '/src/index.css'</script>`,
  profileImg: '/src/assets/images/profile.webp',
}

export default function seoPlugin() {
  let outDir = 'dist'
  return {
    name: 'portfolio-seo',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return html.replaceAll('%SITE_URL%', PROFILE.siteUrl).replace('<!--SEO_JSON_LD-->', jsonLd()).replace('<!--SEO_FALLBACK-->', fallbackHtml())
      },
    },
    configResolved(cfg) { outDir = path.resolve(cfg.root, cfg.build.outDir) },
    // Dev only: serve the generated pages too (restart `vite` after editing files in ./site).
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '/').split('?')[0].replace(/\/$/, '') || '/'
        if (url === '/' || /\.[a-z0-9]+$/i.test(url)) return next()
        const page = buildPages(devAssets).find((pg) => pg.path === url)
        if (!page) return next()
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(page.html)
      })
    },
    // closeBundle runs AFTER public/ is copied, so stale public/sitemap.xml or
    // public/robots.txt files can never override these generated ones.
    closeBundle() {
      const lastmod = new Date().toISOString().slice(0, 10)
      const assets = discoverAssets(outDir)

      // 1. home page: inline the CSS, preload critical fonts + hero portrait
      const homeFile = path.join(outDir, 'index.html')
      let home = fs.readFileSync(homeFile, 'utf8')
      if (!home.includes('data-seo-optimised')) {
        if (assets.inlineCss) {
          assets.linkTags.forEach((tag, i) => { home = home.replace(tag, () => (i === 0 ? assets.inlineCss : '')) })
        }
        // The hero portrait is drawn by React, so the browser would only discover it after the JS bundle runs.
        // Preloading it lets it download in parallel and improves LCP.
        const heroPreload = assets.profileImg ? `<link rel="preload" as="image" type="image/webp" href="${assets.profileImg}" fetchpriority="high" />` : ''
        const extra = [assets.preloadHtml, heroPreload, '<meta name="seo-optimised" data-seo-optimised content="1" />'].filter(Boolean).join('\n')
        home = home.replace('</head>', () => `${extra}\n</head>`)
        fs.writeFileSync(homeFile, home)
      }

      // 2. generate every other page (service pages, blog, about, contact, portfolio, 404)
      const pages = buildPages(assets)
      for (const pg of pages) {
        const target = path.join(outDir, pg.file)
        fs.mkdirSync(path.dirname(target), { recursive: true })
        fs.writeFileSync(target, pg.html)
      }

      // 3. robots.txt + sitemap.xml (home + all indexable generated pages)
      fs.writeFileSync(path.join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${PROFILE.siteUrl}/sitemap.xml\n`)
      const urls = [
        { loc: `${PROFILE.siteUrl}/`, lastmod, priority: '1.0' },
        ...pages.filter((pg) => pg.indexable).map((pg) => ({ loc: `${PROFILE.siteUrl}${pg.path}`, lastmod: pg.lastmod, priority: pg.path.startsWith('/blog/') ? '0.6' : '0.8' })),
      ]
      fs.writeFileSync(
        path.join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
          .map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`)
          .join('\n')}\n</urlset>\n`,
      )
      console.log(`[portfolio-seo] generated ${pages.length} pages + sitemap.xml (${urls.length} URLs) + robots.txt`)
    },
  }
}
