import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Emblem from './Emblem';

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
            <Emblem size={36} />
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
