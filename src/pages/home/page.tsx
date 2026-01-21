import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import CoreDomainsSection from './components/CoreDomainsSection';
import InnovationAreasSection from './components/InnovationAreasSection';
import FacilitiesSection from './components/FacilitiesSection';
import CommunitySection from './components/CommunitySection';
import CompanySection from './components/CompanySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function HomePage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.observe-fade').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CoreDomainsSection />
      <InnovationAreasSection />
      <FacilitiesSection />
      <CommunitySection />
      <CompanySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
