import './About.css';

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-label">About Me</div>
        <h2 className="section-title">A Driven Student-Athlete</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Hi, I&apos;m Ben Hibbard — a distance runner at J.L. Mann High School in Greenville,
              South Carolina. I compete in cross country and track &amp; field: the 5K on the
              course, and the 1600m and 3200m on the track. Running has taught me discipline,
              resilience, and the importance of consistent hard work both on the track and in
              the classroom.
            </p>
            <p>
              In the classroom I carry a demanding schedule — three AP courses and six Honors
              courses as a junior, including AP Computer Science, AP Physics 1, and AP US
              History — while maintaining a 4.728 weighted GPA. I&apos;m looking to compete at
              the NCAA Division I or II level while pursuing a degree in engineering or
              computer science.
            </p>
            <p>
              I&apos;m seeking a program that values both athletic excellence and academic rigor —
              a place where I can continue to grow as a runner and as a student.
            </p>
          </div>
          <div className="about-facts">
            <div className="fact-item">
              <span className="fact-label">Graduation Year</span>
              <span className="fact-value">2027</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">High School</span>
              <span className="fact-value">J.L. Mann High School</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Location</span>
              <span className="fact-value">Greenville, South Carolina</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Events</span>
              <span className="fact-value">1600m · 3200m · 5K XC</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Academic Interest</span>
              <span className="fact-value">Engineering / CS</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Division Interest</span>
              <span className="fact-value">NCAA D1 / D2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
