// Rules enforced by scripts/check-seo.mjs.
import { SERVICE_PAGES } from './data/services.js'

const servicePaths = SERVICE_PAGES.map((s) => '/' + s.slug)

export const sitePolicy = {
  requiredPaths: [...servicePaths, '/blog', '/about', '/contact', '/portfolio'],
  // Word counts are measured on the visible <main> text (nav/footer excluded).
  minWords(path) {
    if (servicePaths.includes(path)) return 400
    if (path.startsWith('/blog/')) return 800
    return 0
  },
}
