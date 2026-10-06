import { Link } from 'react-router-dom';
import { ICONS } from '../data/icons';
import './Founders.css';

const SERIF = "'Playfair Display', Georgia, serif";

const FOUNDERS = [
  {
    name: 'Elijah Hawes',
    role: 'Co-Founder & CEO · HESTIA Foundation',
    image: '/Photos/F1_headshot.jpg',
    alt: 'Portrait of Elijah Hawes',
    bio: [
      'Before founding HESTIA, Elijah Hawes spent years working at the intersection of technology and civic life. Growing up in the Bronx, he saw firsthand how communities invested time and energy into programs that often struggled to reach the people who needed them most.',
      'Elijah’s own path into technology was unconventional. Without taking the traditional college route, he built his career through programs like CareerWise and The Marcy Lab School, eventually becoming an AI engineer at UBS.',
      'Those experiences shaped a deeper belief: access to opportunity should not depend on where someone starts. Too often, the infrastructure that connects people to those opportunities simply doesn’t exist.',
      'That realization became the seed of HESTIA — a belief that the right incentive structure could fundamentally change how communities show up for one another.',
      'Today, Elijah leads HESTIA’s mission and community partnerships, with a long-term vision of building participation-powered communities in every district in America.',
    ],
    stats: [
      { label: 'BACKGROUND', value: 'Technology' },
      { label: 'FOCUS', value: 'Civic Leadership' },
      { label: 'PASSION', value: 'Community Engineering' },
    ],
  },
  {
    name: 'Jalen Watts',
    role: 'Co-Founder & COO · HESTIA Platform',
    image: '/Photos/F2_headshot.jpg',
    alt: 'Portrait of Jalen Watts',
    bio: [
      'Jalen Watts is from the Bronx, New York. Jalen was inspired to drive change in low-income communities after witnessing the disparity between neighborhoods like the Bronx and more affluent areas such as Manhattan.',
      'Becoming a public figure within local educational institutions, Jalen began his journey as an advocate for expanding access to opportunity.',
      'Today, Jalen helps operate Project HESTIA, continuing to give back to communities like the Bronx while inspiring others to harness their own drive to uplift their neighborhoods.',
    ],
    stats: [
      { label: 'BACKGROUND', value: 'Computer Sci & Criminal Justice' },
      { label: 'FOCUS', value: 'Youth Enrichment' },
      { label: 'PASSION', value: 'DEI' },
    ],
  },
];

const STORY = [
  { icon: ICONS.people, title: 'The Observation', body: 'Years of watching valuable programs fail not from lack of quality — but from lack of engagement.' },
  { icon: ICONS.trend, title: 'The Idea', body: 'What if participation itself was the product? What if showing up earned something real?' },
  { icon: ICONS.handshake, title: 'The Build', body: 'A platform designed to reward participation at every level, in every community.' },
  { icon: ICONS.pin, title: 'The Vision', body: 'HESTIA districts in every city — anchoring digital participation in real-world community hubs.' },
];

function FounderProfile({ founder, flipped, background }) {
  const photo = (
    <img className="ph founder-photo" src={founder.image} alt={founder.alt} style={{ width: '100%', aspectRatio: '4 / 5', height: 'auto', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '50% 25%' }} />
  );
  const text = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <span style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '0.14em', color: '#A04516' }}>{founder.role.toUpperCase()}</span>
      <h2 style={{ margin: '0', fontFamily: SERIF, fontWeight: '700', fontSize: '52px', lineHeight: '1.08' }}>{founder.name}</h2>
      {founder.bio.map((para, i) => (
        <p key={i} style={{ margin: '0', fontSize: i === 0 ? '19px' : '17px', lineHeight: '1.7', color: i === 0 ? '#1C0D06' : '#5E4A3E' }}>{para}</p>
      ))}
      <div className="founder-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: '14px', marginTop: '12px' }}>
        {founder.stats.map((s) => (
          <div key={s.label} className="lift" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '20px', borderRadius: '16px', background: '#F6EFE6' }}>
            <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.14em', color: '#A04516' }}>{s.label}</span>
            <span style={{ fontFamily: SERIF, fontWeight: '700', fontSize: '20px', lineHeight: '1.25' }}>{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="sec" style={{ padding: '112px 32px', background }}>
      <div className={flipped ? 'g2 founder-row flipped' : 'g2 founder-row'} style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: flipped ? 'minmax(0,1.2fr) minmax(0,0.9fr)' : 'minmax(0,0.9fr) minmax(0,1.2fr)', gap: '72px', alignItems: 'center' }}>
        {flipped ? <>{text}{photo}</> : <>{photo}{text}</>}
      </div>
    </section>
  );
}

