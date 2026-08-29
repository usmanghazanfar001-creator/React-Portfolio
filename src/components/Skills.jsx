import useFadeIn from '../hooks/useFadeIn';

const SKILL_GROUPS = [
  {
    tag: 'Commerce',
    title: 'Skills & Expertise',
    items: [
      'Shopify Store Management',
      'AI-Powered E-commerce Automation',
      'n8n Workflow Automation',
      'AI Virtual Assistants',
      'Workflow Automation',
    ],
  },
  {
    tag: 'Engineering',
    title: 'AI & Technology',
    items: [
      'AI Tools & Applications',
      'AI-Enhanced Content Creation',
      'Intelligent Systems (studying)',
      'Web Development',
      'Problem Solving Techniques',
    ],
  },
  {
    tag: 'Operations',
    title: 'Computer & Office',
    items: [
      'Microsoft Word / Excel & PowerPoint',
      'Google Workspace',
      'Internet Research',
      'Data Entry & Management',
      'Workflow Optimization',
    ],
  },
  {
    tag: 'Soft Skills',
    title: 'Professional',
    items: [
      'Communication & Teamwork',
      'Critical Thinking',
      'Time Management',
      'Adaptability',
      'Organizational Skills',
    ],
  },
];

export default function Skills() {
  const ref = useFadeIn();

  return (
    <section id="skills" className="section section-dark">
      <div className="section-head">
        <div>
          <span className="eyebrow">What I do</span>
          <h2 className="section-title">Skills & Expertise</h2>
        </div>
        <p className="section-note">
          A toolkit that spans building systems and driving the growth on top of them.
        </p>
      </div>

      <div className="skills-grid fade-in" ref={ref}>
        {SKILL_GROUPS.map((group) => (
          <div className="skill-card" key={group.title}>
            <span className="skill-tag">{group.tag}</span>
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
