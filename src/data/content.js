// All copy and data here is sourced directly from the original portfolio content.
// Nothing invented: numbers below are literal counts of the real lists in this file.

export const PROFILE = {
  name: 'Usman Ghazanfar',
  firstName: 'Usman',
  lastName: 'Ghazanfar',
  title: 'AI Engineer & Software Enthusiast',
  location: 'Faisalabad, Pakistan',
  siteUrl: 'https://usmanghazanfar.vercel.app',
  tagline:
    'I build AI-powered systems and websites — combining automation, machine learning and modern web engineering to help brands scale.',
  email: 'Usmanghazanfar100@gmail.com',
  phone: '+92 305 9612867',
  whatsapp: '+92 305 9612867',
  whatsappLink: 'https://wa.me/923059612867',
  linkedin: 'https://www.linkedin.com/in/usman-ghazanfar',
  linkedinLabel: 'linkedin.com/in/Usman-ghazanfar',
  github: 'https://github.com/usmanghazanfar001-creator',
  githubLabel: 'github.com/usmanghazanfar001-creator',
  fiverr: 'https://www.fiverr.com/afidevelopers?public_mode=true',
  openToWork: true,
};

// Hero copy. The original tagline (PROFILE.tagline) is kept and used in About and the footer.
export const HERO = {
  kicker: 'AI engineering · Software development',
  headline: 'Usman Ghazanfar',
  headlineRest: 'AI Engineer & Software Enthusiast',
  support:
    'I design and build AI agents, workflow automations and modern web products, from LangChain and LangGraph multi-agent systems to Next.js storefronts, with Python, JavaScript, React and n8n.',
  badges: ['AI Agents', 'LangGraph', 'Next.js', 'React', 'Python', 'n8n'],
};

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export const ABOUT = {
  intro: [
    "I'm Usman Ghazanfar, an AI & Web Developer based in Faisalabad, Pakistan. I build things people actually use — from AI agents that run parts of a Shopify store to storefronts, listing sites and web apps — using Python, JavaScript, React, Next.js and n8n.",
    "My work spans three areas. In AI & automation, I've built a LangChain and LangGraph multi-agent store manager and a Shopify management system that reduce repetitive manual work. In web products, I've shipped the MA Fabrics e-commerce storefront in Next.js, a real estate listing site with SEO built in from launch, the WeatherIQ forecast app and Lafzaly, an AI caption and subtitle generator for Roman Urdu creators. Underneath it all are solid engineering foundations: Descretiq, a Flask and SQLite learning app.",
    "I'm studying for an Associate Degree in Artificial Intelligence at Punjab Group of Colleges (expected 2027) and working at SKILL SIDER, supporting SEO, online marketing and web development — so I build with both engineering and growth in mind. I'm open to work: if you need an AI agent, a workflow automation or a fast, SEO-ready website, let's talk.",
  ],
  highlights: [
    { icon: 'MapPin', text: 'Based in Faisalabad, Pakistan' },
    { icon: 'GraduationCap', text: 'Associate Degree in Artificial Intelligence, expected 2027' },
    { icon: 'Briefcase', text: 'Working at SKILL SIDER' },
    { icon: 'Handshake', text: 'Open to freelance and work opportunities' },
  ],
  interests: [
    'Artificial Intelligence',
    'Digital Marketing',
    'SEO & Content Strategy',
    'Web Design',
    'Technology Trends',
    'Workflow Automation',
  ],
};

// Stats are literal counts derived from the real data below — nothing estimated.
export const STATS = [
  { label: 'Projects Completed', value: 8, suffix: '' },
  { label: 'Core Technologies', value: 16, suffix: '+' },
  { label: 'Services Offered', value: 6, suffix: '' },
];

export const SKILL_GROUPS = [
  {
    key: 'ai',
    title: 'AI & Machine Learning',
    description: 'Intelligent systems, models and the maths behind them.',
    icon: 'BrainCircuit',
    items: ['Artificial Intelligence', 'Machine Learning', 'Search Algorithms', 'Data Analysis'],
  },
  {
    key: 'agents',
    title: 'AI Agents & Automation',
    description: 'Agents and workflows that take repetitive work off people.',
    icon: 'Workflow',
    items: ['AI Agents', 'LangChain', 'LangGraph', 'AI Automation', 'Workflow Automation', 'n8n'],
  },
  {
    key: 'frontend',
    title: 'Frontend Development',
    description: 'Fast, responsive, accessible interfaces.',
    icon: 'LayoutTemplate',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    key: 'backend',
    title: 'Backend Development',
    description: 'Server-side logic, data and integrations.',
    icon: 'Server',
    items: ['Flask', 'SQLite', 'PHP', 'API Integration'],
  },
  {
    key: 'languages',
    title: 'Programming Languages',
    description: 'Core languages behind everything I build.',
    icon: 'Code2',
    items: ['Python', 'C++', 'JavaScript'],
  },
  {
    key: 'tools',
    title: 'Tools & Technologies',
    description: 'Platforms I ship and operate with.',
    icon: 'Wrench',
    items: ['Shopify', 'GitHub', 'Vercel', 'Google Search Console', 'Microsoft Office'],
  },
];

