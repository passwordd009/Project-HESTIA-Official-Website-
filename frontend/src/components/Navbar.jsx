import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ICONS } from '../data/icons';

const LINKS = [
  { to: '/about', label: 'About Us' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/districts', label: 'Districts' },
  { to: '/partners', label: 'Partners' },
  { to: '/founders', label: 'Founders' },
];

const linkClass = ({ isActive }) => (isActive ? 'nav-a active' : 'nav-a');
const donateClass = ({ isActive }) => (isActive ? 'btn btn-p active' : 'btn btn-p');

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header style={{ background: '#1C0D06', borderBottom: '4px solid #D4652F' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', minHeight: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', boxSizing: 'border-box' }}>
        <Link to="/" aria-label="Project HESTIA home" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img src="/Photos/PH_LOGO.png" alt="" aria-hidden="true" style={{ width: '44px', height: '44px', objectFit: 'contain', display: 'block' }} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '22px', letterSpacing: '0.04em', color: '#FFF8F1' }}>HESTIA</span>
            <span style={{ fontSize: '11px', letterSpacing: '0.16em', color: '#CDBFAF' }}>PROJECT HESTIA</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {LINKS.map((l) => (
            <NavLink key={l.to} className={linkClass} to={l.to}>{l.label}</NavLink>
          ))}
          <NavLink className={donateClass} to="/donate">Donate</NavLink>
        </nav>

        <button
          type="button"
          className="menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen ? 'true' : 'false'}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ width: '48px', height: '48px', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', border: '1.5px solid rgba(246,239,230,0.3)', background: 'transparent', color: '#FFF8F1', cursor: 'pointer' }}
        >
          <svg width="22" height="22" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d={menuOpen ? ICONS.close : ICONS.menu}></path></svg>
        </button>
      </div>

      {menuOpen && (
        <nav aria-label="Main mobile" className="enter nav-mobile" style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '8px 32px 24px' }}>
          {LINKS.map((l) => (
            <NavLink key={l.to} className={linkClass} to={l.to} style={{ padding: '12px 0' }}>{l.label}</NavLink>
          ))}
          <NavLink className={donateClass} to="/donate" style={{ marginTop: '12px', alignSelf: 'flex-start' }}>Donate</NavLink>
        </nav>
      )}
    </header>
  );
}
