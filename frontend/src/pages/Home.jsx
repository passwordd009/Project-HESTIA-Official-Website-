import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { ICONS } from '../data/icons';
import './Home.css';

const I = ICONS;

const AUDIENCES = [
  { title: 'Residents', icon: I.people, href: '/how-it-works', img: '/images/residents-baked-goods.jpg', pos: '46% 30%', alt: 'Neighbors sharing baked goods at an outdoor community fair', body: 'Discover local programs, earn points and spend them close to home.' },
  { title: 'Local businesses', icon: I.store, href: '/how-it-works', img: '/images/butcher-shop.jpg', pos: '40% 30%', alt: 'A smiling butcher behind the counter of his shop', body: 'Reach neighbors through Ember and reward the customers who come back.' },
  { title: 'Schools', icon: I.cap, href: '/partners', img: '/images/classroom-students.jpg', pos: '38% 35%', alt: 'Students talking together in a classroom', body: 'Connect students and families to programs across your community.' },
  { title: 'Nonprofits', icon: I.handHeart, href: '/partners', img: '/images/food-table-volunteers.jpg', pos: '60% 30%', alt: 'Volunteers serving meals at a community food table', body: 'Grow participation in your programs and volunteer opportunities.' },
];

const cycle = [
  { icon: I.people, word: 'Participate', body: 'Join a program, an event or a local cause.', arrow: true },
  { icon: I.coins, word: 'Earn', body: 'Get points for purchases, programs and events.', arrow: true },
  { icon: I.bag, word: 'Spend', body: 'Use rewards at participating businesses.', arrow: true },
  { icon: I.cycle, word: 'Strengthen', body: 'Come back, support more, and do it again.', arrow: false },
];

const domains = [
  { icon: I.barbell, label: 'Fitness' },
  { icon: I.brief, label: 'Career development' },
  { icon: I.cap, label: 'Education' },
  { icon: I.people, label: 'Civic engagement' },
];

