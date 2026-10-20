import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutCta() {
  return (
    <section className="palletio-cta-section my-5">
      <div className="container">
        <div className="palletio-cta-banner">
          <h2 className="palletio-cta-title">
            Start your<br />experience with<br />Palletio
          </h2>
          <div className="palletio-cta-btn-wrap">
            <Link to="/contact-us" className="palletio-cta-link">
              <span>LET'S GET IN TOUCH</span>
              <span className="arrow-sym">⟶</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
