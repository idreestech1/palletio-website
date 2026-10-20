import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutCounters from '../components/about/AboutCounters';
import WhoWeAre from '../components/about/WhoWeAre';
import FaqSection from '../components/about/FaqSection';
import AboutCta from '../components/about/AboutCta';
import ClientsSection from '../components/home/ClientsSection';
import TeamSection from '../components/about/TeamSection';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Palletio – Human-Centered Design & Creative Tech Agency';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutHero />
      <AboutCounters />
      <WhoWeAre />
      <FaqSection />
      <AboutCta />
      <ClientsSection />
      <TeamSection />
    </>
  );
}
