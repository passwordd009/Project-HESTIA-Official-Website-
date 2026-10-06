import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { ICONS } from '../data/icons';
import { useInquiryForm } from '../lib/useInquiryForm';

const I = ICONS;

const PARTNER_TYPES = [
  { id: 'school', label: 'Schools and school programs', icon: I.cap, title: 'Schools and school programs', alt: 'a student holding her notebooks', img: '/images/student-notebooks.jpg', pos: '70% 35%',
    bring: ['Students, families and school programs', 'Space and visibility for community events'],
    get: ['Programs listed on Ember under the right domain', 'Students earn Community Points for taking part', 'A direct line to local businesses and nonprofits'] },
  { id: 'biz', label: 'Local businesses', icon: I.store, title: 'Local businesses', alt: 'a shop owner greeting a customer', img: '/images/bakery-counter.jpg', pos: '50% 45%',
    bring: ['Rewards for loyal customers', 'A place to spend Community Points'],
    get: ['Visibility with residents through Ember', 'Business Points that bring customers back', 'A presence at district events'] },
  { id: 'np', label: 'Nonprofits', icon: I.handHeart, title: 'Nonprofits', alt: 'a nonprofit volunteer cleaning up the park', img: '/images/nonprofit-volunteers.jpg', pos: '66% 40%',
    bring: ['Programs and volunteer opportunities', 'Experience serving the neighborhood'],
    get: ['Enrollment and awareness through Ember', 'Participants earn Community Points', 'Co-hosting at district events'] },
];

