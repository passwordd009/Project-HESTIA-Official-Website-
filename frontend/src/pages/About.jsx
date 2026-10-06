import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ICONS } from '../data/icons';
import './About.css';

// "The Participation Gap" tabs: one photo per area.
const AREA_IMAGES = {
  econ: { src: '/images/economy-fruit-stand.jpg', pos: '0% 70%', alt: 'Fresh fruit stand at a busy neighborhood market' },
  edu: { src: '/images/education-students.jpg', pos: '50% 50%', alt: 'Students writing together around a table of school supplies' },
  civic: { src: '/images/civic-meeting.jpg', pos: '20% 50%', alt: 'Residents raising cards to vote at a community meeting' },
  opp: { src: '/images/opportunity-idea-blocks.jpg', pos: '50% 55%', alt: 'Hands assembling wooden blocks into a lightbulb idea' },
};

// Pins on the Ember app mock-up: orange for local businesses, dark for events.
const MAP_PINS = [
  { kind: 'business', left: '22%', top: '30%' },
  { kind: 'business', left: '70%', top: '36%' },
  { kind: 'event', left: '48%', top: '42%' },
  { kind: 'business', left: '34%', top: '59%' },
  { kind: 'business', left: '79%', top: '63%' },
  { kind: 'event', left: '62%', top: '75%' },
  { kind: 'business', left: '20%', top: '81%' },
  { kind: 'event', left: '44%', top: '88%' },
];

const PIN_ICON = {
  business: 'M231.69,93.81,217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.81A7.94,7.94,0,0,0,24,96v16a40,40,0,0,0,16,32v72a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V144a40,40,0,0,0,16-32V96A7.94,7.94,0,0,0,231.69,93.81ZM88,112a24,24,0,0,1-35.12,21.26,7.88,7.88,0,0,0-1.82-1.06A24,24,0,0,1,40,112v-8H88Zm64,0a24,24,0,0,1-48,0v-8h48Zm64,0a24,24,0,0,1-11.07,20.2,8.08,8.08,0,0,0-1.8,1.05A24,24,0,0,1,168,112v-8h48Z',
  event: 'M111.49,52.63a15.8,15.8,0,0,0-26,5.77L33,202.78A15.83,15.83,0,0,0,47.76,224a16,16,0,0,0,5.46-1l144.37-52.5a15.8,15.8,0,0,0,5.78-26ZM65.14,161.13l19.2-52.79,63.32,63.32-52.8,19.2ZM160,72a37.8,37.8,0,0,1,3.84-15.58C169.14,45.83,179.14,40,192,40c6.7,0,11-2.29,13.65-7.21A22,22,0,0,0,208,23.94,8,8,0,0,1,224,24c0,12.86-8.52,32-32,32-6.7,0-11,2.29-13.65,7.21A22,22,0,0,0,176,72.06,8,8,0,0,1,160,72ZM136,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm101.66,82.34a8,8,0,1,1-11.32,11.31l-16-16a8,8,0,0,1,11.32-11.32Zm4.87-42.75-24,8a8,8,0,0,1-5.06-15.18l24-8a8,8,0,0,1,5.06,15.18Z',
};

