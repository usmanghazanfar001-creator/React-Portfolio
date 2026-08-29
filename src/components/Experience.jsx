import useFadeIn from '../hooks/useFadeIn';

const EXPERIENCE = [
  {
    date: 'Nov 2025 — Nov 2027',
    title: 'Tech & Marketing Operations Assistant',
    company: 'SKILL SIDER · Faisalabad, Pakistan',
    bullets: [
      'Assisting in digital marketing and operational activities.',
      'Utilizing Microsoft Office tools for documentation and reporting.',
      'Supporting SEO, online marketing and web development initiatives.',
      'Managing data organization and workflow optimization.',
      'Contributing to technology-driven solutions and business operations.',
    ],
  },
];

export default function Experience() {
  const ref = useFadeIn();

  return (
    <section id="experience" className="section section-light">
      <div className="section-head">
        <div>
          <span className="eyebrow">Career path</span>
          <h2 className="section-title">Experience</h2>
        </div>
        <p className="section-note">Chronological, in order — most recent first.</p>
      </div>

      <div className="timeline fade-in" ref={ref}>
        {EXPERIENCE.map((job) => (
          <div className="timeline-item" key={job.title}>
            <div className="timeline-date">{job.date}</div>
            <div>
              <div className="timeline-title">{job.title}</div>
              <div className="timeline-company">{job.company}</div>
              <ul className="timeline-desc">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
