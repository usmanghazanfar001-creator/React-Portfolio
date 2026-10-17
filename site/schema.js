// JSON-LD builders. IDs are stable so the home page graph and every other page reference the same entities.
import { PROFILE, SERVICES } from '../src/data/content.js'
import { SITE, abs } from './config.js'

export const ids = {
  person: abs('/') + '#person',
  business: abs('/') + '#service',
  website: abs('/') + '#website',
}

const areaServed = [
  { '@type': 'AdministrativeArea', name: 'Sharjah' },
  { '@type': 'City', name: 'Dubai' },
  { '@type': 'Country', name: 'United Arab Emirates' },
]

// Organization / LocalBusiness. `ProfessionalService` is a schema.org subtype of LocalBusiness.
export function businessNode({ withCatalog = false } = {}) {
  const node = {
    '@type': 'ProfessionalService',
    '@id': ids.business,
    name: `${PROFILE.name} — Web Design & Development`, // TODO(owner): use your registered business name if you have one
    url: abs('/'),
    logo: { '@type': 'ImageObject', url: abs('/icon-512.png'), width: 512, height: 512 }, // TODO(owner): replace with your real logo file
    image: abs(SITE.ogImage),
    description:
      'Web design, e-commerce, WordPress and website redesign services for businesses in Sharjah, Dubai and across the UAE.',
    email: PROFILE.email,
    telephone: PROFILE.phone.replace(/\s/g, ''),
    // Address below is the one already published on the site (Faisalabad, Pakistan).
    // TODO(owner): if you have a registered UAE address or office, replace it with the real street address.
    address: { '@type': 'PostalAddress', addressLocality: 'Faisalabad', addressRegion: 'Punjab', addressCountry: 'PK' },
    areaServed,
    founder: { '@id': ids.person },
    sameAs: [PROFILE.linkedin, PROFILE.github, PROFILE.fiverr, ...SITE.extraSameAs],
  }
  if (withCatalog) {
    node.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: [
        ...SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, description: s.description } })),
      ],
    }
  }
  return node
}

export const serviceNode = (p) => ({
  '@type': 'Service',
  '@id': abs('/' + p.slug) + '#service',
  name: p.serviceName,
  serviceType: p.serviceName,
  description: p.metaDescription,
  url: abs('/' + p.slug),
  provider: { '@id': ids.business },
  areaServed: p.areaServed || areaServed,
})

export const faqNode = (path, faqs) => ({
  '@type': 'FAQPage',
  '@id': abs(path) + '#faq',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

export const breadcrumbNode = (crumbs) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.path) })),
})

export const articleNode = (post) => ({
  '@type': 'BlogPosting',
  '@id': abs('/blog/' + post.slug) + '#article',
  mainEntityOfPage: { '@type': 'WebPage', '@id': abs('/blog/' + post.slug) },
  headline: post.title,
  description: post.metaDescription,
  image: [abs(SITE.ogImage)],
  datePublished: post.published,
  dateModified: post.modified || post.published,
  inLanguage: 'en',
  author: { '@type': 'Person', '@id': ids.person, name: PROFILE.name, url: abs('/') },
  publisher: { '@id': ids.business },
  about: post.about,
})

export const graph = (...nodes) => ({ '@context': 'https://schema.org', '@graph': nodes.flat().filter(Boolean) })

// Person node for About / ProfilePage-style pages (same @id as the home page graph).
export const personNode = () => ({
  '@type': 'Person',
  '@id': ids.person,
  name: PROFILE.name,
  jobTitle: 'Web Designer & Developer',
  url: abs('/'),
  image: abs('/icon-512.png'),
  email: `mailto:${PROFILE.email}`,
  sameAs: [PROFILE.linkedin, PROFILE.github, PROFILE.fiverr, ...SITE.extraSameAs],
  alumniOf: { '@type': 'EducationalOrganization', name: 'Punjab Group of Colleges' },
})

export const reviewNode = (t) => ({
  '@type': 'Review',
  reviewBody: t.quote,
  author: { '@type': 'Person', name: t.name },
  itemReviewed: { '@id': ids.business },
})
