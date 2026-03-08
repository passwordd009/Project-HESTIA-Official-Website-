import { Link } from 'react-router-dom';
import logo from '../../Photos/PH LOGO.png'
import f1Image from "../../Photos/F1_headshot.jpg"
import './HowItWorks.css';

/* ── Data ─────────────────────────────────────────────────── */

const STATS = [
  { value: '5',  label: 'Pilot Districts' },
  { value: '1',  label: 'App in Citizens' },
  { value: '∞',  label: 'Community Impact' },
];

const CHALLENGES = [
  {
    icon: '🏃',
    iconBg: 'var(--color-crimson)',
    title: 'Health Programs Struggle With Engagement',
    body: 'Free fitness resources, trackers, and wellness checkups fail to keep people consistently engaged.',
  },
  {
    icon: '🏘️',
    iconBg: '#2A7B8A',
    title: 'Community Events Lack Consistent Turnout',
    body: 'City meetings, volunteer days, and neighborhood events are chronically thin, despite high community interest.',
  },
  {
    icon: '💼',
    iconBg: '#5A3A1A',
    title: 'Career & Education Opportunities Go Unused',
    body: 'Workshops, job-readiness programs, and skill-building sessions remain empty — low connection, low awareness.',
  },
];

const STEPS = [
  { step: '01', icon: '👤', label: 'Participate',      color: '#7B2020', body: 'Show up to health programs, community events, career workshops, and more.' },
  { step: '02', icon: '✅', label: 'Verified',          color: '#5A6B2A', body: 'GPS, QR codes, and assessments confirm real-world participation instantly.' },
  { step: '03', icon: '⭐', label: 'Earn Points',       color: '#8A6A10', body: 'HESTIA points are awarded for every qualifying activity you complete.' },
  { step: '04', icon: '🎁', label: 'Redeem Rewards',   color: '#2A5A8B', body: 'Exchange points for local business rewards, gift cards, and community benefits.' },
  { step: '05', icon: '🌱', label: 'Communities Grow',  color: '#2A7B5A', body: 'Stronger participation drives better health, civic outcomes, and economic impact.' },
];

const PARTNERS = [
  { icon: '🏫', label: 'Schools',              body: 'Building student engagement through clubs, programs, and academic participation.' },
  { icon: '🏛️', label: 'Local Governments',   body: 'Connecting residents to civic opportunities and expanding government program reach.' },
  { icon: '❤️', label: 'Nonprofits',           body: 'Helping mission-driven orgs with measurable engagement data and community reach.' },
  { icon: '🏬', label: 'Businesses',           body: 'Sponsoring challenges, offering point redemption, and driving local community foot traffic.' },
  { icon: '💰', label: 'Sponsors',             body: 'Funding participation programs and associating your brand with community impact.' },
  { icon: '👥', label: 'Community Leaders',    body: 'Coordinating with civic champions who identify local needs and mobilize residents.' },
];

const DISTRICT_FEATURES = [
  { icon: '🏟️', title: 'District Events',          body: 'Community gatherings that create real touchpoints for residents.' },
  { icon: '🎉', title: 'Block Parties',             body: 'Launch celebrations that bring the whole district together for the first time.' },
  { icon: '🎒', title: 'Youth Programs',            body: 'School clubs and after-school programs powered through partnerships.' },
  { icon: '🏪', title: 'Local Business Rewards',   body: 'Point redemption booths and local sponsor activations driving business-community connection.' },
];

const FOUNDERS_PREVIEW = [
  {
    id: 'F1',
    name: 'Founder Name',
    image: f1Image,
    role: 'Co-Founder & CEO · HESTIA Foundation',
    bio: 'A community builder with a background in technology and civic participation in the startup ecosystem. Led the founding of HESTIA to change how communities reward showing up.',
  },
  {
    id: 'F2',
    name: 'Founder Name',
    role: 'Co-Founder & COO · HESTIA Platform',
    bio: 'Founder driven with roots in nonprofit management, education, and operational infrastructure. Ensures every district partner has what they need to succeed.',
  },
];

