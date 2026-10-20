import React, { useState } from 'react';
import { aboutFaqs } from '../../data/siteData';

export default function FaqSection() {
  const [activeId, setActiveId] = useState('faq-2');

  const toggleAccordion = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-area">
      <div className="container">
        <div className="faq-area-inner section-spacing-bottom">
          <div className="section-content">
            <div className="thumb">
              <img
                src="/assets/imgs/gallery/faqimg.jpg"
                alt="Palletio Design & Development Process"
                loading="lazy"
                width="600"
                height="700"
                style={{ width: '100%', height: 'auto', borderRadius: '14px' }}
              />
            </div>
            <div className="content-last">
              <div className="section-title-wrapper mb-4">
                <div className="title-wrapper">
                  <h2 className="section-title">
                    Working Across Design, Development & Digital Strategy
                  </h2>
                </div>
              </div>

              <div className="accordion-wrapper">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  {aboutFaqs.map((faq) => {
                    const isOpen = activeId === faq.id;
                    return (
                      <div className="accordion-item" key={faq.id}>
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => toggleAccordion(faq.id)}
                            aria-expanded={isOpen}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div
                          className={`faq-answer-collapse ${isOpen ? 'open' : ''}`}
                          style={{
                            maxHeight: isOpen ? '200px' : '0',
                            overflow: 'hidden',
                            transition: 'all 0.35s ease'
                          }}
                        >
                          <div className="accordion-body p-4" style={{ color: 'var(--palletio-subtext)', fontSize: '16px', lineHeight: '1.6' }}>
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
