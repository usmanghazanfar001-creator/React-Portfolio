import { SERVICE_PAGES } from '../data/services.js'
import { POSTS } from '../data/posts.js'
import { serviceNode, faqNode } from '../schema.js'
import { pageHeader, wrap, h2, p, ul, faqBlock, ctaBlock, linkCards } from '../layout.js'
import { esc, inline } from '../html.js'

const sectionId = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

function body(page) {
  const sections = page.sections
    .map(
      (s) => `<section class="mx-auto max-w-3xl px-5 pt-16" aria-labelledby="${sectionId(s.h2)}">
${h2(s.h2, sectionId(s.h2))}
${s.paragraphs.map(p).join('\n')}
${s.bullets ? ul(s.bullets) : ''}
</section>`,
    )
    .join('\n')

  const services = `<section class="mx-auto max-w-6xl px-5 pt-20" aria-labelledby="services-list">
<div class="mx-auto max-w-4xl">${h2(page.servicesHeading, 'services-list')}</div>
<ul class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">${page.services
    .map(
      (s) => `<li class="card glow relative p-6"><h3 class="font-display text-xl font-semibold text-white">${esc(s.title)}</h3><p class="mt-3 text-sm leading-relaxed text-zinc-400">${esc(s.text)}</p></li>`,
    )
    .join('')}</ul></section>`

  const steps = `<section class="mx-auto max-w-3xl px-5 pt-20" aria-labelledby="process">
${h2(page.stepsHeading, 'process')}
<ol class="mt-6 space-y-4">${page.steps
    .map(
      (s, i) => `<li class="flex items-start gap-4 text-lg leading-relaxed text-zinc-400"><span class="mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-line bg-white/5 font-mono text-sm text-accent-2" aria-hidden="true">${i + 1}</span><span>${inline(s)}</span></li>`,
    )
    .join('')}</ol></section>`

  const others = SERVICE_PAGES.filter((x) => x.slug !== page.slug).map((x) => ({ href: '/' + x.slug, title: x.nav, text: x.blurb }))
  const posts = page.blogSlugs.map((s) => POSTS.find((x) => x.slug === s)).map((x) => ({ href: '/blog/' + x.slug, title: x.title, text: x.metaDescription }))

  return `${pageHeader({
    crumbs: [{ name: 'Home', path: '/' }, { name: page.nav, path: '/' + page.slug }],
    eyebrow: page.eyebrow,
    h1: page.h1,
    lead: page.lead,
  })}
${sections}
${services}
${steps}
${faqBlock(page.faqs)}
${ctaBlock(page.cta)}
${linkCards(others, 'Other services', 'other-services')}
${linkCards(posts, 'Helpful guides', 'guides')}`
}

export const servicePages = () =>
  SERVICE_PAGES.map((page) => ({
    path: '/' + page.slug,
    title: page.metaTitle,
    description: page.metaDescription,
    crumbs: [{ name: 'Home', path: '/' }, { name: page.nav, path: '/' + page.slug }],
    body: body(page),
    schema: [serviceNode({ ...page }), faqNode('/' + page.slug, page.faqs)],
  }))
