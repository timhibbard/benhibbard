import './Academics.css';

const courses = [
  { name: 'AP Calculus BC', grade: 'A', semester: 'Junior Year' },
  { name: 'AP Computer Science A', grade: 'A', semester: 'Junior Year' },
  { name: 'AP English Language', grade: 'A−', semester: 'Junior Year' },
  { name: 'AP Physics 1', grade: 'A', semester: 'Junior Year' },
  { name: 'AP US History', grade: 'B+', semester: 'Sophomore Year' },
  { name: 'Honors Pre-Calculus', grade: 'A', semester: 'Sophomore Year' },
];

const honors = [
  { title: 'National Honor Society', year: '2024–Present' },
  { title: 'Nebraska Scholar Award', year: '2024' },
  { title: "Principal's Honor Roll", year: '2022–Present' },
  { title: 'STEM Club President', year: '2024–Present' },
  { title: 'Math Team — Regional Qualifier', year: '2023' },
];

export default function Academics() {
  return (
    <section id="academics" className="academics section">
      <div className="container">
        <div className="section-label">Academics</div>
        <h2 className="section-title">In the Classroom</h2>

        <div className="acad-summary">
          <div className="acad-stat">
            <span className="acad-num">3.9</span>
            <span className="acad-desc">Unweighted GPA</span>
          </div>
          <div className="acad-stat">
            <span className="acad-num">4.4</span>
            <span className="acad-desc">Weighted GPA</span>
          </div>
          <div className="acad-stat">
            <span className="acad-num">1420</span>
            <span className="acad-desc">SAT (Math 760)</span>
          </div>
          <div className="acad-stat">
            <span className="acad-num">6</span>
            <span className="acad-desc">AP Courses</span>
          </div>
        </div>

        <div className="acad-grid">
          <div className="courses-block">
            <h3 className="block-heading">Advanced Coursework</h3>
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
          </div>

          <div className="honors-block">
            <h3 className="block-heading">Honors &amp; Activities</h3>
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
