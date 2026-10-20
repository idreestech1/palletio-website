import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="about-area">
      <div className="container">
        <div className="about-area-inner section-spacing-top">
          <div className="section-content">
            <div className="subtitle-wrapper">
              <span className="section-subtitle">Who we are</span>
            </div>
            <div className="content-last">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2 className="section-title">
                    At Palletio, we’re more than just a digital agency - we’re brand architects, experience designers, and innovation strategists.
                  </h2>
                </div>
              </div>
              <div className="info-area">
                <div className="info-text">
                  <h3 className="number">200<span>+</span></h3>
                  <p className="text">
                    Brands Transformed. We craft magnetic brands and products that drive growth, attract investors, and turn heads.
                  </p>
                </div>
                <div className="info-last">
                  <div className="text-wrapper">
                    <p className="text">
                      We craft stunning, human-centered digital experiences that not only look great but perform brilliantly. From UI/UX design and branding to web & app development and digital marketing, we help startups and established brands turn bold ideas into engaging, scalable realities.
                    </p>
                  </div>
                  <div className="btn-wrapper btn-move">
                    <Link className="wc-btn wc-btn-circle btn-hover-bgchange btn-item" to="/services">
                      Explore our<br />Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
