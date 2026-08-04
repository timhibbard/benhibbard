import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', school: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
              <a href="mailto:ben.hibbard@example.com" className="ci-value">
                ben.hibbard@example.com
              </a>
            </div>
            <div className="contact-item">
              <span className="ci-label">Location</span>
              <span className="ci-value">Omaha, Nebraska</span>
            </div>
            <div className="contact-item">
              <span className="ci-label">Grad Year</span>
              <span className="ci-value">Spring 2026</span>
            </div>
            <div className="contact-item">
              <span className="ci-label">MILESPLIT</span>
              <a
                href="https://ne.milesplit.com"
                target="_blank"
                rel="noreferrer"
                className="ci-value ci-link"
              >
                View Profile →
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
                      placeholder="University of Nebraska"
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
                <button type="submit" className="btn-submit">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
