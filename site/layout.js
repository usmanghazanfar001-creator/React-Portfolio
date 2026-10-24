// Page shell shared by every generated page: <head> SEO tags, nav, footer + small UI blocks.
// Uses the same Tailwind tokens/classes as the React home page so the look stays consistent.
// No client JavaScript is needed (menus use :hover/:focus-within and <details>), which keeps Core Web Vitals clean.
import { PROFILE } from '../src/data/content.js'
import { SITE, abs } from './config.js'
import { esc, inline, jsonLdScript } from './html.js'

const link = 'rounded-full px-3 py-1.5 text-sm transition hover:text-white'

export function head({ title, description, path, type = 'website', jsonLd, assets, noindex = false, article }) {
  const url = abs(path)
  const img = abs(SITE.ogImage)
  return `<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}" />
<meta name="author" content="${esc(PROFILE.name)}" />
<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'}" />
<link rel="canonical" href="${url}" />
<link rel="icon" href="/favicon.ico" sizes="48x48" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
<link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
<meta name="theme-color" content="#07070b" />
<meta name="color-scheme" content="dark" />
<meta property="og:type" content="${type}" />
<meta property="og:site_name" content="${esc(PROFILE.name)}" />
<meta property="og:locale" content="${SITE.locale}" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(description)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${img}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="${esc(SITE.ogImageAlt)}" />${
    article
      ? `
<meta property="article:published_time" content="${article.published}" />
<meta property="article:modified_time" content="${article.modified || article.published}" />
<meta property="article:author" content="${esc(PROFILE.name)}" />`
      : ''
  }
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(title)}" />
<meta name="twitter:description" content="${esc(description)}" />
<meta name="twitter:image" content="${img}" />
<meta name="twitter:image:alt" content="${esc(SITE.ogImageAlt)}" />
<style>html,body{background:#07070b;color:#d4d4d8}</style>
${assets?.headHtml || ''}
${jsonLd ? jsonLdScript(jsonLd) : ''}
</head>`
}

const menuIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`

export function nav(activePath = '') {
  const cur = (p) => (p === activePath ? ' aria-current="page"' : '')
  const item = (s) => `<li><a href="/${s.slug}"${cur('/' + s.slug)} class="block rounded-xl px-3 py-2 text-sm hover:bg-white/5 hover:text-white">${esc(s.label)}</a></li>`
  const groupLabel = (t) => `<li class="px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500" aria-hidden="true">${t}</li>`
  const svc = groupLabel('AI, automation &amp; development') + SITE.globalPages.map(item).join('') + groupLabel('Web design · Sharjah &amp; UAE') + SITE.servicePages.map(item).join('')
  const mobileSvc = [...SITE.globalPages, ...SITE.servicePages]
    .map((s) => `<li><a href="/${s.slug}"${cur('/' + s.slug)} class="block rounded-xl px-4 py-2.5 pl-8 text-sm text-zinc-400 hover:bg-white/5 hover:text-white">${esc(s.label)}</a></li>`)
    .join('')
  const top = (href, label) => `<li><a href="${href}"${cur(href)} class="${link}${href === activePath ? ' bg-white/10 text-white' : ''}">${label}</a></li>`
  return `<header class="fixed inset-x-0 top-0 z-50">
