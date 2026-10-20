import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import OffcanvasMenu from './OffcanvasMenu';
import ScrollToTop from './ScrollToTop';
import CustomCursor from './CustomCursor';
import FloatingWhatsApp from './FloatingWhatsApp';
import Preloader from '../common/Preloader';

export default function Layout({ children }) {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const { pathname } = useLocation();
  const isLightPage =
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
    <>
      <Preloader />
      <CustomCursor />
      <ScrollToTop />
      <FloatingWhatsApp />

      <OffcanvasMenu
        isOpen={isOffcanvasOpen}
        onClose={() => setIsOffcanvasOpen(false)}
      />

      <Header onOpenOffcanvas={() => setIsOffcanvasOpen(true)} />

      <div className="has-smooth" id="has_smooth"></div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className={`body-wrapper body-creative-agency line-area ${isLightPage ? 'body-wrapper-light' : ''}`}>
            <div className="lines">
              <span className="line"></span>
              <span className="line"></span>
            </div>
            <div className="overlay-switcher-close"></div>

            <main>{children}</main>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
