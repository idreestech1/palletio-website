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
    <section className="palletio-counter-section">
      <div className="container">
        {/* Section Header */}
        <div className="palletio-counter-header">
          <div className="palletio-counter-col-sub">
            <span className="palletio-counter-subtitle">
              <span>We</span> <br /> Proudly
            </span>
          </div>

          <div className="palletio-counter-col-title">
            <h2 className="palletio-counter-main-title">
              <span>Design.</span>
              <span>Build.</span>
              <span>Elevate.</span>
            </h2>
          </div>

          <div className="palletio-counter-col-desc">
            <p className="palletio-counter-description">
              We craft purpose-driven experiences with a bold creative mindset and a modern digital approach.
            </p>
          </div>
        </div>

        {/* 4 Oval Stat Cards */}
        <div className="palletio-counter-cards-wrapper">
          <div className="palletio-counter-cards-grid">
            {stats.map((stat, idx) => (
              <div className="palletio-oval-card" key={idx}>
                <div className="palletio-oval-number">{stat.number}</div>
                <h3 className="palletio-oval-title">{stat.title}</h3>
                <p className="palletio-oval-desc">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
