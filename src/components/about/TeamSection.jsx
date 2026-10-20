import React from 'react';
import { teamMembers } from '../../data/siteData';

export default function TeamSection() {
  // 4 sets of 6 = 24 items. Smooth seamless infinite loop with alternating high/low rhythm.
  const marqueeMembers = [
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers
  ];

  return (
    <section className="palletio-team-area">
      <div className="container">
        <div className="section-header mb-5 text-center">
          <div className="section-title-wrapper">
            <div className="title-wrapper">
              <h2 className="section-title text-white">Meet Our Creative Powerhouse</h2>
            </div>
          </div>
          <div className="text-wrapper mx-auto" style={{ maxWidth: '680px' }}>
            <p className="text" style={{ color: '#9a9aa0' }}>
              Our team of designers, developers, and strategists is obsessed with one thing: turning your ideas into extraordinary digital experiences. Each member brings a unique blend of creativity and technical expertise, ensuring every project shines.
            </p>
          </div>
        </div>
      </div>

      <div className="team-marquee-container">
        <div className="team-marquee-track">
          {marqueeMembers.map((member, index) => {
            const isStaggeredLow = index % 2 === 1;
            return (
              <div
                className={`team-member-card ${isStaggeredLow ? 'card-low' : 'card-high'}`}
                key={`team-member-${index}`}
              >
                <div className="thumb">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    width="290"
                    height="380"
                  />
                </div>
                <div className="content">
                  <h3 className="title">{member.name}</h3>
                  <p className="text">{member.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