<nav aria-label="Main" class="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full border border-line bg-ink/70 px-5 py-2.5 backdrop-blur-xl max-sm:mx-3">
<a href="/" class="font-display text-lg font-bold text-white" aria-label="${esc(PROFILE.name)} — home">${esc(PROFILE.firstName)}<span class="grad-text">.</span></a>
<ul class="hidden items-center gap-1 md:flex">
${top('/', 'Home')}
<li class="group relative"><a href="/#services" class="${link}">Services</a>
<div class="invisible absolute left-0 top-full z-50 w-72 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100"><ul class="rounded-2xl border border-line bg-ink/95 p-2 backdrop-blur-xl">${svc}</ul></div></li>
${top('/portfolio', 'Portfolio')}${top('/blog', 'Blog')}${top('/about', 'About')}${top('/contact', 'Contact')}
</ul>
<details class="relative md:hidden"><summary aria-label="Menu" class="grid cursor-pointer list-none place-items-center p-1 [&::-webkit-details-marker]:hidden">${menuIcon}</summary>
<ul class="absolute right-0 top-full mt-4 max-h-[calc(100dvh-6.5rem)] w-72 max-w-[calc(100vw-1.5rem)] overflow-y-auto overscroll-contain rounded-3xl border border-line bg-ink/95 p-3 backdrop-blur-xl">
<li><a href="/" class="block rounded-xl px-4 py-3 hover:bg-white/5">Home</a></li>
<li><a href="/#services" class="block rounded-xl px-4 py-3 hover:bg-white/5">Services</a></li>${mobileSvc}
<li><a href="/portfolio" class="block rounded-xl px-4 py-3 hover:bg-white/5">Portfolio</a></li>
<li><a href="/blog" class="block rounded-xl px-4 py-3 hover:bg-white/5">Blog</a></li>
<li><a href="/about" class="block rounded-xl px-4 py-3 hover:bg-white/5">About</a></li>
<li><a href="/contact" class="block rounded-xl px-4 py-3 hover:bg-white/5">Contact</a></li>
</ul></details>
</nav>
</header>`
}

export function footer() {
  const col = 'mt-4 space-y-2 text-sm'
  const a = 'text-zinc-400 hover:text-white'
  return `<footer class="mt-24 border-t border-line">
<div class="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-5">
<div><p class="font-display text-xl font-bold text-white">${esc(PROFILE.name)}</p>
<p class="mt-3 text-sm leading-relaxed text-zinc-500">AI automation and web development for businesses worldwide, including Sharjah, Dubai and the UAE.</p></div>
<nav aria-label="AI and development services"><h2 class="font-display text-sm font-semibold uppercase tracking-widest text-white">AI &amp; Development</h2>
<ul class="${col}">${SITE.globalPages.map((s) => `<li><a class="${a}" href="/${s.slug}">${esc(s.label)}</a></li>`).join('')}</ul></nav>
<nav aria-label="Web design services"><h2 class="font-display text-sm font-semibold uppercase tracking-widest text-white">Web Design · UAE</h2>
<ul class="${col}">${SITE.servicePages.map((s) => `<li><a class="${a}" href="/${s.slug}">${esc(s.label)}</a></li>`).join('')}</ul></nav>
<nav aria-label="Company"><h2 class="font-display text-sm font-semibold uppercase tracking-widest text-white">Company</h2>
<ul class="${col}"><li><a class="${a}" href="/portfolio">Portfolio &amp; case studies</a></li><li><a class="${a}" href="/blog">Blog</a></li><li><a class="${a}" href="/about">About</a></li><li><a class="${a}" href="/contact">Contact</a></li></ul></nav>
<div><h2 class="font-display text-sm font-semibold uppercase tracking-widest text-white">Get in touch</h2>
<ul class="${col}"><li><a class="${a}" href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></li>
<li><a class="${a}" href="${esc(SITE.whatsappLink)}" rel="noopener">WhatsApp ${esc(PROFILE.whatsapp)}</a></li>
<li><a class="${a}" href="${esc(PROFILE.linkedin)}" rel="me noopener">LinkedIn</a></li>
<li><a class="${a}" href="${esc(PROFILE.github)}" rel="me noopener">GitHub</a></li></ul></div>
</div>
<p class="border-t border-line py-6 text-center text-sm text-zinc-500">© ${new Date().getFullYear()} ${esc(PROFILE.name)} · ${esc(PROFILE.location)}</p>
</footer>`
}

export function shell({ meta, activePath, body, assets, jsonLd, article, scripts = '' }) {
  return `<!doctype html>
