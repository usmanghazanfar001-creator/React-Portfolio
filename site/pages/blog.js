import { POSTS } from '../data/posts.js'
import { SERVICE_PAGES } from '../data/services.js'
import { abs, SITE } from '../config.js'
import { articleNode, ids } from '../schema.js'
import { pageHeader, wrap, h2, h3, p, ul, ctaBlock, linkCards } from '../layout.js'
import { esc } from '../html.js'

const fmt = (iso) => new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

function postBody(post) {
  const sections = post.sections
    .map(
      (s) => `<section class="pt-12" aria-labelledby="${slug(s.h2)}">
${h2(s.h2, slug(s.h2))}
${(s.paragraphs || []).map(p).join('\n')}
${s.bullets ? ul(s.bullets) : ''}
${(s.h3s || []).map((x) => `${h3(x.h3)}\n${x.paragraphs.map(p).join('\n')}`).join('\n')}
</section>`,
    )
    .join('\n')

  const related = [
    ...post.relatedServices.map((s) => SERVICE_PAGES.find((x) => x.slug === s)).map((s) => ({ href: '/' + s.slug, title: s.nav, text: s.blurb })),
    ...POSTS.filter((x) => x.slug !== post.slug)
      .map((x) => ({ x, score: x.relatedServices.filter((s) => post.relatedServices.includes(s)).length + (x.category === post.category ? 1 : 0) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 2)
      .map(({ x }) => ({ href: '/blog/' + x.slug, title: x.title, text: x.metaDescription })),
  ].slice(0, 4)

  return `${pageHeader({
    crumbs: [{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path: '/blog/' + post.slug }],
    eyebrow: post.category,
    h1: post.title,
    lead: post.intro[0],
  })}
<article class="mx-auto max-w-3xl px-5">
<p class="text-sm text-zinc-500">By <a href="/about" class="text-zinc-300 hover:text-white">${esc(SITE.name)}</a> · <time datetime="${post.published}">${fmt(post.published)}</time>${post.modified !== post.published ? ` · Updated <time datetime="${post.modified}">${fmt(post.modified)}</time>` : ''} · ${post.readMinutes} min read</p>
${post.intro.slice(1).map(p).join('\n')}
${sections}
</article>
${ctaBlock({ heading: 'Want a clear quote for your own website?', text: 'Tell me about your business and I will reply with a written scope, a timeline and a price. No obligation.' })}
${linkCards(related, 'Keep reading', 'related')}`
}

const slug = (t) => t.toLowerCase().replace(/^\d+\.\s*/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

function indexBody() {
  return `${pageHeader({
    crumbs: [{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }],
    eyebrow: 'Blog',
    h1: 'Guides on AI Automation, Web Development and Web Design',
    lead: 'Practical guides on AI agents, workflow automation, Shopify, Next.js and web design, written for business owners rather than for other developers.',
  })}
${linkCards(
    POSTS.map((x) => ({ href: '/blog/' + x.slug, title: x.title, text: x.metaDescription })),
    'Latest articles',
    'posts',
  )}
${wrap(`${p('Looking for help rather than reading? See my [AI automation services](/ai-automation-services), my [web design service for Sharjah businesses](/web-design-sharjah) or [get in touch](/contact).')}`, 'max-w-4xl')}`
}

export const blogPages = () => [
  {
    path: '/blog',
    title: 'AI Automation & Web Design Blog | Usman Ghazanfar',
    description: 'Practical guides on AI automation, n8n, Shopify, Next.js and web design, plus website costs and trends for businesses in Sharjah and the UAE.',
    body: indexBody(),
    schema: [
      {
        '@type': 'Blog',
        '@id': abs('/blog') + '#blog',
        url: abs('/blog'),
        name: 'AI automation and web design guides',
        publisher: { '@id': ids.business },
        blogPost: POSTS.map((x) => ({ '@type': 'BlogPosting', '@id': abs('/blog/' + x.slug) + '#article', headline: x.title, url: abs('/blog/' + x.slug), datePublished: x.published })),
      },
    ],
  },
  ...POSTS.map((post) => ({
    path: '/blog/' + post.slug,
    activePath: '/blog',
    title: post.metaTitle,
    description: post.metaDescription,
    type: 'article',
    article: { published: post.published, modified: post.modified },
    lastmod: post.modified,
    crumbs: [{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path: '/blog/' + post.slug }],
    body: postBody(post),
    schema: [articleNode(post)],
  })),
]
