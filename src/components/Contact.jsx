import { useState } from 'react';
import './Contact.css';

// One access key per recipient inbox. The free Web3Forms tier delivers to a single
// verified address per key (`ccemail` is a paid feature), so we post to every key in
// parallel and treat the submission as sent if at least one succeeds.
const ACCESS_KEYS = (import.meta.env.VITE_WEB3FORMS_KEYS || '')
  .split(',')
  .map((k) => k.trim())
  .filter(Boolean);

// Brand marks from Simple Icons (CC0). MileSplit has no published mark, so it
// gets a stopwatch — which is why every icon keeps a text caption underneath.
const PROFILES = [
  {
    name: 'MileSplit',
    title: 'MileSplit profile — official race results',
    href: 'https://sc.milesplit.com/athletes/15024264-ben-hibbard',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
        <circle cx="12" cy="13.5" r="7.5" />
        <path d="M12 9.5v4l2.5 2" strokeLinecap="round" />
        <path d="M9.5 2.5h5M12 2.5V6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Strava',
    title: 'Strava — training log',
    href: 'https://www.strava.com/athletes/112947404',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    title: 'Instagram — @ben.hibbard20',
    href: 'https://www.instagram.com/ben.hibbard20/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

// Both coaches gave permission to be listed publicly. Coach-to-coach contact is
// a normal part of recruiting, so these sit in Contact rather than Athletics.
const COACHES = [
  {
    name: 'Evan Jones',
    role: 'Head Coach',
    program: 'J.L. Mann Cross Country & Track',
    email: 'mannhsxc@gmail.com',
  },
  {
    name: 'Marshall Barron',
    role: 'Assistant Coach',
    program: 'J.L. Mann Cross Country & Track',
    email: 'patriotsxc98@gmail.com',
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', school: '', email: '', message: '' });
  // Honeypot: bots fill hidden fields, humans never see this one.
  const [botcheck, setBotcheck] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (botcheck) return;

    if (ACCESS_KEYS.length === 0) {
      setError(
        'This form is not configured yet. Please email ben@benhibbard.com directly.',
      );
      return;
    }

    setSending(true);
    setError('');

    const payload = {
      subject: `Recruiting inquiry from ${form.name}${form.school ? ` (${form.school})` : ''}`,
      from_name: 'benhibbard.com',
      replyto: form.email,
      name: form.name,
      school: form.school,
      email: form.email,
      message: form.message,
    };

    try {
      const results = await Promise.allSettled(
        ACCESS_KEYS.map((access_key) =>
          fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({ ...payload, access_key }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (!data.success) throw new Error(data.message || 'Submission failed');
              return data;
            }),
        ),
      );

      if (results.some((r) => r.status === 'fulfilled')) {
        setSubmitted(true);
      } else {
        setError(
          'Something went wrong sending your message. Please email ben@benhibbard.com directly.',
        );
      }
    } catch {
      setError(
        'Something went wrong sending your message. Please email ben@benhibbard.com directly.',
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-label">Contact</div>
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-intro">
          Interested in learning more? I&apos;d love to hear from college coaches and recruiters.
          Feel free to reach out directly or send a message below.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <span className="ci-label">Email</span>
              <a href="mailto:ben@benhibbard.com" className="ci-value">
                ben@benhibbard.com
              </a>
            </div>
            <div className="contact-item">
              <span className="ci-label">Location</span>
              <span className="ci-value">Greenville, South Carolina</span>
            </div>
            <div className="contact-item">
              <span className="ci-label">Grad Year</span>
              <span className="ci-value">Spring 2027</span>
            </div>
            <div className="contact-item">
              <span className="ci-label">NCAA ID</span>
              <span className="ci-value">2607114311</span>
            </div>
            <div className="contact-item contact-item-profiles">
              <span className="ci-label">Profiles</span>
              <div className="profile-links">
                {PROFILES.map((p) => (
                  <a
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="profile-link"
                    title={p.title}
                  >
                    <span className="profile-icon" aria-hidden="true">
                      {p.icon}
                    </span>
                    <span className="profile-name">{p.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-msg">
                <span className="success-icon">✓</span>
                <p>Thanks for reaching out! I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden-honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  checked={Boolean(botcheck)}
                  onChange={(ev) => setBotcheck(ev.target.checked ? 'bot' : '')}
                />
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Coach Smith"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="school">School / Program</label>
                    <input
                      id="school"
                      name="school"
                      type="text"
                      value={form.school}
                      onChange={handleChange}
                      placeholder="University or program name"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="coach@university.edu"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="I'd love to talk about your interest in our program..."
                    required
                  />
                </div>
                {error && (
                  <p className="form-error" role="alert">
                    {error}
                  </p>
                )}
                <button type="submit" className="btn-submit" disabled={sending}>
                  {sending ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="coaches-block">
          <h3 className="block-heading">Coach References</h3>
          <p className="coaches-intro">
            My high school coaches have agreed to speak with college programs about my
            training, racing and character. Please feel free to contact them directly.
          </p>
          <div className="coaches-grid">
            {COACHES.map((c) => (
              <div key={c.email} className="coach-card">
                <span className="coach-role">{c.role}</span>
                <span className="coach-name">{c.name}</span>
                <span className="coach-program">{c.program}</span>
                <a href={`mailto:${c.email}`} className="coach-email">
                  {c.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
