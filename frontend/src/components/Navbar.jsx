import { NavLink } from 'react-router-dom'; 
import { useState } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About',        to: '/about' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Districts',    to: '/districts' },
  { label: 'Partners',     to: '/partners' },
  { label: 'Founders',     to: '/founders' },
];



export default function Navbar() {

   const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner container">

        {/* Logo */}
        <NavLink to="/" className="navbar__logo">
          <div className="navbar__logo-circle">
            <img src='/Photos/PH_LOGO.png' alt="HESTIA emblem" width="36" height="36" className="navbar__logo-emblem" />
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-main">HESTIA</span>
            <span className="navbar__logo-sub">PROJECT HESTIA</span>
          </div>
        </NavLink>

        {/* Navigation links */}
        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={() => setMenuOpen(false)}
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

         <button
          className="navbar__menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>
    </nav>
  );
}
