import useFadeIn from '../hooks/useFadeIn';
import Marquee from './Marquee';
import profileImg from '../assets/images/profile.png';

export default function Hero() {
  const ref = useFadeIn();

  return (
    <header className="hero">
      <div className="hero-inner fade-in" ref={ref}>
        <div>
          <h1 className="hero-title">
            Usman<br />
            <span className="hl">Ghazanfar</span>
          </h1>
          <p className="hero-sub">
            I build AI-powered systems and run the growth strategy behind them —
            combining automation, SEO, and data-driven marketing to help brands scale
            from Faisalabad to the world.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">See the work</a>
            <a href="#contact" className="btn btn-outline">Get in touch</a>
          </div>
        </div>

        <div className="hero-side">
          <div className="id-card">
            <img src={profileImg} alt="Usman Ghazanfar" className="id-photo" />
            <div className="id-meta">
              <span className="id-label">Identity</span>
              <span className="id-name">Usman Ghazanfar</span>
            </div>
          </div>

          <div className="stamp">
            <span className="dot"></span>
            Open to work
          </div>
          <div className="spec-box">
            <div className="spec-row">
              <span className="spec-key">Role</span>
              <span className="spec-val">AI Engineer / Growth Marketer</span>
            </div>
            <div className="spec-row">
              <span className="spec-key">Based</span>
              <span className="spec-val">Faisalabad, Pakistan</span>
            </div>
            <div className="spec-row">
              <span className="spec-key">Stack</span>
              <span className="spec-val">LangChain · React · Shopify · n8n</span>
            </div>
            <div className="spec-row">
              <span className="spec-key">Focus</span>
              <span className="spec-val">Automation, SEO, AI agents</span>
            </div>
          </div>
        </div>
      </div>

      <Marquee />
    </header>
  );
}
