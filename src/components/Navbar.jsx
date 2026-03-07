import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About',        to: '/about' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Districts',    to: '/districts' },
  { label: 'Partners',     to: '/partners' },
  { label: 'Founders',     to: '/founders' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner container">

        {/* Logo */}
        <NavLink to="/" className="navbar__logo">
          <div className="navbar__logo-circle">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
              <circle cx="20" cy="20" r="19" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
              <circle cx="20" cy="20" r="14" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <text x="20" y="25" textAnchor="middle" fontSize="11" fill="white" fontFamily="serif" fontWeight="700">H</text>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-main">HESTIA</span>
            <span className="navbar__logo-sub">PROJECT HESTIA</span>
          </div>
        </NavLink>

        {/* Navigation links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <NavLink to="/partner-with-us" className="navbar__cta">
          Partner With Us
        </NavLink>

      </div>
    </nav>
  );
}