export default function Partners() {
  const [type, setType] = useState('school');
  const form = useInquiryForm('/api/partner-inquiry', {
    orgName: '',
    contactName: '',
    role: '',
    email: '',
    phone: '',
    partnerType: 'School',
    neighborhood: '',
    interests: [],
    message: '',
  });

  const cur = PARTNER_TYPES.find((t) => t.id === type) || PARTNER_TYPES[0];
  const panel = [cur];
  const tabs = PARTNER_TYPES.map((t) => {
    const on = t.id === cur.id;
    return {
      label: t.label,
      icon: t.icon,
      pressed: on ? 'true' : 'false',
      bg: on ? '#1C0D06' : 'transparent',
      fg: on ? '#F6EFE6' : '#1C0D06',
      iconColor: on ? '#F08A55' : '#A04516',
      border: on ? '#1C0D06' : 'rgba(28,13,6,0.3)',
      pick: () => setType(t.id),
    };
  });

  return (
    <div className="page-partners" style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#1C0D06', background: '#EEE4D7' }}>
    
    
    
    {/* HERO */}
    <section className="sec" style={{ padding: '80px 32px 104px' }}>
    <div className="g2" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '64px', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
    <h1 className="h1" style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '60px', lineHeight: '1.08' }}>Our Partners</h1>
    <p style={{ margin: '0', maxWidth: '46ch', fontSize: '20px', lineHeight: '1.6', color: '#5E4A3E' }}>The schools, local businesses and nonprofits in a district bring the programs, places and rewards that Ember connects.</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
    <Link className="btn btn-p" to="/how-it-works">See partner packages</Link>
    <Link className="btn btn-s" to="/districts">Connect your district</Link>
    </div>
    <img className="ph" src="/images/partners-joining-hands.jpg" alt="Partners joining hands in a circle" style={{ height: '400px', width: '100%', padding: '0', marginTop: '12px', display: 'block', objectFit: 'cover', objectPosition: '70% 70%' }} />
    </div>
    <div className="pform" style={{ background: '#F6EFE6', borderRadius: '16px', padding: '36px', color: '#1C0D06', fontSize: '16px', boxShadow: '0 28px 56px -32px rgba(90,45,20,0.55)', border: '1px solid rgba(28,13,6,0.08)' }}>
    {form.sent && (<>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px 0' }}>
    <svg width="44" height="44" viewBox="0 0 256 256" fill="#A04516" aria-hidden="true"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
    <h3 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '32px' }}>Thanks for reaching out.</h3>
    <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#5E4A3E' }}>Our partnerships team will follow up within a few days to talk about how we can work together.</p>
    <button type="button" className="btn btn-s" onClick={form.reset} style={{ alignSelf: 'flex-start' }}>Submit another</button>
    </div>
    </>)}
    {!form.sent && (<>
    <form onSubmit={form.submit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '28px', lineHeight: '1.15' }}>Become a partner</h2>
    <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.6', color: '#5E4A3E' }}>Tell us about your organization and we'll be in touch.</p>
    </div>
    <div className="fld"><label htmlFor="p-org">Organization name</label><input id="p-org" name="orgName" className="inp" type="text" autoComplete="organization" required value={form.values.orgName} onChange={form.update} /></div>
    <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '16px' }}>
    <div className="fld"><label htmlFor="p-name">Contact name</label><input id="p-name" name="contactName" className="inp" type="text" autoComplete="name" required value={form.values.contactName} onChange={form.update} /></div>
    <div className="fld"><label htmlFor="p-role">Title or role</label><input id="p-role" name="role" className="inp" type="text" autoComplete="organization-title" value={form.values.role} onChange={form.update} /></div>
    </div>
    <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '16px' }}>
    <div className="fld"><label htmlFor="p-email">Email</label><input id="p-email" name="email" className="inp" type="email" autoComplete="email" required value={form.values.email} onChange={form.update} /></div>
    <div className="fld"><label htmlFor="p-phone">Phone (optional)</label><input id="p-phone" name="phone" className="inp" type="tel" autoComplete="tel" value={form.values.phone} onChange={form.update} /></div>
    </div>
    <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '16px' }}>
    <div className="fld">
    <label htmlFor="p-type">Partner type</label>
    <select id="p-type" name="partnerType" className="inp" value={form.values.partnerType} onChange={form.update}>
    <option>School</option>
    <option>Local business</option>
    <option>Nonprofit</option>
    <option>Other</option>
    </select>
    </div>
    <div className="fld"><label htmlFor="p-area">Neighborhood</label><input id="p-area" name="neighborhood" className="inp" type="text" placeholder="e.g. Soundview" value={form.values.neighborhood} onChange={form.update} /></div>
    </div>
    <fieldset style={{ border: '0', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <legend style={{ fontSize: '15px', fontWeight: '600', marginBottom: '10px', padding: '0' }}>How would you like to take part?</legend>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
    <label className="chk"><input type="checkbox" name="interests" value="Host programs" checked={form.values.interests.includes('Host programs')} onChange={form.update} />Host programs</label>
    <label className="chk"><input type="checkbox" name="interests" value="Offer rewards" checked={form.values.interests.includes('Offer rewards')} onChange={form.update} />Offer rewards</label>
    <label className="chk"><input type="checkbox" name="interests" value="Sponsor events" checked={form.values.interests.includes('Sponsor events')} onChange={form.update} />Sponsor events</label>
    <label className="chk"><input type="checkbox" name="interests" value="Volunteer" checked={form.values.interests.includes('Volunteer')} onChange={form.update} />Volunteer</label>
    </div>
    </fieldset>
    <div className="fld"><label htmlFor="p-msg">Anything else? (optional)</label><textarea id="p-msg" name="message" className="inp" rows="3" style={{ resize: 'vertical' }} value={form.values.message} onChange={form.update}></textarea></div>
    {form.error && <p className="form-error" role="alert">{form.error}</p>}
    <button type="submit" className="btn btn-p" disabled={form.sending} style={{ alignSelf: 'flex-start' }}>{form.sending ? 'Submitting…' : 'Submit partner info'}</button>
    </form>
    </>)}
    </div>
    </div>
    </section>
    
    {/* PARTNER TYPES */}
    <section className="sec" style={{ padding: '112px 32px', background: '#E6D8C6' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '720px' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '52px', lineHeight: '1.08' }}>Ways to partner</h2>
    <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.7', color: '#5E4A3E' }}>Every partner brings something to the district and gets something back through Ember.</p>
    </div>
    <div role="group" aria-label="Partner type" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
    {tabs.map((t, tIndex) => (<Fragment key={tIndex}>
    <button type="button" className="tab" aria-pressed={t.pressed} onClick={t.pick} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', minHeight: '48px', padding: '0 22px', borderRadius: '999px', border: `1.5px solid ${t.border}`, background: t.bg, color: t.fg, fontFamily: "'Inter', system-ui, sans-serif", fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
    <svg width="20" height="20" viewBox="0 0 256 256" fill={t.iconColor} aria-hidden="true"><path d={t.icon}></path></svg>{t.label}</button>
    </Fragment>))}
    </div>
    {panel.map((p) => (<Fragment key={p.id}>
    <div className="g2 fade" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)', gap: '56px', alignItems: 'stretch', padding: '24px', borderRadius: '16px', background: '#F6EFE6' }}>
    <img className="ph" src={p.img} alt={p.alt} style={{ minHeight: '420px', height: '100%', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: p.pos }} />
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '16px 16px 16px 0' }}>
    <h3 className="enter" style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '36px', lineHeight: '1.12' }}>{p.title}</h3>
    <div className="g2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '32px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
    <h4 style={{ margin: '0', fontSize: '15px', fontWeight: '600', color: '#A04516' }}>What you bring</h4>
    <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
    {p.bring.map((b, bIndex) => (<Fragment key={bIndex}>
    <li style={{ display: 'flex', gap: '10px', fontSize: '16px', lineHeight: '1.55' }}><svg width="20" height="20" viewBox="0 0 256 256" fill="#A04516" aria-hidden="true" style={{ flexShrink: '0', marginTop: '2px' }}><path d={ICONS.arrowRight}></path></svg><span>{b}</span></li>
    </Fragment>))}
    </ul>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
    <h4 style={{ margin: '0', fontSize: '15px', fontWeight: '600', color: '#A04516' }}>What you get</h4>
    <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
    {p.get.map((g, gIndex) => (<Fragment key={gIndex}>
    <li style={{ display: 'flex', gap: '10px', fontSize: '16px', lineHeight: '1.55' }}><svg width="20" height="20" viewBox="0 0 256 256" fill="#A04516" aria-hidden="true" style={{ flexShrink: '0', marginTop: '2px' }}><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg><span>{g}</span></li>
    </Fragment>))}
    </ul>
    </div>
    </div>
    <Link className="btn btn-s" to="/how-it-works" style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>See partner packages</Link>
    </div>
    </div>
    </Fragment>))}
    </div>
    </section>
    
    {/* FEATURED PARTNER */}
    <section className="sec" style={{ padding: '112px 32px' }}>
    <div className="g2" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)', gap: '64px', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <span style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '0.14em', color: '#A04516' }}>FEATURED PARTNER</span>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '44px', lineHeight: '1.1' }}>Comp Sci High</h2>
    <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#5E4A3E' }}>Our first community activation included participating in Comp Sci High's annual block party, bringing together students, families, organizations, and community members.</p>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '16px' }}>
    <img className="ph" src="/images/volunteers-orange-shirts.jpg" alt="Two Project HESTIA volunteers in orange shirts" style={{ height: '420px', gridRow: 'span 2', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '50% 30%' }} />
    <img className="ph" src="/images/snack-table-volunteer.jpg" alt="A Project HESTIA volunteer at our snack table at the Comp Sci High block party" style={{ height: '202px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '45% 30%' }} />
    <img className="ph" src="/images/make-me-a-plate-thumbs-up.jpg" alt="Two volunteers giving a thumbs up at the Make Me a Plate table" style={{ height: '202px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '50% 32%' }} />
    </div>
    </div>
    </section>
    
    {/* CTA */}
    <section className="sec" style={{ padding: '104px 32px', background: '#1C0D06', color: '#F6EFE6' }}>
    <div className="g2" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)', gap: '48px', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '52px', lineHeight: '1.08', color: '#FFF8F1' }}>Become a partner</h2>
    <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.7', color: '#CDBFAF' }}>Pick a package for your business or program, or tell us about your district.</p>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
    <Link className="btn btn-p" to="/how-it-works">See partner packages</Link>
    <Link className="btn btn-l" to="/districts">Connect your district</Link>
    </div>
    </div>
    </section>
    
    
    
    </div>
  );
}
