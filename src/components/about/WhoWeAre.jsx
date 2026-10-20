import React from 'react';

export default function WhoWeAre() {
  return (
    <section className="awards-area">
      <div className="container">
        <div className="awards-area-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle has-left-line">02. Who we are</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title has_fade_anim">
                  Beyond Creativity: We Build Brands That Last
                </h2>
              </div>
            </div>
          </div>

          <div className="section-content">
            <div className="text-wrapper">
              <p className="text">
                We’re Palletio, a creative-first digital agency that blends strategy, design, and technology to build unforgettable brands and products. Our team of experienced designers, developers, and marketers brings a deep understanding of user behavior and industry trends, creating solutions that don’t just look stunning but also deliver measurable results.
                <br /><br />
                Whether it’s a new app, a fresh website, or a complete brand overhaul — we believe every pixel should serve a purpose.
              </p>
            </div>

            <div className="awards-list">
              <ul>
                <li>
                  <div className="meta">
                    <div className="icon">
                      <img className="show-light" src="/assets/imgs/icon/icon-s-40.webp" alt="Projects Icon" />
                      <img className="show-dark" src="/assets/imgs/icon/icon-s-40-light.webp" alt="Projects Icon" />
                    </div>
                    <div className="content">
                      <h3 className="number wc-counter">250+</h3>
                      <p className="text">Projects Delivered with Excellence</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="meta">
                    <div className="icon">
                      <img className="show-light" src="/assets/imgs/icon/icon-s-41.webp" alt="Industries Icon" />
                      <img className="show-dark" src="/assets/imgs/icon/icon-s-41-light.webp" alt="Industries Icon" />
                    </div>
                    <div className="content">
                      <h3 className="number wc-counter">40+</h3>
                      <p className="text">Industries Impacted</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="about-thumbs">
            <div className="thumb-first">
              <img
                src="/assets/imgs/gallery/weareImg1.jpg"
                alt="Palletio Creative Team at Work"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
            <div className="thumb-second">
              <img
                src="/assets/imgs/gallery/weareImg2.jpg"
                alt="Palletio Digital Strategy Sessions"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
