import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutCta() {
  return (
    <section className="contact-area my-5">
      <div className="container">
        <div className="contact-area-inner section-spacing text-center">
          <div className="section-content1 mx-auto" style={{ maxWidth: '750px' }}>
            <div className="section-title-wrapper mb-4">
              <div className="title-wrapper">
                <h2 className="section-title">
                  Start your experience with Palletio
                </h2>
              </div>
            </div>
            <div className="btn-wrapper">
              <Link to="/contact-us" className="wc-btn wc-btn-underline btn-text-flip">
                <span data-text="Let’s get in touch">Let’s get in touch</span>
                <img
                  className="ms-2"
                  src="/assets/imgs/icon/arrow-right-half-light.webp"
                  alt="Arrow icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
