// Worldwide service pages (AI, automation, Next.js, portfolio sites). Same fact policy as services.js:
// only real projects/skills from src/data/content.js; no invented clients, results or prices.
const areaWorldwide = 'Worldwide'

export const GLOBAL_SERVICE_PAGES = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'ai-automation-services',
    serviceName: 'AI Automation Services',
    nav: 'AI Automation Services',
    blurb: 'Replace repetitive manual work with reliable AI-driven pipelines.',
    metaTitle: 'AI Automation Services for Business | Usman Ghazanfar',
    metaDescription:
      'AI automation services that remove repetitive work: lead handling, support triage, listings and reporting. Built with Python, n8n and LangChain.',
    areaServed: areaWorldwide,
    eyebrow: 'AI automation',
    h1: 'AI Automation Services That Take Repetitive Work Off Your Team',
    lead:
      'Every business has tasks that eat hours but add little value: copying data between tools, sorting enquiries, writing the same product descriptions, chasing updates. My AI automation services replace that routine work with reliable pipelines, so your team spends its time on decisions and customers.',
    sections: [
      {
        h2: 'What AI automation actually means',
        paragraphs: [
          `Automation and AI are not the same thing, and the best solutions combine both. Classic automation follows fixed rules: when a form is submitted, add a row to a spreadsheet and send a message. AI adds a step that needs judgement: read the message, decide what it is about, summarise it or draft a reply. A typical pipeline has a trigger, one or more AI steps and an action at the end.`,
          `The skill is knowing where AI belongs. Where the logic is simple, I use plain rules because they are cheaper, faster and predictable. Where the input is messy text, images or documents, I add an AI step. And where a mistake would be costly, such as sending a refund or publishing a price, I keep a person in the loop to approve the action.`,
        ],
      },
      {
        h2: 'Where automation pays off first',
        paragraphs: [
          `The best first project is one repetitive process that happens often and follows a recognisable pattern. These are the areas where businesses usually see the quickest benefit.`,
        ],
        bullets: [
          'Handling new enquiries: capturing them, categorising them and routing them to the right person.',
          'Triage of customer support messages and drafting suggested replies for a human to approve.',
          'Writing and updating product listings, titles and descriptions at scale.',
          'Producing regular reports from several tools without copying numbers by hand.',
          'Sending order, stock and status notifications to the people who need them.',
          'Moving data between systems that do not talk to each other.',
        ],
      },
      {
        h2: 'Built on real automation projects',
        paragraphs: [
          `I have built an AI-powered Shopify management system and an AI E-Commerce Store Manager that uses LangChain and LangGraph to coordinate specialised agents for product research, SEO, listing generation, customer support, analytics and store management. Both exist to reduce manual work for store owners, and the same thinking applies to any business with repetitive digital tasks.`,
          `My toolkit includes Python for custom logic, n8n for connecting apps and API integrations for systems that expose them. I choose the simplest tool that solves the problem rather than the most fashionable one.`,
        ],
      },
      {
        h2: 'Doing automation safely and reliably',
        paragraphs: [
          `An automation nobody trusts is worse than none. Every workflow I build includes error alerts so failures do not pass silently, logs so you can see what happened, retries for temporary problems and clear documentation. Access keys are stored securely, only the data a step truly needs is sent to an AI service, and outputs that matter are reviewed before they reach customers. I do not promise that AI output is always correct, which is exactly why those checks exist.`,
        ],
      },
    ],
    servicesHeading: 'What is included in an automation project',
    services: [
      { title: 'Process audit', text: 'We pick the process worth automating first and measure how much time it takes today.' },
      { title: 'Workflow design and build', text: 'A clear map of triggers, steps and outputs, then a working pipeline built to match it.' },
      { title: 'AI steps', text: 'Classification, summarising, extraction and drafting added where judgement is needed.' },
      { title: 'Tool and API integration', text: 'Your forms, spreadsheets, store, inbox and messaging apps connected into one flow.' },
      { title: 'Monitoring and error handling', text: 'Alerts, logs and retries so problems are visible and fixed quickly.' },
      { title: 'Documentation and handover', text: 'Plain-language notes so your team understands what runs, when and why.' },
    ],
    stepsHeading: 'How an automation project runs',
    steps: [
      '**Choose the process.** We pick one repetitive task with a clear start and finish.',
      '**Map it.** I write down every step, decision and exception before building anything.',
      '**Build a pilot.** A first version runs on real examples with a person approving important outputs.',
      '**Measure and expand.** Once it proves itself, we remove the manual checks that are no longer needed and move to the next process.',
    ],
    faqs: [
      { q: 'What kinds of work can be automated?', a: 'Anything repetitive that follows a pattern: moving data between tools, sorting and answering common enquiries, producing listings or reports and sending notifications. If a person does it the same way every week, it is a good candidate.' },
      { q: 'Do I need to change the software I use?', a: 'Usually not. Most modern tools offer APIs or webhooks that automation can connect to. If a tool has no way to connect, I will tell you early and suggest alternatives.' },
      { q: 'Is it safe to use AI with customer data?', a: 'It can be, if it is designed carefully. I send only the information a step needs, keep keys secure and discuss with you which data should never leave your systems.' },
      { q: 'How long does a first automation take?', a: 'A single focused workflow can often be built quickly, while larger pipelines take longer. I give you an estimate after we map the process.' },
    ],
    cta: {
      heading: 'Tell me which task eats your team’s time',
      text: 'Describe the process you would most like to stop doing by hand and I will tell you whether it can be automated, how and roughly what it involves.',
    },
    related: ['ai-agent-development', 'n8n-workflow-automation', 'shopify-automation-services'],
    blogSlugs: ['ai-agents-vs-chatbots-vs-workflows', 'n8n-vs-zapier-vs-make'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'ai-agent-development',
    serviceName: 'AI Agent Development',
    nav: 'AI Agent Development',
    blurb: 'Autonomous agents built with LangChain and LangGraph, with guardrails.',
    metaTitle: 'AI Agent Development Services | Usman Ghazanfar',
    metaDescription:
      'AI agent development with LangChain and LangGraph for research, customer support, analytics and store management. Reliable, testable and controlled.',
    areaServed: areaWorldwide,
    eyebrow: 'AI agents',
    h1: 'AI Agent Development with LangChain and LangGraph',
    lead:
      'An AI agent is software that can decide what to do next, use tools and finish a multi-step task on its own. I design and build AI agent systems with LangChain and LangGraph for research, support, analytics and store management, with guardrails so they stay useful and under your control.',
    sections: [
      {
        h2: 'Chatbot, workflow or agent: choosing the right one',
        paragraphs: [
          `The word agent is used loosely, so it helps to separate three things. A chatbot answers questions in conversation. A workflow follows a fixed sequence of steps, sometimes with an AI step inside. An agent chooses its own sequence of actions, calling tools and deciding what to do after each result.`,
          `Agents are powerful but less predictable, so they are not always the right answer. Many business problems are better solved with a fixed workflow that includes an AI step. I will tell you honestly which approach suits your problem, because a simpler design is cheaper to run and easier to trust.`,
        ],
      },
      {
        h2: 'How I build agents',
        paragraphs: [
          `I use LangGraph to define the agent as an explicit graph of steps, with shared state, branching, retries and clear stopping points. That makes behaviour easier to test and debug than a single long prompt. LangChain provides the integrations for language models and for the tools an agent can call, such as web search, databases and your own APIs.`,
          `For larger systems I split the work between specialised agents, each with a narrow job and a limited set of tools, coordinated by an orchestrator. Narrow agents make fewer mistakes and are easier to improve. Actions with real consequences, such as publishing content or changing prices, can be set to wait for human approval.`,
        ],
      },
      {
        h2: 'A real example: a multi-agent store manager',
        paragraphs: [
          `My AI E-Commerce Store Manager uses LangGraph and LangChain to orchestrate specialised agents for product research, SEO, listing generation, customer support, analytics and Shopify store management. The code is public on [GitHub](https://github.com/usmanghazanfar001-creator/AI-E-Commerce-Store-Manager), and you can read the problem and solution in the [portfolio case studies](/portfolio).`,
        ],
      },
      {
        h2: 'Keeping agents reliable',
        paragraphs: [
          `Reliability comes from design rather than hope. I give each agent only the tools it needs, record every step so behaviour can be reviewed, set limits on cost and number of actions, and build test cases from real examples so changes can be checked before they ship. No agent is perfect, so the system should fail safely and ask a person when it is unsure.`,
        ],
      },
      {
        h2: 'What agents can do for a business',
        paragraphs: [
          `A research agent can search several sources, compare what it finds and return a short briefing with links. A support agent can read an incoming question, look up the relevant policy or order information and prepare a reply for a person to approve. An analytics agent can pull figures from several tools and explain in plain language what changed. In each case the value is the same: the agent handles the gathering and first draft, and a person keeps the final say.`,
        ],
      },
    ],
    servicesHeading: 'What is included in an agent project',
    services: [
      { title: 'Use-case scoping', text: 'We define the job, the success measure and what the agent must never do.' },
      { title: 'Agent architecture', text: 'A LangGraph design with clear states, branches and stopping conditions.' },
      { title: 'Tool and API integration', text: 'Connections to search, databases, stores and internal systems the agent can use.' },
      { title: 'Research and support agents', text: 'Agents that gather information, summarise it or prepare answers for review.' },
      { title: 'Evaluation and guardrails', text: 'Test cases, step logging, spending limits and human approval for risky actions.' },
      { title: 'Deployment and handover', text: 'The agent running in your environment, with documentation for your team.' },
    ],
    stepsHeading: 'How an agent project runs',
    steps: [
      '**Define the job.** One clear task, one success measure and a list of actions that need approval.',
      '**Prototype.** A first agent is built with the minimum tools it needs.',
      '**Test with real cases.** We run it on real examples, fix failures and tighten the guardrails.',
      '**Deploy and monitor.** The agent goes live with logging so you can see what it does.',
    ],
    faqs: [
      { q: 'What is the difference between an AI agent and a chatbot?', a: 'A chatbot mainly converses. An agent can take actions: it calls tools, looks things up, works through several steps and decides what to do next to finish a task.' },
      { q: 'Which AI models do you use?', a: 'I choose the model for each task based on quality, cost, speed and your privacy requirements, rather than tying you to a single provider.' },
      { q: 'Can an agent act without my approval?', a: 'Only where you allow it. Low-risk steps can run automatically, while actions such as publishing, sending or changing prices can wait for a human to approve.' },
      { q: 'How do you stop agents from making mistakes?', a: 'Narrow roles, limited tools, test cases, logging and approval steps all reduce mistakes. No honest developer can promise zero errors, so the system is designed to fail safely.' },
    ],
    cta: {
      heading: 'Have a multi-step task an agent could handle?',
      text: 'Tell me what the task involves and what a good result looks like, and I will advise whether an agent, a workflow or something simpler is the right tool.',
    },
    related: ['ai-automation-services', 'n8n-workflow-automation', 'shopify-automation-services'],
    blogSlugs: ['ai-agents-vs-chatbots-vs-workflows'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'n8n-workflow-automation',
    serviceName: 'n8n Workflow Automation',
    nav: 'n8n Workflow Automation',
    blurb: 'Connect your apps and AI models with robust, documented n8n workflows.',
    metaTitle: 'n8n Workflow Automation Expert | Usman Ghazanfar',
    metaDescription:
      'n8n workflow automation for business: connect apps, APIs and AI models, handle leads, orders and reports automatically. Reliable and well documented.',
    areaServed: areaWorldwide,
    eyebrow: 'n8n workflows',
    h1: 'n8n Workflow Automation Expert for Business Processes',
    lead:
      'n8n is a flexible workflow automation tool that connects your apps, databases and AI models without locking you into a single vendor. I build n8n workflows that move data, trigger actions and handle routine work automatically, from lead capture to order updates.',
    sections: [
      {
        h2: 'Why businesses choose n8n',
        paragraphs: [
          `n8n gives you a visual builder for workflows, a large library of integrations and the freedom to add custom code when a ready-made connector is not enough. It supports webhooks, scheduled runs, conditional logic and AI steps, so one tool can cover everything from a simple notification to a multi-stage process.`,
          `It can also be run on your own server or used as a hosted service, which matters if you want more control over where your data lives. Plans and pricing change over time, so check the current options before deciding. I help you choose the setup that fits your needs and budget.`,
        ],
      },
      {
        h2: 'Workflows I typically build',
        paragraphs: [
          `Most n8n projects fall into a handful of patterns. These are common starting points that can be combined as your needs grow.`,
        ],
        bullets: [
          'Website or form submissions sent to a spreadsheet or CRM, with an instant notification to your team.',
          'New order alerts sent by email or messaging app, with the details formatted for the person who ships them.',
          'Scheduled reports that collect numbers from several tools and deliver them in one message.',
          'Product or stock information synchronised between systems.',
          'AI steps that classify, summarise or draft text before a person reviews it.',
          'API integrations that connect tools with no ready-made connector.',
        ],
      },
      {
        h2: 'Building workflows that do not break',
        paragraphs: [
          `A workflow that works in a demo can still fail in real life when an app is slow, a field is empty or an API changes. I design for those cases. Workflows include error handling and alerts, retries for temporary failures, sensible names and notes so they are easy to read, and credentials stored securely instead of pasted into steps. I test with realistic sample data before anything touches live systems, and I export copies so a workflow can be restored.`,
        ],
      },
      {
        h2: 'n8n or another automation tool?',
        paragraphs: [
          `Tools such as Zapier or Make are perfectly good for simple, low-volume tasks, and I will say so if one of them is enough for you. n8n becomes attractive when you need complex logic, custom code, more control over costs at higher volumes or the option to host it yourself. The right choice depends on your process, not on the brand.`,
        ],
      },
      {
        h2: 'A good first n8n workflow',
        paragraphs: [
          `If you are new to automation, start with something small, visible and low risk, such as sending every new website enquiry to a spreadsheet and notifying you instantly. It saves time from day one, shows you how the pieces fit and creates a foundation to build on. Once that runs smoothly, adding an AI step to categorise enquiries or draft a first reply is a natural next move.`,
        ],
      },
    ],
    servicesHeading: 'What is included in an n8n project',
    services: [
      { title: 'Workflow design', text: 'A clear map of triggers, conditions and actions before anything is built.' },
      { title: 'Integrations and webhooks', text: 'Your apps, databases and APIs connected, including tools without a ready-made node.' },
      { title: 'AI steps', text: 'Language model steps for classifying, summarising, extracting and drafting.' },
      { title: 'Setup advice', text: 'Guidance on hosted versus self-hosted n8n and how to secure it.' },
      { title: 'Error handling and monitoring', text: 'Alerts, retries and logs so you know when something needs attention.' },
      { title: 'Documentation and training', text: 'Notes and a walkthrough so your team can understand and adjust workflows.' },
    ],
    stepsHeading: 'How an n8n project runs',
    steps: [
      '**Discovery.** We list the tools involved and the process you want automated.',
      '**Design.** I sketch the workflow and agree on edge cases and who gets alerts.',
      '**Build and test.** The workflow is built and tested with realistic data.',
      '**Launch and support.** It goes live with monitoring and clear documentation.',
    ],
    faqs: [
      { q: 'Which apps can n8n connect to?', a: 'n8n has a large library of ready-made connections, and it can talk to almost any tool with an API through its HTTP and webhook nodes.' },
      { q: 'Should I self-host n8n or use the cloud version?', a: 'Self-hosting gives you more control over data and costs but needs someone to maintain it. The hosted version is simpler. I will help you weigh the two for your situation.' },
      { q: 'Can n8n use AI models?', a: 'Yes. Workflows can call language models to classify, summarise, extract information or draft text, usually with a human reviewing important results.' },
      { q: 'Can you fix or improve my existing n8n workflows?', a: 'Yes. I can review what you have, fix errors, add error handling and tidy the structure so it is easier to maintain.' },
    ],
    cta: {
      heading: 'Ready to connect your tools and stop copying data by hand?',
      text: 'Tell me which apps you use and what you want to happen between them, and I will outline a workflow and what it would take to build it.',
    },
    related: ['ai-automation-services', 'shopify-automation-services', 'ai-agent-development'],
    blogSlugs: ['n8n-vs-zapier-vs-make', 'ai-agents-vs-chatbots-vs-workflows'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'shopify-automation-services',
    serviceName: 'Shopify Automation Services',
    nav: 'Shopify Automation Services',
    blurb: 'Automate listings, SEO, support and reports for your Shopify store.',
    metaTitle: 'Shopify Automation Services | Usman Ghazanfar',
    metaDescription:
      'Shopify automation services: AI-assisted listings and SEO, support triage, notifications and reports that cut manual store work.',
    areaServed: areaWorldwide,
    eyebrow: 'Shopify automation',
    h1: 'Shopify Automation Services for Busier Stores and Fewer Manual Tasks',
    lead:
      'Running a Shopify store means a long list of repetitive jobs: writing listings, updating products, answering the same questions, checking reports. I build Shopify automation, including AI-powered tools, that handles that routine work so you can focus on growth.',
    sections: [
      {
        h2: 'Where Shopify owners lose the most time',
        paragraphs: [
          `Most store owners did not start a business to copy product details between spreadsheets. The hours disappear into product research, writing titles and descriptions, optimising for search, replying to customers, watching analytics and keeping orders and stock up to date. Each task is small, but together they decide how much time is left for marketing and customers.`,
        ],
        bullets: [
          'Researching products and collecting supplier information.',
          'Writing and updating listing titles, descriptions and meta tags.',
          'Answering repeated customer questions about shipping, sizing and returns.',
          'Compiling sales and traffic reports from different places.',
          'Alerting the right person when orders or stock need attention.',
        ],
      },
      {
        h2: 'Automation I have built for Shopify',
        paragraphs: [
          `I designed an AI-powered Shopify management system to automate repetitive e-commerce operations, reduce manual work and help store owners manage their businesses more efficiently. I also built an AI E-Commerce Store Manager that uses LangChain and LangGraph to coordinate specialised agents for product research, SEO, listing generation, customer support, analytics and store management.`,
          `These projects show the approach I bring to client stores: break the work into small tasks, automate the safe ones fully and put a person in charge of the ones that matter.`,
        ],
      },
      {
        h2: 'How automation fits with your store',
        paragraphs: [
          `Shopify exposes APIs and webhooks that let outside tools read orders and products and respond to events. Automation connects to your store through those, using the minimum permissions it needs. Depending on the task, that can mean a custom script, an n8n workflow or an AI agent. I recommend the simplest approach, and I keep approval steps for sensitive changes such as pricing or publishing.`,
        ],
      },
      {
        h2: 'Automation, AI and SEO',
        paragraphs: [
          `AI can draft product titles, descriptions and meta tags quickly and consistently, which is a real advantage across a large catalogue. But search engines reward helpful, accurate content, not mass-produced text. So I use AI to produce a good first draft from your real product data, then build in review so the final copy is accurate and distinctive.`,
        ],
      },
      {
        h2: 'Start small with one automation',
        paragraphs: [
          `You do not need to automate your whole store at once. I usually suggest picking the single task that costs the most time, such as drafting listing copy or sending order alerts, and automating that first. You see the result quickly, you learn how much to trust the system and you decide what comes next with real evidence instead of guesses.`,
        ],
      },
    ],
    servicesHeading: 'What is included in a Shopify automation project',
    services: [
      { title: 'Listing and SEO automation', text: 'Drafts for titles, descriptions and meta data produced from your product data and reviewed before publishing.' },
      { title: 'Support automation', text: 'Common questions answered or drafted for approval, with tricky cases passed to you.' },
      { title: 'Order and stock notifications', text: 'The right people alerted by email or messaging app when something needs action.' },
      { title: 'Reporting', text: 'Sales and performance numbers collected into one regular summary.' },
      { title: 'Custom integrations', text: 'Shopify connected to spreadsheets, suppliers and other tools you rely on.' },
      { title: 'Training and handover', text: 'Documentation and a walkthrough so you know exactly what runs automatically.' },
    ],
    stepsHeading: 'How a Shopify automation project runs',
    steps: [
      '**Review.** We list the tasks that take the most time in your store.',
      '**Choose the first automation.** We start with a safe, high-effort task.',
      '**Build with approval steps.** Changes go to you for review before they go live.',
      '**Expand.** As trust grows, we automate more and remove checks that are no longer needed.',
    ],
    faqs: [
      { q: 'Will this work with my Shopify theme?', a: 'Most automation runs behind the scenes through Shopify’s APIs, so it does not depend on your theme. Anything that changes what visitors see is discussed with you first.' },
      { q: 'Is it safe to give an automation access to my store?', a: 'Access is limited to the permissions a task needs, credentials are kept secure, and important actions can wait for your approval.' },
      { q: 'Will AI-written product descriptions hurt my SEO?', a: 'Not if they are accurate, useful and reviewed. The risk is publishing generic text in bulk, which is why I draft from real product data and keep a review step.' },
      { q: 'Do you design Shopify themes?', a: 'My focus is automation and integrations rather than visual theme design. For a fully custom storefront I build with Next.js, as in the MA Fabrics project in my portfolio.' },
    ],
    cta: {
      heading: 'Want your store to run with less manual work?',
      text: 'Send me the tasks that take most of your week and I will suggest what to automate first.',
    },
    related: ['ai-automation-services', 'ecommerce-website-development-uae', 'n8n-workflow-automation'],
    blogSlugs: ['how-to-automate-shopify-store-with-ai'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'nextjs-web-development',
    serviceName: 'Next.js Web Development',
    nav: 'Next.js Web Development',
    blurb: 'Fast, SEO-friendly websites, storefronts and web apps built with Next.js.',
    metaTitle: 'Next.js Web Development Services | Usman Ghazanfar',
    metaDescription:
      'Next.js web development for fast, SEO-friendly websites, e-commerce storefronts and web apps. Clean code, strong Core Web Vitals, mobile-first.',
    areaServed: areaWorldwide,
    eyebrow: 'Next.js development',
    h1: 'Next.js Web Development for Fast, SEO-Friendly Websites and Apps',
    lead:
      'Next.js is the React framework behind many of the fastest, most search-friendly sites on the web. I build Next.js websites, storefronts and web apps that load quickly, rank well and stay easy to maintain as your business grows.',
    sections: [
      {
        h2: 'Why Next.js suits business websites',
        paragraphs: [
          `Plain React apps send a mostly empty page to the browser and build the content with JavaScript, which can slow the first view and make life harder for search engines. Next.js can render pages on the server or build them ahead of time, so visitors and crawlers receive complete HTML immediately. Add built-in image optimisation, routing and the whole React ecosystem and you get a strong base for sites that need speed, search visibility and rich interactivity at once.`,
          `It is not the answer to everything. Next.js is more developer-oriented than a content platform such as WordPress, so if non-technical staff will edit pages daily, I will suggest either WordPress or a Next.js site connected to a content management system.`,
        ],
      },
      {
        h2: 'Projects I have built with Next.js',
        paragraphs: [
          `MA Fabrics is a premium online storefront for a textile brand, with a shop, curated collections, a gallery, fabric videos, customer accounts, a cart, order tracking and a WhatsApp button for personalised advice. WeatherIQ is a responsive weather app powered by WeatherAPI.com, offering search by city, region or postal code, hourly and daily forecasts, air quality information, light and dark themes and temperature units. Both are described in more detail in my [portfolio and case studies](/portfolio).`,
        ],
      },
      {
        h2: 'SEO and performance built in',
        paragraphs: [
          `Technical SEO is part of the build, not a separate project. That means per-page titles and descriptions, structured data, a sitemap, clean URLs and canonical tags, plus attention to Core Web Vitals: correctly sized, modern-format images, minimal JavaScript on first load and stable layouts that do not jump around as the page loads. I also build accessibly, with semantic HTML, keyboard support and descriptive alt text.`,
        ],
      },
      {
        h2: 'When I would recommend something else',
        paragraphs: [
          `A very small brochure site may not need a framework at all, and a site where marketing staff publish constantly may be happier in WordPress. I will recommend the tool that fits your team and budget, even when that is not Next.js.`,
        ],
      },
      {
        h2: 'Keeping a Next.js project maintainable',
        paragraphs: [
          `A fast site is only useful if it can be changed safely later. I organise code into small reusable components, keep content and settings separate from layout, use clear names and leave notes where decisions are not obvious. The result is a site that your next developer, or you, can understand and extend without fear of breaking something unrelated.`,
        ],
      },
    ],
    servicesHeading: 'What I build with Next.js',
    services: [
      { title: 'Business and marketing sites', text: 'Fast, conversion-focused sites with the SEO foundations in place from launch.' },
      { title: 'E-commerce storefronts', text: 'Catalogues, carts, accounts and order tracking built around your products.' },
      { title: 'Web apps and dashboards', text: 'Interactive tools and SaaS-style products with clean, maintainable code.' },
      { title: 'Content management', text: 'A connected content system so your team can edit text and images without code.' },
      { title: 'API and third-party integrations', text: 'Payment, weather, maps, CRMs and other services connected through their APIs.' },
      { title: 'Performance and SEO audits', text: 'A review of an existing Next.js or React site with prioritised fixes.' },
    ],
    stepsHeading: 'How a Next.js project runs',
    steps: [
      '**Plan.** We agree on goals, pages, features and the content you need to provide.',
      '**Design.** I design the key layouts mobile-first and you approve them.',
      '**Build.** The site is built with a live preview so you can review progress.',
      '**Launch.** I deploy it, connect your domain and set up analytics and Search Console.',
    ],
    faqs: [
      { q: 'Is Next.js better than WordPress?', a: 'Neither is better in every case. Next.js excels at speed, custom interfaces and web apps. WordPress excels at easy editing by non-technical staff. I recommend whichever suits your project.' },
      { q: 'Can my team edit the content ourselves?', a: 'Yes, if we connect a content management system or keep content in an easy-to-edit format. Tell me who will update the site and how often.' },
      { q: 'Do you build back ends and APIs as well?', a: 'Yes. I work in JavaScript and Python and have built full-stack applications, including a Flask and SQLite web app, as well as PHP-based projects.' },
      { q: 'Where will the site be hosted?', a: 'Next.js sites run well on modern hosting platforms such as Vercel. I will recommend a setup based on your traffic, region and budget.' },
    ],
    cta: {
      heading: 'Need a fast site or web app?',
      text: 'Describe what you want to build and who it is for, and I will reply with a plan and a quote.',
    },
    related: ['portfolio-website-design', 'ecommerce-website-development-uae', 'website-redesign-uae'],
    blogSlugs: ['nextjs-vs-wordpress-for-business-websites'],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'portfolio-website-design',
    serviceName: 'Portfolio Website Design',
    nav: 'Portfolio Website Design',
    blurb: 'Modern, animated portfolio sites with case studies and personal-brand SEO.',
    metaTitle: 'Portfolio Website Design Services | Usman Ghazanfar',
    metaDescription:
      'Portfolio website design for developers, designers and freelancers: animated, mobile-first sites with case studies and SEO so clients can find you.',
    areaServed: areaWorldwide,
    eyebrow: 'Portfolio websites',
    h1: 'Portfolio Website Design That Makes a Strong First Impression',
    lead:
      'Your portfolio website is often the first thing a client, recruiter or employer sees. I design and build modern portfolio websites with animated interfaces, clear case studies and the SEO foundations that help people find you by name and by skill.',
    sections: [
      {
        h2: 'What a portfolio website has to do',
        paragraphs: [
          `A visitor decides within seconds whether you look credible. A strong portfolio says who you are and what you do almost immediately, shows your best work with enough context to understand it, and makes it effortless to get in touch. It also has to load fast on a phone, because many first visits come from a link opened on mobile.`,
          `The common mistake is treating a portfolio as a gallery. Work without context is just screenshots. The sites that win clients explain the problem, the solution and the result, in plain language, for each project.`,
        ],
      },
      {
        h2: 'What goes into a portfolio site',
        paragraphs: [
          `The exact sections depend on your field, but most portfolios share the same building blocks.`,
        ],
        bullets: [
          'A hero that states who you are and what you do.',
          'An about section with the experience and skills that matter to your audience.',
          'Services, so visitors know what they can hire you for.',
          'Project case studies that follow a problem, solution and outcome structure.',
          'A contact section with several easy ways to reach you.',
          'Optional extras such as a blog, testimonials and a downloadable CV.',
        ],
      },
      {
        h2: 'A live example: the site you are reading',
        paragraphs: [
          `This website is itself a portfolio I designed and built with React, Vite, Tailwind CSS and Motion. It has an animated, mobile-first interface, project case studies that open in detail, structured data for search engines and fast-loading pages. If you like what you see here, I can build something similar and tailored to you.`,
        ],
      },
      {
        h2: 'SEO for your name and your skills',
        paragraphs: [
          `People often search for a person by name, and for a skill plus a location or specialty. I set up page titles, descriptions and Person structured data so search engines understand who you are, and I structure your content so it can match searches for the work you want. Keeping your LinkedIn, GitHub and other profiles consistent and linked to your site strengthens the picture, and a custom domain in your own name is the best long-term investment.`,
        ],
      },
      {
        h2: 'Case studies that persuade',
        paragraphs: [
          `The most convincing portfolio pages answer three questions quickly: what was the problem, what did you do and what changed as a result. Even a short case study with those three parts beats a long description of technologies. I help you choose which projects to feature, write them in plain language and present them with clear headings so busy visitors can scan them in under a minute.`,
        ],
      },
    ],
    servicesHeading: 'What is included in a portfolio website',
    services: [
      { title: 'Custom design', text: 'A look that reflects your personality and field instead of a generic template.' },
      { title: 'Animated, mobile-first build', text: 'Smooth, tasteful motion that respects reduced-motion settings and works on every screen.' },
      { title: 'Case study layout', text: 'Each project presented as a problem, solution and outcome.' },
      { title: 'Personal-brand SEO', text: 'Titles, descriptions, structured data and a sitemap so you can be found.' },
      { title: 'Contact and lead capture', text: 'Email, messaging and form options placed where visitors are ready to reach out.' },
      { title: 'Hosting and domain setup', text: 'Deployment, your own domain and analytics configured for you.' },
    ],
    stepsHeading: 'How a portfolio project runs',
    steps: [
      '**Gather.** You share your work, background and goals, and we choose the projects to feature.',
      '**Design.** I design the layout and style and you approve it.',
      '**Build.** The site is developed and tuned for speed and search.',
      '**Launch.** I deploy it, connect your domain and show you how to update it.',
    ],
    faqs: [
      { q: 'Who is a portfolio website for?', a: 'Developers, designers, freelancers, consultants, students and small agencies: anyone who wants to show their work and be found by clients or employers.' },
      { q: 'How long does a portfolio website take?', a: 'Most are quicker than a full business website, but the time depends on the number of projects and how soon you can supply content. I give you a timeline after we talk.' },
      { q: 'Can I update the site myself?', a: 'Yes. Content can be kept in a simple, easy-to-edit format, or connected to a content system if you prefer to edit in a dashboard.' },
      { q: 'Do I need my own domain?', a: 'It is strongly recommended. A domain in your own name looks more professional and is easier to remember and rank.' },
    ],
    cta: {
      heading: 'Ready for a portfolio that works as hard as you do?',
      text: 'Tell me about your work and who you want to reach, and I will propose a design, a timeline and a quote.',
    },
    related: ['nextjs-web-development', 'web-design-sharjah', 'website-redesign-uae'],
    blogSlugs: ['nextjs-vs-wordpress-for-business-websites'],
  },
]
