import { Link, useLocation } from 'react-router-dom';

const LINKS = [
  { to: '/about', label: 'About Us' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/districts', label: 'Districts' },
  { to: '/partners', label: 'Partners' },
  { to: '/founders', label: 'Founders' },
  { to: '/donate', label: 'Donate' },
];

// Pages that end on a dark CTA get a divider line instead of a separate dark block.
const DIVIDED = new Set(['/', '/partners', '/founders']);

export default function Footer() {
  const divided = DIVIDED.has(useLocation().pathname);

  return (
    <footer style={{ background: '#1C0D06', color: '#CDBFAF', padding: divided ? '0 32px 56px' : '56px 32px' }}>
      <div
        style={{
          maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '24px',
          ...(divided && { paddingTop: '48px', borderTop: '1px solid rgba(246,239,230,0.12)' }),
        }}
      >
        <Link to="/" aria-label="Project HESTIA home" style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2', textDecoration: 'none', color: '#CDBFAF' }}>
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '22px', letterSpacing: '0.04em', color: '#FFF8F1' }}>HESTIA</span>
          <span style={{ fontSize: '14px' }}>Building stronger communities, together.</span>
        </Link>
        <nav aria-label="Footer" style={{ display: 'flex', flexWrap: 'wrap', gap: '28px' }}>
          {LINKS.map((l) => (
            <Link key={l.to} className="nav-a" to={l.to}>{l.label}</Link>
          ))}
        </nav>
        <span style={{ fontSize: '14px', width: '100%', paddingTop: '24px', borderTop: '1px solid rgba(246,239,230,0.12)' }}>© 2026 Project HESTIA</span>
      </div>
    </footer>
  );
}
