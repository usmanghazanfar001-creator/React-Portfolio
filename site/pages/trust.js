import { PROFILE, PROJECTS } from '../../src/data/content.js'
import { TESTIMONIALS, PROJECT_IMAGES, ABOUT_COPY } from '../data/trust.js'
import { SERVICE_PAGES } from '../data/services.js'
import { SITE, abs } from '../config.js'
import { ids, personNode, reviewNode } from '../schema.js'
import { pageHeader, wrap, h2, h3, p, ul, ctaBlock, linkCards } from '../layout.js'
import { esc } from '../html.js'

const showPlaceholders = () => process.env.SHOW_PLACEHOLDERS === '1'
const liveTestimonials = () => TESTIMONIALS.filter((t) => showPlaceholders() || !t.placeholder)

const FEATURED = ['web-design-sharjah', 'ecommerce-website-development-uae', 'ai-automation-services', 'ai-agent-development', 'nextjs-web-development', 'shopify-automation-services']
const serviceCards = () => FEATURED.map((s) => SERVICE_PAGES.find((x) => x.slug === s)).map((x) => ({ href: '/' + x.slug, title: x.nav, text: x.blurb }))

function testimonialsSection() {
  const list = liveTestimonials()
  if (!list.length) return ''
  return `<section class="mx-auto max-w-6xl px-5 pt-20" aria-labelledby="testimonials">
<div class="mx-auto max-w-4xl">${h2('What clients say', 'testimonials')}</div>
<ul class="mt-10 grid gap-4 md:grid-cols-3">${list
    .map(
      (t) => `<li class="card p-6"><blockquote><p class="leading-relaxed text-zinc-300">“${esc(t.quote)}”</p><footer class="mt-4 text-sm text-zinc-500"><span class="font-semibold text-white">${esc(t.name)}</span>, ${esc(t.role)}${t.project ? ` · ${esc(t.project)}` : ''}</footer></blockquote></li>`,
    )
    .join('')}</ul></section>`
}

/* ---------------- portfolio / case studies ---------------- */
const GROUPS = [
  { h2: 'Websites and web apps', cats: ['Web'], intro: 'Business sites, storefronts and web applications built with Next.js, React and Flask, each with a clear problem to solve.' },
  { h2: 'AI and automation projects', cats: ['AI', 'Automation'], intro: 'Agents and workflows that take repetitive work off a store owner or team.' },
  { h2: 'Other engineering projects', cats: ['Other'], intro: 'Foundational software work that sits underneath everything else I build.' },
]

function projectCard(pr) {
  const img = PROJECT_IMAGES[pr.key]
  return `<li><article class="card glow relative h-full p-6">
${img ? `<img src="${img.src}" width="${img.width}" height="${img.height}" alt="${esc(img.alt)}" loading="lazy" decoding="async" class="mb-5 h-auto w-full rounded-2xl border border-line" />` : ''}
<p class="font-mono text-xs uppercase tracking-widest text-accent-2">${esc(pr.badge)}</p>
${h3(pr.title).replace('mt-8', 'mt-2')}
<p class="mt-3 text-sm leading-relaxed text-zinc-400">${esc(pr.description)}</p>
<p class="mt-4 text-sm leading-relaxed text-zinc-400"><strong class="text-white">Problem:</strong> ${esc(pr.problem)}</p>
<p class="mt-3 text-sm leading-relaxed text-zinc-400"><strong class="text-white">Solution:</strong> ${esc(pr.solution)}</p>
<ul class="mt-4 space-y-1.5 text-sm text-zinc-400">${pr.features.map((f) => `<li class="flex items-start gap-2"><span class="mt-2 size-1.5 shrink-0 rounded-full bg-accent-2" aria-hidden="true"></span>${esc(f)}</li>`).join('')}</ul>
<p class="mt-4 flex flex-wrap gap-2">${pr.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join('')}</p>
${pr.link ? `<p class="mt-5"><a href="${esc(pr.link)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink">${esc(pr.linkLabel)}<span class="sr-only"> for ${esc(pr.title)} (opens in a new tab)</span> ↗</a></p>` : ''}
</article></li>`
}

