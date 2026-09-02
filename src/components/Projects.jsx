import useFadeIn from '../hooks/useFadeIn';

const ExternalIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const PROJECTS = [
  {
    badge: 'Case — Real Estate',
    title: 'Real Estate Website',
    description:
      'Designed and developed a full real estate listing website — featuring property search, detailed listing pages, and a clean, conversion-focused UI. Applied SEO best practices to improve search visibility from launch.',
    link: 'https://hussnainestateadvisor.vercel.app/',
    linkLabel: 'View Project',
  },
  {
    badge: 'Case — Flask',
    title: 'DiscreteSolver – Discrete Mathematics Calculator',
    description:
      'Built a full-stack educational web application using Python, Flask and SQLite. Includes logic, sets, relations, functions, combinatorics, number theory, quizzes, PDF export and an admin dashboard.',
    link: 'https://discretemathcalculator.vercel.app/',
    linkLabel: 'View Project',
  },
  {
    badge: 'Case — SaaS',
    title: 'NexSeat – AI Subscription Sharing Platform',
    description:
      'NexSeat is a modern SaaS platform that enables users to share premium AI tool subscriptions securely with trusted groups. It reduces subscription costs by allowing multiple users to access team plans while providing an intuitive, responsive, and user-friendly experience.',
    link: 'https://github.com/usmanghazanfar001-creator/NexSeat.git',
    linkLabel: 'GitHub Repository',
  },
  {
    badge: 'Case — E-commerce',
    title: 'AI E-Commerce Store Manager',
    description:
      'An AI-powered e-commerce automation platform designed to help online store owners manage and optimize their stores through intelligent AI agents. Uses LangGraph and LangChain to orchestrate specialized agents for product research, SEO, listing generation, customer support, analytics, and Shopify store management.',
    link: 'https://github.com/usmanghazanfar001-creator/AI-E-Commerce-Store-Manager',
    linkLabel: 'GitHub Repository',
  },
  {
    badge: 'Case — Shopify',
    title: 'Shopify Management Automation',
    description:
      'An AI-powered Shopify management system designed to automate repetitive e-commerce operations, reduce manual work, and help store owners manage their businesses more efficiently.',
  },
  {
    badge: 'Case — C++',
    title: 'Hospital Management System',
    description:
      'Developed a comprehensive GUI based Hospital Management System in standard C++ to manage core hospital operations through a menu-driven interface.',
  },
];

export default function Projects() {
  const ref = useFadeIn();

  return (
    <section id="projects" className="section section-dark">
      <div className="section-head">
        <div>
          <span className="eyebrow">Portfolio</span>
          <h2 className="section-title">Selected Projects</h2>
        </div>
        <p className="section-note">A mix of shipped products and open-source builds.</p>
      </div>

      <div className="projects-grid fade-in" ref={ref}>
        {PROJECTS.map((project) => (
          <div className="project-card" key={project.title}>
            <span className="project-badge">{project.badge}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                {project.linkLabel}
                <ExternalIcon />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
