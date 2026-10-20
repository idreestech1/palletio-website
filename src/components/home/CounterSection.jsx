import React from 'react';

export default function CounterSection() {
  const stats = [
    {
      number: '200+',
      title: 'Projects Delivered',
      description: 'From startups to enterprises — built with precision & flair.'
    },
    {
      number: '150+',
      title: 'Happy Clients',
      description: 'Designs that delight users and deliver measurable results.'
    },
    {
      number: '7+',
      title: 'Years of Experience',
      description: 'Blending creativity and strategy since day one.'
    },
    {
      number: '40+',
      title: 'Industries Served',
      description: 'Cross-industry insights that drive smarter design decisions.'
    }
  ];

  return (
    <section className="counter-area section-spacing-bottom mt-60">
      <div className="container">
        <div className="counter-area-inner">
          <div className="section-header">
            <div className="subtitle-wrapper">
              <span className="section-subtitle">
                <span>We</span> <br /> Proudly
              </span>
            </div>
            <div className="content-last">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2 className="section-title">
                    <span>Design.</span> Build. Elevate.
                  </h2>
                </div>
              </div>
              <div className="text-wrapper">
                <p className="text">
                  We craft purpose-driven experiences with a bold creative mindset and a modern digital approach.
                </p>
              </div>
            </div>
          </div>

          <div className="counter-wrapper-box">
            <div className="counter-wrapper">
              {stats.map((stat, idx) => (
                <div className="counter-item" key={idx}>
                  <h3 className="number wc-counter">{stat.number}</h3>
                  <p className="text">
                    <span>{stat.title}</span> <br /> {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
