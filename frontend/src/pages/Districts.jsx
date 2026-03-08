import { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import './Districts.css';

/* ── Data ─────────────────────────────────────────────────── */

const FLOW_STEPS = [
  { label: 'City / Region' },
  { label: 'HESTIA District', active: true },
  { label: 'Programs' },
  { label: 'Participants' },
  { label: 'Community Impact' },
];

const LAUNCH_FEATURES = [
  {
    icon: '🏃',
    title: 'Health Challenges',
    body: 'On-site fitness activities, step challenges, and wellness check-ins with instant point rewards.',
  },
  {
    icon: '🏘️',
    title: 'Community Activities',
    body: 'Neighborhood games, volunteer sign-ups, and civic engagement moments woven into the event.',
  },
  {
    icon: '💼',
    title: 'Career Opportunities',
    body: 'Employer tables, resume stations, and workforce partners on-site to connect with residents.',
  },
  {
    icon: '🏪',
    title: 'Local Business Rewards',
    body: 'Point redemption booths and local sponsor activations driving business-community connection.',
  },
];

const WHO_MAKES_IT_WORK = [
  {
    icon: '🏫',
    label: 'Schools',
    body: 'Clubs, after-school programs, and educator-led challenges.',
    color: '#5A3A1A',
  },
  {
    icon: '🏛️',
    label: 'District Officials',
    body: 'Leadership providing venues, legitimacy, and civic programs.',
    color: '#2A5A8B',
  },
  {
    icon: '❤️',
    label: 'Community Orgs',
    body: 'Nonprofits running programs and volunteer events.',
    color: '#8B2020',
  },
  {
    icon: '🏬',
    label: 'Businesses',
    body: 'Local sponsors offering rewards and challenge design.',
    color: '#2A7B5A',
  },
  {
    icon: '💰',
    label: 'Sponsors',
    body: 'Funding district programs and matching participation incentives.',
    color: '#7B6A10',
  },
];

/* ── Component ────────────────────────────────────────────── */

export default function Districts() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    district: '',
    email: '',
  });

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
  }

  return (
    <div className="districts-page">

      {/* ── Hero ── */}
      <section className="districts-hero">
        <div className="container">
          <p className="section-label section-label--light">DISTRICT NETWORK</p>
          <h1 className="heading-xl text-white districts-hero__heading">
            HESTIA District<br />Network
          </h1>
          <p className="districts-hero__sub text-cream">
            Local ecosystems powered by participation — bringing together schools,
            organizations, businesses, and residents under one shared platform.
          </p>

          {/* Flow diagram */}
          <div className="districts-hero__flow">
            {FLOW_STEPS.map(({ label, active }, i) => (
              <div key={label} className="districts-hero__flow-item">
                <button
                  className={`districts-hero__flow-btn${active ? ' districts-hero__flow-btn--active' : ''}`}
                >
                  {label}
                </button>
                {i < FLOW_STEPS.length - 1 && (
                  <span className="districts-hero__flow-arrow">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── District Launch Events ── */}
      <section className="section section--cream">
        <div className="container">
          <p className="section-label">BLOCK PARTY INITIATIVE</p>
          <h2 className="heading-lg districts-launch__heading">
            District Launch Events —<br />Summer Initiative
          </h2>
          <p className="districts-launch__sub">
            Every HESTIA district begins with a community block party — a
            high-energy launch that introduces the platform, builds
            relationships, and gives residents their first chance to earn points.
          </p>

          <div className="districts-launch__cards">
            {LAUNCH_FEATURES.map(({ icon, title, body }) => (
              <div className="card districts-launch-card" key={title}>
                <span className="districts-launch-card__icon">{icon}</span>
                <h3 className="districts-launch-card__title">{title}</h3>
                <p className="districts-launch-card__body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Makes a District Work ── */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <p className="section-label">DISTRICT PARTNERS</p>
          <h2 className="heading-lg districts-who__heading">
            Who Makes a District Work
          </h2>
          <p className="districts-who__sub">
            A HESTIA district is strongest when it brings together all the
            stakeholders who shape community life.
          </p>

          <div className="districts-who__grid">
            {WHO_MAKES_IT_WORK.map(({ icon, label, body, color }) => (
              <div className="card districts-who-card" key={label}>
                <div
                  className="districts-who-card__icon-box"
                  style={{ background: color }}
                >
                  <span>{icon}</span>
                </div>
                <h3
                  className="districts-who-card__title"
                  style={{ color: color }}
                >
                  {label}
                </h3>
                <p className="districts-who-card__body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Start a District Form ── */}
      <section className="section section--crimson districts-form-section">
        <div className="container districts-form__inner">

          <div className="districts-form__text">
            <p className="section-label section-label--light">GET STARTED</p>
            <h2 className="heading-lg text-white">
              Start a HESTIA District
            </h2>
            <p className="text-cream districts-form__body">
              Ready to bring HESTIA to your community? Fill out the form and our
              team will be in touch to discuss how we can build a district together
              — customized to your community's needs, goals, and partners.
            </p>
            <p className="text-cream districts-form__body">
              District leaders, school administrators, city officials, and community
              organizations are all welcome to apply.
            </p>
          
            <NavLink to="/partners" className="btn btn--orange districts-form__submit">
              Start a District →
            </NavLink>
           </div>
        </div>
      </section>

    </div>
  );
}