function MapPin({ kind, left, top }) {
  const isEvent = kind === 'event';
  return (
    <span aria-hidden="true" title={isEvent ? 'Event' : 'Local business'} style={{ position: 'absolute', left, top, width: '26px', height: '26px', margin: '-30px 0 0 -13px', borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)', background: isEvent ? '#1C0D06' : '#D4652F', border: '2px solid #FFFFFF', boxShadow: '0 4px 10px -2px rgba(28,13,6,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>
      <svg width="13" height="13" viewBox="0 0 256 256" fill={isEvent ? '#F08A55' : '#FFFFFF'} style={{ transform: 'rotate(45deg)' }}><path d={PIN_ICON[kind]}></path></svg>
    </span>
  );
}

export default function About() {
  const [area, setArea] = useState('econ');

  const tab = (id) => {
    const on = id === area;
    return {
      pressed: on ? 'true' : 'false',
      bg: on ? '#1C0D06' : 'transparent',
      fg: on ? '#F6EFE6' : '#1C0D06',
      icon: on ? '#F08A55' : '#A04516',
      border: on ? '#1C0D06' : 'rgba(28,13,6,0.3)',
      pick: () => setArea(id),
    };
  };
  const econ = tab('econ');
  const edu = tab('edu');
  const civic = tab('civic');
  const opp = tab('opp');
  const show = { econ: area === 'econ', edu: area === 'edu', civic: area === 'civic', opp: area === 'opp' };
  const current = AREA_IMAGES[area];

  return (
    <div className="page-about" style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#1C0D06', background: '#EEE4D7' }}>
    
    
    
    
    {/* HERO */}
    <section className="sec" style={{ padding: '80px 32px 96px' }}>
    <div className="g2" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,1fr)', gap: '64px', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
    <h1 className="h1" style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '60px', lineHeight: '1.08', letterSpacing: '-0.01em', color: '#1C0D06' }}>About<br />Project HESTIA</h1>
    <p style={{ margin: '0', maxWidth: '44ch', fontSize: '20px', lineHeight: '1.6', color: '#5E4A3E' }}><span style={{ fontSize: '19px' }}>Support built by the Bronx, for everyone.</span></p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
    <Link className="btn btn-p" to="/donate">Donate</Link>
    <Link className="btn btn-s" to="/how-it-works"><span>Learn how we work<br /></span>
    <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d={ICONS.arrowRight}></path></svg>
    </Link>
    </div>
    </div>
    <div style={{ position: 'relative' }}>
    <div className="ph" role="img" aria-label="Project HESTIA logo" style={{ height: '560px', padding: '0', background: '#1C0D06', backgroundImage: 'none', alignItems: 'center', justifyContent: 'center' }}><img src="/images/hestia-mark.png" alt="" style={{ width: '74%', maxWidth: '440px', height: 'auto', display: 'block' }} /></div>
    <img className="ph float-ph" src="/images/volunteers-orange-shirts.jpg" alt="Two Project HESTIA volunteers in orange shirts" style={{ position: 'absolute', left: '-40px', bottom: '-40px', width: '200px', height: '200px', padding: '0', objectFit: 'cover', objectPosition: '50% 30%', border: '6px solid #EEE4D7' }} />
    </div>
    </div>
    </section>
    
    {/* WHAT WE DO */}
    <section className="sec" style={{ padding: '96px 32px' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '56px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '900px' }}>
    <p style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', fontSize: '32px', lineHeight: '1.35', color: '#1C0D06' }}>We are dedicated to uplifting low-income communities by their own hand.</p>
    <p style={{ margin: '0', maxWidth: '60ch', fontSize: '19px', lineHeight: '1.7', color: '#5E4A3E' }}>Our work creates spaces where people can discover organizations, support neighborhood businesses, participate in programs, volunteer, learn, and connect with the people around them.</p>
    </div>
    <div className="g4" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1.3fr)', gap: '20px', alignItems: 'end' }}>
    <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
    <img className="ph" src="/images/business-owner.jpg" alt="Owner of a neighborhood business" style={{ height: '360px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '60% 55%' }} />
    <figcaption style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600', fontSize: '16px' }}><svg width="22" height="22" viewBox="0 0 256 256" fill="#A04516" aria-hidden="true"><path d={ICONS.store}></path></svg>Local businesses</figcaption>
    </figure>
    <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
    <img className="ph" src="/images/nonprofit-volunteers.jpg" alt="Nonprofit volunteers at work" style={{ height: '300px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '66% 40%' }} />
    <figcaption style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600', fontSize: '16px' }}><svg width="22" height="22" viewBox="0 0 256 256" fill="#A04516" aria-hidden="true"><path d="M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM119.46,48A31.15,31.15,0,0,1,148.6,67a8,8,0,0,0,14.8,0,31.15,31.15,0,0,1,29.14-19C209.59,48,224,62.65,224,80c0,19.51-15.79,41.58-45.66,63.9l-11.09,2.55A28,28,0,0,0,140,112H100.68C92.050,100.36,88,90.12,88,80,88,62.65,102.41,48,119.46,48ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z"></path></svg>Nonprofits</figcaption>
    </figure>
    <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
    <img className="ph" src="/images/student-notebooks.jpg" alt="Students in a school program" style={{ height: '300px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '70% 35%' }} />
    <figcaption style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600', fontSize: '16px' }}><svg width="22" height="22" viewBox="0 0 256 256" fill="#A04516" aria-hidden="true"><path d={ICONS.cap}></path></svg>Schools</figcaption>
    </figure>
    <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
    <img className="ph" src="/images/neighborhood-street.jpg" alt="Residents talking on a neighborhood street" style={{ height: '360px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '100% 60%' }} />
    <figcaption style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600', fontSize: '16px' }}><svg width="22" height="22" viewBox="0 0 256 256" fill="#A04516" aria-hidden="true"><path d={ICONS.people}></path></svg>Residents</figcaption>
    </figure>
    </div>
    </div>
    </section>
    
    {/* FIRST ACTIVATION */}
    <section className="sec" style={{ padding: '32px 32px 112px' }}>
    <div className="g2" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1.7fr) minmax(0,1fr)', gap: '64px', alignItems: 'center' }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr)', gap: '16px' }}>
    <img className="ph" src="/images/make-me-a-plate-volunteers.jpg" alt="Two Project HESTIA volunteers giving a thumbs up at the Make Me a Plate table at the Comp Sci High block party" style={{ height: '460px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '50% 32%' }} />
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <img className="ph" src="/images/backpacks-bin.jpg" alt="A bin of bright backpacks ready to give out at the block party" style={{ height: '222px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '50% 55%' }} />
    <img className="ph" src="/images/volunteer-school-supplies.jpg" alt="A volunteer in an orange HESTIA shirt setting out school supplies" style={{ height: '222px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '37% 30%' }} />
    </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <span style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '0.14em', color: '#A04516' }}>OUR FIRST ACTIVATION</span>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '40px', lineHeight: '1.12' }}>Comp Sci High Block Party</h2>
    <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#5E4A3E' }}>Our first community activation included participating in Comp Sci High's annual block party, bringing together students, families, organizations, and community members.</p>
    </div>
    </div>
    </section>
    
    {/* PARTICIPATION GAP */}
    <section className="sec" style={{ padding: '112px 32px', background: '#E6D8C6' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
    <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '64px', alignItems: 'end' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '52px', lineHeight: '1.08' }}>The Participation Gap</h2>
    <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.7', color: '#5E4A3E' }}>Our communities are full of people willing to contribute. The problem is that participation does not always translate into recognition, opportunity, or tangible value.</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.7', color: '#5E4A3E' }}>People are already spending locally, attending programs, volunteering, learning new skills, and contributing to their neighborhoods. But these actions often happen separately.</p>
    <p style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontWeight: '600', fontSize: '28px', lineHeight: '1.25', color: '#A04516' }}>We want to connect them.</p>
    <Link className="btn btn-s" to="/districts" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>Explore districts
    <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d={ICONS.arrowRight}></path></svg>
    </Link>
    </div>
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <div role="group" aria-label="Choose an area" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
    <button type="button" className="tab" aria-pressed={econ.pressed} onClick={econ.pick} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', minHeight: '48px', padding: '0 22px', borderRadius: '999px', border: `1.5px solid ${econ.border}`, background: econ.bg, color: econ.fg, fontFamily: "'Inter', system-ui, sans-serif", fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
    <svg width="20" height="20" viewBox="0 0 256 256" fill={econ.icon} aria-hidden="true"><path d={ICONS.store}></path></svg>Economic</button>
    <button type="button" className="tab" aria-pressed={edu.pressed} onClick={edu.pick} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', minHeight: '48px', padding: '0 22px', borderRadius: '999px', border: `1.5px solid ${edu.border}`, background: edu.bg, color: edu.fg, fontFamily: "'Inter', system-ui, sans-serif", fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
    <svg width="20" height="20" viewBox="0 0 256 256" fill={edu.icon} aria-hidden="true"><path d={ICONS.cap}></path></svg>Education</button>
    <button type="button" className="tab" aria-pressed={civic.pressed} onClick={civic.pick} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', minHeight: '48px', padding: '0 22px', borderRadius: '999px', border: `1.5px solid ${civic.border}`, background: civic.bg, color: civic.fg, fontFamily: "'Inter', system-ui, sans-serif", fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
    <svg width="20" height="20" viewBox="0 0 256 256" fill={civic.icon} aria-hidden="true"><path d={ICONS.people}></path></svg>Civic &amp; Community Life</button>
    <button type="button" className="tab" aria-pressed={opp.pressed} onClick={opp.pick} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', minHeight: '48px', padding: '0 22px', borderRadius: '999px', border: `1.5px solid ${opp.border}`, background: opp.bg, color: opp.fg, fontFamily: "'Inter', system-ui, sans-serif", fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
    <svg width="20" height="20" viewBox="0 0 256 256" fill={opp.icon} aria-hidden="true"><path d={ICONS.trend}></path></svg>Opportunity</button>
    </div>
    
    <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', background: '#2A1810', boxShadow: '0 28px 56px -32px rgba(28,13,6,0.6)' }}>
    <img key={area} className="stage-art fade" src={current.src} alt={current.alt} style={{ height: '540px', width: '100%', display: 'block', objectFit: 'cover', objectPosition: current.pos }} />
    <div className="stage-panel" style={{ position: 'absolute', top: '40px', right: '40px', bottom: '40px', width: '440px', boxSizing: 'border-box', background: 'rgba(28,13,6,0.9)', border: '1px solid rgba(246,239,230,0.08)', borderRadius: '16px', padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#F6EFE6' }}>
    {show.econ && (<>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
    <span className="enter" style={{ display: 'block', width: '36px', height: '2px', background: '#D4652F' }}></span>
    <h3 className="enter" style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '40px', lineHeight: '1.1', color: '#F6EFE6' }}>Economic</h3>
    <p className="enter2" style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#E3D6C8' }}>Residents spend money every day, but more of that economic activity can be used to strengthen relationships between local businesses and the communities they serve.</p>
    </div>
    </>)}
    {show.edu && (<>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
    <span className="enter" style={{ display: 'block', width: '36px', height: '2px', background: '#D4652F' }}></span>
    <h3 className="enter" style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '40px', lineHeight: '1.1', color: '#F6EFE6' }}>Education</h3>
    <p className="enter2" style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#E3D6C8' }}>Students have access to programs, workshops, and opportunities, but maintaining awareness, participation, and long-term engagement can be difficult.</p>
    </div>
    </>)}
    {show.civic && (<>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
    <span className="enter" style={{ display: 'block', width: '36px', height: '2px', background: '#D4652F' }}></span>
    <h3 className="enter" style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '40px', lineHeight: '1.1', color: '#F6EFE6' }}>Civic &amp; Community Life</h3>
    <p className="enter2" style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#E3D6C8' }}>People want to contribute to their communities, but opportunities to volunteer, participate, and connect are often fragmented across different organizations and platforms.</p>
    </div>
    </>)}
    {show.opp && (<>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
    <span className="enter" style={{ display: 'block', width: '36px', height: '2px', background: '#D4652F' }}></span>
    <h3 className="enter" style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '40px', lineHeight: '1.1', color: '#F6EFE6' }}>Opportunity</h3>
    <p className="enter2" style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#E3D6C8' }}>People volunteer, attend programs, develop skills, support businesses, and contribute to their neighborhoods, but those actions rarely accumulate into something they can use.</p>
    </div>
    </>)}
    </div>
    </div>
    </div>
    </div>
    </section>
    
    {/* EMBER */}
    <section className="sec" style={{ padding: '120px 32px', background: '#1C0D06', color: '#F6EFE6' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
    <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '72px', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '56px', lineHeight: '1.05', color: '#FFF8F1' }}>Introducing Ember</h2>
    <p style={{ margin: '0', fontSize: '21px', lineHeight: '1.6', color: '#F6EFE6' }}>Ember is the platform Project HESTIA uses to connect community participation with local economic activity.</p>
    <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#CDBFAF' }}>Instead of treating local businesses, nonprofits, community programs, and residents as separate ecosystems, Ember brings them together in one place.</p>
    <Link className="btn btn-p" to="/how-it-works" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>See how Ember works
    <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d={ICONS.arrowRight}></path></svg>
    </Link>
    </div>
    <div className="ember-stage" style={{ position: 'relative', height: '560px' }}>
    <img className="ph ember-photo" src="/images/bakery-counter.jpg" alt="A resident at a neighborhood business" style={{ position: 'absolute', inset: '0 0 0 64px', width: 'calc(100% - 64px)', height: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '50% 45%' }} />
    <div className="ember-phone" role="img" aria-label="Ember app map showing local businesses and events near the user" style={{ position: 'absolute', left: '0', top: '27px', width: '240px', height: '506px', borderRadius: '32px', border: '6px solid #1C0D06', overflow: 'hidden', background: '#F6EFE6', boxSizing: 'border-box', boxShadow: '0 28px 56px -28px rgba(28,13,6,0.6)' }}>
    <img src="/images/ember-app-map.jpg" alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 0%' }} />
    <span style={{ position: 'absolute', top: '4.6%', right: '3%', height: '19px', padding: '0 8px 0 6px', borderRadius: '999px', background: '#FFFFFF', boxShadow: '0 3px 8px -3px rgba(28,13,6,0.35)', display: 'inline-flex', alignItems: 'center', gap: '3px', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '9.5px', fontWeight: '700', color: '#B4501E', whiteSpace: 'nowrap' }}><svg width="10" height="10" viewBox="0 0 256 256" fill="#F0A020" aria-hidden="true"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>1,250 pts</span>
    {MAP_PINS.map((pin) => <MapPin key={`${pin.left}-${pin.top}`} {...pin} />)}
    </div>
    </div>
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    <h3 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', fontSize: '28px', color: '#FFF8F1' }}>Residents can</h3>
    <div className="g4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: '40px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '24px', borderTop: '1px solid rgba(246,239,230,0.16)' }}>
    <svg width="32" height="32" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
    <h4 style={{ margin: '0', fontSize: '19px', fontWeight: '600', color: '#FFF8F1' }}>Discover their community</h4>
    <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.65', color: '#CDBFAF' }}>Find local businesses, nonprofits, programs, and community events nearby.</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '24px', borderTop: '1px solid rgba(246,239,230,0.16)' }}>
    <svg width="32" height="32" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d={ICONS.store}></path></svg>
    <h4 style={{ margin: '0', fontSize: '19px', fontWeight: '600', color: '#FFF8F1' }}>Earn Business Points</h4>
    <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.65', color: '#CDBFAF' }}>Support participating local businesses and earn rewards for continued loyalty.</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '24px', borderTop: '1px solid rgba(246,239,230,0.16)' }}>
    <svg width="32" height="32" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d="M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.930-41.56ZM119.46,48A31.15,31.15,0,0,1,148.6,67a8,8,0,0,0,14.8,0,31.15,31.15,0,0,1,29.14-19C209.59,48,224,62.65,224,80c0,19.51-15.79,41.58-45.66,63.9l-11.09,2.55A28,28,0,0,0,140,112H100.68C92.05,100.36,88,90.12,88,80,88,62.65,102.41,48,119.46,48ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z"></path></svg>
    <h4 style={{ margin: '0', fontSize: '19px', fontWeight: '600', color: '#FFF8F1' }}>Earn Community Points</h4>
    <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.65', color: '#CDBFAF' }}>Participate in eligible nonprofit and HESTIA-led programs and earn points that can be used within the local ecosystem.</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '24px', borderTop: '1px solid rgba(246,239,230,0.16)' }}>
    <svg width="32" height="32" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d={ICONS.trend}></path></svg>
    <h4 style={{ margin: '0', fontSize: '19px', fontWeight: '600', color: '#FFF8F1' }}>Turn participation into value</h4>
    <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.65', color: '#CDBFAF' }}>Make everyday community involvement part of a system that recognizes and rewards contribution.</p>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    {/* VISION */}
    <section className="sec" style={{ padding: '104px 32px 120px', background: '#E6D8C6' }}>
    <div className="g2" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.15fr)', gap: '80px', alignItems: 'start' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '52px', lineHeight: '1.08' }}>Our Vision</h2>
    <p style={{ margin: '0', fontSize: '21px', lineHeight: '1.6', color: '#1C0D06' }}>We believe stronger communities are built when participation becomes a cycle.</p>
    <Link className="btn btn-s" to="/partners" style={{ alignSelf: 'flex-start' }}>Meet our partners
    <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d={ICONS.arrowRight}></path></svg>
    </Link>
    <img className="ph" src="/images/neighbors-holding-hands.jpg" alt="Two neighbors holding hands on a city street" style={{ height: '400px', marginTop: '16px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '55% 60%' }} />
    </div>
    <ol style={{ listStyle: 'none', margin: '0', padding: '0 0 0 32px', borderLeft: '2px solid rgba(160,69,22,0.35)', display: 'flex', flexDirection: 'column', gap: '36px' }}>
    <li style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', fontSize: '28px', lineHeight: '1.3' }}>A resident discovers a local program.</li>
    <li style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', fontSize: '28px', lineHeight: '1.3' }}>That program creates a reason to participate.</li>
    <li style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', fontSize: '28px', lineHeight: '1.3' }}>Participation creates value.</li>
    <li style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', fontSize: '28px', lineHeight: '1.3' }}>That value encourages local spending.</li>
    <li style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', fontSize: '28px', lineHeight: '1.3' }}>Local businesses gain stronger relationships with residents.</li>
    <li style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '600', fontSize: '28px', lineHeight: '1.3', color: '#A04516' }}>And those relationships create more opportunities for the community.</li>
    </ol>
    </div>
    </section>
    
    {/* CLOSING */}
    <section className="sec" style={{ padding: '128px 32px' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '36px', textAlign: 'center' }}>
    <p style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: 'clamp(36px, 4.4vw, 56px)', lineHeight: '1.12', color: '#1C0D06' }}>Project HESTIA builds the ecosystem. Ember connects it.</p>
    <Link className="btn btn-p" to="/donate">Donate</Link>
    </div>
    </section>
    
    
    
    
    </div>
  );
}
