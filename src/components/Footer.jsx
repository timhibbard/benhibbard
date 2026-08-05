import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-name">Ben Hibbard · Class of 2027</p>
        <p className="footer-copy">J.L. Mann High School · Greenville, SC</p>
        <nav className="footer-links" aria-label="Profiles and social links">
          <a
            href="https://sc.milesplit.com/athletes/15024264-ben-hibbard"
            target="_blank"
            rel="noreferrer"
          >
            MileSplit
          </a>
          <a href="https://www.strava.com/athletes/112947404" target="_blank" rel="noreferrer">
            Strava
          </a>
          <a href="https://www.instagram.com/ben.hibbard20/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="mailto:ben@benhibbard.com">Email</a>
        </nav>
      </div>
    </footer>
  );
}
