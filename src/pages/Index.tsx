import React, { lazy, Suspense, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';

// Lazy load everything below the fold for faster initial paint
const StarsBackground = lazy(() => import('@/components/StarsBackground'));
const DynamicNebulaBackground = lazy(() => import('@/components/DynamicNebulaBackground'));
const Comet = lazy(() => import('@/components/Comet'));
const AboutSection = lazy(() => import('@/components/AboutSection'));
const ExperienceSection = lazy(() => import('@/components/ExperienceSection'));
const SkillsSection = lazy(() => import('@/components/SkillsSection'));
const ProjectsSection = lazy(() => import('@/components/ProjectsSection'));
const CertificationsSection = lazy(() => import('@/components/CertificationsSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const ScrollToTop = lazy(() => import('@/components/ScrollToTop'));
const CursorEffect = lazy(() => import('@/components/CursorEffect'));

const Index = () => {
  useEffect(() => {
    document.title = "Mathwaque Rufus | Portfolio";
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Navigation loads immediately */}
      <Navigation />

      {/* Background Elements — lazy loaded */}
      <Suspense fallback={null}>
        <StarsBackground />
        <DynamicNebulaBackground />
        <Comet />
      </Suspense>

      {/* Main Content */}
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <Suspense fallback={<div className="min-h-screen" />}>
          <div id="about">
            <AboutSection />
          </div>
          <div id="experience">
            <ExperienceSection />
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
        </Suspense>
      </main>

      {/* UI Elements — lazy loaded */}
      <Suspense fallback={null}>
        <ScrollToTop />
        <CursorEffect />
      </Suspense>
    </div>
  );
};

export default Index;
