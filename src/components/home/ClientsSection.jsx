import React from 'react';
import { clientLogos } from '../../data/siteData';

export default function ClientsSection() {
  return (
    <div className="client-area has_fade_anim">
      <div className="container">
        <div className="client-area-inner section-spacing-top">
          <div className="client-area-text text-center mb-5">
            <h2 className="text">Trusted by Bold Brands Worldwide</h2>
          </div>
          <div className="clients-wrapper-box">
            <div className="clients-wrapper">
              {clientLogos.map((logo, index) => (
                <div className="client-box" key={index}>
                  <img
                    className="show-light"
                    src={logo}
                    alt={`Client Partner Logo ${index + 1}`}
                    loading="lazy"
                    width="140"
                    height="60"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
