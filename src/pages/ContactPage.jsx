import React, { useEffect } from 'react';
import ContactForm from '../components/contact/ContactForm';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Get in Touch | Palletio Design Studio';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page-clean">
      <ContactForm />
    </div>
  );
}
