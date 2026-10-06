import { Fragment, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ICONS } from '../data/icons';
import { postJSON } from '../lib/api';
import './Donate.css';

const I = ICONS;

const AMOUNTS = [25, 50, 100, 250, 'other'];

const DESIGNATIONS = {
  need: 'where it is needed most',
  event: 'the next district event',
  programs: 'district programs',
};

const ways = [
  { href: '/how-it-works', icon: I.cal, title: 'Sponsor an event', body: 'Businesses can sponsor a district event through a package.' },
  { href: '/districts', icon: I.handHeart, title: 'Volunteer in your district', body: 'Help run events and programs where you live.' },
  { href: '/partners', icon: I.handshake, title: 'Become a partner', body: 'Bring your school, business or nonprofit into a district.' },
];

const formatMoney = (value) => '$' + value.toLocaleString('en-US');

// `completed` is set on /donate/thank-you, where Stripe Checkout returns after a successful payment.
export default function Donate({ completed = false }) {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const [freq, setFreq] = useState('once');
  const [amount, setAmount] = useState(50);
  const [other, setOther] = useState('');
  const [designation, setDesignation] = useState('need');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const monthly = freq === 'month';
  const isOther = amount === 'other';
  const value = isOther ? Number(other) : amount;
  const hasValue = value > 0;
  const money = hasValue ? formatMoney(value) : '';

  const onceP = monthly ? 'false' : 'true';
  const monthP = monthly ? 'true' : 'false';
  const onceBg = monthly ? 'transparent' : '#1C0D06';
  const onceFg = monthly ? '#1C0D06' : '#FFF8F1';
  const monthBg = monthly ? '#1C0D06' : 'transparent';
  const monthFg = monthly ? '#FFF8F1' : '#1C0D06';
  const setOnce = () => setFreq('once');
  const setMonth = () => setFreq('month');

  const amounts = AMOUNTS.map((v) => {
    const on = amount === v;
    return {
      label: v === 'other' ? 'Other' : '$' + v,
      pressed: on ? 'true' : 'false',
      bg: on ? '#1C0D06' : '#FFF8F1',
      fg: on ? '#FFF8F1' : '#1C0D06',
      border: on ? '#1C0D06' : 'rgba(28,13,6,0.25)',
      pick: () => setAmount(v),
    };
  });
  const otherVal = other;
  const setOtherVal = (e) => setOther(e.target.value);
  const desig = designation;
  const setDesig = (e) => setDesignation(e.target.value);
  const cta = hasValue ? 'Donate ' + money + (monthly ? ' monthly' : '') : 'Donate';

  // Hands off to Stripe Checkout; the backend returns the hosted checkout URL.
  async function give(e) {
    e.preventDefault();
    if (!hasValue) return;
    setSending(true);
    setError('');
    try {
      const { url } = await postJSON('/api/donations/checkout', {
        amount: value,
        frequency: monthly ? 'monthly' : 'once',
        designation,
      });
      window.location.assign(url);
    } catch (err) {
      setError(err.message);
      setSending(false);
    }
  }

  // Thank-you panel, filled from the query string Stripe sends back.
  const done = completed;
  const notDone = !completed;
  const paidAmount = Number(params.get('amount'));
  const paidMonthly = params.get('frequency') === 'monthly';
  const paidTo = DESIGNATIONS[params.get('designation')] || DESIGNATIONS.need;
  const thanks = paidAmount > 0
    ? 'Your ' + (paidMonthly ? 'monthly ' : '') + 'gift of ' + formatMoney(paidAmount) + ' will go to ' + paidTo + '.'
    : 'Your gift will go to ' + paidTo + '.';
  const restart = () => navigate('/donate');

  return (
    <div className="page-donate" style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#1C0D06', background: '#EEE4D7' }}>
    
    
    
    {/* GIVE */}
    <section className="sec" style={{ padding: '80px 32px 104px' }}>
    <div className="g2" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '64px', alignItems: 'start' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
    <h1 className="h1" style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '60px', lineHeight: '1.08' }}>Fund the next community event</h1>
    <p style={{ margin: '0', maxWidth: '44ch', fontSize: '20px', lineHeight: '1.6', color: '#5E4A3E' }}>Every Project HESTIA event helps fund the next one. Your gift keeps that cycle going and helps new districts get started.</p>
    <img className="ph" src="/images/outdoor-show.jpg" alt="Residents enjoying an outdoor show" style={{ height: '380px', marginTop: '8px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '50% 60%' }} />
    </div>
    
    <div className="card" style={{ padding: '40px', borderRadius: '16px', background: '#F6EFE6', border: '1px solid rgba(28,13,6,0.1)', boxShadow: '0 28px 56px -36px rgba(28,13,6,0.5)' }}>
    {done && (<>
    <div className="enter" role="status" style={{ display: 'flex', flexDirection: 'column', gap: '18px', padding: '16px 0' }}>
    <svg width="48" height="48" viewBox="0 0 256 256" fill="#A04516" aria-hidden="true"><path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path></svg>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '36px', lineHeight: '1.1' }}>Thank you.</h2>
    <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: '#5E4A3E' }}>{thanks}</p>
    <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.6', color: '#5E4A3E' }}>A receipt is on its way to your email.</p>
    <button type="button" className="btn btn-s" onClick={restart} style={{ alignSelf: 'flex-start' }}>Back to donation form</button>
    </div>
    </>)}
    {notDone && (<>
    <form onSubmit={give} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <span id="freq-l" style={{ fontSize: '15px', fontWeight: '600' }}>How often</span>
    <div role="group" aria-labelledby="freq-l" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', padding: '5px', borderRadius: '999px', background: '#E2D3BF', gap: '4px' }}>
    <button type="button" className="chip" aria-pressed={onceP} onClick={setOnce} style={{ minHeight: '44px', border: '0', borderRadius: '999px', background: onceBg, color: onceFg, fontFamily: "'Inter', system-ui, sans-serif", fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>One-time</button>
    <button type="button" className="chip" aria-pressed={monthP} onClick={setMonth} style={{ minHeight: '44px', border: '0', borderRadius: '999px', background: monthBg, color: monthFg, fontFamily: "'Inter', system-ui, sans-serif", fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>Monthly</button>
    </div>
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <span id="amt-l" style={{ fontSize: '15px', fontWeight: '600' }}>Amount</span>
    <div className="amts" role="group" aria-labelledby="amt-l" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0,1fr))', gap: '10px' }}>
    {amounts.map((a, aIndex) => (<Fragment key={aIndex}>
    <button type="button" className="chip" aria-pressed={a.pressed} onClick={a.pick} style={{ minHeight: '52px', borderRadius: '999px', border: `1.5px solid ${a.border}`, background: a.bg, color: a.fg, fontFamily: "'Inter', system-ui, sans-serif", fontSize: '17px', fontWeight: '600', cursor: 'pointer' }}>{a.label}</button>
    </Fragment>))}
    </div>
    {isOther && (<>
    <div className="fld enter">
    <label htmlFor="amt-other">Other amount (USD)</label>
    <input id="amt-other" className="inp" type="number" min="1" inputMode="decimal" value={otherVal} onChange={setOtherVal} />
    </div>
    </>)}
    </div>
    
    <div className="fld">
    <label htmlFor="desig">Direct my gift to</label>
    <select id="desig" className="inp" value={desig} onChange={setDesig}>
    <option value="need">Where it's needed most</option>
    <option value="event">The next district event</option>
    <option value="programs">Programs in fitness, career development, education and civic engagement</option>
    </select>
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button type="submit" className="btn btn-p" disabled={sending} style={{ minHeight: '56px', fontSize: '18px' }}>{sending ? 'Opening secure checkout…' : cta}</button>
    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', color: '#5E4A3E' }}><svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"></path></svg>You'll finish on a secure payment page.</span>
    </div>
    </form>
    </>)}
    </div>
    </div>
    </section>
    
    {/* WHAT IT SUPPORTS */}
    <section className="sec" style={{ padding: '104px 32px', background: '#E6D8C6' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '52px', lineHeight: '1.08' }}>What your gift supports</h2>
    <div className="bento" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)', gridTemplateRows: 'auto auto', gap: '20px' }}>
    <div style={{ gridRow: 'span 2', display: 'flex', flexDirection: 'column', borderRadius: '16px', overflow: 'hidden', background: '#1C0D06', color: '#F6EFE6' }}>
    <img className="ph" src="/images/block-party-table.jpg" alt="Families at a neighborhood block party" style={{ borderRadius: '0', height: '340px', width: '100%', padding: '0', display: 'block', objectFit: 'cover', objectPosition: '50% 50%' }} />
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '32px' }}>
    <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><svg width="28" height="28" viewBox="0 0 256 256" fill="#F08A55" aria-hidden="true"><path d={ICONS.cal}></path></svg><h3 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '30px', color: '#FFF8F1' }}>District events</h3></span>
    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.7', color: '#CDBFAF' }}>Space, supplies and activities for events where residents meet local businesses and nonprofits, and earn and spend community points.</p>
    </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '32px', borderRadius: '16px', background: '#F6EFE6' }}>
    <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><svg width="28" height="28" viewBox="0 0 256 256" fill="#A04516" aria-hidden="true"><path d={ICONS.teach}></path></svg><h3 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '26px' }}>Programs</h3></span>
    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.7', color: '#5E4A3E' }}>Workshops and activities in fitness, career development, education and civic engagement.</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '32px', borderRadius: '16px', background: '#F6EFE6' }}>
    <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><svg width="28" height="28" viewBox="0 0 256 256" fill="#A04516" aria-hidden="true"><path d={ICONS.pin}></path></svg><h3 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '26px' }}>New districts</h3></span>
    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.7', color: '#5E4A3E' }}>Getting a new neighborhood started, from the first event to its first programs on Ember.</p>
    </div>
    </div>
    </div>
    </section>
    
    {/* OTHER WAYS */}
    <section className="sec" style={{ padding: '104px 32px 88px' }}>
    <div className="g2" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,0.8fr) minmax(0,1.2fr)', gap: '64px', alignItems: 'start' }}>
    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '44px', lineHeight: '1.1' }}>Other ways to give</h2>
    <div style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid rgba(28,13,6,0.15)' }}>
    {ways.map((w, wIndex) => (<Fragment key={wIndex}>
    <Link className="row-link" to={w.href}>
    <span style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
    <svg width="30" height="30" viewBox="0 0 256 256" fill="#A04516" aria-hidden="true"><path d={w.icon}></path></svg>
    <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
    <span style={{ fontSize: '20px', fontWeight: '600' }}>{w.title}</span>
    <span style={{ fontSize: '16px', color: '#5E4A3E' }}>{w.body}</span>
    </span>
    </span>
    <svg width="22" height="22" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" style={{ flexShrink: '0' }}><path d={ICONS.arrowRight}></path></svg>
    </Link>
    </Fragment>))}
    </div>
    </div>
    <p style={{ maxWidth: '1200px', margin: '64px auto 0', fontSize: '14px', lineHeight: '1.6', color: '#5E4A3E' }}>Project HESTIA is [NONPROFIT STATUS]. [TAX-DEDUCTIBILITY STATEMENT]. Questions about giving: [CONTACT EMAIL].</p>
    </section>
    
    
    
    </div>
  );
}
