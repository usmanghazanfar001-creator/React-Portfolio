// Rules enforced by scripts/check-seo.mjs.
export const sitePolicy = {
  requiredPaths: ['/web-design-sharjah', '/ecommerce-website-development-uae', '/wordpress-development-dubai', '/website-redesign-uae', '/blog', '/about', '/contact', '/portfolio'],
  // Word counts are measured on the visible <main> text (nav/footer excluded).
  minWords(path) {
    if (['/web-design-sharjah', '/ecommerce-website-development-uae', '/wordpress-development-dubai', '/website-redesign-uae'].includes(path)) return 400
    if (path.startsWith('/blog/')) return 800
    return 0
  },
}
