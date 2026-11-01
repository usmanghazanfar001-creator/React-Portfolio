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
    { slug: 'services/web-design-sharjah', label: 'Web Design Sharjah' },
    { slug: 'services/ecommerce-website-development-uae', label: 'E-commerce Website Development UAE' },
    { slug: 'services/wordpress-development-dubai', label: 'WordPress Development Dubai' },
    { slug: 'services/website-redesign-uae', label: 'Website Redesign UAE' },
  ],
  // Worldwide AI / automation / development service pages.
  globalPages: [
    { slug: 'services/ai-automation', label: 'AI Automation Services' },
    { slug: 'services/ai-agent-development', label: 'AI Agent Development' },
    { slug: 'services/ai-chatbot-development', label: 'AI Chatbot Development' },
    { slug: 'services/n8n-automation', label: 'n8n Workflow Automation' },
    { slug: 'services/shopify-automation', label: 'Shopify Automation Services' },
    { slug: 'services/shopify-development', label: 'Shopify Store Development' },
    { slug: 'services/react-nextjs-development', label: 'React & Next.js Development' },
    { slug: 'services/technical-seo', label: 'Technical SEO Services' },
    { slug: 'services/portfolio-website-design', label: 'Portfolio Website Design' },
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
