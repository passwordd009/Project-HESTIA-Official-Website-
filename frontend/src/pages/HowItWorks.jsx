import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { ICONS } from '../data/icons';
import './HowItWorks.css';

const I = ICONS;

const light = (o) => ({ bg: '#F6EFE6', fg: '#1C0D06', muted: '#5E4A3E', border: 'rgba(28,13,6,0.14)', iconColor: '#A04516', btnClass: 'btn-s', featured: false, ...o });
const dark = (o) => ({ bg: '#1C0D06', fg: '#FFF8F1', muted: '#CDBFAF', border: 'rgba(246,239,230,0.16)', iconColor: '#F08A55', btnClass: 'btn-p', featured: true, ...o });

const BUSINESS_PACKAGES = [
  light({ icon: I.pin, name: 'Listing', who: 'Get found by residents in your district.', price: '[PRICE] / month', items: ['Business profile on Ember', 'Shown when residents discover their district', 'Listed in district event guides'] }),
  dark({ icon: I.store, name: 'Rewards Partner', who: 'Turn first visits into regular customers.', price: '[PRICE] / month', items: ['Everything in Listing', 'Offer Business Points to reward loyal customers', 'Accept Community Points from residents'] }),
  light({ icon: I.cal, name: 'Event Sponsor', who: 'Show up where your neighbors gather.', price: '[PRICE] / event', items: ['Everything in Rewards Partner', 'Space at district events', 'Recognition as an event sponsor'] }),
];

const PROGRAM_PACKAGES = [
  light({ icon: I.teach, name: 'Listed Program', who: 'For nonprofits and school programs that already run activities.', price: '[PRICE]', items: ['Program profile on Ember', 'Enrollment under one or more domains', 'Participants earn Community Points'] }),
  dark({ icon: I.handshake, name: 'HESTIA-Led Program', who: 'Run a program with Project HESTIA at district events.', price: '[PRICE]', items: ['Everything in Listed Program', 'Co-hosted at district events', 'Help with outreach and enrollment'] }),
];

const icons = { cal: I.cal, store: I.store, coins: I.coins, heart: I.heart, cycle: I.cycle };

const cycle = [
  { icon: I.cal, title: 'Host', body: 'An event is held in a district, bringing its schools, businesses, nonprofits, and residents together.', arrow: true },
  { icon: I.coins, title: 'Earn and spend', body: 'Every event is an opportunity to spend and earn community points.', arrow: true },
  { icon: I.handCoins, title: 'Fund the next', body: 'Each event fundraises for the next one, so the work keeps going.', arrow: false },
];

const values = [
  { icon: I.handshake, label: 'Bond' },
  { icon: I.heart, label: 'Give back' },
  { icon: I.cycle, label: 'Strengthen' },
  { icon: I.trend, label: 'Develop' },
];

const domains = [
  { icon: I.barbell, label: 'Fitness' },
  { icon: I.brief, label: 'Career development' },
  { icon: I.cap, label: 'Education' },
  { icon: I.people, label: 'Civic engagement' },
];

