import heroImg from '../assets/hero.png';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <img src={heroImg} alt="Ben Hibbard running" className="hero-img" />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <p className="hero-subtitle">Class of 2026 · Distance Runner</p>
        <h1 className="hero-name">Ben Hibbard</h1>
        <p className="hero-school">Westside High School · Omaha, NE</p>
        <div className="hero-stats">
          <div className="stat-card">
            <span className="stat-value">4:18</span>
            <span className="stat-label">Mile PR</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">9:12</span>
            <span className="stat-label">2-Mile PR</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">3.9</span>
            <span className="stat-label">GPA</span>
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
      <button className="scroll-down" onClick={() => scrollTo('about')} aria-label="Scroll down">
        <span />
      </button>
    </section>
  );
}
