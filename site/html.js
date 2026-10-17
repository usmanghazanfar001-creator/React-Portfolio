// Tiny HTML helpers (no dependencies) used by every generated page.
export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// Inline markup for copy: [text](/path) links and **bold**. Everything else is escaped.
export const inline = (s = '') =>
  esc(s)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, href) => `<a href="${href}" class="text-accent-2 underline decoration-accent-2/40 underline-offset-4 hover:decoration-accent-2">${t}</a>`)
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')

export const plain = (s = '') => String(s).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '$1').replace(/\*\*/g, '')

export const wordCount = (s = '') => plain(s).trim().split(/\s+/).filter(Boolean).length

export const jsonLdScript = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`
