import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { services } from '../data/siteData';

export default function ServiceDetailPage({ slug: propSlug }) {
  const { slug: paramSlug } = useParams();
  const slug = propSlug || paramSlug;
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Palletio Design Studio`;
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Split features into two balanced columns matching the authentic template
  const midIndex = Math.ceil(service.features.length / 2);
  const featureCol1 = service.features.slice(0, midIndex);
  const featureCol2 = service.features.slice(midIndex);

  const heroImage = service.heroImage || '/assets/imgs/gallery/uiImg.jpg';
  const galleryImages = service.gallery || [
    '/assets/imgs/gallery/uiImg1.jpg',
    '/assets/imgs/gallery/uiImg2.jpg',
    '/assets/imgs/gallery/uiImg3.jpg'
  ];

  const workingSteps = service.workingSteps || [
    {
      title: 'Planning and\nSketching',
      text: 'Mapping user flows, information hierarchy, and functionality with clarity.'
    },
    {
      title: 'User-Centered\nDesign',
      text: 'Keeping real users at the heart of every design decision.'
    },
    {
      title: 'Prototyping &\nTesting',
      text: 'Bringing interfaces to life and validating them with real feedback.'
    },
    {
      title: 'Design\nSystems',
      text: 'Scalable components and visual consistency for growing products.'
    }
  ];

  return (
    <section className="service-details-area mb-145">
      <div className="container">
        <div className="thumb-main">
          <img
            src={heroImage}
            className="has_fade_anim"
            alt={`${service.title} Showcase`}
            style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }}
          />
        </div>

        <div className="section-title-box">
          <div className="section-title-wrapper">
            <div className="title-wrapper">
              <h1 className="section-title has_fade_anim" style={{ whiteSpace: 'pre-line' }}>
                {service.shortTitle ? `${service.shortTitle}-` : `${service.title}-`}
              </h1>
            </div>
          </div>

          <div className="feature-list has_fade_anim">
            <ul>
              {featureCol1.map((item, idx) => (
                <li key={`col1-${idx}`}>{item}</li>
              ))}
            </ul>
            <ul>
              {featureCol2.map((item, idx) => (
                <li key={`col2-${idx}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-wrapper has_fade_anim">
          <p className="text">{service.description}</p>
          <p className="text">{service.overview}</p>
        </div>
      </div>

      <div className="steps-wrapper-box has_fade_anim">
        <div className="container">
          <div className="working-steps-box">
            <div className="working-steps">
              {workingSteps.map((step, idx) => (
                <div className="working-step" key={idx}>
                  <h2 className="title" style={{ whiteSpace: 'pre-line' }}>
                    {step.title}
                  </h2>
                  <p className="text">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="thumb-gallery has_fade_anim">
          {galleryImages.map((imgSrc, idx) => (
            <img
              src={imgSrc}
              alt={`${service.title} Gallery ${idx + 1}`}
              key={idx}
              style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
