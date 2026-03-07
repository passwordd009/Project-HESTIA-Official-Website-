import './Founders.css';

/* ── Data ─────────────────────────────────────────────────── */

const FOUNDERS = [
  {
    id: 'F1',
    name: 'Founder One',
    role: 'Co-Founder & CEO · HESTIA Foundation',
    side: 'left',
    bio: [
      'Before HESTIA, [Founder] spent years at the intersection of technology and civic life — watching communities invest in programs that never reached the people who needed them most. The frustration wasn\'t with the programs. It was with the absence of infrastructure that made participation visible and rewarding.',
      'That realization became the seed of HESTIA — a belief that the right incentive structure could fundamentally change how communities show up for one another.',
      'Today, [Founder] leads the mission, program strategy, and community partnerships that define HESTIA\'s impact — with a long-term vision of creating participation-powered communities in every district in America.',
    ],
    stats: [
      { label: 'BACKGROUND', value: 'Technology' },
      { label: 'FOCUS',      value: 'Civic Leadership' },
      { label: 'PASSION',    value: 'Community' },
    ],
  },
  {
    id: 'F2',
    name: 'Founder Two',
    role: 'Co-Founder & COO · HESTIA Platform',
    side: 'right',
    bio: [
      'With a background in nonprofit management and workforce development, [Founder] has spent a career ensuring that mission-driven organizations have the operational infrastructure to deliver real impact — not just good intentions.',
      'What drew them to HESTIA was the opportunity to build something that didn\'t choose between mission and scale. The dual-entity structure was their idea — keeping the Foundation mission-first while giving the technology the room to grow.',
      'As COO, [Founder] oversees operations, program delivery, and the systems that ensure every district partner has what they need to succeed.',
    ],
    stats: [
      { label: 'BACKGROUND', value: 'Nonprofit Ops' },
      { label: 'FOCUS',      value: 'Education' },
      { label: 'PASSION',    value: 'Workforce Dev' },
    ],
  },
];

const STORY_ITEMS = [
  {
    title: 'The Observation',
    body: 'Years of watching valuable programs fail not from lack of quality — but from lack of engagement.',
  },
  {
    title: 'The Idea',
    body: 'What if participation itself was the product? What if showing up earned something real?',
  },
  {
    title: 'The Build',
    body: 'A dual-entity platform designed to reward participation at every level, in every community.',
  },
  {
    title: 'The Vision',
    body: 'HESTIA Districts in every city — anchoring digital participation in real-world community hubs.',
  },
];

/* ── Component ────────────────────────────────────────────── */

export default function Founders() {
  return (
    <div className="founders-page">

      {/* ── Hero ── */}
      <section className="founders-hero">
        <div className="container">
          <p className="section-label">THE PEOPLE BEHIND HESTIA</p>
          <h1 className="heading-xl founders-hero__heading">
            Building Infrastructure<br />for Participation
          </h1>
          <p className="founders-hero__sub">
            Two founders. One shared conviction: communities thrive when
            participation is visible, verified, and rewarded.
          </p>
        </div>
        <div className="founders-hero__divider" />
      </section>

      {/* ── Founders ── */}
      {FOUNDERS.map((founder) => (
        <section
          key={founder.id}
          className={`founders-profile${founder.side === 'right' ? ' founders-profile--flipped' : ''}`}
        >
          <div className="container founders-profile__inner">

            {/* Photo placeholder */}
            <div className="founders-profile__photo">
              <div className="founders-profile__photo-inner">
                <span className="founders-profile__photo-id">{founder.id}</span>
              </div>
              <div className="founders-profile__photo-caption">
                FOUNDER PHOTO — PORTRAIT
              </div>
            </div>

            {/* Bio */}
            <div className="founders-profile__bio">
              <h2 className="heading-lg founders-profile__name">{founder.name}</h2>
              <p className="founders-profile__role">{founder.role}</p>
              <div className="founders-profile__divider-line" />
              {founder.bio.map((para, i) => (
                <p className="founders-profile__para" key={i}>{para}</p>
              ))}

              {/* Stat strip */}
              <div className="founders-profile__stats">
                {founder.stats.map(({ label, value }) => (
                  <div className="founders-profile__stat" key={label}>
                    <span className="founders-profile__stat-label">{label}</span>
                    <span className="founders-profile__stat-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      ))}

      {/* ── Why We Built HESTIA ── */}
      <section className="section section--crimson">
        <div className="container founders-story__inner">

          <div className="founders-story__left">
            <p className="section-label section-label--light">OUR STORY</p>
            <h2 className="heading-lg text-white">Why We Built HESTIA</h2>
            <p className="founders-story__body text-cream">
              HESTIA began with a simple but persistent observation: in every
              community we worked in, people wanted to participate. They wanted to
              be healthier, more connected, more prepared. But without visible
              rewards, without verification, without infrastructure — participation
              faded. HESTIA is the system that communities were missing.
            </p>
          </div>

          <div className="founders-story__right">
            {STORY_ITEMS.map(({ title, body }) => (
              <div className="founders-story__item" key={title}>
                <div className="founders-story__item-marker" />
                <div>
                  <h3 className="founders-story__item-title">{title}</h3>
                  <p className="founders-story__item-body">{body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
