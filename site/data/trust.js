// Trust content: testimonials + About page copy.
//
// TESTIMONIALS — TODO(owner): replace the placeholders below with REAL client quotes (with permission).
// Entries with `placeholder: true` are NEVER rendered on the live site and never added to JSON-LD,
// so empty "TODO" boxes cannot hurt your credibility or trigger a structured-data penalty.
// To preview the layout locally run:  SHOW_PLACEHOLDERS=1 node scripts/check-seo.mjs   (or set it while building).
// To publish a real one: delete `placeholder: true` and fill in the fields.
export const TESTIMONIALS = [
  { placeholder: true, quote: 'TODO: real client quote about the project and the result.', name: 'TODO: client name', role: 'TODO: role, company', project: 'TODO: project name' },
  { placeholder: true, quote: 'TODO: real client quote about communication and delivery.', name: 'TODO: client name', role: 'TODO: role, company', project: 'TODO: project name' },
  { placeholder: true, quote: 'TODO: real client quote about speed, SEO or sales results.', name: 'TODO: client name', role: 'TODO: role, company', project: 'TODO: project name' },
]

// Optional project screenshots for /portfolio. TODO(owner): export WebP screenshots (e.g. 1200x750) into /public/portfolio/
// then add them here, keyed by project key from src/data/content.js. width/height are REQUIRED (prevents layout shift).
// Example:
//   'ma-fabrics': { src: '/portfolio/ma-fabrics.webp', width: 1200, height: 750, alt: 'MA Fabrics online fabric store homepage showing suiting collections' },
export const PROJECT_IMAGES = {}

export const ABOUT_COPY = {
  sections: [
    {
      h2: 'Who I am',
      paragraphs: [
        `I am Usman Ghazanfar, a web designer and developer who builds fast, search-friendly websites and the automation behind them. I work with React and Next.js for modern front ends, PHP and WordPress when a content-managed site is the better fit, and Python and n8n when a business needs repetitive work automated.`,
        `I am studying for an Associate Degree in Artificial Intelligence at Punjab Group of Colleges, expected in 2027, and I work at SKILL SIDER supporting SEO, online marketing and web development. That mix matters: I think about how a site is built and how it will be found at the same time, instead of treating design, code and SEO as separate jobs.`,
      ],
    },
    {
      h2: 'How I work with clients in Sharjah, Dubai and across the UAE',
      paragraphs: [
        `I work with clients online, so the process is the same whether you are in Sharjah, Dubai or another emirate. We talk by video call, email or WhatsApp, you see a live preview as the site takes shape, and nothing goes live until you have approved it.`,
        `Because audiences in the UAE are multilingual and mobile-first, I plan for Arabic and English layouts, WhatsApp contact points and fast mobile performance from the very beginning of a project, rather than bolting them on at the end.`,
      ],
    },
    {
      h2: 'What you can expect',
      bullets: [
        '**A written scope.** You know what is included, what is extra and what the timeline looks like before work starts.',
        '**SEO built in.** Titles, headings, structured data, sitemaps and clean URLs are part of every build, not an upsell.',
        '**Speed as a requirement.** Pages are tested for loading speed and layout stability on mobile.',
        '**Plain-language communication.** I explain choices in words a business owner can use, without hiding behind jargon.',
        '**Honest advice.** If WordPress, a simple template or a smaller scope will serve you better than a custom build, I will say so.',
        '**No ranking promises.** Nobody can honestly guarantee a Google position. I build the best foundation and explain what else will help.',
      ],
    },
  ],
}
