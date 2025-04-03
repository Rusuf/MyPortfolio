
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import StarsBackground from '@/components/StarsBackground';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import ScrollToTop from '@/components/ScrollToTop';
import CursorEffect from '@/components/CursorEffect';
import Comet from '@/components/Comet';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Cosmic Developer Portfolio";
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Background Elements */}
      <StarsBackground />
      <Comet />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* UI Elements */}
      <ScrollToTop />
      <CursorEffect />
    </div>
  );
};

export default Index;