export const SERVICES = [
  {
    key: 'ai-automation',
    title: 'AI Automation',
    icon: 'Sparkles',
    description:
      'Automating repetitive business processes with AI-driven pipelines, so teams spend less time on manual work.',
    points: ['Process automation', 'AI-driven pipelines', 'Reduced manual work'],
  },
  {
    key: 'ai-agents',
    title: 'AI Agents',
    icon: 'BrainCircuit',
    description:
      'Designing and deploying autonomous AI agents built on LangChain and LangGraph for research, support and analytics.',
    points: ['LangChain / LangGraph', 'Task orchestration', 'Autonomous workflows'],
  },
  {
    key: 'web-development',
    title: 'Web Development',
    icon: 'Code2',
    description:
      'Building fast, responsive websites and web apps with React, Next.js and modern front-end engineering.',
    points: ['React & Next.js', 'Responsive UI', 'Clean, scalable code'],
  },
  {
    key: 'portfolio-websites',
    title: 'Modern Portfolio Websites',
    icon: 'LayoutTemplate',
    description:
      'Premium, animated portfolio sites that present your work with a professional, memorable first impression.',
    points: ['Animated interfaces', 'Personal branding', 'Mobile-first design'],
  },
  {
    key: 'business-websites',
    title: 'Business Websites',
    icon: 'Building2',
    description:
      'Conversion-focused business and listing websites — from real estate to SaaS — built with SEO in mind.',
    points: ['Conversion-focused UI', 'SEO best practices', 'Content strategy'],
  },
  {
    key: 'workflow-automation',
    title: 'Workflow Automation',
    icon: 'Workflow',
    description:
      'Connecting tools and platforms with n8n so store and business operations run with less manual effort.',
    points: ['n8n workflows', 'API integrations', 'Shopify automation'],
  },
];

