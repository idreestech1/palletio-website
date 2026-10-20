import React from 'react';
import { siteInfo } from '../../data/siteData';

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${siteInfo.whatsapp.replace('+', '')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="palletio-whatsapp-btn"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <div className="palletio-whatsapp-pulse"></div>
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
}
