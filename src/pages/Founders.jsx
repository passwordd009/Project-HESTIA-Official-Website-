import './Founders.css';

/* ── Data ─────────────────────────────────────────────────── */

const FOUNDERS = [
  {
    id: 'F1',
    name: 'Founder One',
    role: 'Co-Founder & CEO · HESTIA Foundation',
    side: 'left',
    image: '/Photos/F1_headshot.jpg',
    bio: [
      'Before founding HESTIA, Elijah Hawes spent years working at the intersection of technology and civic life. Growing up in the Bronx, he saw firsthand how communities invested time and energy into programs that often struggled to reach the people who needed them most.',
      'Elijah’s own path into technology was unconventional. Without taking the traditional college route, he built his career through programs like CareerWise and The Marcy Lab School, eventually becoming an AI engineer at UBS.',
      'Those experiences shaped a deeper belief: access to opportunity should not depend on where someone starts. Too often, the infrastructure that connects people to those opportunities simply doesn’t exist.',
      'That realization became the seed of HESTIA — a belief that the right incentive structure could fundamentally change how communities show up for one another.',
      'Today, Elijah leads HESTIA’s mission and community partnerships, with a long-term vision of building participation-powered communities in every district in America.',
    ],
    stats: [
      { label: 'BACKGROUND', value: 'Technology' },
      { label: 'FOCUS',      value: 'Civic Leadership' },
      { label: 'PASSION',    value: 'Community Engineering' },
    ],
  },
  {
    id: 'F2',
    name: 'Founder Two',
    role: 'Co-Founder & COO · HESTIA Platform',
    side: 'right',
    image: '/Photos/F2_headshot.jpg',
    bio: [
      'Jalen Watts is from the Bronx, New York, Jalen was inspired to drive change in low-income communities after witnessing the disparity between neighborhoods like the Bronx and more affluent areas such as Manhattan.',
      'Becoming a public figure within local educational institutions, Jalen began his journey as an advocate for expanding access to opportunity.',
      'Today, Jalen helps operate Project HESTIA, continuing to give back to communities like the Bronx while inspiring others to harness their own drive to uplift their neighborhoods.',
    ],

    stats: [
      { label: 'BACKGROUND', value: 'Computer Sci & Criminal Justice' },
      { label: 'FOCUS',      value: 'Youth Enrichment' },
      { label: 'PASSION',    value: 'DEI' },
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
                <img src={founder.image} alt='hestia_leader_image' className="founder-image"></img>
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
