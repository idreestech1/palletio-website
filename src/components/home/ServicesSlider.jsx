import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/siteData';

export default function ServicesSlider() {
  // Duplicate services array 4 times to ensure seamless infinite looping without gaps
  const duplicatedServices = [
    ...services,
    ...services,
    ...services,
    ...services
  ];

  return (
    <section className="service-area section-spacing">
      <div className="container">
        <div className="service-top-wrapper">
          <div className="section-heading">
            <h2 className="section-title">
              Our exclusive <br /> services
            </h2>
          </div>
          <div className="content">
            <p className="text">
              We empower ambitious brands with tailor-made digital design and smart development.
            </p>
          </div>
        </div>
      </div>

      <div className="services-marquee-wrapper">
        <div className="container-hd">
          <div className="services-marquee-container">
            <div className="services-marquee-track">
              {duplicatedServices.map((service, index) => (
                <div className="service-item" key={`service-${index}`}>
                  <div className="icon">
                    <img
                      className="show-light"
                      src={service.icon}
                      alt={`${service.title} Icon`}
                      loading="lazy"
                      width="48"
                      height="48"
                    />
                  </div>
                  <h2 className="title" style={{ whiteSpace: 'pre-line' }}>
                    <Link
                      to={`/service/${service.slug}`}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {service.shortTitle}
                    </Link>
                  </h2>
                  <ul className="service-features mb-4">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <Link
                    to={`/service/${service.slug}`}
                    className="wc-btn wc-btn-underline btn-text-flip text-white mt-auto"
                  >
                    <span data-text="Read More">Read More</span>
                    <img
                      className="show-light ms-2"
                      src="/assets/imgs/icon/arrow-right-half-light.webp"
                      alt="Arrow"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
