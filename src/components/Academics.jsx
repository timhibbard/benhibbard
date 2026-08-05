import './Academics.css';

// Grades are final course averages from the 2025–26 (junior year) report card.
// School scale: A = 90–100, B = 80–89.
const courses = [
  { name: 'AP US History', grade: '98', semester: 'Junior Year' },
  { name: 'AP Computer Science', grade: '89', semester: 'Junior Year' },
  { name: 'AP Physics 1', grade: '83', semester: 'Junior Year' },
  { name: 'Spanish 4 (Honors)', grade: '99', semester: 'Junior Year' },
  { name: 'Personal Finance (Honors)', grade: '99', semester: 'Junior Year' },
  { name: 'English 4 (Honors)', grade: '96', semester: 'Junior Year' },
  { name: 'Psychology (Honors)', grade: '94', semester: 'Junior Year' },
  { name: 'Pre-Calculus (Honors)', grade: '87', semester: 'Junior Year' },
  { name: 'Sociology', grade: '98', semester: 'Junior Year' },
];

const honors = [
  { title: 'Weighted GPA 4.728', year: '2025–26' },
  { title: 'Class Rank 133 of 453', year: '2025–26' },
  { title: 'Three AP Courses as a Junior', year: '2025–26' },
  { title: 'Six Honors Courses as a Junior', year: '2025–26' },
  { title: 'Varsity Cross Country & Track', year: '2024–Present' },
];

export default function Academics() {
  return (
    <section id="academics" className="academics section">
      <div className="container">
        <div className="section-label">Academics</div>
        <h2 className="section-title">In the Classroom</h2>

        <div className="acad-summary">
          <div className="acad-stat">
            <span className="acad-num">4.728</span>
            <span className="acad-desc">Weighted GPA (Cumulative)</span>
          </div>
          <div className="acad-stat">
            <span className="acad-num">1290</span>
            <span className="acad-desc">SAT</span>
          </div>
          <div className="acad-stat">
            <span className="acad-num">133<span className="acad-num-sub">/453</span></span>
            <span className="acad-desc">Class Rank</span>
          </div>
          <div className="acad-stat">
            <span className="acad-num">9</span>
            <span className="acad-desc">AP &amp; Honors Courses</span>
          </div>
        </div>

        <div className="acad-grid">
          <div className="courses-block">
            <h3 className="block-heading">Junior Year Coursework</h3>
            <div className="course-list">
              {courses.map((c) => (
                <div key={c.name} className="course-row">
                  <div className="course-info">
                    <span className="course-name">{c.name}</span>
                    <span className="course-semester">{c.semester}</span>
                  </div>
                  <span className="course-grade">{c.grade}</span>
                </div>
              ))}
            </div>
            <p className="course-note">
              Final course averages, 2025–26. School scale: A = 90–100, B = 80–89.
            </p>
          </div>

          <div className="honors-block">
            <h3 className="block-heading">Academic Standing</h3>
            <ul className="honors-list">
              {honors.map((h) => (
                <li key={h.title} className="honor-item">
                  <span className="honor-title">{h.title}</span>
                  <span className="honor-year">{h.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
