import React, { useState, useEffect } from 'react';
import { Rocket, Headphones, Moon } from 'lucide-react';
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
    <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,10,35,0.8)] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <Rocket 
              className="text-[#F5F5F5] animate-launch" 
              size={24} 
            />
            <span className="font-orbitron text-[#00FFFF] text-xl font-bold"
                  style={{ textShadow: '0 0 10px #00FFFF' }}>
              Mathwaque Rufus
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center">
            <div className="constellation-nav flex items-center space-x-8">
              {['Star Map', 'Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => item === 'Star Map' ? toggleStarMap() : scrollToSection(item.toLowerCase())}
                  className="nav-item relative group"
                >
                  <span className="w-2 h-2 bg-[#F5F5F5] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                 group-hover:bg-[#00FFFF] transition-colors duration-300"
                        style={{ boxShadow: '0 0 5px #F5F5F5' }}></span>
                  <span className="text-[#F5F5F5] text-sm font-orbitron absolute -bottom-6 left-1/2 transform -translate-x-1/2
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item}</span>
                  {index < 5 && (
                    <span className="absolute top-1/2 transform -translate-y-1/2 w-8 h-[1px]
                                   border-b border-dotted border-[#FF69B4] opacity-30"></span>
                  )}
                </button>
              ))}
            </div>
            
            {/* Toggles */}
            <div className="flex items-center ml-8 space-x-4">
              <AudioToggle />
              <DarkModeToggle />
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-4">
            <AudioToggle />
            <DarkModeToggle />
            <button 
              className="text-[#F5F5F5] hover:text-[#00FFFF] transition-colors"
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

// Add to your global CSS or tailwind.config.js
// @keyframes launch {
//   0% { transform: translateY(0); }
//   50% { transform: translateY(-10px); }
//   100% { transform: translateY(0); }
// }
// .animate-launch {
//   animation: launch 2s ease-in-out infinite;
// }
