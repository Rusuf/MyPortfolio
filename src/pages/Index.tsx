import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import StarsBackground from '@/components/StarsBackground';
import DynamicNebulaBackground from '@/components/DynamicNebulaBackground';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import ScrollToTop from '@/components/ScrollToTop';
import CursorEffect from '@/components/CursorEffect';
import Comet from '@/components/Comet';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Mathwaque Rufus | Portfolio";
    
    // Preload audio file
    const audio = new Audio('/space-ambiance.mp3');
    audio.preload = 'auto';
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Background Elements */}
      <StarsBackground />
      <DynamicNebulaBackground />
      <Comet />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="certifications">
          <CertificationsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      
      {/* UI Elements */}
      <ScrollToTop />
      <CursorEffect />
    </div>
  );
};

export default Index;
