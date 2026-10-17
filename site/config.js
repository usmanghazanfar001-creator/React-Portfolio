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
  ogImage: '/og-image.png', // 1200x630
  ogImageAlt: 'Usman Ghazanfar — web design and development for businesses in Sharjah and the UAE',
  // Pages in the top-level "Services" menu, in display order.
  servicePages: [
    { slug: 'web-design-sharjah', label: 'Web Design Sharjah' },
    { slug: 'ecommerce-website-development-uae', label: 'E-commerce Website Development UAE' },
    { slug: 'wordpress-development-dubai', label: 'WordPress Development Dubai' },
    { slug: 'website-redesign-uae', label: 'Website Redesign UAE' },
  ],
  // TODO(owner): add any other profiles you actually have (Instagram, Facebook, X, Google Business Profile URL).
  // They are added to the `sameAs` list in the JSON-LD automatically once listed here.
  extraSameAs: [],
}

export const abs = (p = '/') => SITE.url + (p === '/' ? '/' : p)
