import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteInfo } from '../../data/siteData';

export default function OffcanvasMenu({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`offcanvas-3__area ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
      <div className="offcanvas-3__inner">
        <div className="offcanvas-3__meta-wrapper">
          <div>
            <button
              id="close_offcanvas"
              className="close-button close-offcanvas"
              onClick={onClose}
              aria-label="Close navigation menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <div>
            <div className="offcanvas-3__meta mb-145 d-none d-md-block">
              <ul>
                <li>
                  <a href={`tel:${siteInfo.phoneRaw}`} className="unnerline">
                    <u>{siteInfo.phone}</u>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
                </li>
              </ul>
            </div>
            <div className="offcanvas-3__social d-none d-md-block">
              <p className="title">Follow Us</p>
              <div className="offcanvas-3__social-links">
                <a href={siteInfo.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href={siteInfo.socials.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance">
                  <i className="fa-brands fa-behance"></i>
                </a>
                <a href={siteInfo.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href={siteInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href={siteInfo.socials.dribbble} target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="offcanvas-3__menu-wrapper">
          <nav className="nav-menu offcanvas-3__menu">
            <ul>
              <li style={{ transitionDelay: '0.05s' }}>
                <Link to="/" onClick={onClose}>Home</Link>
              </li>
              <li style={{ transitionDelay: '0.1s' }}>
                <Link to="/about-us" onClick={onClose}>About</Link>
              </li>
              <li style={{ transitionDelay: '0.15s' }}>
                <Link to="/services" onClick={onClose}>Services</Link>
              </li>
              <li style={{ transitionDelay: '0.2s' }}>
                <a href={siteInfo.socials.behance} target="_blank" rel="noopener noreferrer" onClick={onClose}>
                  Portfolio
                </a>
              </li>
              <li style={{ transitionDelay: '0.25s' }}>
                <Link to="/contact-us" onClick={onClose}>Contact Us</Link>
              </li>
              <li style={{ transitionDelay: '0.3s' }}>
                <Link to="/service/ui-and-ux-design" onClick={onClose}>UI & UX Design</Link>
              </li>
              <li style={{ transitionDelay: '0.35s' }}>
                <Link to="/service/graphic-design" onClick={onClose}>Graphic Design</Link>
              </li>
              <li style={{ transitionDelay: '0.4s' }}>
                <Link to="/service/branding-and-rebranding" onClick={onClose}>Branding & Rebranding</Link>
              </li>
              <li style={{ transitionDelay: '0.45s' }}>
                <Link to="/service/web-development" onClick={onClose}>Web Development</Link>
              </li>
              <li style={{ transitionDelay: '0.5s' }}>
                <Link to="/service/app-development" onClick={onClose}>App Development</Link>
              </li>
              <li style={{ transitionDelay: '0.55s' }}>
                <Link to="/service/digital-marketing" onClick={onClose}>Digital Marketing</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