export const PROJECTS = [
  {
    key: 'ma-fabrics',
    flow: ['Next.js storefront', 'Cart & accounts', 'Order tracking'],
    badge: 'Case — E-commerce',
    title: 'MA Fabrics – Premium Fabric Store',
    category: 'Web',
    kind: 'E-commerce',
    filters: ['Web Development', 'E-commerce'],
    featured: 6,
    tags: ['Next.js', 'E-commerce', 'UI/UX'],
    description:
      'A premium online storefront for a Lahore-based textile and suiting brand, with shop, collections, gallery and fabric videos.',
    problem:
      'A Pakistani fabric brand needed an elegant online presence where customers could browse suiting by category and color, see the fabric in motion, and get help choosing.',
    solution:
      'Designed and built a modern Next.js storefront with a shop, curated collections, a photo gallery and fabric videos, plus customer accounts, cart, order tracking and a WhatsApp button for personal fabric advice.',
    features: ['Shop & curated collections', 'Gallery and fabric videos', 'Cart, accounts & order tracking', 'WhatsApp fabric-advice contact'],
    link: 'https://ma-fabrics.vercel.app/',
    linkLabel: 'View Project',
    linkType: 'demo',
  },
  {
    key: 'real-estate',
    flow: ['Property search', 'Listing pages', 'SEO from launch'],
    badge: 'Case — Real Estate',
    title: 'Hussnain Estate Advisor – Real Estate Website',
    category: 'Web',
    kind: 'Web App',
    filters: ['Web Development'],
    featured: 3,
    tags: ['Web Development', 'SEO', 'UI/UX'],
    description:
      'A full real estate listing website featuring property search, detailed listing pages, and a clean, conversion-focused UI.',
    problem:
      'Property seekers needed a fast, clear way to search and browse real estate listings online.',
    solution:
      'Designed and developed a full real estate listing website with property search, detailed listing pages, and a clean, conversion-focused UI — applying SEO best practices to improve search visibility from launch.',
    features: ['Property search', 'Detailed listing pages', 'Conversion-focused UI', 'SEO optimized from launch'],
    link: 'https://hussnainestateadvisor.com/',
    linkLabel: 'View Project',
    linkType: 'demo',
  },
  {
    key: 'discrete-solver',
    flow: ['Logic, sets, relations', 'Flask + SQLite', 'Quizzes & PDF export', 'Admin dashboard'],
    badge: 'Case — Flask',
    title: 'Descretiq – Discrete Mathematics Calculator',
    category: 'Web',
    kind: 'Education',
    filters: ['Web Development', 'Education'],
    featured: 1,
    tags: ['Python', 'Flask', 'SQLite'],
    description:
      'A full-stack educational web application covering logic, sets, relations, functions, combinatorics and number theory.',
    problem:
      'Students needed an accessible tool to practice and verify discrete mathematics problems with instant feedback.',
    solution:
      'Built a full-stack educational web application using Python, Flask and SQLite, covering logic, sets, relations, functions, combinatorics and number theory — with quizzes, PDF export and an admin dashboard.',
    features: ['Logic, sets & relations solvers', 'Combinatorics & number theory', 'Quizzes with PDF export', 'Admin dashboard'],
    link: 'https://descretiq.online/',
    linkLabel: 'View Project',
    linkType: 'demo',
  },
  {
    key: 'lafzaly',
    flow: ['Topic or video', 'Roman Urdu AI', 'Hook, caption & hashtags', 'SRT / VTT / MP4 export'],
    badge: 'Case — AI Web App',
    title: 'Lafzaly – Roman Urdu Caption Generator',
    category: 'AI',
    kind: 'AI Web App',
    filters: ['AI & Automation', 'Web Development', 'SaaS'],
    featured: 2,
    tags: ['AI', 'Roman Urdu', 'Captions', 'Subtitles'],
    description:
      'AI-powered Roman Urdu captions and subtitles for Pakistani creators. Describe a topic or upload a video, and Lafzaly writes the hook, caption, call to action and hashtags the way your audience actually talks.',
    problem:
      'Pakistani creators need captions and subtitles that sound the way their audience really speaks, in Roman Urdu mixed with English, not stiff word-for-word translations.',
    solution:
      'Built Lafzaly, a web app that writes hooks, captions, CTAs and hashtags in natural Roman Urdu, Urdu or English from a topic, and turns an uploaded video or voice note into timestamped, editable subtitles with animated caption styles. It is tuned for Instagram, TikTok, YouTube Shorts, Facebook, LinkedIn and X.',
    features: [
      'Roman Urdu, Urdu and English output',
      'Text-to-caption and video-to-subtitle workflows',
      'Timestamped, editable subtitles with animated caption styles',
      'SRT, VTT and captioned-video export',
      'Free plan, Pro plan and a developer API',
    ],
    link: 'https://lafzaly.xyz/',
    linkLabel: 'View Project',
    linkType: 'demo',
  },
  {
    key: 'ai-development',
    flow: ['Your idea', 'Build', 'Automate', 'Optimize'],
    badge: 'Service — AI Development',
    title: 'AI Development & Automation',
    category: 'AI',
    kind: 'AI Service',
    filters: ['AI & Automation'],
    featured: 4,
    tags: ['OpenAI', 'n8n', 'AI Agents', 'Python'],
    description:
      'AI development and automation: OpenAI integration, AI chatbots and agents, n8n and workflow automation, and custom AI solutions built with Python, Node.js and the ChatGPT API.',
    problem:
      'Businesses and creators have ideas for AI features and automations but need them designed, built and connected to the tools they already use.',
    solution:
      'I design and build AI solutions end to end: OpenAI and ChatGPT API integrations, chatbots and agents, and workflow automations in n8n, Make or Zapier.',
    features: ['OpenAI integration', 'AI chatbots & agents', 'n8n and workflow automation', 'Custom AI solutions'],
    link: `${PROFILE.siteUrl}/services/ai-automation`,
    linkLabel: 'View service',
    linkType: 'service',
  },
  {
    key: 'weatheriq',
    flow: ['City or location', 'WeatherAPI.com', 'Forecast & air quality'],
    badge: 'Case — Weather App',
    title: 'WeatherIQ – Weather Forecast Web App',
    category: 'Web',
    kind: 'Web App',
    filters: ['Web Development'],
    featured: 7,
    tags: ['Next.js', 'Weather API', 'SEO', 'UI/UX'],
    description:
      'A fast weather web app with current conditions, hourly and daily forecasts, and air quality for locations worldwide.',
    problem:
      'People need a quick, clear way to check accurate weather for any city without signing up or wading through clutter.',
    solution:
      'Built WeatherIQ, a responsive Next.js weather app powered by WeatherAPI.com. Users can search any city, region, country or postal code, or use their location, and see current conditions, hourly and daily forecasts and air quality — with light/dark themes and °C/°F units.',
    features: [
      'Search by city, region, country or postal code',
      'Current conditions, hourly & daily forecasts',
      'Air quality (PM2.5, PM10) in plain language',
      'Light/dark themes and °C/°F toggle',
      'Favorites & recent searches saved locally, no account needed',
    ],
    link: 'https://weathercatch.vercel.app/',
    linkLabel: 'View Project',
    linkType: 'demo',
  },
  {
    key: 'ai-ecommerce',
    flow: ['LangGraph', 'Specialised agents', 'Shopify store'],
    badge: 'Case — E-commerce',
    title: 'AI E-Commerce Store Manager',
    category: 'AI',
    kind: 'AI',
    filters: ['AI & Automation', 'E-commerce'],
    featured: 5,
    tags: ['LangChain', 'LangGraph', 'AI Agents', 'Shopify'],
    description:
      'An AI-powered e-commerce automation platform orchestrating specialized agents across a Shopify store.',
    problem:
      'Online store owners spend significant manual effort on product research, SEO, listings, support and analytics.',
    solution:
      'Built an AI-powered e-commerce automation platform using LangGraph and LangChain to orchestrate specialized agents for product research, SEO, listing generation, customer support, analytics and Shopify store management.',
    features: ['Multi-agent orchestration', 'Automated SEO & listings', 'AI customer support', 'Store analytics'],
    link: 'https://github.com/usmanghazanfar001-creator/AI-E-Commerce-Store-Manager',
    linkLabel: 'GitHub Repository',
    linkType: 'github',
  },
  {
    key: 'shopify-automation',
    flow: ['Store operations', 'AI automation', 'Less manual work'],
    badge: 'Case — Shopify',
    title: 'Shopify Management Automation',
    category: 'Automation',
    kind: 'Automation',
    filters: ['AI & Automation', 'E-commerce'],
    tags: ['Shopify', 'AI Automation'],
    description:
      'An AI-powered Shopify management system that automates repetitive e-commerce operations.',
    problem:
      'Repetitive Shopify store operations were consuming time that could go toward growth.',
    solution:
      'Designed an AI-powered Shopify management system to automate repetitive e-commerce operations, reduce manual work, and help store owners manage their businesses more efficiently.',
    features: ['Automated store operations', 'Reduced manual workload', 'Efficiency-focused workflows'],
    link: null,
    linkLabel: null,
    linkType: null,
  },
];

