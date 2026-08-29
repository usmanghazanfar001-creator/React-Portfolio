export default function Footer() {
  return (
    <>
      <section className="cta-section">
        <span className="eyebrow">Let's work together</span>
        <h2 className="cta-title">
          Got an idea?<br />
          <span>Let's build it.</span>
        </h2>
        <div className="cta-actions">
          <a href="mailto:Usmanghazanfar100@gmail.com" className="btn btn-primary">
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/usman-ghazanfar"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <span className="footer-logo">
          <strong>Usman Ghazanfar</strong> · © 2026 · Faisalabad, Pakistan
        </span>
        <div className="social-links">
          <a href="mailto:usmanghazanfar100@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://www.upwork.com/freelancers/~017b46b7bf7be76b9d?mp_source=share"
            aria-label="Upwork"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-briefcase"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/usman-ghazanfar"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="tel:+923059612867" aria-label="Phone">
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </footer>
    </>
  );
}