function portfolioBody() {
  const groups = GROUPS.map((g) => {
    const items = PROJECTS.filter((x) => g.cats.includes(x.category))
    if (!items.length) return ''
    return `<section class="mx-auto max-w-6xl px-5 pt-20" aria-labelledby="${g.cats[0].toLowerCase()}-projects">
<div class="mx-auto max-w-4xl">${h2(g.h2, g.cats[0].toLowerCase() + '-projects')}${p(g.intro)}</div>
<ul class="mt-10 grid gap-4 md:grid-cols-2">${items.map(projectCard).join('')}</ul></section>`
  }).join('\n')

  return `${pageHeader({
    crumbs: [{ name: 'Home', path: '/' }, { name: 'Portfolio', path: '/portfolio' }],
    eyebrow: 'Portfolio',
    h1: 'Web Design Portfolio and Case Studies',
    lead: 'Real projects with the problem, the solution and the features I built. Where a project is live, you can open it and test the speed and mobile experience yourself.',
  })}
${groups}
${testimonialsSection()}
${ctaBlock({ heading: 'Want results like these for your business?', text: 'Tell me what you need and I will suggest the right approach, with a clear quote.' })}
${linkCards(serviceCards(), 'Services', 'services')}`
}

/* ---------------- about ---------------- */
function aboutBody(assets) {
  const img = assets.profileImg
  const sections = ABOUT_COPY.sections
    .map(
      (s) => `<section class="pt-12" aria-labelledby="${s.h2.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 24)}">
${h2(s.h2, s.h2.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 24))}
${(s.paragraphs || []).map(p).join('\n')}
${s.bullets ? ul(s.bullets) : ''}
</section>`,
    )
    .join('\n')
  return `${pageHeader({
    crumbs: [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }],
    eyebrow: 'About',
    h1: 'About Usman Ghazanfar, AI and Web Developer',
    lead: 'I build fast, search-friendly websites and AI-powered automation for businesses worldwide, including clients in Sharjah, Dubai and across the UAE.',
  })}
<div class="mx-auto max-w-3xl px-5">
${img ? `<img src="${img}" width="640" height="640" alt="Portrait of Usman Ghazanfar, web designer and developer" decoding="async" fetchpriority="high" class="mt-2 size-40 rounded-full border-4 border-ink object-cover object-top sm:size-48" />` : ''}
${sections}
</div>
${testimonialsSection()}
${ctaBlock({ heading: 'Let us talk about your website', text: 'Send me a few details about your business and I will reply with ideas and a quote.' })}
${linkCards([{ href: '/portfolio', title: 'Portfolio and case studies', text: 'See the real projects behind the experience.' }, ...serviceCards().slice(0, 3)], 'Explore more', 'explore')}`
}

/* ---------------- contact ---------------- */
const field = 'mt-2 w-full rounded-2xl border border-line bg-panel/70 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40'

function contactBody() {
  const opt = SERVICE_PAGES.map((s) => `<option>${esc(s.nav)}</option>`).join('')
  const method = (label, value, href, ext) => `<li class="card p-5"><span class="block text-xs text-zinc-500">${label}</span><a href="${esc(href)}"${ext ? ' rel="noopener"' : ''} class="mt-1 block break-words text-white hover:text-accent-2">${esc(value)}</a></li>`
  return `${pageHeader({
    crumbs: [{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }],
    eyebrow: 'Contact',
    h1: 'Contact Usman Ghazanfar for a Web Design Quote',
    lead: 'Tell me about your business and your project. I will reply with questions, ideas and a clear quote for web design, e-commerce, WordPress or a website redesign in Sharjah and the UAE.',
  })}
<div class="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1.3fr_1fr]">
<section aria-labelledby="form-heading">
${h2('Send me a message', 'form-heading')}
<form id="contact-form" class="mt-8 space-y-5" action="mailto:${esc(SITE.email)}" method="post" enctype="text/plain">
<div><label for="name" class="text-sm font-medium text-white">Your name</label><input id="name" name="name" type="text" autocomplete="name" required class="${field}" /></div>
<div class="grid gap-5 sm:grid-cols-2">
<div><label for="email" class="text-sm font-medium text-white">Email</label><input id="email" name="email" type="email" autocomplete="email" required class="${field}" /></div>
<div><label for="phone" class="text-sm font-medium text-white">Phone or WhatsApp <span class="text-zinc-500">(optional)</span></label><input id="phone" name="phone" type="tel" autocomplete="tel" class="${field}" /></div>
</div>
<div><label for="service" class="text-sm font-medium text-white">What do you need?</label><select id="service" name="service" class="${field}">${opt}<option>Something else</option></select></div>
<div><label for="message" class="text-sm font-medium text-white">Tell me about your project</label><textarea id="message" name="message" rows="6" required class="${field}" placeholder="Your business, the pages or features you need, and any deadline."></textarea></div>
<div class="flex flex-wrap gap-3">
<button type="submit" class="rounded-full bg-white px-6 py-3 font-medium text-ink transition hover:scale-105">Send by email</button>
<button type="button" id="wa-btn" class="rounded-full border border-line px-6 py-3 font-medium text-white transition hover:bg-white/5">Send on WhatsApp</button>
</div>
<p class="text-sm text-zinc-500">The buttons open your email app or WhatsApp with your message filled in, so nothing is stored on this website.</p>
</form>
</section>
<section aria-labelledby="direct-heading">
${h2('Contact details', 'direct-heading')}
<ul class="mt-8 space-y-3">
${method('Email', SITE.email, 'mailto:' + SITE.email)}
${method('WhatsApp', PROFILE.whatsapp, SITE.whatsappLink, true)}
${method('Phone', PROFILE.phone, 'tel:' + PROFILE.phone.replace(/\s/g, ''))}
${method('LinkedIn', PROFILE.linkedinLabel, PROFILE.linkedin, true)}
${method('GitHub', PROFILE.githubLabel, PROFILE.github, true)}
</ul>
${h3('What happens next').replace('mt-8', 'mt-10')}
${ul(['I read your message and reply personally with any questions.', 'We agree the scope, timeline and price in writing.', 'You approve a plan before any design work starts.'])}
</section>
</div>
${linkCards(serviceCards(), 'Not sure what you need? Start here', 'start-here')}`
}

