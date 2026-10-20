import React from 'react';

export default function ServicesHero() {
  return (
    <section className="hero-area1">
      <div className="container">
        <div className="hero-area1-inner">
          <div className="section-content">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h1 className="section-title">We make design that lead and inspire.</h1>
              </div>
            </div>
            <div className="text-wrapper">
              <p className="text">
                We take a similar approach to design commercial we do impactfully approache, over the flowchart of user friendly wireframe.
              </p>
            </div>
            <div className="icon">
              <img className="show-light" src="/assets/imgs/shape/img-s-82.webp" alt="Shape" />
              <img className="show-dark" src="/assets/imgs/shape/img-s-82-light.webp" alt="Shape" />
            </div>
          </div>
          <div className="thumb">
            <img
              src="/assets/imgs/gallery/servicImage.png"
              alt="Palletio Services Showcase"
              fetchpriority="high"
              width="650"
              height="500"
              style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