export default function Home() {
  // The hovered/focused audience card grows and shows its description.
  const [active, setActive] = useState(0);

  const audiences = AUDIENCES.map((a, i) => {
    const on = i === active;
    return {
      ...a,
      on,
      grow: on ? 1.8 : 1,
      titleSize: on ? '26px' : '20px',
      bodyDisplay: on ? 'block' : 'none',
      activate: () => setActive(i),
    };
  });

  return (
    <div className="page-home" style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#1C0D06', background: '#EEE4D7' }}>
    
    
    
    {/* HERO */}
    <section className="sec" style={{ position: 'relative', overflow: 'hidden', padding: '72px 32px 88px', height: '872px' }}>
    <img className="hero-logo" src="/images/hestia-mark.png" alt="" aria-hidden="true" style={{ position: 'absolute', top: '58px', right: 'max(32px, calc((100% - 1200px) / 2))', width: '680px', height: 'auto', opacity: '0.5', pointerEvents: 'none', zIndex: '0' }} />
    <div style={{ position: 'relative', zIndex: '1', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px', height: '1088px' }}>
    <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,1fr)', gap: '56px', alignItems: 'end' }}>
    <h1 className="hero-h enter" style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '76px', lineHeight: '1.04', letterSpacing: '-0.015em', color: '#1c0d06', paddingBottom: '4px' }}>Power your people with HESTIA.</h1>
    
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '541px' }}>
    <p className="enter2" style={{ margin: '0', fontSize: '19px', lineHeight: '1.6', color: '#5E4A3E' }}>Project HESTIA is dedicated to uplifting low-income communities by their own hand.</p>
    <div className="enter3" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
    <Link className="btn btn-p btn-lg" to="/partners">Join us
    <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d={ICONS.arrowRight}></path></svg>
    </Link>
    <Link className="btn btn-p btn-lg" to="/donate">Donate</Link>
    <Link className="btn btn-s btn-lg" to="/how-it-works">Learn how we work</Link>
    </div>
    </div><div className="strip enter4" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,1fr) minmax(0,1fr)', gap: '16px', alignItems: 'end' }}>
    <img className="ph" src="/images/bakery-counter.jpg" alt="A bakery owner helping a customer at the counter" style={{ height: '440px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '55% 40%' }} />
    <img className="ph" src="/images/students-laughing.jpg" alt="Two students laughing together at an outdoor table" style={{ height: '360px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '58% 40%' }} />
    <img className="ph" src="/images/park-cleanup.jpg" alt="Volunteers in matching shirts picking up litter in a park" style={{ height: '400px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '48% 45%' }} />
    </div>
    </div>
    </section>
    
    {/* WHO IT'S FOR */}
    <section className="sec" style={{ padding: '104px 32px' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '680px' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '52px', lineHeight: '1.08' }}>Find our fit with your needs.</h2>
    <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.7', color: '#5E4A3E' }}>Every mission is built for the people and organizations already in it.</p>
    </div>
    <div className="acc" style={{ display: 'flex', gap: '14px', height: '520px' }}>
    {audiences.map((a, aIndex) => (<Fragment key={aIndex}>
    <Link className="acc-item" to={a.href} onMouseEnter={a.activate} onFocus={a.activate} style={{ flexGrow: a.grow, flexBasis: '0', minWidth: '0', position: 'relative', display: 'flex', flexDirection: 'column', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', color: '#FFF8F1', background: '#2A1810' }}>
    <img src={a.img} alt={a.alt} style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: a.pos }} />
    <div style={{ position: 'relative', marginTop: 'auto', margin: 'auto 0 0', padding: '22px 20px 24px', borderRadius: '0', background: 'rgba(28,13,6,0.92)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <span style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '12px' }}>
    <span style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '0' }}>
    <svg width="26" height="26" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true" style={{ flexShrink: '0' }}><path d={a.icon}></path></svg>
    <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: a.titleSize, lineHeight: '1.15', color: '#FFFFFF', whiteSpace: 'nowrap', transition: 'font-size .4s cubic-bezier(.16,1,.3,1)' }}>{a.title}</span>
    </span>
    {a.on && (<>
    <svg className="acc-go" width="22" height="22" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true" style={{ flexShrink: '0', marginBottom: '4px' }}><path d={ICONS.arrowRight}></path></svg>
    </>)}
    </span>
    <span className="acc-body" style={{ display: a.bodyDisplay, fontSize: '16px', lineHeight: '1.6', color: '#FFFFFF' }}>{a.body}</span>
    </div>
    </Link>
    </Fragment>))}
    </div>
    </div>
    </section>
    
    {/* CYCLE */}
    <section className="sec" style={{ padding: '112px 32px', background: '#1C0D06', color: '#F6EFE6' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '56px' }}>
    <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)', gap: '56px', alignItems: 'end' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '52px', lineHeight: '1.08', color: '#FFF8F1' }}>Participation that comes back around</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
    <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#CDBFAF' }}>Ember connects what you already do in your neighborhood, so each action gives you a reason for the next.</p>
    <Link className="btn btn-l" to="/how-it-works">See how Ember works</Link>
    </div>
    </div>
    <div className="cycle" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr)', gap: '20px', alignItems: 'center' }}>
    {cycle.map((c, cIndex) => (<Fragment key={cIndex}>
    <div className="lift cyc" style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', gap: '12px', minHeight: '300px', padding: '150px 24px 28px', borderRadius: '16px', background: '#2A1810', border: '1px solid rgba(246,239,230,0.08)', height: '100%', boxSizing: 'border-box', textAlign: 'center' }}>
    <svg className="cyc-icon" width="120" height="120" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true" style={{ position: 'absolute', top: '26px', left: '50%', marginLeft: '-60px', opacity: '0.22', zIndex: '0' }}><path d={c.icon}></path></svg>
    <span style={{ position: 'relative', zIndex: '1', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '32px', color: '#FFF8F1' }}>{c.word}</span>
    <span style={{ position: 'relative', zIndex: '1', fontSize: '16px', lineHeight: '1.6', color: '#CDBFAF' }}>{c.body}</span>
    </div>
    {c.arrow && (<>
    <svg className="arr" width="26" height="26" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true" style={{ boxSizing: 'content-box', padding: '12px', margin: '-12px' }}><path d={ICONS.arrowRight}></path></svg>
    </>)}
    </Fragment>))}
    </div>
    </div>
    </section>
    
    {/* FIRST ACTIVATION */}
    <section className="sec" style={{ padding: '112px 32px 96px' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
    <img className="ph act-ph" src="/images/block-party-table.jpg" alt="A Project HESTIA volunteer at our table at the Comp Sci High block party" style={{ height: '500px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '50% 30%' }} />
    <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)', gap: '56px', alignItems: 'start' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '40px', lineHeight: '1.12' }}>It started at a block party</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
    <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#5E4A3E' }}>Our first community activation included participating in Comp Sci High's annual block party, bringing together students, families, organizations, and community members.</p>
    <Link className="btn btn-s" to="/about">Read our story</Link>
    </div>
    </div>
    </div>
    </section>
    
    {/* DISTRICT TEASER */}
    <section className="sec" style={{ padding: '96px 32px', background: '#E6D8C6' }}>
    <div className="g2" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '64px', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', alignItems: 'flex-start' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '48px', lineHeight: '1.08' }}>Is your neighborhood next?</h2>
    <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#5E4A3E' }}>Each district brings programs in four domains to one neighborhood, with local businesses and nonprofits close by.</p>
    <Link className="btn btn-p" to="/districts">Connect your district</Link>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: '14px' }}>
    {domains.map((d, dIndex) => (<Fragment key={dIndex}>
    <div className="lift" style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '26px', borderRadius: '16px', background: '#F6EFE6' }}>
    <svg width="30" height="30" viewBox="0 0 256 256" fill="#A04516" aria-hidden="true"><path d={d.icon}></path></svg>
    <span style={{ fontSize: '18px', fontWeight: '600' }}>{d.label}</span>
    </div>
    </Fragment>))}
    </div>
    </div>
    </section>
    
    {/* FINAL CTA */}
    <section className="sec" style={{ padding: '128px 32px', background: '#1C0D06', color: '#F6EFE6' }}>
    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', textAlign: 'center' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: '1.06', color: '#FFF8F1' }}>Help build the next district</h2>
    <p style={{ margin: '0', maxWidth: '52ch', fontSize: '19px', lineHeight: '1.7', color: '#CDBFAF' }}>Project HESTIA builds the ecosystem. Ember connects it. Bring your school, business or nonprofit in.</p>
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
