import useFadeIn from '../hooks/useFadeIn';

const INTERESTS = [
  'Artificial Intelligence',
  'Digital Marketing',
  'SEO & Content Strategy',
  'Web Design',
  'Technology Trends',
  'Workflow Automation',
];

export default function About() {
  const ref = useFadeIn();

  return (
    <section id="about" className="section section-light">
      <div className="section-head">
        <div>
          <span className="eyebrow">Who I am</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <p className="section-note">
          Where marketing instincts meet engineering discipline.
        </p>
      </div>

      <div className="about-grid fade-in" ref={ref}>
        <div className="about-text">
          <p>
            I'm a motivated, tech-savvy Digital Marketing & Growth Associate based in
            Faisalabad, Pakistan. I blend expertise in{' '}
            <strong>web design, content strategy, and social media marketing</strong>{' '}
            with a strong foundation in <strong>Artificial Intelligence</strong>.
          </p>
          <p>
            Currently pursuing an Associate Degree in AI at Punjab Group of Colleges, I'm
            passionate about using technology and data-driven strategies to drive
            measurable online growth and real business results.
          </p>
          <div className="tags">
            {INTERESTS.map((interest) => (
              <span className="tag" key={interest}>
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="contact-card" id="contact">
          <h3>Get in touch</h3>
          <a className="contact-item" href="mailto:Usmanghazanfar100@gmail.com">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" rx="2" />
              <path d="m4 8 8 6 8-6" />
            </svg>
            Usmanghazanfar100@gmail.com
          </a>
          <a className="contact-item" href="tel:+923059612867">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            +92 305 9612867
          </a>
          <a className="contact-item" href="#">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Faisalabad, Pakistan
          </a>
          <a
            className="contact-item"
            href="https://www.linkedin.com/in/usman-ghazanfar"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            linkedin.com/in/Usman-ghazanfar
          </a>
        </div>
      </div>
    </section>
  );
}
