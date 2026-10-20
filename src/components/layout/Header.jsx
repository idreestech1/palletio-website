import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { siteInfo } from '../../data/siteData';

export default function Header({ onOpenOffcanvas }) {
  const { pathname } = useLocation();
  const isLightHeader =
    pathname.startsWith('/contact') ||
    pathname.startsWith('/service') ||
    [
      '/ui-and-ux-design',
      '/graphic-design',
      '/branding-and-rebranding',
      '/web-development',
      '/app-development',
      '/digital-marketing'
    ].includes(pathname);

  return (
    <header className={`header-area have-bottom-shape ${isLightHeader ? 'header-light-theme' : ''}`}>
      <div className="container">
        <div className="header-area__inner">
          <div className="header__logo">
            <Link to="/">
              <img className="show-light" src="/assets/imgs/logo/logo.png" alt="Palletio Logo" />
              <img className="show-dark" src="/assets/imgs/logo/logo-light.png" alt="Palletio Logo Light" />
            </Link>
          </div>

          <div className="header__nav pos-center">
            <nav className="main-menu">
              <ul>
                <li>
                  <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : '')}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Services
                  </NavLink>
                </li>
                <li>
                  <a href={siteInfo.socials.behance} target="_blank" rel="noopener noreferrer">
                    Portfolio
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header__button">
            <Link to="/contact-us" className="wc-btn wc-btn-primary btn-text-flip">
              <span data-text="Let's Talk">Let's Talk</span>
            </Link>
          </div>

          <div className="header__navicon d-xl-none">
            <button
              onClick={onOpenOffcanvas}
              className="open-offcanvas"
              aria-label="Open navigation menu"
              type="button"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
