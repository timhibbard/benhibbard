import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-brand" onClick={() => scrollTo('hero')}>
        Ben Hibbard
      </div>
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><button onClick={() => scrollTo('about')}>About</button></li>
        <li><button onClick={() => scrollTo('athletics')}>Athletics</button></li>
        <li><button onClick={() => scrollTo('academics')}>Academics</button></li>
        <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
}
