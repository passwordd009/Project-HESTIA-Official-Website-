import { Link } from 'react-router-dom';
import './About.css';

/* ── Data ─────────────────────────────────────────────────── */

const PROBLEMS = [
  {
    icon: '🏃',
    iconBg: 'var(--color-crimson)',
    title: 'Health',
    body: 'Wellness programs attract brief bursts of energy but rarely sustain consistent engagement without visible progress and meaningful rewards.',
  },
  {
    icon: '🎓',
    iconBg: '#2A7B8A',
    title: 'Education',
    body: 'After-school programs and academic clubs operate at low capacity despite high demand, because participation feels transactional without recognition.',
  },
  {
    icon: '🗳️',
    iconBg: '#2A5A8B',
    title: 'Civic Engagement',
    body: 'Community meetings and neighborhood initiatives suffer from chronic underparticipation, leaving residents disconnected from decisions that affect them.',
  },
];

const FOUNDATION_BULLETS = [
  'Designing and operating HESTIA-led programs',
  'Setting participation standards & ethical guidelines',
  'Partnering with schools, cities, and nonprofits',
  'Running pilot programs and community initiatives',
  'Measuring and reporting community impact',
  'Funded by grants, donations, and sponsorships',
];

const PLATFORM_BULLETS = [
  'Building and operating the digital platform',
  'Participation tracking via GPS, QR, assessments',
  'Unified points and rewards wallet',
  'Partner dashboards and analytics',
  'Fraud prevention and scalable infrastructure',
  'Technical excellence at every layer',
];

/* ── Component ────────────────────────────────────────────── */

export default function About() {
  return (
    <div className="about-page">

      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="container">
          <p className="section-label section-label--light">OUR MISSION</p>
          <h1 className="heading-xl text-white about-hero__heading">
            Rewarding Participation<br />Across Communities
          </h1>
          <p className="about-hero__sub text-cream">
            We believe the most important activities in society suffer not from
            lack of value — but from lack of participation.
          </p>
        </div>
        <div className="about-hero__divider" />
      </section>

      {/* ── Mission Quote ── */}
      <section className="about-quote">
        <div className="container">
          <div className="about-quote__marks">"</div>
          <blockquote className="about-quote__text">
            "HESTIA's mission is to reward people for showing up — to their
            health, their community, and their future."
          </blockquote>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="section section--cream">
        <div className="container">
          <p className="section-label">THE PROBLEM</p>
          <h2 className="heading-lg about-problem__heading">
            Why Participation Gaps Exist
          </h2>
          <p className="about-problem__sub">
            Across health, education, civic life, and career development,
            communities face the same core challenge: valuable programs go
            unused because participation is invisible and unrewarded.
          </p>

          <div className="about-problem__cards">
            {PROBLEMS.map(({ icon, iconBg, title, body }) => (
              <div className="card about-problem__card" key={title}>
                <div className="icon-box" style={{ background: iconBg }}>
                  <span>{icon}</span>
                </div>
                <h3 className="about-problem__card-title">{title}</h3>
                <p className="about-problem__card-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="section section--crimson about-solution">
        <div className="container">
          <p className="section-label section-label--light">THE SOLUTION</p>
          <h2 className="heading-lg text-white">
            Incentive Infrastructure for<br />Communities
          </h2>
          <p className="about-solution__sub text-cream">
            HESTIA connects people, organizations, and communities through a
            shared incentive engine — making participation visible, verifiable,
            and rewarding for everyone involved.
          </p>

          {/* Ecosystem diagram */}
          <div className="about-solution__diagram">
            <div className="about-solution__node">
              <div className="about-solution__node-icon">👥</div>
              <span>People</span>
            </div>
            <div className="about-solution__arrow">→</div>
            <div className="about-solution__node about-solution__node--center">
              <div className="about-solution__node-icon about-solution__node-icon--center">🏛️</div>
              <span>HESTIA</span>
            </div>
            <div className="about-solution__arrow">→</div>
            <div className="about-solution__node">
              <div className="about-solution__node-icon">🏢</div>
              <span>Organizations</span>
            </div>
            <div className="about-solution__arrow">→</div>
            <div className="about-solution__node">
              <div className="about-solution__node-icon">🏘️</div>
              <span>Communities</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dual Entity ── */}
      <section className="section section--crimson about-dual">
        <div className="container">
          <p className="section-label section-label--light">HOW HESTIA OPERATES</p>
          <h2 className="heading-lg text-white">
            A Dual-Entity Structure Built<br />for Impact
          </h2>
          <p className="about-dual__sub text-cream">
            Two distinct but complementary entities — keeping mission and
            technology aligned but independent.
          </p>

          <div className="about-dual__cards">
            {/* Foundation */}
            <div className="about-dual__card about-dual__card--foundation">
              <p className="about-dual__card-label">NONPROFIT</p>
              <h3 className="about-dual__card-title">HESTIA Foundation</h3>
              <ul className="about-dual__card-list">
                {FOUNDATION_BULLETS.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            {/* Platform */}
            <div className="about-dual__card about-dual__card--platform">
              <p className="about-dual__card-label">TECHNOLOGY</p>
              <h3 className="about-dual__card-title">HESTIA Platform</h3>
              <ul className="about-dual__card-list">
                {PLATFORM_BULLETS.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
