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

  const toggleStarMap = () => {
    setShowStarMap(!showStarMap);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled || showStarMap ? 'bg-[rgba(10,10,35,0.8)] backdrop-blur-sm' : 'bg-transparent'}`}>
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
            <div className="flex items-center space-x-6">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleStarMap();
                }}
                className="font-orbitron text-base text-[#F5F5F5] hover:text-[#00FFFF] transition-colors duration-300"
                style={{ textShadow: '0 0 5px rgba(0, 255, 255, 0.6)' }}
              >
                Star Map
              </a>
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