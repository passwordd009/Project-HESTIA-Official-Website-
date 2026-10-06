import { Fragment } from 'react';
import { ICONS } from '../data/icons';
import { useInquiryForm } from '../lib/useInquiryForm';
import './Districts.css';

const I = ICONS;

const domains = [
  { icon: I.barbell, label: 'Fitness', body: 'Classes, sports and wellness programs.', alt: 'neighbors stretching together at an outdoor fitness class', img: '/images/fitness-class.jpg', pos: '30% 25%' },
  { icon: I.brief, label: 'Career development', body: 'Workshops, mentoring and job skills.', alt: 'a local business owner', img: '/images/business-owner.jpg', pos: '60% 40%' },
  { icon: I.cap, label: 'Education', body: 'Tutoring, clubs and after-school learning.', alt: 'students studying together', img: '/images/education-students.jpg', pos: '50% 50%' },
  { icon: I.people, label: 'Civic engagement', body: 'Volunteering, meetings and neighborhood projects.', alt: 'a neighborhood meeting', img: '/images/civic-meeting.jpg', pos: '30% 50%' },
];

const members = [
  { icon: I.cap, title: 'School programs', body: 'Bring students and families in, and run programs residents can join.', rule: 'rgba(28,13,6,0.15)' },
  { icon: I.store, title: 'Local businesses', body: 'Offer rewards and accept points, keeping spending close to home.', rule: 'rgba(28,13,6,0.15)' },
  { icon: I.handHeart, title: 'Nonprofits', body: 'Run the programs and volunteer opportunities where residents earn points.', rule: 'rgba(28,13,6,0.15)' },
  { icon: I.people, title: 'Residents', body: 'Take part, earn points and spend them in their own district.', rule: '#B4501E' },
];

