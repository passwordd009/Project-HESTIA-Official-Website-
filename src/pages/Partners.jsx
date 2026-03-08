import { useState } from 'react';
import './Partners.css';

/* ── Data ─────────────────────────────────────────────────── */

const PARTNER_TYPES = [
  {
    icon: '🏫',
    label: 'Schools',
    body: 'Build student engagement through clubs, academic programs, and participation incentives.',
    color: '#5A3A1A',
  },
  {
    icon: '🏛️',
    label: 'District Officials',
    body: 'Connect residents to civic opportunities and amplify government programs.',
    color: '#2A5A8B',
  },
  {
    icon: '🏬',
    label: 'Businesses',
    body: 'Sponsor challenges, offer point redemption, and drive community foot traffic.',
    color: '#2A7B5A',
  },
  {
    icon: '❤️',
    label: 'Nonprofits',
    body: 'Amplify your mission with measurable engagement data and district-wide reach.',
    color: '#8B2020',
  },
  {
    icon: '💰',
    label: 'Sponsors',
    body: 'Fund participation programs and associate your brand with community impact.',
    color: '#7B6A10',
  },
];

const VALUES = [
  {
    num: '01',
    title: 'Community Engagement',
    body: 'Reach residents through verified participation programs that drive real-world attendance and action.',
  },
  {
    num: '02',
    title: 'Brand Visibility',
    body: 'Your organization is featured across the HESTIA platform and at district events throughout the year.',
  },
  {
    num: '03',
    title: 'Participation Data',
    body: 'Access partner dashboards showing exactly how your programs are performing across the district.',
  },
  {
    num: '04',
    title: 'Youth Development',
    body: 'Invest in the next generation through school partnerships and youth-focused participation programs.',
  },
  {
    num: '05',
    title: 'Local Impact',
    body: 'Become a named contributor to measurable community health, civic, and career outcomes.',
  },
  {
    num: '06',
    title: 'Network Access',
    body: 'Join a growing district network and collaborate with schools, governments, and community leaders.',
  },
];

const PARTNER_SELECT_OPTIONS = [
  'School / Educational Institution',
  'City / District Government',
  'Business / Corporation',
  'Nonprofit Organization',
  'Sponsor / Foundation',
  'Other',
];

/* ── Component ────────────────────────────────────────────── */

// Backend URL — update this if your server runs on a different port or host.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export default function Partners() {
  const [formData, setFormData] = useState({
    orgName: '',
    contactPerson: '',
    partnerType: '',
    district: '',
    email: '',
    message: '',
  });

  // Track async submission state so the UI can respond appropriately.
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch(`${API_URL}/api/partner-submission`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Submission failed. Please try again.');
      }

      setSubmitStatus('success');
      // Clear the form on success.
      setFormData({ orgName: '', contactPerson: '', partnerType: '', district: '', email: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="partners-page">

      {/* ── Hero ── */}
      <section className="partners-hero">
        <div className="container">
          <p className="section-label section-label--light">JOIN THE NETWORK</p>
          <h1 className="heading-xl text-white partners-hero__heading">
            Partner With<br />Project HESTIA
          </h1>
          <p className="partners-hero__sub text-white">
            Join a growing network of schools, governments, businesses, and
            nonprofits building communities where participation is rewarded.
          </p>
        </div>
      </section>

      {/* ── Who We Work With ── */}
      <section className="section section--cream">
        <div className="container">
          <p className="section-label">PARTNERSHIP TYPES</p>
          <h2 className="heading-lg partners-who__heading">Who We Work With</h2>
          <p className="partners-who__sub">
            HESTIA partnerships create mutual value — for your organization and
            for the communities you serve.
          </p>

          <div className="partners-who__cards">
            {PARTNER_TYPES.map(({ icon, label, body, color }) => (
              <div className="card partners-who-card" key={label}>
                <div
                  className="partners-who-card__icon"
                  style={{ background: color + '22', border: `1.5px solid ${color}44` }}
                >
                  <span>{icon}</span>
                </div>
                <h3 className="partners-who-card__title" style={{ color }}>
                  {label}
                </h3>
                <p className="partners-who-card__body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value of Partnership ── */}
      <section className="section section--crimson">
        <div className="container">
          <p className="section-label section-label--light">WHY PARTNER</p>
          <h2 className="heading-lg text-white">The Value of Partnership</h2>
          <p className="partners-value__sub text-cream">
            HESTIA partners gain more than visibility — a measurable role in
            strengthening the communities they serve.
          </p>

          <div className="partners-value__grid">
            {VALUES.map(({ num, title, body }) => (
              <div className="partners-value-item" key={num}>
                <span className="partners-value-item__num">{num}</span>
                <div>
                  <h3 className="partners-value-item__title">{title}</h3>
                  <p className="partners-value-item__body">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partnership Form ── */}
      <section className="section section--cream">
        <div className="container partners-form__inner">

          <div className="partners-form__text">
            <p className="section-label">PARTNERSHIP FORM</p>
            <h2 className="heading-lg partners-form__heading">
              Ready to Partner?<br />Let's Talk.
            </h2>
            <p className="partners-form__body">
              Fill out the form and our team will reach out within 48 hours to
              discuss how a HESTIA partnership can work for your organization and
              community.
            </p>
            <div className="partners-form__contact-items">
              <div className="partners-form__contact-item">
                <span className="partners-form__contact-icon">✉</span>
                <a href="mailto:partners@projecthestia.org">
                  partners@projecthestia.org
                </a>
              </div>
              <div className="partners-form__contact-item">
                <span className="partners-form__contact-icon">🌍</span>
                <span>Serving Communities Nationwide</span>
              </div>
            </div>
          </div>

          <form className="partners-form__form card" onSubmit={handleSubmit}>
            <div className="partners-form__row">
              <div className="form-field">
                <label htmlFor="orgName">ORGANIZATION NAME</label>
                <input
                  id="orgName"
                  name="orgName"
                  type="text"
                  placeholder="Your organization"
                  value={formData.orgName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="contactPerson">CONTACT PERSON</label>
                <input
                  id="contactPerson"
                  name="contactPerson"
                  type="text"
                  placeholder="Full name"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="partnerType">TYPE OF PARTNER</label>
              <select
                id="partnerType"
                name="partnerType"
                value={formData.partnerType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select partner type...</option>
                {PARTNER_SELECT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="district">DISTRICT / CITY</label>
              <input
                id="district"
                name="district"
                type="text"
                placeholder="Your district or city"
                value={formData.district}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">EMAIL</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="contact@organization.org"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your organization and what you hope to achieve through a HESTIA partnership..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* Inline feedback messages */}
            {submitStatus === 'success' && (
              <p className="partners-form__feedback partners-form__feedback--success">
                ✓ Thank you! We'll reach out within 48 hours.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="partners-form__feedback partners-form__feedback--error">
                ✕ {errorMessage}
              </p>
            )}

            <button
              type="submit"
              className="btn btn--crimson partners-form__submit"
              disabled={submitting}
            >
              {submitting ? 'Submitting…' : 'Submit Partnership Inquiry →'}
            </button>
          </form>

        </div>
      </section>

    </div>
  );
}
