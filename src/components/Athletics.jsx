import './Athletics.css';

const personalRecords = [
  { event: '800m', time: '1:58.4', meet: 'Metro Conference', year: '2024' },
  { event: '1600m (Mile)', time: '4:18.2', meet: 'State Qualifier', year: '2024' },
  { event: '3200m (2-Mile)', time: '9:12.7', meet: 'Westside Invite', year: '2024' },
  { event: '5K (XC)', time: '15:48', meet: 'State XC Meet', year: '2023' },
];

const seasons = [
  {
    season: 'Cross Country 2024',
    highlights: [
      'Metro Conference Champion',
      '4th place at State XC Championships',
      'Team Captain',
      'All-Conference First Team',
    ],
  },
  {
    season: 'Track & Field 2024',
    highlights: [
      'State Qualifier — 1600m & 3200m',
      'Broke school record in 1600m (4:18.2)',
      'All-Conference Second Team',
      'Team MVP',
    ],
  },
  {
    season: 'Cross Country 2023',
    highlights: [
      'All-Conference Honorable Mention',
      '12th place at State XC Championships',
      'Personal best 5K: 15:48',
    ],
  },
];

export default function Athletics() {
  return (
    <section id="athletics" className="athletics section">
      <div className="container">
        <div className="section-label">Athletics</div>
        <h2 className="section-title">On the Track &amp; Course</h2>

        <div className="pr-block">
          <h3 className="block-heading">Personal Records</h3>
          <div className="pr-grid">
            {personalRecords.map((pr) => (
              <div key={pr.event} className="pr-card">
                <span className="pr-event">{pr.event}</span>
                <span className="pr-time">{pr.time}</span>
                <span className="pr-meta">{pr.meet} · {pr.year}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="seasons-block">
          <h3 className="block-heading">Season Highlights</h3>
          <div className="seasons-grid">
            {seasons.map((s) => (
              <div key={s.season} className="season-card">
                <h4 className="season-title">{s.season}</h4>
                <ul className="season-list">
                  {s.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="training-block">
          <h3 className="block-heading">Training</h3>
          <div className="training-stats">
            <div className="training-stat">
              <span className="t-num">60–70</span>
              <span className="t-label">Miles / Week (peak)</span>
            </div>
            <div className="training-stat">
              <span className="t-num">5</span>
              <span className="t-label">Years of Experience</span>
            </div>
            <div className="training-stat">
              <span className="t-num">3</span>
              <span className="t-label">Varsity Seasons</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
