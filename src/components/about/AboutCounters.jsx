import React from 'react';

export default function AboutCounters() {
  return (
    <div className="counter-area">
      <div className="counter-area-inner">
        <div className="thumb">
          <img
            src="/assets/imgs/gallery/aboutImg.jpg"
            alt="Palletio Design Studio workspace"
            loading="lazy"
            width="800"
            height="600"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="counter-wrapper-box">
          <div className="counter-wrapper">
            <div className="thumb overflow-hidden">
              <img
                src="/assets/imgs/gallery/aboutImg2.jpg"
                alt="Palletio Design Showcase"
                loading="lazy"
                width="400"
                height="300"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="counter-box">
              <h2 className="text">We have 250+ Satisfied Clients</h2>
              <h2 className="number wc-counter">250+</h2>
            </div>
            <div className="counter-box dark">
              <h2 className="text">Client Satisfaction Rate</h2>
              <h2 className="number wc-counter">98%</h2>
            </div>
            <div className="thumb overflow-hidden">
              <img
                src="/assets/imgs/gallery/aboutImg3.jpg"
                alt="Creative Collaboration"
                loading="lazy"
                width="400"
                height="300"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
