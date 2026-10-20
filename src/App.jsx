import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

function ScrollToTopOnRoute() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Layout>
      <ScrollToTopOnRoute />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/index" element={<Navigate to="/" replace />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/about" element={<Navigate to="/about-us" replace />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/service" element={<Navigate to="/services" replace />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/contact" element={<Navigate to="/contact-us" replace />} />

        {/* Dynamic Service Detail Route */}
        <Route path="/service/:slug" element={<ServiceDetailPage />} />

        {/* Direct Service Detail Links matching template */}
        <Route path="/ui-and-ux-design" element={<ServiceDetailPage slug="ui-and-ux-design" />} />
        <Route path="/graphic-design" element={<ServiceDetailPage slug="graphic-design" />} />
        <Route path="/branding-and-rebranding" element={<ServiceDetailPage slug="branding-and-rebranding" />} />
        <Route path="/web-development" element={<ServiceDetailPage slug="web-development" />} />
        <Route path="/app-development" element={<ServiceDetailPage slug="app-development" />} />
        <Route path="/digital-marketing" element={<ServiceDetailPage slug="digital-marketing" />} />

        {/* Fallback 404 Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