/* ── Component ────────────────────────────────────────────── */

export default function HowItWorks() {
  return (
    <div className="hiw-page">

      {/* ── Hero ── */}
      <section className="hiw-hero">
        <div className="container hiw-hero__inner">
          <div className="hiw-hero__content">
            <p className="section-label section-label--light">THE FULL PLATFORM</p>
            <h1 className="heading-xl text-white hiw-hero__heading">
              A Platform for Rewarding{' '}
              <em className="hiw-hero__italic">Participation</em>
              {' '}in Health, Community, &amp; Opportunity
            </h1>
            <p className="hiw-hero__sub text-cream">
              HESTIA closes the gap between opportunity and action. By aligning
              incentives across individuals, organizations, and communities, we make
              showing up matter — for everyone involved.
            </p>
            <div className="hiw-hero__actions">
              <Link to="/districts" className="btn btn--orange">
                Bring HESTIA to Your District
              </Link>
              <Link to="/about" className="btn btn--outline-white">
                Learn More
              </Link>
            </div>
          </div>

          <div className="hiw-hero__seal">
          <div className="hiw-hero__seal-circle">
            <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" width="250" height="250">
              <g opacity="0.3">
                <circle cx="90" cy="90" r="88" stroke="white" strokeWidth="2" />
                <circle cx="90" cy="90" r="75" stroke="white" strokeWidth="1" />
                <circle cx="90" cy="90" r="60" stroke="white" strokeWidth="1" />
              </g>

              <image
                href={logo}
                x="20"
                y="20"
                width="140"
                height="140"
                preserveAspectRatio="xMidYMid meet"
              />
            </svg>
          </div>
        </div>
        </div>

        {/* Stats bar */}
        <div className="hiw-hero__stats">
          <div className="container">
            <div className="hiw-hero__stats-inner">
              {STATS.map(({ value, label }) => (
                <div className="hiw-hero__stat" key={label}>
                  <span className="hiw-hero__stat-value">{value}</span>
                  <span className="hiw-hero__stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Participation Challenges ── */}
      <section className="section section--cream">
        <div className="container">
          <p className="section-label">THE CHALLENGE</p>
          <h2 className="heading-lg hiw-challenges__heading">
            Participation Is One of Our<br />Biggest Challenges
          </h2>

          <div className="hiw-challenges__cards">
            {CHALLENGES.map(({ icon, iconBg, title, body }) => (
              <div className="card hiw-challenge-card" key={title}>
                <div className="icon-box" style={{ background: iconBg }}>
                  <span>{icon}</span>
                </div>
                <h3 className="hiw-challenge-card__title">{title}</h3>
                <p className="hiw-challenge-card__body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Five Steps ── */}
      <section className="section section--crimson">
        <div className="container">
          <p className="section-label section-label--light">HOW THE SYSTEM WORKS</p>
          <h2 className="heading-lg text-white">
            Five Steps to Stronger<br />Communities
          </h2>
          <p className="hiw-steps__sub text-cream">
            A single, virtuous platform that makes participation visible and rewards it —
            across every district that matters.
          </p>

          <div className="hiw-steps__grid">
            {STEPS.map(({ step, icon, label, color, body }) => (
              <div className="hiw-step-card" key={step}>
                <div className="hiw-step-card__top">
                  <span className="hiw-step-card__num" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    {step}
                  </span>
                  <div className="hiw-step-card__icon" style={{ background: color }}>
                    {icon}
                  </div>
                </div>
                <h3 className="hiw-step-card__label">{label}</h3>
                <p className="hiw-step-card__body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Launching Districts ── */}
      <section className="section section--crimson hiw-districts">
        <div className="container hiw-districts__inner">
          <div className="hiw-districts__text">
            <p className="section-label section-label--light">DISTRICT NETWORK</p>
            <h2 className="heading-lg text-white">
              Launching HESTIA<br />Districts
            </h2>
            <p className="text-cream hiw-districts__body">
              HESTIA operates by districts — local hubs that bring together schools,
              organizations, businesses, and residents into a single participation ecosystem.
            </p>
            <p className="text-cream hiw-districts__body">
              Districts are the foundation of how HESTIA creates local impact at scale — each one
              powered by the same platform, customized to the community it serves.
            </p>
            <Link to="/districts" className="btn btn--orange" style={{ marginTop: '1.5rem' }}>
              Start a District
            </Link>
          </div>

          <div className="hiw-districts__features">
            {DISTRICT_FEATURES.map(({ icon, title, body }) => (
              <div className="hiw-districts__feature" key={title}>
                <span className="hiw-districts__feature-icon">{icon}</span>
                <div>
                  <h4 className="hiw-districts__feature-title">{title}</h4>
                  <p className="hiw-districts__feature-body">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── District Launch Events ── */}
      <section className="section section--crimson hiw-launch">
        <div className="container hiw-launch__inner">
          <div className="hiw-launch__text">
            <p className="section-label section-label--light">BLOCK PARTY</p>
            <h2 className="heading-lg text-white">District Launch Events</h2>
            <p className="text-cream hiw-launch__body">
              It all starts here. At the start of every HESTIA district launch — a
              community block party that brings everyone together and kicks off
              participation.
            </p>
            <ul className="hiw-launch__bullets">
              <li>Sponsored by schools or district partners</li>
              <li>Launch of participation Programs</li>
              <li>Local Business Rewards on-site</li>
              <li>Local Business Partnerships</li>
            </ul>
            <Link to="/districts" className="btn btn--outline-cream" style={{ marginTop: '1.5rem' }}>
              Partner With HESTIA →
            </Link>
          </div>

          <div className="hiw-launch__event-card">
            <div className="hiw-launch__event-badge">COMMUNITY BLOCK PARTY</div>
            <div className="hiw-launch__event-logo">
              <div className="hiw-launch__event-circle">
                <svg viewBox="0 0 100 100" width="80" height="80">
                  <circle cx="50" cy="50" r="48" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
                  <image
                    href={logo}
                    x="10"
                    y="10"
                    width="80"
                    height="80"
                    preserveAspectRatio="xMidYMid meet"
                  />
                </svg>
              </div>
            </div>
            <h3 className="hiw-launch__event-title">HESTIA District Block Party</h3>
            <div className="hiw-launch__event-stats">
              <span>🏃 Fitness Activities</span>
              <span>🛍️ Local Rewards</span>
              <span>👥 Community</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who HESTIA Works With ── */}
      <section className="section section--cream">
        <div className="container">
          <p className="section-label">PARTNERS</p>
          <h2 className="heading-lg hiw-partners__heading">Who HESTIA Works With</h2>
          <p className="hiw-partners__sub">
            HESTIA brings together diverse stakeholders to create a unified ecosystem of
            participation and reward.
          </p>

          <div className="hiw-partners__grid">
            {PARTNERS.map(({ icon, label, body }) => (
              <div className="card hiw-partner-card" key={label}>
                <span className="hiw-partner-card__icon">{icon}</span>
                <h3 className="hiw-partner-card__title">{label}</h3>
                <p className="hiw-partner-card__body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet the Founders ── */}
      <section className="section section--crimson">
        <div className="container">
          <p className="section-label section-label--light">FOUNDERS</p>
          <h2 className="heading-lg text-white">Meet the Founders</h2>

          <div className="hiw-founders__grid">
            {FOUNDERS_PREVIEW.map(({ id, image, name, role, bio }) => (
              <div className="hiw-founders__card" key={id}>
                <div className="hiw-founders__photo">
                  <img src={image} alt="founder_photo" style={{borderRadius: "0.5rem"}}/>
                </div>
                <h3 className="hiw-founders__name">{name}</h3>
                <p className="hiw-founders__role">{role}</p>
                <p className="hiw-founders__bio">{bio}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/founders" className="btn btn--orange">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
