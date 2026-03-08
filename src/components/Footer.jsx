import { Link } from 'react-router-dom';
import logo from '../../Photos/PH LOGO.png'
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">

        {/* Brand column */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <div className="footer__logo-circle">
              <img src={logo} alt="HESTIA emblem" width="34" height="34" className="footer__logo-emblem" />
            </div>
            <span className="footer__logo-text">PROJECT HESTIA</span>
          </Link>
          <p className="footer__tagline">
            Rewarding people for showing up — to their health, their community, and their future.
          </p>
          <div className="footer__social">
            <a href="https://www.linkedin.com/company/projecthestia" aria-label="LinkedIn"    className="footer__social-link">in</a>
            <a href="https://www.instagram.com/officialprojecthestia/?utm_source=ig_web_button_share_sheet" aria-label="Instagram"   className="footer__social-link">ig</a>
          </div>
        </div>

        {/* Platform links */}
        <div className="footer__col">
          <h4 className="footer__col-heading">PLATFORM</h4>
          <ul className="footer__col-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
          </ul>
        </div>

        {/* Community links */}
        <div className="footer__col">
          <h4 className="footer__col-heading">COMMUNITY</h4>
          <ul className="footer__col-links">
            <li><Link to="/districts">Districts</Link></li>
            <li><Link to="/partners">Partners</Link></li>
          </ul>
        </div>

        {/* Contact links */}
        <div className="footer__col">
          <h4 className="footer__col-heading">CONTACT</h4>
          <ul className="footer__col-links">
            <li><Link to="/partner-with-us">Partner With Us</Link></li>
            <li><a href="elijah@projecthestia.org">[email protected]</a></li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© 2026 Project HESTIA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
