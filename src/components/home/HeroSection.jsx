import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="hero-area section-spacing-bottom have-bottom-shape">
      <div className="container">
        <div className="hero-area-inner">
          <div className="section-content">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h1 className="section-title has_fade_anim">
                  Designs That Speak. Brands That Shine.
                </h1>
              </div>
            </div>
            <div className="section-content-end">
              <div className="icon-wrapper has_fade_anim">
                <img
                  className="icon-image show-light"
                  src="/assets/imgs/shape/img-s-2.webp"
                  alt="Decorative Shape"
                  style={{ maxWidth: '55px' }}
                />
              </div>
              <div className="text-wrapper">
                <p className="text has_fade_anim">
                  At Palletio, we create high-impact digital experiences that turn brands into market leaders. We craft bold brands, sleek websites, and powerful apps that blend design with strategy. Whether you're starting up or scaling fast—we turn your vision into digital reality.
                </p>
              </div>
              <div className="btn-wrapper has_fade_anim">
                <Link to="/contact-us" className="wc-btn wc-btn-underline btn-text-flip">
                  <span data-text="Let's Make Magic!">Let's Make Magic!</span>
                  <img className="show-light" src="/assets/imgs/icon/arrow-right-half.webp" alt="Arrow" />
                  <img className="show-dark" src="/assets/imgs/icon/arrow-right-half-light.webp" alt="Arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="thumb-wrapper">
          <div className="hero-thumb">
            <img
              src="/assets/imgs/gallery/homeBanner.jpg"
              className="has_fade_anim"
              alt="Palletio Design Agency Showcase Banner"
              fetchpriority="high"
              width="1280"
              height="720"
              style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
