// Shared site constants for the statically generated pages (service pages, blog, about, contact, portfolio).
// Single source of truth for business facts is src/data/content.js (PROFILE). Nothing here is invented:
// anything unknown is a clearly marked TODO.
import { PROFILE } from '../src/data/content.js'

export const SITE = {
  url: PROFILE.siteUrl,
  name: PROFILE.name,
  email: PROFILE.email,
  phone: PROFILE.phone,
  whatsappLink: PROFILE.whatsappLink,
  locale: 'en_US',
  ogImage: '/og-image.jpg', // 1200x630
  ogImageAlt: 'Usman Ghazanfar — AI automation and web development',
  // Pages in the top-level "Services" menu, in display order.
  servicePages: [
    { slug: 'web-design-sharjah', label: 'Web Design Sharjah' },
    { slug: 'ecommerce-website-development-uae', label: 'E-commerce Website Development UAE' },
    { slug: 'wordpress-development-dubai', label: 'WordPress Development Dubai' },
    { slug: 'website-redesign-uae', label: 'Website Redesign UAE' },
  ],
  // Worldwide AI / automation / development service pages.
  globalPages: [
    { slug: 'ai-automation-services', label: 'AI Automation Services' },
    { slug: 'ai-agent-development', label: 'AI Agent Development' },
    { slug: 'n8n-workflow-automation', label: 'n8n Workflow Automation' },
    { slug: 'shopify-automation-services', label: 'Shopify Automation Services' },
    { slug: 'nextjs-web-development', label: 'Next.js Web Development' },
    { slug: 'portfolio-website-design', label: 'Portfolio Website Design' },
  ],
  // Guides linked from the home page and every footer (internal links: these posts earn the search impressions).
  featuredGuides: [
    { slug: 'how-to-automate-shopify-store-with-ai', label: 'Shopify AI Automation Guide' },
    { slug: 'n8n-vs-zapier-vs-make', label: 'n8n vs Make vs Zapier' },
    { slug: 'ai-agents-vs-chatbots-vs-workflows', label: 'AI Agents vs Chatbots vs Workflows' },
    { slug: 'how-much-does-a-website-cost-in-sharjah', label: 'Website Cost in Sharjah' },
  ],
  // TODO(owner): add any other profiles you actually have (Instagram, Facebook, X, Google Business Profile URL).
  // They are added to the `sameAs` list in the JSON-LD automatically once listed here.
  extraSameAs: [],
}

export const abs = (p = '/') => SITE.url + (p === '/' ? '/' : p)