export default function Districts() {
  const form = useInquiryForm('/api/district-inquiry', {
    name: '',
    email: '',
    connectingAs: 'A school or school program',
    area: '',
    message: '',
  });

  return (
    <div className="page-districts" style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#1C0D06', background: '#EEE4D7' }}>
    
    
    
    {/* HERO */}
    <section className="sec" style={{ padding: '80px 32px 96px' }}>
    <div className="g2" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)', gap: '64px', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
    <h1 className="h1" style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '60px', lineHeight: '1.08' }}>Connect your district</h1>
    <p style={{ margin: '0', maxWidth: '44ch', fontSize: '20px', lineHeight: '1.6', color: '#5E4A3E' }}>A district brings one neighborhood's schools, businesses, nonprofits and residents into the same pool. Bring Project HESTIA to yours.</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
    <a className="btn btn-p" href="#connect">Connect your district</a>
    <a className="btn btn-s" href="#what">What is a district?</a>
    </div>
    </div>
    <img className="ph" src="/images/neighborhood-street.jpg" alt="A neighborhood brownstone street" style={{ height: '500px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '85% 60%' }} />
    </div>
    </section>
    
    {/* WHAT IS A DISTRICT */}
    <section id="what" className="sec" style={{ padding: '104px 32px 112px' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '88px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '720px' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '52px', lineHeight: '1.08' }}>What is a district?</h2>
    <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.7', color: '#5E4A3E' }}>A district is one neighborhood, organized around its people and the places they already go. It comes together in three ways.</p>
    </div>
    
    <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)', gap: '64px', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <span style={{ width: '56px', height: '56px', borderRadius: '999px', background: '#1C0D06', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="26" height="26" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d={ICONS.people}></path></svg></span>
    <h3 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '36px', lineHeight: '1.12' }}>A community pool</h3>
    <p style={{ margin: '0', maxWidth: '52ch', fontSize: '18px', lineHeight: '1.7', color: '#5E4A3E' }}>The spending, participation and rewards that happen in one neighborhood are counted together, so the value created there stays visible and stays local.</p>
    </div>
    <img className="ph" src="/images/economy-fruit-stand.jpg" alt="A busy neighborhood fruit market" style={{ height: '400px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '30% 60%' }} />
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '640px' }}>
    <span style={{ width: '56px', height: '56px', borderRadius: '999px', background: '#1C0D06', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="26" height="26" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d={ICONS.teach}></path></svg></span>
    <h3 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '36px', lineHeight: '1.12' }}>Domains for program enrollment</h3>
    <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#5E4A3E' }}>Programs in a district are organized into four domains. Residents enroll by domain, and every program provider knows where it fits.</p>
    </div>
    <div className="g4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: '16px' }}>
    {domains.map((d, dIndex) => (<Fragment key={dIndex}>
    <div style={{ display: 'flex', flexDirection: 'column', borderRadius: '16px', overflow: 'hidden', background: '#F6EFE6', border: '1px solid rgba(28,13,6,0.1)' }}>
    <img className="ph" src={d.img} alt={d.alt} style={{ borderRadius: '0', height: '220px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: d.pos }} />
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '20px 22px 24px' }}>
    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><svg width="24" height="24" viewBox="0 0 256 256" fill="#A04516" aria-hidden="true"><path d={d.icon}></path></svg><span style={{ fontSize: '18px', fontWeight: '600' }}>{d.label}</span></span>
    <span style={{ fontSize: '15px', lineHeight: '1.55', color: '#5E4A3E' }}>{d.body}</span>
    </div>
    </div>
    </Fragment>))}
    </div>
    </div>
    
    <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,0.85fr) minmax(0,1.15fr)', gap: '56px', alignItems: 'center', padding: '56px', borderRadius: '16px', background: '#E6D8C6' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <span style={{ width: '56px', height: '56px', borderRadius: '999px', background: '#1C0D06', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="26" height="26" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d={ICONS.pin}></path></svg></span>
    <h3 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '36px', lineHeight: '1.12' }}>Who is tied to a district</h3>
    <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#5E4A3E' }}>The organizations already serving a neighborhood become the district, with residents at the center.</p>
    </div>
    <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: '32px 40px' }}>
    {members.map((m, mIndex) => (<Fragment key={mIndex}>
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
    <svg width="28" height="28" viewBox="0 0 256 256" fill="#A04516" aria-hidden="true" style={{ flexShrink: '0', marginTop: '2px' }}><path d={m.icon}></path></svg>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
    <h4 style={{ margin: '0', fontSize: '19px', fontWeight: '600' }}>{m.title}</h4>
    <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#5E4A3E' }}>{m.body}</p>
    </div>
    </div>
    </Fragment>))}
    </div>
    </div>
    
    </div>
    </section>
    
    {/* WHY */}
    <section className="sec" style={{ padding: '112px 32px', background: '#1C0D06', color: '#F6EFE6' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '56px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '720px' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '52px', lineHeight: '1.08', color: '#FFF8F1' }}>Why districts and domains</h2>
    <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.7', color: '#CDBFAF' }}>A small, defined area makes it easier for money to stay local and for programs to show what they change.</p>
    </div>
    <img className="ph" src="/images/bakery-counter.jpg" alt="A customer and owner at a neighborhood shop" style={{ height: '380px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '50% 0%' }} />
    <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: '56px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '28px', borderTop: '1px solid rgba(246,239,230,0.16)' }}>
    <svg width="32" height="32" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d={ICONS.cycle}></path></svg>
    <h3 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '30px', color: '#FFF8F1' }}>Wealth circulation radius</h3>
    <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#CDBFAF' }}>When rewards and programs are tied to a district, money travels a shorter distance. Points earned at one neighborhood business are spent at another nearby, so more of each dollar circulates locally before it leaves.</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '28px', borderTop: '1px solid rgba(246,239,230,0.16)' }}>
    <svg width="32" height="32" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d={ICONS.trend}></path></svg>
    <h3 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '30px', color: '#FFF8F1' }}>Community development effectiveness</h3>
    <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#CDBFAF' }}>Organizing programs by domain inside a district shows what residents join, what is missing, and where support makes the most difference. Partners and funders can focus on one place and see the result.</p>
    </div>
    </div>
    </div>
    </section>
    
    {/* CONNECT FORM */}
    <section id="connect" className="sec" style={{ padding: '112px 32px 120px' }}>
    <div className="g2" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)', gap: '72px', alignItems: 'start' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '52px', lineHeight: '1.08' }}>Bring HESTIA to your neighborhood</h2>
    <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.7', color: '#5E4A3E' }}>Tell us where you are and how you're involved. We'll follow up about starting a district there.</p>
    <img className="ph" src="/images/stacking-hands.jpg" alt="Neighbors stacking hands together under an open sky" style={{ height: '300px', marginTop: '8px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '50% 50%' }} />
    </div>
    
    <div style={{ padding: '40px', borderRadius: '16px', background: '#F6EFE6', border: '1px solid rgba(28,13,6,0.1)' }}>
    {form.sent && (<>
    <div className="enter" role="status" style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px 0' }}>
    <svg width="44" height="44" viewBox="0 0 256 256" fill="#A04516" aria-hidden="true"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
    <h3 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '32px' }}>Thanks, we got it.</h3>
    <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#5E4A3E' }}>Someone from Project HESTIA will reach out about your district.</p>
    <button type="button" className="btn btn-s" onClick={form.reset} style={{ alignSelf: 'flex-start' }}>Send another</button>
    </div>
    </>)}
    {!form.sent && (<>
    <form onSubmit={form.submit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
    <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '18px' }}>
    <div className="fld"><label htmlFor="d-name">Name</label><input id="d-name" name="name" className="inp" type="text" autoComplete="name" required value={form.values.name} onChange={form.update} /></div>
    <div className="fld"><label htmlFor="d-email">Email</label><input id="d-email" name="email" className="inp" type="email" autoComplete="email" required value={form.values.email} onChange={form.update} /></div>
    </div>
    <div className="fld">
    <label htmlFor="d-role">I'm connecting as</label>
    <select id="d-role" name="connectingAs" className="inp" value={form.values.connectingAs} onChange={form.update}>
    <option>A school or school program</option>
    <option>A local business</option>
    <option>A nonprofit</option>
    <option>A resident</option>
    <option>Other</option>
    </select>
    </div>
    <div className="fld">
    <label htmlFor="d-area">Neighborhood or district</label>
    <input id="d-area" name="area" className="inp" type="text" required value={form.values.area} onChange={form.update} />
    <span className="help">The area you'd like Project HESTIA to serve.</span>
    </div>
    <div className="fld">
    <label htmlFor="d-msg">Anything else? (optional)</label>
    <textarea id="d-msg" name="message" className="inp" rows="4" style={{ resize: 'vertical' }} value={form.values.message} onChange={form.update}></textarea>
    </div>
    {form.error && <p className="form-error" role="alert">{form.error}</p>}
    <button type="submit" className="btn btn-p" disabled={form.sending} style={{ alignSelf: 'flex-start' }}>{form.sending ? 'Sending…' : 'Connect your district'}</button>
    </form>
    </>)}
    </div>
    </div>
    </section>
    
    
    
    </div>
  );
}
