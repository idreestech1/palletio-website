import React, { useEffect } from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesGrid from '../components/services/ServicesGrid';
import ServicesCta from '../components/services/ServicesCta';

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Our Exclusive Services | Palletio Design Studio';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCta />
    </>
  );
}
