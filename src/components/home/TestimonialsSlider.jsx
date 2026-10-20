import React, { useState } from 'react';
import { testimonials } from '../../data/siteData';

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentItem = testimonials[currentIndex];

  return (
    <div className="testimonial-area section-item1 my-5">
      <div className="container large">
        <div className="testimonial-area-inner section-spacing">
          <div className="section-header mb-5">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title">What Our Clients Say About Us</h2>
              </div>
            </div>
          </div>

          <div className="testimonial-wrapper-box">
            <div className="info-box">
              <h3 className="rating">4.9</h3>
              <div className="rating-icons">
                {[1, 2, 3, 4, 5].map((star) => (
                  <img
                    key={star}
                    src="/assets/imgs/icon/star.webp"
                    alt="Rating Star"
                    width="20"
                    height="20"
                  />
                ))}
              </div>
              <p className="reviews">(40+ reviews)</p>
              <p className="text">Real Stories. Real Results. Voices Behind the Brands</p>
            </div>

            <div className="testimonial-wrapper flex-grow-1">
              <div className="testimonial-item p-4" style={{ minHeight: '260px' }}>
                <div className="content">
                  <div className="content-top">
                    <div className="icon mb-3">
                      <img
                        className="quote-icon"
                        src="/assets/imgs/icon/quote-6.webp"
                        alt="Quote Icon"
                        width="36"
                        height="30"
                      />
                    </div>
                    <div className="text-wrapper mb-4">
                      <p className="text" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                        "{currentItem.quote}"
                      </p>
                    </div>
                  </div>
                  <div className="author border-top pt-3 mt-3">
                    <div className="meta">
                      <h3 className="name" style={{ fontSize: '20px', marginBottom: '2px' }}>
                        {currentItem.author}
                      </h3>
                      <span className="post" style={{ color: 'var(--palletio-gold)', fontSize: '14px' }}>
                        {currentItem.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="d-flex align-items-center justify-content-between mt-4">
                <div className="testimonial-dots">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      type="button"
                    ></button>
                  ))}
                </div>

                <div className="d-flex gap-2">
                  <button
                    className="testimonial-nav-btn"
                    onClick={prevSlide}
                    aria-label="Previous Testimonial"
                    type="button"
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  <button
                    className="testimonial-nav-btn"
                    onClick={nextSlide}
                    aria-label="Next Testimonial"
                    type="button"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
