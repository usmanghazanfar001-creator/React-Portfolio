// Offline SEO validator:  node scripts/check-seo.mjs
// Generates every non-home page in memory and checks the things that usually break SEO:
// title/description length, exactly one <h1>, canonical, JSON-LD validity, image alt/size, internal links,
// minimum word counts. Exits with code 1 if anything fails, so it can run in CI.
import { buildPages } from '../site/build-pages.js'
import { sitePolicy } from '../site/policy.js'

const pages = buildPages({ headHtml: '', profileImg: '/assets/profile-test.webp' })
const paths = new Set(['/', ...pages.map((p) => p.path)])
const fails = []
const warn = []
const fail = (page, msg) => fails.push(`${page}: ${msg}`)

for (const pg of pages) {
  const { html, path } = pg
  const one = (re) => (html.match(re) || []).length
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || ''
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || ''
  const text = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  if (!title) fail(path, 'missing <title>')
  if (text(title).length > 60) fail(path, `title ${text(title).length} chars (>60): ${title}`)
  if (!desc) fail(path, 'missing meta description')
  if (text(desc).length > 160) fail(path, `description ${text(desc).length} chars (>160)`)
  if (one(/<h1[\s>]/g) !== 1) fail(path, `expected exactly 1 <h1>, found ${one(/<h1[\s>]/g)}`)
  if (!html.includes(`<link rel="canonical" href="https://usmanghazanfar.vercel.app${path === '/' ? '/' : path}"`)) fail(path, 'canonical missing/wrong')
  if (!/<html lang="en">/.test(html)) fail(path, 'missing lang="en"')
  for (const k of ['og:title', 'og:description', 'og:url', 'og:image', 'twitter:card', 'twitter:image']) {
    if (!html.includes(`"${k}"`)) fail(path, `missing ${k}`)
  }
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1].replace(/\\u003c/g, '<')) } catch (e) { fail(path, 'invalid JSON-LD: ' + e.message) }
  }
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="[^"]+"/.test(m[0])) fail(path, 'image without alt: ' + m[0].slice(0, 80))
    if (!/\bwidth="\d+"/.test(m[0]) || !/\bheight="\d+"/.test(m[0])) fail(path, 'image without width/height')
  }
  // heading order: no jump from h1 straight to h3, etc.
  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => +m[1])
  levels.forEach((l, i) => { if (i && l > levels[i - 1] + 1) fail(path, `heading jump h${levels[i - 1]} -> h${l}`) })
  for (const m of html.matchAll(/href="(\/[^"#?]*)(?:[#?][^"]*)?"/g)) {
    const to = m[1].replace(/\/$/, '') || '/'
    if (/\.[a-z0-9]+$/i.test(to)) continue
    if (!paths.has(to)) fail(path, `broken internal link ${m[1]}`)
  }
  const main = (html.match(/<main[\s\S]*<\/main>/) || [''])[0].replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ')
  const words = main.split(/\s+/).filter(Boolean).length
  const min = sitePolicy.minWords(path)
  if (words < min) fail(path, `only ${words} words in <main> (need ${min}+)`)
  pg.words = words
}
for (const p of sitePolicy.requiredPaths) if (!paths.has(p)) fail(p, 'required page not generated')

console.table(pages.map((p) => ({ path: p.path, words: p.words, title: p.title.length })))
if (fails.length) { console.error('\nFAILED:\n' + fails.map((f) => ' - ' + f).join('\n')); process.exit(1) }
console.log(`\nOK — ${pages.length} pages passed all checks.` + (warn.length ? '\n' + warn.join('\n') : ''))
