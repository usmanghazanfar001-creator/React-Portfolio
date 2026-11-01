// Additional service pages. Same fact policy as the other service data: only real projects/skills from src/data/content.js
// or general industry knowledge. No invented clients, prices, results or guarantees.
//
// TODO(owner): Shopify *store setup* has no matching case study in your portfolio yet (your Shopify work is automation, plus the
// custom Next.js MA Fabrics storefront). The page says so honestly. Add a real store-setup case study when you have one.
const areaWorldwide = 'Worldwide'

export const NEW_SERVICE_PAGES = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'services/ai-chatbot-development',
    serviceName: 'AI Chatbot Development',
    nav: 'AI Chatbot Development',
    blurb: 'Chatbots that answer from your approved content and hand over to a person.',
    metaTitle: 'AI Chatbot Development Services | Usman Ghazanfar',
    metaDescription:
      'AI chatbot development for websites and support: answers from your own content, safe handover to a person, built with LangChain. Free consultation.',
    areaServed: areaWorldwide,
    eyebrow: 'AI chatbots',
    h1: 'AI Chatbot Development for Websites and Customer Support',
    lead:
      'An AI chatbot can answer common customer questions at any hour, but only if it answers from facts you approved and knows when to hand over to a person. I design and build AI chatbots for websites and support teams, using LangChain and language models, with the guardrails that keep answers accurate and on-brand.',
    sections: [
      {
        h2: 'What a business chatbot should and should not do',
        paragraphs: [
          `The most useful chatbots are narrow. They answer questions about your services, opening hours, delivery, returns and how pricing works from content you have approved, and they say so plainly when they do not know. A chatbot that guesses is a liability, because it can state a wrong price or promise something you do not offer. So the first design decision is scope: which questions it handles, which it refuses, and when it passes the conversation to a person.`,
          `A chatbot is also not an agent. A chatbot mainly converses, while an agent takes actions across tools. Many businesses need a chatbot first and a handful of simple actions later, such as capturing a lead or checking an order status. If you are unsure which you need, my guide on [AI agents, chatbots and workflows](/blog/ai-agents-vs-chatbots-vs-workflows) explains the difference.`,
        ],
      },
      {
        h2: 'How I build chatbots that stay accurate',
        paragraphs: [
          `I start with your content: service pages, FAQs, policies and product information. For each question the chatbot looks up the relevant passages and answers from them instead of from memory, and it shows a safe fallback when nothing relevant is found. I build the conversation flow with LangChain, choose the language model by quality, cost, speed and your privacy needs, and test the bot against real customer questions before launch.`,
          `Guardrails matter as much as the model. I set limits on topics, block requests the bot should not handle, keep a record of conversations so you can review them, and add a clear route to a human by form, email or messaging. No chatbot is perfect, so the system is designed to fail safely.`,
        ],
      },
      {
        h2: 'Where chatbots fit in your business',
        paragraphs: [
          `The common uses are website enquiries, product and service questions, support triage, booking and lead capture. A chatbot can collect a visitor's name, need and contact details and pass a clean summary to your team, which saves time and stops leads going cold overnight. I also build chatbots into larger systems: my AI E-Commerce Store Manager includes a customer support agent alongside product research, SEO, listing generation and analytics for Shopify stores.`,
          `Where the chat appears depends on your channel: a widget on your website, or a messaging channel if its provider allows it. Messaging platforms have their own approval rules and costs, so I check what is feasible with you before promising a channel.`,
        ],
      },
    ],
    servicesHeading: 'What is included in a chatbot project',
    services: [
      { title: 'Scope and conversation design', text: 'We define what the chatbot answers, what it refuses and when it hands over to a person.' },
      { title: 'Knowledge from your own content', text: 'Answers are drawn from the documents and pages you approve, with a fallback when nothing matches.' },
      { title: 'Website chat integration', text: 'A chat widget on your site, built to match your brand and work on phones.' },
      { title: 'Lead capture and human handover', text: 'Visitor details are collected and passed to your team by email, form or messaging.' },
      { title: 'Testing and guardrails', text: 'Real customer questions are used to test accuracy, with limits on topics and behaviour.' },
      { title: 'Review and improvement', text: 'Conversation logs help you see what customers ask and improve the bot over time.' },
    ],
    stepsHeading: 'How a chatbot project runs',
    steps: [
      '**Define the scope.** We list the questions it should answer and the ones it should never touch.',
      '**Prepare the content.** You approve the information the chatbot may use, and I structure it.',
      '**Build and test.** I build the bot and test it on real customer questions, fixing weak answers.',
      '**Launch and review.** It goes live with logging, and we review real conversations together.',
    ],
    faqs: [
      { q: 'How much does an AI chatbot cost?', a: 'It depends on scope, the amount of content, the channels you need and how many conversations it handles. I quote after a short call, and I explain the running costs of the language model separately from the build.' },
      { q: 'Will the chatbot give wrong answers?', a: 'Any language model can be wrong. I reduce the risk by answering only from approved content, adding fallbacks and testing on real questions, and you can review conversations after launch.' },
      { q: 'Can the chatbot hand over to a human?', a: 'Yes. Handover is part of the design, by contact form, email or a message to your team.' },
      { q: 'Can it answer in more than one language?', a: 'Many language models handle several languages. I test the languages you need on your own content before launch.' },
    ],
    cta: {
      heading: 'Need a chatbot your customers can trust?',
      text: 'Tell me what customers ask most and where the bot should appear, and I will outline how it would work and what it would take.',
    },
    related: ['services/ai-agent-development', 'services/ai-automation', 'services/n8n-automation'],
    blogSlugs: ['ai-agents-vs-chatbots-vs-workflows', 'how-to-build-an-ai-agent-for-your-business'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'services/technical-seo',
    serviceName: 'Technical SEO Services',
    nav: 'Technical SEO Services',
    blurb: 'Audits and fixes for crawling, indexing, speed and structured data.',
    metaTitle: 'Technical SEO Services & Audit | Usman Ghazanfar',
    metaDescription:
      'Technical SEO and website SEO audits: crawling, indexing, speed, structured data and fixes for React and Next.js sites. Free consultation.',
    areaServed: areaWorldwide,
    eyebrow: 'Technical SEO',
    h1: 'Technical SEO Services and Website SEO Audits',
    lead:
      'Search engines can only rank pages they can crawl, understand and load quickly. My technical SEO services find what is holding your website back, such as indexing gaps, slow pages, broken links or missing structured data, and then fix it in the code, which is where many audits stop at a report.',
    sections: [
      {
        h2: 'What technical SEO covers',
        paragraphs: [
          `Technical SEO is the foundation under your content. It makes sure search engines can reach every page that matters, understand what each one is about and deliver it quickly to visitors on any device. A typical audit and fix covers the following areas.`,
        ],
        bullets: [
          'Crawlability: robots.txt, XML sitemaps and clean internal linking.',
          'Indexing: canonical tags, duplicate pages, redirects and pages blocked by mistake.',
          'Speed and Core Web Vitals: image formats, loading order, layout stability and script weight.',
          'Mobile usability and accessibility: layouts, tap targets and readable text.',
          'Structured data: schema markup for services, articles, breadcrumbs and FAQs, validated before launch.',
          'JavaScript rendering: making sure content is visible to crawlers on React and Next.js sites.',
        ],
      },
      {
        h2: 'What technical SEO can and cannot do',
        paragraphs: [
          `Technical SEO removes obstacles. It does not create demand, and it cannot promise a ranking. Where you appear also depends on your content, your competition and the links other sites give you. What it does do is make sure that good content is not held back by slow pages, indexing mistakes or confusing structure, and that is often where small business sites lose the most.`,
          `Single-page React apps are a common example. They can show search engines an almost empty page until JavaScript runs. Depending on the project I fix that with pre-built static pages, server rendering or a crawlable fallback, then check how the pages appear in Google's own tools.`,
        ],
      },
      {
        h2: 'A real example: this website',
        paragraphs: [
          `I rebuilt the SEO of my own portfolio, which began as a single client-rendered page, into a site of more than 20 pages with a generated sitemap and robots.txt, canonical tags, structured data for services, articles and FAQs, faster mobile loading and accessibility fixes. In October 2026 it scored 95 for Performance, 96 for Accessibility and 100 for Best Practices and SEO on PageSpeed Insights for mobile, and I have since addressed the remaining accessibility finding.`,
          `Scores vary between tests, and a good score is not a ranking guarantee. It does show the method working, and it is the same method I apply to client websites. I also support SEO, online marketing and web development at SKILL SIDER, so I work on both the technical and the content side of search.`,
        ],
      },
    ],
    servicesHeading: 'What is included in a technical SEO project',
    services: [
      { title: 'Technical SEO audit', text: 'A review of crawling, indexing, speed, structure and markup, with findings ranked by impact.' },
      { title: 'Indexing and sitemap fixes', text: 'Canonicals, redirects, sitemap and robots.txt corrected so the right pages are found.' },
      { title: 'Speed and Core Web Vitals', text: 'Image, font and script improvements that make pages load faster and shift less.' },
      { title: 'Structured data', text: 'Schema markup added and validated for your services, articles, breadcrumbs and FAQs.' },
      { title: 'JavaScript SEO', text: 'Solutions for React and Next.js sites so search engines can see your content.' },
      { title: 'Implementation and monitoring', text: 'Fixes made in your code, then tracked in Google Search Console after launch.' },
    ],
    stepsHeading: 'How a technical SEO project runs',
    steps: [
      '**Audit.** I crawl and review your site and check how Google currently sees it.',
      '**Prioritise.** You get a short list of fixes ranked by impact and effort.',
      '**Fix.** I make the changes in your code or guide your developer through them.',
      '**Monitor.** I track indexing, errors and search performance in Search Console and adjust.',
    ],
    faqs: [
      { q: 'Can you guarantee first-page rankings?', a: 'No, and be careful with anyone who does. Rankings depend on competition, content and links as well as technical quality. Technical SEO removes the obstacles and gives good content its best chance.' },
      { q: 'How long does technical SEO take to show results?', a: 'Google can pick up fixes within days to weeks, but ranking changes usually take longer and depend on your market and content.' },
      { q: 'Do you only audit, or do you fix the issues too?', a: 'Either. Most of the value comes from fixing, so I can implement changes in your code if I have access. Otherwise I give your developer clear instructions.' },
      { q: 'Does this work for React and Next.js websites?', a: 'Yes. I work with React and Next.js, and I know the common problems, such as content that only appears after JavaScript runs.' },
    ],
    cta: {
      heading: 'Want to know what is holding your site back?',
      text: 'Send me your website address and I will tell you what I would check first. There is no obligation.',
    },
    related: ['services/react-nextjs-development', 'services/website-redesign-uae', 'services/web-design-sharjah'],
    blogSlugs: ['why-every-business-needs-an-seo-friendly-website', 'how-much-does-a-website-cost-in-sharjah'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'services/shopify-development',
    serviceName: 'Shopify Store Development and Setup',
    nav: 'Shopify Store Development',
    blurb: 'Stores set up to sell: products, payments, shipping, SEO basics and automation.',
    metaTitle: 'Shopify Store Development & Setup | Usman Ghazanfar',
    metaDescription:
      'Shopify store development and setup: products, payments, shipping, SEO basics and automation, ready to sell. Free consultation with Usman Ghazanfar.',
    areaServed: areaWorldwide,
    eyebrow: 'Shopify stores',
    h1: 'Shopify Store Development and Setup for New and Growing Brands',
    lead:
      'Launching on Shopify is quick to start and easy to get wrong: the wrong payment setup, weak product pages or missing policies cost sales and trust. I set up and develop Shopify stores so they are ready to sell, easy to manage and prepared for search, with automation to cut the daily workload.',
    sections: [
      {
        h2: 'What a Shopify store setup includes',
        paragraphs: [
          `A good launch is mostly careful configuration. These are the parts I set up and check before a store goes live.`,
        ],
        bullets: [
          'Store settings, currency, domain and the customer-facing basics.',
          'Products, collections and navigation organised so shoppers can find things.',
          'Theme setup and customisation using the theme settings.',
          'Payments, shipping and tax settings suited to your country.',
          'Policy pages for returns, shipping and privacy, which build trust.',
          'Analytics, SEO basics and test orders before launch.',
        ],
      },
      {
        h2: 'Setting up for your market',
        paragraphs: [
          `Which payment providers, currencies and shipping options are available depends on where your business operates, so I check what works for your market before configuring anything. Cash on delivery, local couriers and tax rules all vary by country, and getting them right at the start avoids lost orders later.`,
          `I also keep the store light and clear. Fast product pages, sharp images, readable descriptions and a short checkout matter more to sales than extra apps, and every app you add can slow the store down.`,
        ],
      },
      {
        h2: 'Where my experience is strongest',
        paragraphs: [
          `My strongest Shopify-related experience is in two areas: custom-built storefronts, such as the Next.js store I built for the textile brand MA Fabrics, and Shopify automation, including an AI-powered management system and a multi-agent store manager. For standard store setup I follow Shopify's own configuration and add what I know about SEO, speed and automation on top. If your project needs heavy theme design work, I will tell you early and suggest the best route.`,
          `After launch, the biggest time saver is usually automation: drafting listings, answering routine questions and reporting. You can read how that works on my [Shopify AI automation](/services/shopify-automation) page.`,
        ],
      },
      {
        h2: 'A pre-launch checklist that protects your sales',
        paragraphs: [
          `Most store problems are found by customers, and customers do not report them, they simply leave. So before launch I place test orders on both a phone and a computer and check that confirmation emails arrive, shipping rates and taxes calculate correctly and the checkout works with each payment option you offer. I also click through every menu and collection for broken links, check that product pages load quickly on a mobile connection, confirm your policy pages are linked in the footer and make sure analytics is recording. These checks take little time, and they are often the difference between a smooth first week and a frustrating one.`,
        ],
      },
    ],
    servicesHeading: 'What is included in a Shopify store project',
    services: [
      { title: 'Store configuration', text: 'Settings, currency, domain and customer-facing basics set up correctly from the start.' },
      { title: 'Products and collections', text: 'Your catalogue organised with clear titles, descriptions, images and navigation.' },
      { title: 'Theme setup and customisation', text: 'Branding, layout and key pages adjusted within the theme to match your business.' },
      { title: 'Payments, shipping and taxes', text: 'Options set up for your country and tested with real test orders.' },
      { title: 'SEO and speed basics', text: 'Clean titles, descriptions, image sizes and a lean app list so pages load quickly.' },
      { title: 'Launch checks and handover', text: 'A final checklist and a walkthrough so you know how to run the store.' },
    ],
    stepsHeading: 'How a Shopify project runs',
    steps: [
      '**Plan.** We agree on products, markets, payment and shipping needs and the look you want.',
      '**Build.** I configure the store, load products and set up the pages and policies.',
      '**Test.** We run test orders and check mobile, speed and checkout.',
      '**Launch and hand over.** The store goes live, and I show you how to manage it.',
    ],
    faqs: [
      { q: 'How long does Shopify store setup take?', a: 'It depends on how many products you have, what customisation you need and how quickly content arrives. I give a realistic timeline after we talk.' },
      { q: 'Do I need my products and photos ready first?', a: 'It helps a lot. Clear photos and product details are the biggest factor in how fast a store can launch, and I can guide you on what to prepare.' },
      { q: 'Can you move my existing store to Shopify?', a: 'I can discuss moving products and data from another platform. The effort depends on how much data you have and how it is structured.' },
      { q: 'Do you design custom Shopify themes?', a: 'I focus on setup, customisation within themes, integrations and automation. For a fully custom storefront I build with Next.js, as I did for MA Fabrics.' },
    ],
    cta: {
      heading: 'Ready to launch your store?',
      text: 'Tell me what you sell and where you sell it, and I will outline the setup and a timeline.',
    },
    related: ['services/shopify-automation', 'services/ecommerce-website-development-uae', 'services/react-nextjs-development'],
    blogSlugs: ['how-to-automate-shopify-store-with-ai', 'how-much-does-a-website-cost-in-sharjah'],
  },
]
