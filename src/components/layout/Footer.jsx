import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteInfo, services } from '../../data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-area-inner section-spacing-top">
          <div className="footer-widget-wrapper">
            <div className="footer-logo">
              <Link to="/">
                <img src="/assets/imgs/logo/logo-light.png" alt="Palletio Site Logo" />
              </Link>
            </div>
          </div>

          <div className="footer-widget-wrapper">
            <h2 className="title">Company</h2>
            <ul className="footer-nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About</Link></li>
              <li><Link to="/services">Service</Link></li>
              <li>
                <a href={siteInfo.socials.behance} target="_blank" rel="noopener noreferrer">
                  Portfolio
                </a>
              </li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-widget-wrapper">
            <h2 className="title">Services</h2>
            <ul className="footer-nav-list">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/service/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-widget-wrapper newsletter">
            <h2 className="title">Newsletter</h2>
            <div className="newsletter-text">
              <p className="text">
                Feel free to reach out if you want to collaborate with us, or simply have a chat.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="subscribe-form">
              <div className="input-field">
                <span className="icon">
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="subscribe-btn" aria-label="Subscribe">
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
              {isSubscribed && (
                <p className="text-success mt-2" style={{ fontSize: '14px' }}>
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>

          <div className="footer-widget-wrapper">
            <h2 className="title">Term & Conditions</h2>
            <ul className="footer-nav-list">
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
              <li><Link to="/privacy-policy">Privacy policy</Link></li>
            </ul>
          </div>

          <div className="footer-widget-wrapper">
            <h2 className="title">Social Media</h2>
            <ul className="social-links">
              <li>
                <a href={siteInfo.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href={siteInfo.socials.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance">
                  <i className="fa-brands fa-behance"></i>
                </a>
              </li>
              <li>
                <a href={siteInfo.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href={siteInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href={siteInfo.socials.dribbble} target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-inner">
            <div className="copyright-text">
              <p className="text">
                © {currentYear}{' '}
                <Link to="/">Palletio Design Studio</Link> All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
