import React from 'react';
import { teamMembers } from '../../data/siteData';

export default function TeamSection() {
  return (
    <section className="team-area mb-1px my-5">
      <div className="container">
        <div className="team-area-inner section-spacing">
          <div className="section-header mb-5 text-center">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title">Meet Our Creative Powerhouse</h2>
              </div>
            </div>
            <div className="text-wrapper mx-auto" style={{ maxWidth: '680px' }}>
              <p className="text">
                Our team of designers, developers, and strategists is obsessed with one thing: turning your ideas into extraordinary digital experiences. Each member brings a unique blend of creativity and technical expertise, ensuring every project shines.
              </p>
            </div>
          </div>

          <div className="team-wrapper-box">
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div className="team-card" key={index}>
                  <div className="thumb">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      width="300"
                      height="340"
                    />
                  </div>
                  <div className="content">
                    <h3 className="title">{member.name}</h3>
                    <p className="text">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
