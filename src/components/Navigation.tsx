
import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import AudioToggle from './AudioToggle';
import StarMapNavigation from './StarMapNavigation';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showStarMap, setShowStarMap] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleStarMap = () => {
    setShowStarMap(!showStarMap);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-cosmic-space bg-opacity-80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="cosmic-container">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Rocket 
              className="text-cosmic-star animate-rocket-launch" 
              size={24} 
            />
            <span className="font-orbitron text-cosmic-electric text-xl font-bold">
              Dev's Cosmic Portfolio
              <span className="text-shadow-glow"></span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className={`nav-link ${showStarMap ? 'text-cosmic-neon' : ''}`}
              onClick={toggleStarMap}
            >
              Star Map
            </button>
            
            {!showStarMap && (
              <>
                <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
                <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
                <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
              </>
            )}
            
            <AudioToggle />
            <DarkModeToggle />
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <AudioToggle />
            <DarkModeToggle />
            <button 
              className="text-cosmic-star hover:text-cosmic-electric transition-colors"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
        
        {/* Star Map Navigation */}
        {showStarMap && (
          <div className="py-6 hidden md:block">
            <StarMapNavigation />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
