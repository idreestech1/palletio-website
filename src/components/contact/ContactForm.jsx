import React, { useState } from 'react';
import { siteInfo } from '../../data/siteData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: 'UI UX Design',
    projectBudget: '',
    projectDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending inquiry with fast instant response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        service: 'UI UX Design',
        projectBudget: '',
        projectDetails: ''
      });
    }, 700);
  };

  return (
    <section className="contact-area">
      <div className="container">
        <div className="contact-area-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title">
                  Get a quote.<br />It all starts here.
                </h2>
              </div>
            </div>
            <div className="text-wrapper">
              <p className="text">
                Have an idea, project, or challenge in mind? We're here to help you bring it to life with strategic thinking, world-class design, and reliable development. From startups to enterprises - we partner with businesses ready to grow, innovate, and make an impact.
              </p>
            </div>
          </div>

          <div className="section-content">
            <div className="info-box">
              <div className="text-wrapper">
                <p className="text">
                  We will respond to you within 24 hours. We’ll sign an NDA if required.
                </p>
              </div>
              <ul className="contact-list">
                <li>
                  <a href={`tel:${siteInfo.phoneRaw}`}>{siteInfo.phone}</a>
                </li>
                <li>
                  <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
                </li>
              </ul>
            </div>

            <div className="contact-wrap contact-area1">
              <form onSubmit={handleSubmit} className="contact-form">
                {submitted && (
                  <div
                    className="alert alert-success messenger-box-contact__msg mb-4"
                    role="alert"
                    style={{
                      background: 'rgba(37, 211, 102, 0.15)',
                      border: '1px solid #25d366',
                      color: '#25d366',
                      borderRadius: '8px',
                      padding: '14px 20px',
                      display: 'block'
                    }}
                  >
                    <i className="fa-solid fa-circle-check me-2"></i>
                    Your message was sent successfully. We will respond within 24 hours!
                  </div>
                )}

                <div className="contact-formwrap">
                  <div className="contact-formfield">
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Full Name*"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-formfield">
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Company Name*"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-formfield">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-formfield">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number*"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-formfield">
                    <select
                      className="form-select2"
                      name="service"
                      id="service"
                      aria-label="Service required"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="UI UX Design">UI UX Design</option>
                      <option value="Branding & Rebranding">Branding & Rebranding</option>
                      <option value="Web Development">Web Development</option>
                      <option value="App Development">App Development</option>
                      <option value="E Commerce">E Commerce</option>
                      <option value="Game Design Graphics Design">Game Design Graphics Design</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="contact-formfield">
                    <input
                      type="number"
                      name="projectBudget"
                      id="projectBudget"
                      placeholder="Project Budget ($ / ₹)*"
                      value={formData.projectBudget}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-formfield messages">
                    <input
                      type="text"
                      name="projectDetails"
                      id="projectDetails"
                      placeholder="Project Details"
                      value={formData.projectDetails}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="submit-btn mt-4">
                  <button
                    className="wc-btn wc-btn-primary btn-text-flip"
                    name="submit"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <span data-text={isSubmitting ? 'Sending...' : 'Send Inquiry'}>
                      {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
