import './Athletics.css';

const primaryRecords = [
  {
    event: '1600m',
    time: '4:21.44',
    meet: 'Region 1 — 5A Meet',
    year: '2026',
    note: 'Top 30% of D1 juniors',
  },
  {
    event: '3200m',
    time: '9:40.97',
    meet: 'ASICS Carolina Distance Carnival',
    year: '2026',
    note: '48th in South Carolina',
  },
  {
    event: '5K — Cross Country',
    time: '16:29.49',
    meet: 'Woodmont Invitational',
    year: '2025',
    note: '5A D1 state champion team',
  },
];

const otherRecords = [
  { event: '1500m', time: '4:13.42', meet: 'Bojangles Blazer Twilight', year: '2026' },
  { event: '1 Mile', time: '4:25.09', meet: 'ASICS Carolina Distance Carnival', year: '2026' },
  { event: '3000m — Indoor', time: '9:36.03', meet: 'Eye of the Tiger Invitational', year: '2026' },
  { event: '1 Mile — Indoor', time: '4:49.85', meet: 'Eye of the Tiger Invitational', year: '2026' },
  { event: '800m', time: '2:16.17', meet: 'Mauldin Meet #2', year: '2025' },
];

const seasons = [
  {
    season: 'Outdoor Track 2026',
    highlights: [
      '1500m PR of 4:13.42 — 11th in South Carolina',
      '4th in the 1600m at the Region 1 — 5A Meet (4:21.44)',
      '11th in the 1600m at the SCHSL 5A Division 1 State Championships',
      '4th in the 1600m at SCHSL 5A — D1 Upper State',
      'Competed at RunningLane Track Championships — 8th in the Mile',
    ],
  },
  {
    season: 'Indoor Track 2026',
    highlights: [
      '3rd in the 3000m at the Eye of the Tiger Invitational (9:36.03)',
      '6th in South Carolina — 3000m',
      'Indoor Mile PR of 4:49.85',
    ],
  },
  {
    season: 'Cross Country 2025',
    highlights: [
      'Won the SCHSL 5A Division 1 team state championship with J.L. Mann',
      '5K PR of 16:29.49 at the Woodmont Invitational',
      '20th at the Region 1-5A Championship',
      '35th at the Ed Boehmke Greenville County Championships',
      'Cut 18+ seconds off my 5K from the prior season',
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
          <h3 className="block-heading">Signature Events</h3>
          <div className="pr-grid-featured">
            {primaryRecords.map((pr) => (
              <div key={pr.event} className="pr-card pr-card-featured">
                <span className="pr-event">{pr.event}</span>
                <span className="pr-time">{pr.time}</span>
                <span className="pr-note">{pr.note}</span>
                <span className="pr-meta">{pr.meet} · {pr.year}</span>
              </div>
            ))}
          </div>

          <h3 className="block-heading pr-other-heading">Other Personal Records</h3>
          <div className="pr-grid">
            {otherRecords.map((pr) => (
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
              <span className="t-num">5</span>
              <span className="t-label">Varsity Seasons</span>
            </div>
            <div className="training-stat">
              <span className="t-num">40+</span>
              <span className="t-label">Races Contested</span>
            </div>
            <div className="training-stat">
              <span className="t-num">25s</span>
              <span className="t-label">1600m Improvement (2yr)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
