import heroJpg from '../assets/ben-nxr-2025.jpg';
import heroWebp from '../assets/ben-nxr-2025.webp';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-overlay" />
      </div>
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-subtitle">Class of 2027 · Distance Runner</p>
          <h1 className="hero-name">Ben Hibbard</h1>
          <p className="hero-school">J.L. Mann High School · Greenville, SC</p>
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-value">4:21.44</span>
              <span className="stat-label">1600m</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">9:40.97</span>
              <span className="stat-label">3200m</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">16:29.49</span>
              <span className="stat-label">5K XC</span>
            </div>
          </div>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('athletics')}>
              View Athletics
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </div>
        </div>
        {/* Photo sits beside the text, not behind it — laying a headline over a
            portrait puts the type across his face at most viewport sizes. */}
        <div className="hero-photo">
          <picture>
            <source srcSet={heroWebp} type="image/webp" />
            <img
              className="hero-img"
              src={heroJpg}
              alt="Ben Hibbard at Nike Cross Regionals Southeast, 2025"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>
      </div>
      <button className="scroll-down" onClick={() => scrollTo('about')} aria-label="Scroll down">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M6 9.5 12 15.5 18 9.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
