// /services — hub page that links to every service page (internal-linking hub, matches the /services/<name> URL structure).
import { SERVICE_PAGES } from '../data/services.js'
import { abs } from '../config.js'
import { ids } from '../schema.js'
import { pageHeader, wrap, h2, p, ctaBlock, linkCards } from '../layout.js'

const pick = (slugs) => slugs.map((s) => SERVICE_PAGES.find((x) => x.slug === s)).map((x) => ({ href: '/' + x.slug, title: x.nav, text: x.blurb }))

const GROUPS = [
  { id: 'ai', h2: 'AI and automation', intro: 'Systems that remove repetitive work: from workflows that connect your tools to chatbots and agents that handle questions and multi-step tasks.', slugs: ['services/ai-automation', 'services/ai-agent-development', 'services/ai-chatbot-development', 'services/n8n-automation', 'services/shopify-automation'] },
  { id: 'web', h2: 'Web development and e-commerce', intro: 'Fast, search-friendly websites, storefronts and web apps, built with React and Next.js or set up on Shopify and WordPress.', slugs: ['services/react-nextjs-development', 'services/portfolio-website-design', 'services/shopify-development', 'services/ecommerce-website-development-uae', 'services/wordpress-development-dubai'] },
  { id: 'seo', h2: 'SEO, redesign and web design', intro: 'Technical SEO and audits, redesigns that keep your rankings, and custom web design for businesses in Sharjah and the UAE.', slugs: ['services/technical-seo', 'services/website-redesign-uae', 'services/web-design-sharjah'] },
]

function body() {
  return `${pageHeader({
    crumbs: [{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }],
    eyebrow: 'Services',
    h1: 'AI Automation, Web Development and SEO Services',
    lead: 'I help businesses save time with AI automation, reach customers with fast websites and get found on Google. Choose the area you need, or read on if you are not sure where to start.',
  })}
${GROUPS.map((g) => `<section class="mx-auto max-w-4xl px-5 pt-14" aria-labelledby="${g.id}">${h2(g.h2, g.id)}${p(g.intro)}</section>
${linkCards(pick(g.slugs), '', g.id + '-list').replace(/<h2[^>]*><\/h2>/, '').replace('pt-20', 'pt-6')}`).join('\n')}
<section class="mx-auto max-w-4xl px-5 pt-20" aria-labelledby="choose">
${h2('Not sure what you need?', 'choose')}
${p('Start from the problem, not the technology. If your team repeats the same task every day, look at [AI automation](/services/ai-automation) or [n8n workflows](/services/n8n-automation). If customers ask the same questions, a [chatbot](/services/ai-chatbot-development) may help. If your website is slow, hard to find or out of date, start with [technical SEO](/services/technical-seo) or a [website redesign](/services/website-redesign-uae).')}
${p('My guides can also help you decide: compare [AI agents, chatbots and workflows](/blog/ai-agents-vs-chatbots-vs-workflows), read what [AI automation](/blog/what-is-ai-automation) means for a business, or see how [website costs](/blog/how-much-does-a-website-cost-in-sharjah) are built up. I am based in Faisalabad, Pakistan, and work online with clients in Pakistan, the UAE and worldwide.')}
</section>
${ctaBlock({ heading: 'Tell me what you want to improve', text: 'Describe your business and the problem you want to solve, and I will recommend where to start. The first conversation is free.' })}`
}

export const servicesHubPages = () => [
  {
    path: '/services',
    title: 'AI, Web Development & SEO Services | Usman Ghazanfar',
    description: 'All services from Usman Ghazanfar: AI automation, AI agents and chatbots, web development, Shopify stores and technical SEO. Free consultation.',
    crumbs: [{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }],
    body: body(),
    schema: [
      {
        '@type': 'CollectionPage',
        '@id': abs('/services') + '#page',
        url: abs('/services'),
        name: 'AI automation, web development and SEO services',
        about: { '@id': ids.business },
        mainEntity: { '@type': 'ItemList', itemListElement: SERVICE_PAGES.map((s, i) => ({ '@type': 'ListItem', position: i + 1, url: abs('/' + s.slug), name: s.serviceName })) },
      },
    ],
  },
]
