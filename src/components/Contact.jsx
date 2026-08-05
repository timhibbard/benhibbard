import { useState } from 'react';
import './Contact.css';

// One access key per recipient inbox. The free Web3Forms tier delivers to a single
// verified address per key (`ccemail` is a paid feature), so we post to every key in
// parallel and treat the submission as sent if at least one succeeds.
const ACCESS_KEYS = (import.meta.env.VITE_WEB3FORMS_KEYS || '')
  .split(',')
  .map((k) => k.trim())
  .filter(Boolean);

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
              <span className="ci-label">MILESPLIT</span>
              <a
                href="https://sc.milesplit.com/athletes/15024264-ben-hibbard"
                target="_blank"
                rel="noreferrer"
                className="ci-value ci-link"
              >
                View Profile →
              </a>
            </div>
            <div className="contact-item">
              <span className="ci-label">Strava</span>
              <a
                href="https://www.strava.com/athletes/112947404"
                target="_blank"
                rel="noreferrer"
                className="ci-value ci-link"
              >
                Follow Training →
              </a>
            </div>
            <div className="contact-item">
              <span className="ci-label">Instagram</span>
              <a
                href="https://www.instagram.com/ben.hibbard20/"
                target="_blank"
                rel="noreferrer"
                className="ci-value ci-link"
              >
                @ben.hibbard20 →
              </a>
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
      </div>
    </section>
  );
}
