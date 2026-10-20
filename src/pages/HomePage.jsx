import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSlider from '../components/home/ServicesSlider';
import WorkMarquee from '../components/home/WorkMarquee';
import CounterSection from '../components/home/CounterSection';
import ClientsSection from '../components/home/ClientsSection';
import TestimonialsSlider from '../components/home/TestimonialsSlider';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Top UI/UX Design & Development Agency in India | Palletio Design Studio';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSlider />
      <WorkMarquee />
      <CounterSection />
      <ClientsSection />
      <TestimonialsSlider />
    </>
  );
}
