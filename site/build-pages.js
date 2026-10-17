// Generates the static HTML for every non-home route. Pure Node, no JSX, no client JS.
// Called from seo-plugin.js (closeBundle) after Vite has built the app, and from scripts/check-seo.mjs.
import { shell, pageHeader, wrap, p, ctaBlock } from './layout.js'
import { abs } from './config.js'
import { graph, businessNode, breadcrumbNode } from './schema.js'
import { sources } from './registry.js'

const today = () => new Date().toISOString().slice(0, 10)

function notFound(assets) {
  const body = `${pageHeader({ crumbs: [{ name: 'Home', path: '/' }, { name: 'Page not found', path: '/404' }], h1: 'Page not found', lead: 'That page does not exist or has moved. Try one of the links below.' })}
${wrap(p('Head back to the [home page](/), see the [web design services](/web-design-sharjah), or [contact me](/contact).'))}`
  return { path: '/404', file: '404.html', title: 'Page Not Found | Usman Ghazanfar', description: 'This page could not be found.', noindex: true, body, assets }
}

/** @returns {Array<{path:string,file:string,html:string,title:string,description:string,lastmod:string,indexable:boolean}>} */
export function buildPages(assets = {}) {
  const defs = [...sources.flatMap((fn) => fn(assets)), notFound(assets)]
  return defs.map((d) => {
    const crumbs = d.crumbs || [{ name: 'Home', path: '/' }, { name: d.title.split(' | ')[0], path: d.path }]
    const jsonLd = d.noindex
      ? undefined
      : graph(businessNode(), d.schema || [], d.path === '/' ? [] : breadcrumbNode(d.crumbs || crumbs))
    const html = shell({
      meta: { title: d.title, description: d.description, path: d.path, type: d.type || 'website', noindex: !!d.noindex },
      activePath: d.activePath ?? d.path,
      body: d.body,
      assets,
      jsonLd,
      article: d.article,
      scripts: d.scripts || '',
    })
    return {
      path: d.path,
      file: d.file || `${d.path.slice(1)}/index.html`,
      html,
      title: d.title,
      description: d.description,
      lastmod: d.lastmod || today(),
      indexable: !d.noindex,
    }
  })
}
