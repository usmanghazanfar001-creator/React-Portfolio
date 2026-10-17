// Copy for the four service landing pages. Each page is unique (no shared paragraphs).
// Fact policy: only things true per src/data/content.js (real projects, stack, location) or general industry knowledge.
// Do not add client names, prices, awards or UAE office claims unless they are real.
//
// TODO(owner) — review before publishing:
//  * WordPress is not listed in your skills/projects on the home page. The WordPress page assumes you offer it.
//  * Process/timeline statements are generic. Edit them to match how you actually work.

import { GLOBAL_SERVICE_PAGES } from './global-services.js'

const UAE_PAGES = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'web-design-sharjah',
    serviceName: 'Web Design in Sharjah',
    nav: 'Web Design Sharjah',
    blurb: 'Custom, mobile-first websites for Sharjah businesses, built to load fast and rank.',
    metaTitle: 'Web Design Company in Sharjah | Usman Ghazanfar',
    metaDescription:
      'Custom, fast, mobile-first web design for Sharjah businesses. SEO-ready sites built with React and Next.js. Get a free quote from Usman Ghazanfar.',
    eyebrow: 'Web design · Sharjah',
    h1: 'Web Design Company in Sharjah Built to Win You Customers',
    lead:
      'Looking for web design in Sharjah that looks sharp, loads quickly and actually brings in enquiries? I design and build custom websites for Sharjah businesses, from the first sketch to launch day, with SEO and mobile performance built in from the start.',
    sections: [
      {
        h2: 'Why Sharjah businesses need more than a template',
        paragraphs: [
          `Most customers in Sharjah find a business the same way: they search on their phone, tap one or two results and decide within seconds. If your site is slow, awkward on a small screen or buried behind a confusing menu, they move on to the next result. A good website is not decoration. It is the part of your business that works every hour of the day, including the hours your shop or office is closed.`,
          `Sharjah is home to retailers and trading companies, clinics and schools, restaurants, contractors and a growing number of online-only brands. What they share is that local customers compare options online before they pick up the phone. A site that clearly says what you offer, where you serve and how to reach you in a single tap gives you a real advantage over competitors whose pages are cluttered or out of date.`,
          `I build every site from scratch around your goals instead of dropping your logo into a stock theme. That means a layout planned around what visitors need to do, whether that is request a quote, book a visit, browse products or message you on WhatsApp, and a design that reflects your brand instead of looking like everyone else's.`,
        ],
      },
      {
        h2: 'How I approach web design for the UAE market',
        paragraphs: [
          `Every project starts with questions, not colours: who are your customers, what do they search for, and what should a visitor do next? From there I plan the page structure, help you write or sharpen the key copy, and design the layout mobile-first, because most local traffic arrives on a phone.`,
          `Under the hood I use modern tools: React and Next.js for fast, app-quality pages, clean semantic HTML, and image formats and loading techniques that keep Core Web Vitals healthy. Speed is both a ranking signal and a conversion factor, so I treat it as a requirement rather than an optional extra.`,
          `Audiences in the UAE are multilingual, so I plan your site structure to leave room for English and Arabic, including right-to-left layouts. If Arabic is on your roadmap, tell me early and I will design the foundation so you are not forced into a rebuild later.`,
        ],
      },
      {
        h2: 'What makes a business website convert',
        paragraphs: [
          `A website that looks good but does not produce enquiries has failed at its main job. The pages that convert tend to share a few traits. They state clearly, near the top, what you do and which area you serve. They show proof such as real projects, reviews or recognisable clients. They give each page one primary action instead of five competing buttons. And they make contact effortless, with a phone number, WhatsApp button and short form always within reach.`,
          `I design with these principles in mind and then test them on real screen sizes before launch, so you are not guessing whether a visitor in Sharjah can find your number on a small phone in bright sunlight.`,
        ],
      },
    ],
    servicesHeading: 'What is included in a web design project',
    services: [
      { title: 'Custom website design', text: 'A bespoke layout aligned with your brand and goals, not an off-the-shelf theme with your logo on top.' },
      { title: 'Mobile-first, responsive build', text: 'Pages that read and tap comfortably on phones, tablets and desktops, tested on real screen sizes.' },
      { title: 'SEO foundations at launch', text: 'Page titles, meta descriptions, heading structure, schema markup, an XML sitemap and clean URLs from day one.' },
      { title: 'Speed and Core Web Vitals', text: 'Optimised images, lean code and careful loading so pages feel instant, even on a mobile connection.' },
      { title: 'WhatsApp and lead capture', text: 'Click-to-WhatsApp buttons, contact forms and call buttons placed where visitors are ready to act.' },
      { title: 'Launch and handover', text: 'Hosting and domain setup, analytics, Google Search Console and a walkthrough so you know how to keep the site updated.' },
    ],
    stepsHeading: 'From first call to launch',
    steps: [
      '**Discovery call.** We talk through your business, customers, competitors and what success looks like for the new site.',
      '**Plan and wireframes.** I map the pages and the journey a visitor should take, and you approve the structure before any design work starts.',
      '**Design and build.** I design the key pages, then build them with fast, accessible code. You review a live preview and send feedback.',
      '**Launch and handover.** I connect your domain, set up analytics and Search Console, and show you how everything works.',
    ],
    faqs: [
      {
        q: 'How long does a website take to build?',
        a: 'It depends on scope: the number of pages, whether you need e-commerce or bilingual content, and how quickly feedback and content arrive. I give you a realistic timeline before we start so there are no surprises.',
      },
      {
        q: 'Will my new website show up on Google?',
        a: 'I set up the technical SEO foundations, including titles, headings, structured data, speed and a sitemap, so search engines can understand your site. No honest developer can promise a ranking, because it also depends on competition, content and time, but a well-built site gives you the best possible start.',
      },
      {
        q: 'Can you design a site in English and Arabic?',
        a: 'Yes, I can structure the site for both languages, including right-to-left layouts for Arabic. Tell me at the start of the project so the design and code are planned for it rather than patched in later.',
      },
      {
        q: 'Do I need to be in Sharjah to work with you?',
        a: 'No. Calls, feedback and approvals all happen online by video call, email or WhatsApp, so distance is not a barrier.',
      },
    ],
    cta: {
      heading: 'Ready for a website that works as hard as you do?',
      text: 'Tell me about your business and your goals and I will reply with a clear plan and a quote. There is no obligation, and you can also message me directly on WhatsApp.',
    },
    blogSlugs: ['how-to-choose-a-web-design-company-in-sharjah', 'how-much-does-a-website-cost-in-sharjah'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'ecommerce-website-development-uae',
    serviceName: 'E-commerce Website Development in the UAE',
    nav: 'E-commerce Website Development UAE',
    blurb: 'Fast online stores with local payments, AED pricing, order tracking and automation.',
    metaTitle: 'E-commerce Website Development UAE | Usman Ghazanfar',
    metaDescription:
      'E-commerce website development for UAE brands: fast Next.js stores, AED pricing, local payment options and WhatsApp support. Request a quote.',
    eyebrow: 'E-commerce · UAE',
    h1: 'E-commerce Website Development in the UAE That Turns Browsers Into Buyers',
    lead:
      'Your online store is your busiest salesperson, so it should be fast, trustworthy and easy to buy from. I handle e-commerce website development for the UAE end to end: product catalogue, cart and checkout, payments, order tracking and the automation that runs behind the scenes.',
    sections: [
      {
        h2: 'What a UAE online store needs to get right',
        paragraphs: [
          `Shoppers in the UAE expect to see prices in AED, a clear delivery promise and familiar ways to pay. Many also like to message the seller on WhatsApp before they buy, and cash on delivery remains a popular option with a lot of local customers. A store that ignores these habits makes buyers hesitate, and hesitation at checkout is where sales are lost.`,
          `On top of local expectations sit the basics every store needs: product pages that load quickly on mobile, images that look sharp without slowing the page, and a checkout with as few steps as possible. Every extra form field or slow screen costs you orders, so I design the buying journey to remove friction rather than add features for their own sake.`,
          `If your business is VAT-registered in the UAE, prices and invoices need to show VAT correctly. I configure tax settings to match what your accountant confirms, rather than guessing, and I keep delivery zones, rates and your returns policy clearly visible so customers know what to expect before they pay.`,
        ],
      },
      {
        h2: 'Stores and automation I have built',
        paragraphs: [
          `[MA Fabrics](/portfolio) is a premium online storefront I built in Next.js for a Lahore-based textile brand. It includes a shop, curated collections, a photo gallery, fabric videos, customer accounts, a cart, order tracking and a WhatsApp button for personal fabric advice. It is the same catalogue-plus-advice experience that many UAE retailers need.`,
          `I have also built an AI-powered Shopify management system and a multi-agent store manager using LangChain and LangGraph. They automate repetitive work such as product research, SEO, listing generation, customer support and analytics, so store owners can spend their time on growth instead of admin. If you already run a Shopify store, that automation experience can be added to it.`,
        ],
      },
      {
        h2: 'Choosing the right platform for your store',
        paragraphs: [
          `There is no single best platform for every shop. A custom Next.js storefront gives you the fastest pages and complete control over design and checkout, which suits brands that want a distinctive experience. An existing Shopify store can be a sensible base when you want a hosted solution and plenty of ready-made apps, and I can add automation and improvements on top of it.`,
          `The right answer depends on the size of your catalogue, your budget, how often you will update products and who will manage the store day to day. I recommend the option that fits those facts, and I will tell you plainly if a simpler setup would serve you better than a fully custom build.`,
        ],
      },
    ],
    servicesHeading: 'What is included in e-commerce development',
    services: [
      { title: 'Custom storefront development', text: 'A fast, branded online shop built with Next.js, designed around how your customers actually browse and buy.' },
      { title: 'Catalogue and collections', text: 'Product pages, categories, filters and curated collections that make it easy to find the right item quickly.' },
      { title: 'Cart, checkout and payments', text: 'A short checkout connected to the payment provider you choose, with cash on delivery where it suits your business.' },
      { title: 'Accounts and order tracking', text: 'Customer accounts, order history and status updates so buyers always know where their order is.' },
      { title: 'Search-friendly product pages', text: 'Clean URLs, product schema, descriptive titles and fast loading so your products can be found on Google.' },
      { title: 'Automation with n8n and AI', text: 'Order notifications, stock alerts and routine store tasks automated, so less of your day goes on manual work.' },
    ],
    stepsHeading: 'Launch checklist for a UAE store',
    steps: [
      '**Shipping and delivery.** Zones, rates and delivery times for each emirate, set up and displayed clearly.',
      '**Payments.** Your chosen gateway, for example Stripe, Telr or PayTabs, connected and tested with real test orders.',
      '**Legal pages.** Privacy policy, terms and returns pages in place before launch, reviewed by you or your adviser.',
      '**Tracking.** Analytics and conversion tracking set up so you can see which products and channels bring sales.',
    ],
    faqs: [
      {
        q: 'How much does an e-commerce website cost in the UAE?',
        a: 'It depends on the number of products, the payment and shipping integrations and any custom features. I quote each store individually after a short call so you only pay for what you need. Our guide to [website costs in Sharjah](/blog/how-much-does-a-website-cost-in-sharjah) explains the main factors.',
      },
      {
        q: 'Can customers pay in AED?',
        a: 'Yes, as long as the payment provider you choose supports AED for your business. I help you compare providers and then connect and test the one you pick.',
      },
      {
        q: 'Can customers order or ask questions through WhatsApp?',
        a: 'Yes. A click-to-chat button on product pages is simple to add, and I can also connect order notifications to WhatsApp or email using automation.',
      },
      {
        q: 'Can you improve my existing Shopify store?',
        a: 'Yes. I can review your current store, automate repetitive tasks and advise on whether to improve it or move to a custom build.',
      },
    ],
    cta: {
      heading: 'Let us build a store your customers enjoy buying from',
      text: 'Share what you sell and who you sell to, and I will come back with a plan, a timeline and a quote for your online store.',
    },
    blogSlugs: ['how-much-does-a-website-cost-in-sharjah', 'web-design-trends-in-the-uae'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'wordpress-development-dubai',
    serviceName: 'WordPress Development in Dubai',
    nav: 'WordPress Development Dubai',
    blurb: 'Lightweight, secure WordPress sites your team can update without a developer.',
    metaTitle: 'WordPress Development Dubai | Usman Ghazanfar',
    metaDescription:
      'WordPress development for Dubai businesses: custom themes, fast hosting setup, WooCommerce, security and SEO. Get a quote from Usman Ghazanfar.',
    eyebrow: 'WordPress · Dubai',
    h1: 'WordPress Development in Dubai for Fast, Easy-to-Manage Websites',
    lead:
      'Need WordPress development in Dubai? I build WordPress websites that load quickly, are simple for your own team to update and are set up for search from the start, whether you need a company site, a blog or a WooCommerce store.',
    sections: [
      {
        h2: 'Why WordPress is still a smart choice for many businesses',
        paragraphs: [
          `WordPress powers a very large share of the web for good reasons. You can edit pages, add blog posts and change images yourself without calling a developer each time. There is a huge ecosystem of plugins, a large pool of people who know the platform, and you own your content rather than renting it from a closed website builder.`,
          `It is also not the right tool for every project. If you need a highly interactive web application or a very custom user experience, a React or Next.js build may serve you better, and I work in both worlds. I will tell you honestly which approach fits your goals and budget instead of selling you whatever is easiest for me.`,
          `WordPress is written in PHP, one of the languages I work in, which means I can go beyond installing a theme. I can customise templates, write small pieces of custom functionality and fix problems at the code level when a plugin does not behave.`,
        ],
      },
      {
        h2: 'Doing WordPress properly: fast, secure and maintainable',
        paragraphs: [
          `Most slow, fragile WordPress sites share the same problems: a heavy page-builder theme, dozens of overlapping plugins and oversized images. I start with a lightweight theme or a custom one, keep plugins to the few that earn their place, compress and resize images and configure caching so pages respond quickly.`,
          `Security and reliability are part of the build rather than an afterthought. That means sensible login protection, regular updates, automated backups and a staging copy where changes can be tested before they reach your live site. For a business in Dubai, where customers judge you quickly, a site that is down or hacked costs more than the time it takes to prevent it.`,
          `Dubai audiences are international, so many sites need English and Arabic versions. WordPress has mature multilingual plugins that handle translated pages and right-to-left layouts, and I plan the structure for this at the beginning, along with hosting that places your site close to your visitors, through a nearby data centre or a content delivery network.`,
        ],
      },
      {
        h2: 'Moving to WordPress from another platform',
        paragraphs: [
          `Many businesses reach WordPress after outgrowing a drag-and-drop builder or an old custom site. A move is straightforward when it is planned: I export your content, rebuild your key pages in a clean theme and map every old address to its new one with permanent redirects, so you keep the search visibility you have already earned.`,
          `The new site is built and tested on a private staging copy first, so your live website stays untouched until everything has been checked, from forms and menus to mobile layouts and page speed.`,
        ],
      },
    ],
    servicesHeading: 'WordPress services I offer',
    services: [
      { title: 'Custom theme development', text: 'A lightweight theme built for your brand and layout, without the bloat of a multipurpose page-builder theme.' },
      { title: 'Theme customisation and fixes', text: 'Changes to an existing theme, layout bugs, broken plugins and plugin conflicts resolved at the code level.' },
      { title: 'WooCommerce stores', text: 'Product catalogues, checkout and payment integration for businesses that want to sell online with WordPress.' },
      { title: 'Speed optimisation', text: 'Image optimisation, caching, cleaner code and a leaner plugin set to improve your Core Web Vitals.' },
      { title: 'Security and backups', text: 'Update routines, login protection and automated backups so a problem never turns into a disaster.' },
      { title: 'SEO setup and training', text: 'Titles, schema, sitemaps and clean URLs configured, plus a short walkthrough so your team can manage content confidently.' },
    ],
    stepsHeading: 'How a WordPress project runs',
    steps: [
      '**Scope.** We agree what the site must do, who updates it and which integrations it needs.',
      '**Design and theme build.** I design the main templates and build them into a fast theme you can edit through the dashboard.',
      '**Content and SEO.** Pages are loaded, metadata and structured data are configured, and redirects are added if you are replacing an old site.',
      '**Launch and handover.** I move the site live, switch on backups and security, and show your team how to manage it.',
    ],
    faqs: [
      {
        q: 'Should I choose WordPress or a custom Next.js website?',
        a: 'WordPress suits content-led sites where non-technical staff edit pages often. A custom Next.js build suits highly interactive products or sites where maximum speed and a very unique design matter most. I will recommend one after understanding your goals.',
      },
      {
        q: 'Can you speed up or fix my existing WordPress site?',
        a: 'Yes. I review the theme, plugins, hosting and images, identify what is slowing the site down or causing errors, and then fix the highest-impact issues first.',
      },
      {
        q: 'Will I be able to edit the website myself?',
        a: 'Yes, that is one of the main reasons to choose WordPress. I set up the dashboard so common edits are simple, and I show you how to make them.',
      },
      {
        q: 'Do you offer ongoing maintenance?',
        a: 'If you want ongoing updates, backups and security checks, we can agree a maintenance arrangement. Otherwise I hand over clear instructions so your team or hosting provider can look after the basics.',
      },
    ],
    cta: {
      heading: 'Need a WordPress site that stays fast and easy to manage?',
      text: 'Send me a few details about your project, or the address of the WordPress site you want fixed, and I will reply with a clear recommendation and a quote.',
    },
    blogSlugs: ['how-to-choose-a-web-design-company-in-sharjah', 'web-design-trends-in-the-uae', 'nextjs-vs-wordpress-for-business-websites'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'website-redesign-uae',
    serviceName: 'Website Redesign in the UAE',
    nav: 'Website Redesign UAE',
    blurb: 'Modernise your site for speed, mobile and conversions without losing your search rankings.',
    metaTitle: 'Website Redesign Services UAE | Usman Ghazanfar',
    metaDescription:
      'Website redesign for UAE businesses: faster pages, modern design, better mobile experience and SEO that protects your rankings. Request a site review.',
    eyebrow: 'Website redesign · UAE',
    h1: 'Website Redesign in the UAE Without Losing the Traffic You Already Have',
    lead:
      'A website redesign in the UAE should make your business look current and convert more visitors, not wipe out the search rankings you have already earned. I redesign existing sites with a clear plan for design, speed and SEO so the new version is better in every way that matters.',
    sections: [
      {
        h2: 'Signs it is time for a redesign',
        paragraphs: [
          `A redesign is a big decision, so it should be driven by evidence rather than boredom with the old look. If several of the points below sound familiar, your website is probably costing you customers.`,
        ],
        bullets: [
          'The design looks dated next to your competitors, or no longer reflects your brand.',
          'Pages are slow, especially on mobile data connections.',
          'Parts of the site are awkward or broken on phones and tablets.',
          'You cannot update text or images without paying a developer.',
          'Visitors arrive but few of them call, message or fill in the form.',
          'The platform or plugins are outdated and you worry about security.',
          'You want to add Arabic, online sales or booking and the current site cannot support it.',
        ],
      },
      {
        h2: 'Redesign without losing your search rankings',
        paragraphs: [
          `The biggest risk in any redesign is traffic loss. When pages change address, titles disappear or content is thinned out, Google can drop pages you spent years building. I treat SEO as part of the redesign brief, not a clean-up job afterwards.`,
          `Before changing anything I record your current pages, the keywords and URLs that bring visitors and the content that performs. I keep what works, improve what does not, and set up permanent redirects from every old address to its new equivalent so visitors and search engines land in the right place. The new site is built on a private staging copy and checked thoroughly before it replaces the live one.`,
          `After launch I check Google Search Console for crawl errors, confirm the new sitemap is processed and watch your key pages in the first weeks so any dip is spotted and fixed early rather than discovered months later.`,
        ],
      },
      {
        h2: 'What stays and what changes',
        paragraphs: [
          `A redesign does not have to mean starting from zero. Your logo, brand colours and best-performing content often carry over, while the layout, navigation, page speed and technical foundations are rebuilt. The audit tells us which pages earn traffic and enquiries today, so those are protected, and which pages are thin, outdated or duplicated and should be merged or removed.`,
          `You stay involved at every stage through a private preview link, so there are no surprises on launch day and every change has a clear reason behind it.`,
        ],
      },
    ],
    servicesHeading: 'What a redesign project covers',
    services: [
      { title: 'Site and SEO audit', text: 'A review of your current design, speed, content and search performance, so decisions are based on data.' },
      { title: 'UX and UI redesign', text: 'A cleaner layout, clearer navigation and calls to action designed around what your visitors need to do.' },
      { title: 'Performance rebuild', text: 'Lighter pages, modern image formats and cleaner code to improve load times and Core Web Vitals.' },
      { title: 'Content restructure', text: 'Pages reorganised and rewritten where needed so each one has a clear purpose and a target search topic.' },
      { title: 'Migration and redirects', text: 'Old URLs mapped to new ones with permanent redirects so your existing rankings and links carry over.' },
      { title: 'Post-launch monitoring', text: 'Search Console and analytics checks after launch to catch and fix any drop in traffic quickly.' },
    ],
    stepsHeading: 'My redesign process',
    steps: [
      '**Audit.** I review your current site, analytics and search performance and list what to keep, change or remove.',
      '**Goals and plan.** We agree what the new site should achieve, such as more enquiries, faster pages or online sales, and plan the page structure.',
      '**Design and rebuild.** I design the new look and rebuild it on a staging site that you can review at any stage.',
      '**Redirect, test and launch.** Redirects are mapped and tested, and the new site goes live once everything checks out.',
      '**Monitor.** I track traffic and errors after launch and fix issues quickly.',
    ],
    faqs: [
      {
        q: 'Will a redesign hurt my Google rankings?',
        a: 'Not if it is planned properly. Ranking losses usually come from changing URLs without redirects or removing content that was performing. I protect rankings with a URL map, permanent redirects and careful checks before and after launch.',
      },
      {
        q: 'How long does a website redesign take?',
        a: 'It depends on the size of your site, how much content needs to change and how quickly you can review each stage. After the audit I can give you a realistic schedule.',
      },
      {
        q: 'Can you redesign a site that someone else built?',
        a: 'Yes. I start by reviewing the code and platform, then tell you honestly whether a refresh of the existing site or a full rebuild makes more sense.',
      },
      {
        q: 'Can I keep my current platform or content?',
        a: 'In most cases yes. We can keep the platform if it still suits you, or move to a faster setup if it is holding you back. Content that performs well is kept and improved.',
      },
    ],
    cta: {
      heading: 'Not sure whether your site needs a redesign?',
      text: 'Send me your website address and I will tell you what is working, what is holding it back and what I would change first.',
    },
    blogSlugs: ['web-design-trends-in-the-uae', 'how-to-choose-a-web-design-company-in-sharjah'],
  },
]

// All service landing pages. `group` drives nav/footer grouping: 'uae' (Sharjah/UAE web services) or 'global' (AI, automation, dev).
export const SERVICE_PAGES = [
  ...UAE_PAGES.map((p) => ({ group: 'uae', ...p })),
  ...GLOBAL_SERVICE_PAGES.map((p) => ({ group: 'global', ...p })),
]