// ---------------------------------------------------------------------------
// TODO(owner): Lafzaly, WishCraft and JARVIS AI Assistant are not in the original content and no verified
// details exist for them, so they are intentionally NOT rendered. Fill one in with real information and move it
// into PROJECTS above (give it `featured: <number>` to place it in the top group). Nothing here is shown yet.
//
// {
//   key: 'lafzaly', badge: 'Case — ?', title: 'Lafzaly', category: 'Web', kind: '?',
//   filters: ['Web Development'], featured: 3, tags: [],
//   description: '', problem: '', solution: '', features: [],
//   link: 'https://…', linkLabel: 'View Project', linkType: 'demo',
// },
// Same shape for 'wishcraft' and 'jarvis' (category 'AI', filters ['AI & Automation'] for JARVIS).
// ---------------------------------------------------------------------------

export const PROJECT_FILTERS = ['All', 'AI & Automation', 'Web Development', 'E-commerce', 'SaaS', 'Education'];

export const TIMELINE = [
  {
    key: 'experience-skillsider',
    type: 'experience',
    date: 'Nov 2025 — Nov 2027',
    title: 'Tech & Marketing Operations Assistant',
    place: 'SKILL SIDER · Faisalabad, Pakistan',
    bullets: [
      'Assisting in digital marketing and operational activities.',
      'Utilizing Microsoft Office tools for documentation and reporting.',
      'Supporting SEO, online marketing and web development initiatives.',
      'Managing data organization and workflow optimization.',
      'Contributing to technology-driven solutions and business operations.',
    ],
  },
  {
    key: 'education-pgc',
    type: 'education',
    date: 'Expected 2027',
    title: 'Associate Degree in Artificial Intelligence',
    place: 'Punjab Group of Colleges · Faisalabad',
    bullets: [
      'AI Fundamentals',
      'Mathematics for AI',
      'Computer Science Concepts',
      'Problem Solving Techniques',
      'Data Analysis',
      'Intelligent Systems',
    ],
  },
];

// "Why work with me": built only from facts already on the site (no invented testimonials or numbers).
export const WHY_WORK = [
  { icon: 'BrainCircuit', title: 'AI + web development skill set', text: 'I combine AI engineering with modern web development, so one person can design the intelligence and the product around it.' },
  { icon: 'Workflow', title: 'Practical automation experience', text: 'Built a LangChain and LangGraph multi-agent store manager and a Shopify management system that reduce repetitive manual work.' },
  { icon: 'Search', title: 'SEO-aware website building', text: 'Websites are built with search in mind from the start: structure, speed and metadata, not an afterthought.' },
  { icon: 'Briefcase', title: 'Digital marketing and web experience', text: 'At SKILL SIDER I support SEO, online marketing and web development, so I build with both engineering and growth in mind.' },
  { icon: 'Target', title: 'Usable, conversion-focused products', text: 'The focus is on products people actually use, with clear journeys that turn visitors into enquiries and customers.' },
];