// TODO(owner): to receive submissions without opening an email app, replace this script with a form endpoint
// (Formspree, Web3Forms, or a Vercel serverless function) and set <form action="..." method="post">.
const contactScript = `
<script>
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  var EMAIL = ${JSON.stringify(SITE.email)};
  var WA = ${JSON.stringify(SITE.whatsappLink)};
  function text() {
    var d = new FormData(form);
    return ['Name: ' + d.get('name'), 'Email: ' + d.get('email'), 'Phone/WhatsApp: ' + (d.get('phone') || '-'), 'Service: ' + d.get('service'), '', 'Message:', d.get('message')].join('\\n');
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(form);
    window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Website enquiry: ' + d.get('service')) + '&body=' + encodeURIComponent(text());
  });
  document.getElementById('wa-btn').addEventListener('click', function () {
    if (!form.reportValidity()) return;
    window.open(WA + '?text=' + encodeURIComponent(text()), '_blank', 'noopener');
  });
})();
</script>`

export const trustPages = (assets) => [
  {
    path: '/portfolio',
    title: 'Web Design Portfolio & Case Studies | Usman Ghazanfar',
    description: 'Real web design, e-commerce and AI automation projects with the problem, solution and features for each. See the work before you hire.',
    body: portfolioBody(),
    schema: [
      {
        '@type': 'CollectionPage',
        '@id': abs('/portfolio') + '#page',
        url: abs('/portfolio'),
        name: 'Web design portfolio and case studies',
        about: { '@id': ids.business },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: PROJECTS.map((pr, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: { '@type': 'CreativeWork', name: pr.title, description: pr.description, keywords: pr.tags.join(', '), creator: { '@id': ids.person }, ...(pr.link ? { url: pr.link } : {}) },
          })),
        },
      },
      ...TESTIMONIALS.filter((t) => !t.placeholder).map(reviewNode), // only real testimonials are ever added to schema
    ],
  },
  {
    path: '/about',
    title: 'About Usman Ghazanfar | AI & Web Developer',
    description: 'Meet Usman Ghazanfar: an AI and web developer building automation, AI agents and fast, SEO-ready websites for clients worldwide and in the UAE.',
    body: aboutBody(assets),
    schema: [{ '@type': 'AboutPage', '@id': abs('/about') + '#page', url: abs('/about'), name: 'About Usman Ghazanfar', mainEntity: { '@id': ids.person } }, personNode()],
  },
  {
    path: '/contact',
    title: 'Contact Usman Ghazanfar | Web Design Quote, UAE',
    description: 'Request a web design, e-commerce, WordPress or redesign quote for your Sharjah or UAE business. Email, WhatsApp or use the contact form.',
    body: contactBody(),
    scripts: contactScript,
    schema: [{ '@type': 'ContactPage', '@id': abs('/contact') + '#page', url: abs('/contact'), name: 'Contact Usman Ghazanfar', about: { '@id': ids.business } }],
  },
]