export default function HowItWorks() {
  // Packages toggle: businesses or programs.
  const [pkg, setPkg] = useState('biz');
  const isBiz = pkg === 'biz';

  const isProg = !isBiz;
  const packages = isBiz ? BUSINESS_PACKAGES : PROGRAM_PACKAGES;
  const pkgCols = isBiz ? 'repeat(3, minmax(0,1fr))' : 'repeat(2, minmax(0,1fr))';
  const pkgGridClass = 'g3';
  const bizPressed = isBiz ? 'true' : 'false';
  const progPressed = isBiz ? 'false' : 'true';
  const bizBg = isBiz ? '#1C0D06' : 'transparent';
  const bizFg = isBiz ? '#FFF8F1' : '#1C0D06';
  const progBg = isBiz ? 'transparent' : '#1C0D06';
  const progFg = isBiz ? '#1C0D06' : '#FFF8F1';
  const showBiz = () => setPkg('biz');
  const showProg = () => setPkg('prog');

  return (
    <div className="page-how-it-works" style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#1C0D06', background: '#EEE4D7' }}>
    
    
    
    {/* HERO */}
    <section className="sec" style={{ padding: '80px 32px 96px' }}>
    <div className="g2" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '64px', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
    <h1 className="h1" style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '60px', lineHeight: '1.08' }}>How It Works</h1>
    <p style={{ margin: '0', maxWidth: '44ch', fontSize: '20px', lineHeight: '1.6', color: '#5E4A3E' }}>Project HESTIA runs events and programs inside a district. Ember turns what people do at events into points they can spend close to home.</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
    <a className="btn btn-p" href="#packages">See packages</a>
    <a className="btn btn-s" href="#system">How the system works</a>
    </div>
    </div>
    <img className="ph" src="/images/outdoor-show.jpg" alt="A crowd enjoying an outdoor show at sunset" style={{ height: '500px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '50% 60%' }} />
    </div>
    </section>
    
    {/* SYSTEM */}
    <section id="system" className="sec" style={{ padding: '112px 32px', background: '#1C0D06', color: '#F6EFE6' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '64px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '720px' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '52px', lineHeight: '1.08', color: '#FFF8F1' }}>How our system works</h2>
    <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.7', color: '#CDBFAF' }}>Two places in the same district sit on opposite ends of one loop. An event is where it starts. Residents earn and spend at local businesses, and those businesses donate back to fund the next event.</p>
    </div>
    
    <div className="loop" aria-label="Diagram: a hosted event and a local business on opposite ends of a loop. From the event, residents earn and spend at the local business. The local business donates back to fund the next event." role="img">
    {/* Desktop loop: two physical places on opposite ends of a circle. */}
    <div className="loop-desk" style={{ position: 'relative', width: '100%', maxWidth: '640px', margin: '96px auto', aspectRatio: '1 / 1' }}>
    <svg viewBox="0 0 640 640" width="100%" height="100%" aria-hidden="true" style={{ position: 'absolute', inset: '0', overflow: 'visible' }}>
    <path className="loop-arc" d="M 103 217.4 A 240 240 0 0 1 537 217.4" fill="none" stroke="#F08A55" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 10"></path>
    <path className="loop-mover" d="M -10 -8 L 10 0 L -10 8 Z" fill="#F08A55"><animateMotion dur="4.2s" begin="0s" repeatCount="indefinite" rotate="auto" path="M 103 217.4 A 240 240 0 0 1 537 217.4"></animateMotion></path>
    </svg>
    <svg viewBox="0 0 640 640" width="100%" height="100%" aria-hidden="true" style={{ position: 'absolute', inset: '0', overflow: 'visible' }}>
    <path className="loop-arc" d="M 537 422.6 A 240 240 0 0 1 103 422.6" fill="none" stroke="#F08A55" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 10"></path>
    <path className="loop-mover" d="M -10 -8 L 10 0 L -10 8 Z" fill="#F08A55"><animateMotion dur="4.2s" begin="0s" repeatCount="indefinite" rotate="auto" path="M 537 422.6 A 240 240 0 0 1 103 422.6"></animateMotion></path>
    </svg>
    
    <div className="loop-node" style={{ left: '12.5%' }}>
    <svg width="40" height="40" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d={icons.cal}></path></svg>
    <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '26px', lineHeight: '1.1', color: '#FFF8F1' }}>Hosted event</span>
    <span style={{ fontSize: '14px', lineHeight: '1.4', color: '#CDBFAF' }}>A gathering in the district</span>
    </div>
    <div className="loop-node" style={{ left: '87.5%' }}>
    <svg width="40" height="40" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d={icons.store}></path></svg>
    <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '26px', lineHeight: '1.1', color: '#FFF8F1' }}>Local business</span>
    <span style={{ fontSize: '14px', lineHeight: '1.4', color: '#CDBFAF' }}>A shop in the same district</span>
    </div>
    
    <div className="loop-label" style={{ top: '12.5%', transform: 'translate(-50%, calc(-100% + 21px))' }}>
    <span className="loop-note">Residents earn community points at the event and spend them at participating local businesses.</span>
    <span className="loop-pill"><svg width="20" height="20" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d={icons.coins}></path></svg>Earn and spend</span>
    </div>
    <div className="loop-label" style={{ top: '87.5%', transform: 'translate(-50%, -21px)' }}>
    <span className="loop-pill"><svg width="20" height="20" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d={icons.heart}></path></svg>Donate</span>
    <span className="loop-note">Businesses donate back to fund the next event.</span>
    </div>
    </div>
    
    {/* Phone layout: the same loop, stacked. */}
    <div className="loop-mob" style={{ display: 'none', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center' }}>
    <div className="loop-node loop-node-m">
    <svg width="34" height="34" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d={icons.cal}></path></svg>
    <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '24px', color: '#FFF8F1' }}>Hosted event</span>
    </div>
    <span className="loop-pill"><svg width="18" height="18" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d={icons.coins}></path></svg>Earn and spend</span>
    <svg width="26" height="26" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
    <div className="loop-node loop-node-m">
    <svg width="34" height="34" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d={icons.store}></path></svg>
    <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '24px', color: '#FFF8F1' }}>Local business</span>
    </div>
    <span className="loop-pill"><svg width="18" height="18" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d={icons.heart}></path></svg>Donate</span>
    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', color: '#CDBFAF' }}><svg width="22" height="22" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d={icons.cycle}></path></svg>Back to the next event</span>
    </div>
    </div>
    
    <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)', gap: '56px', alignItems: 'center', paddingTop: '24px', borderTop: '1px solid rgba(246,239,230,0.14)' }}>
    <p style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', fontSize: '34px', lineHeight: '1.25', color: '#FFF8F1' }}>We bond, give back, strengthen, and develop communities.</p>
    <div className="g4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: '16px' }}>
    {values.map((v, vIndex) => (<Fragment key={vIndex}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
    <svg width="30" height="30" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d={v.icon}></path></svg>
    <span style={{ fontSize: '18px', fontWeight: '600', color: '#FFF8F1' }}>{v.label}</span>
    </div>
    </Fragment>))}
    </div>
    </div>
    </div>
    </section>
    
    {/* PACKAGES */}
    <section id="packages" className="sec" style={{ padding: '112px 32px' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
    <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: '32px', alignItems: 'end' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '52px', lineHeight: '1.08' }}>Packages</h2>
    <p style={{ margin: '0', maxWidth: '58ch', fontSize: '19px', lineHeight: '1.7', color: '#5E4A3E' }}>Local businesses and program providers join a district through a package. Each one connects you to residents through Ember.</p>
    </div>
    <div role="group" aria-label="Package type" style={{ display: 'inline-flex', padding: '5px', borderRadius: '999px', background: '#E2D3BF', gap: '4px' }}>
    <button type="button" className="seg" aria-pressed={bizPressed} onClick={showBiz} style={{ minHeight: '44px', padding: '0 22px', border: '0', borderRadius: '999px', background: bizBg, color: bizFg, fontFamily: "'Inter', system-ui, sans-serif", fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>For local businesses</button>
    <button type="button" className="seg" aria-pressed={progPressed} onClick={showProg} style={{ minHeight: '44px', padding: '0 22px', border: '0', borderRadius: '999px', background: progBg, color: progFg, fontFamily: "'Inter', system-ui, sans-serif", fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>Programs</button>
    </div>
    </div>
    
    <div className={pkgGridClass} style={{ display: 'grid', gridTemplateColumns: pkgCols, gap: '20px', alignItems: 'stretch' }}>
    {packages.map((p, pIndex) => (<Fragment key={pIndex}>
    <article className="enter" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '36px 32px', borderRadius: '16px', background: p.bg, color: p.fg, border: `1px solid ${p.border}` }}>
    <svg width="32" height="32" viewBox="0 0 256 256" fill={p.iconColor} aria-hidden="true"><path d={p.icon}></path></svg>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <h3 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '30px' }}>{p.name}</h3>
    <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: p.muted }}>{p.who}</p>
    </div>
    <span style={{ fontSize: '22px', fontWeight: '600' }}><br /></span>
    <ul style={{ listStyle: 'none', margin: '0', padding: '20px 0 0', borderTop: `1px solid ${p.border}`, display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: '1' }}>
    {p.items.map((it, itIndex) => (<Fragment key={itIndex}>
    <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '16px', lineHeight: '1.5' }}><svg width="20" height="20" viewBox="0 0 256 256" fill={p.iconColor} aria-hidden="true" style={{ flexShrink: '0', marginTop: '1px' }}><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg><span>{it}</span></li>
    </Fragment>))}
    </ul>
    <Link className={`btn ${p.btnClass}`} to="/districts" style={{ alignSelf: 'flex-start' }}>Connect your district</Link>
    </article>
    </Fragment>))}
    </div>
    
    {isProg && (<>
    <div className="enter" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px 24px', padding: '24px 28px', borderRadius: '16px', background: '#E2D3BF' }}>
    <span style={{ fontWeight: '600' }}>Programs enroll by domain:</span>
    {domains.map((d, dIndex) => (<Fragment key={dIndex}>
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '16px' }}><svg width="22" height="22" viewBox="0 0 256 256" fill="#A04516" aria-hidden="true"><path d={d.icon}></path></svg>{d.label}</span>
    </Fragment>))}
    </div>
    </>)}
    </div>
    </section>
    
    {/* POINTS */}
    <section className="sec" style={{ padding: '104px 32px', background: '#E6D8C6' }}>
    <div className="g2" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)', gap: '72px', alignItems: 'center' }}>
    <img className="ph" src="/images/donation-stand.jpg" alt="Volunteers serving food at a community donation stand" style={{ height: '520px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '50% 62%' }} />
    <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '48px', lineHeight: '1.08' }}>Two kinds of points</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '24px', borderTop: '1px solid rgba(28,13,6,0.15)' }}>
    <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><svg width="28" height="28" viewBox="0 0 256 256" fill="#A04516" aria-hidden="true"><path d={ICONS.store}></path></svg><h3 style={{ margin: '0', fontSize: '22px', fontWeight: '600' }}>Business Points</h3></span>
    <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#5E4A3E' }}>Earned by supporting participating local businesses. Redeemed as loyalty rewards at those businesses.</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '24px', borderTop: '1px solid rgba(28,13,6,0.15)' }}>
    <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><svg width="28" height="28" viewBox="0 0 256 256" fill="#A04516" aria-hidden="true"><path d={ICONS.handCoins}></path></svg><h3 style={{ margin: '0', fontSize: '22px', fontWeight: '600' }}>Community Points</h3></span>
    <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#5E4A3E' }}>Earned through eligible nonprofit and HESTIA-led programs and events. Used with participating businesses in the local ecosystem.</p>
    </div>
    </div>
    </div>
    </section>
    
    {/* CTA */}
    <section className="sec" style={{ padding: '120px 32px' }}>
    <div className="g2" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)', gap: '48px', alignItems: 'center' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '52px', lineHeight: '1.08' }}>Bring Project HESTIA to your district</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
    <Link className="btn btn-p" to="/districts">Connect your district</Link>
    <Link className="btn btn-s" to="/donate">Donate</Link>
    </div>
    </div>
    </section>
    
    
    
    </div>
  );
}