export default function Founders() {
  return (
    <div className="page-founders" style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#1C0D06', background: '#EEE4D7' }}>

      {/* HERO */}
      <section className="sec" style={{ padding: '80px 32px 112px' }}>
        <div className="g2" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,1fr)', gap: '64px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <span className="enter" style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '0.14em', color: '#A04516' }}>OUR FOUNDERS</span>
            <h1 className="h1" style={{ margin: '0', fontFamily: SERIF, fontWeight: '700', fontSize: '60px', lineHeight: '1.08', letterSpacing: '-0.01em' }}>The people behind<br />Project HESTIA</h1>
            <p className="enter2" style={{ margin: '0', maxWidth: '44ch', fontSize: '20px', lineHeight: '1.6', color: '#5E4A3E' }}>Two founders from the Bronx. One shared conviction: communities thrive when participation is visible, verified and rewarded.</p>
            <div className="enter2" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link className="btn btn-p" to="/partners">Join us
                <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d={ICONS.arrowRight}></path></svg>
              </Link>
              <Link className="btn btn-s" to="/about">Read our story</Link>
            </div>
          </div>
          <div className="founder-duo" style={{ position: 'relative', height: '560px' }}>
            <img className="ph" src={FOUNDERS[0].image} alt={FOUNDERS[0].alt} style={{ position: 'absolute', left: '0', top: '0', width: '62%', height: '440px', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '50% 25%' }} />
            <img className="ph" src={FOUNDERS[1].image} alt={FOUNDERS[1].alt} style={{ position: 'absolute', right: '0', bottom: '0', width: '54%', height: '380px', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '50% 25%', border: '6px solid #EEE4D7' }} />
          </div>
        </div>
      </section>

      {/* PROFILES */}
      <FounderProfile founder={FOUNDERS[0]} background="#E6D8C6" />
      <FounderProfile founder={FOUNDERS[1]} flipped background="#EEE4D7" />

      {/* WHY WE BUILT HESTIA */}
      <section className="sec" style={{ padding: '112px 32px', background: '#E6D8C6' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '64px', alignItems: 'end' }}>
            <h2 style={{ margin: '0', fontFamily: SERIF, fontWeight: '700', fontSize: '52px', lineHeight: '1.08' }}>Why we built HESTIA</h2>
            <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.7', color: '#5E4A3E' }}>In every community we worked in, people wanted to participate. But without visible rewards, without verification, without infrastructure, participation faded. HESTIA is the system those communities were missing.</p>
          </div>
          <div className="story" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: '16px' }}>
            {STORY.map((s, i) => (
              <div key={s.title} className="lift cyc" style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '12px', minHeight: '300px', padding: '130px 24px 28px', borderRadius: '16px', background: '#2A1810', border: '1px solid rgba(246,239,230,0.08)', boxSizing: 'border-box' }}>
                <svg className="cyc-icon" width="110" height="110" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true" style={{ position: 'absolute', top: '24px', left: '24px', opacity: '0.22', zIndex: '0' }}><path d={s.icon}></path></svg>
                <span style={{ position: 'relative', zIndex: '1', fontSize: '13px', fontWeight: '600', letterSpacing: '0.14em', color: '#F08A55' }}>{`0${i + 1}`}</span>
                <span style={{ position: 'relative', zIndex: '1', fontFamily: SERIF, fontWeight: '700', fontSize: '26px', color: '#FFF8F1' }}>{s.title}</span>
                <span style={{ position: 'relative', zIndex: '1', fontSize: '16px', lineHeight: '1.6', color: '#CDBFAF' }}>{s.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sec" style={{ padding: '128px 32px', background: '#1C0D06', color: '#F6EFE6' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', textAlign: 'center' }}>
          <h2 style={{ margin: '0', fontFamily: SERIF, fontWeight: '700', fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: '1.06', color: '#FFF8F1' }}>Build the next district with us</h2>
          <p style={{ margin: '0', maxWidth: '52ch', fontSize: '19px', lineHeight: '1.7', color: '#CDBFAF' }}>Bring your school, business or nonprofit in, or help fund the next community event.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            <Link className="btn btn-p btn-lg" to="/partners">Join us
              <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d={ICONS.arrowRight}></path></svg>
            </Link>
            <Link className="btn btn-l btn-lg" to="/donate">Donate</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