<html lang="en">
${head({ ...meta, jsonLd, assets, article })}
<body class="bg-ink font-sans text-zinc-300 antialiased">
<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
${nav(activePath)}
<main id="main">
${body}
</main>
${footer()}${scripts}
</body>
</html>
`
}

/* ---------- reusable blocks ---------- */
export const wrap = (inner, w = 'max-w-3xl') => `<div class="mx-auto ${w} px-5">${inner}</div>`

export function breadcrumbs(crumbs) {
  return `<nav aria-label="Breadcrumb" class="text-sm text-zinc-500"><ol class="flex flex-wrap items-center gap-2">${crumbs
    .map((c, i) =>
      i === crumbs.length - 1
        ? `<li aria-current="page" class="text-zinc-400">${esc(c.name)}</li>`
        : `<li><a href="${c.path}" class="hover:text-white">${esc(c.name)}</a></li><li aria-hidden="true">/</li>`,
    )
    .join('')}</ol></nav>`
}

export const pageHeader = ({ crumbs, eyebrow, h1, lead }) => `<section class="relative overflow-hidden pt-32 pb-12 sm:pt-36">
<div class="aurora absolute inset-0" aria-hidden="true"></div><div class="grid-bg absolute inset-0" aria-hidden="true"></div>
<div class="relative mx-auto max-w-4xl px-5">
${breadcrumbs(crumbs)}
${eyebrow ? `<p class="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-accent-2">${esc(eyebrow)}</p>` : ''}
<h1 class="${eyebrow ? 'mt-3' : 'mt-8'} font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">${esc(h1)}</h1>
${lead ? `<p class="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">${inline(lead)}</p>` : ''}
</div></section>`

export const h2 = (t, id) => `<h2${id ? ` id="${id}"` : ''} class="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">${esc(t)}</h2>`
export const h3 = (t) => `<h3 class="mt-8 font-display text-xl font-semibold text-white">${esc(t)}</h3>`
export const p = (t) => `<p class="mt-4 text-lg leading-relaxed text-zinc-400">${inline(t)}</p>`
export const ul = (items) =>
  `<ul class="mt-4 space-y-2 text-lg text-zinc-400">${items.map((i) => `<li class="flex items-start gap-3"><span class="mt-3 size-1.5 shrink-0 rounded-full bg-accent-2" aria-hidden="true"></span><span>${inline(i)}</span></li>`).join('')}</ul>`

export const faqBlock = (faqs, heading = 'Frequently asked questions') => `<section class="mx-auto max-w-4xl px-5 pt-20" aria-labelledby="faq">
${h2(heading, 'faq')}
<div class="mt-8 space-y-3">${faqs
    .map(
      (f) => `<details class="card group p-5"><summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">${esc(f.q)}<span class="text-accent transition group-open:rotate-45" aria-hidden="true">+</span></summary><p class="mt-3 leading-relaxed text-zinc-400">${inline(f.a)}</p></details>`,
    )
    .join('')}</div></section>`

export const ctaBlock = ({ heading, text, primary = { href: '/contact', label: 'Get a free quote' }, secondary = { href: SITE.whatsappLink, label: 'Chat on WhatsApp' } }) => `<section class="mx-auto max-w-4xl px-5 pt-20" aria-labelledby="cta">
<div class="card relative overflow-hidden p-8 text-center sm:p-12"><div class="aurora absolute inset-0 opacity-60" aria-hidden="true"></div>
<div class="relative"><h2 id="cta" class="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">${esc(heading)}</h2>
<p class="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">${inline(text)}</p>
<div class="mt-8 flex flex-wrap justify-center gap-3"><a href="${primary.href}" class="rounded-full bg-white px-6 py-3 font-medium text-ink transition hover:scale-105">${esc(primary.label)}</a>
<a href="${secondary.href}"${secondary.href.startsWith('http') ? ' rel="noopener"' : ''} class="rounded-full border border-line px-6 py-3 font-medium text-white transition hover:bg-white/5">${esc(secondary.label)}</a></div></div></div></section>`

export const linkCards = (items, heading, id) => `<section class="mx-auto max-w-4xl px-5 pt-20" aria-labelledby="${id}">
${h2(heading, id)}
<ul class="mt-8 grid gap-4 sm:grid-cols-2">${items
    .map((i) => `<li><a href="${i.href}" class="card glow relative block h-full p-6 transition hover:-translate-y-0.5"><span class="font-display text-lg font-semibold text-white">${esc(i.title)}</span><span class="mt-2 block text-sm leading-relaxed text-zinc-400">${esc(i.text)}</span><span class="mt-4 block text-sm text-accent-2">Read more →</span></a></li>`)
    .join('')}</ul></section>`
