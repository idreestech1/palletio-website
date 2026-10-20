import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/siteData';

export default function ServicesGrid() {
  return (
    <section className="service-area section-spacing mt-4">
      <div className="container">
        <div className="service-top-wrapper">
          <div className="section-heading">
            <h2 className="section-title">
              Our exclusive <br /> services
            </h2>
          </div>
          <div className="content">
            <p className="text">
              We bet on brands that shift categories and add value to people's lives; and on founders who are motivated to shape tomorrow.
            </p>
          </div>
        </div>

        <div className="services-wrapper-box mt-5">
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-item" key={service.id}>
                <Link to={`/service/${service.slug}`} className="d-block text-decoration-none">
                  <div className="icon mb-3">
                    <img
                      className="show-light"
                      src={service.icon}
                      alt={service.title}
                      loading="lazy"
                      width="48"
                      height="48"
                    />
                  </div>
                  <h2 className="title" style={{ whiteSpace: 'pre-line' }}>
                    {service.shortTitle}
                  </h2>
                  <ul className="service-features mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <span className="wc-btn wc-btn-underline btn-text-flip text-white">
                    <span data-text="Explore Service">Explore Service</span>
                    <img
                      className="ms-2"
                      src="/assets/imgs/icon/arrow-right-half-light.webp"
                      alt="Arrow"
                    />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
