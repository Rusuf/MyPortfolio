
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Check localStorage for saved preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDark(true);
      document.body.classList.add('dark-mode');
    }
  }, []);
  
  const toggleDarkMode = () => {
    setIsAnimating(true);
    
    // Set timeout for animation to complete before toggling
    setTimeout(() => {
      const newDarkMode = !isDark;
      setIsDark(newDarkMode);
      
      // Update body class
      if (newDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      
      // Save preference to localStorage
      localStorage.setItem('darkMode', String(newDarkMode));
      setIsAnimating(false);
    }, 500); // Match this with CSS animation duration
  };
  
  return (
    <button
      aria-label="Toggle dark mode"
      className={`relative p-2 rounded-full transition-all duration-300 ${
        isDark ? 'bg-cosmic-space text-cosmic-electric' : 'bg-cosmic-galaxy text-cosmic-star'
      }`}
      onClick={toggleDarkMode}
    >
      {isAnimating && (
        <div className="black-hole-animation absolute inset-0 rounded-full"></div>
      )}
      {isDark ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default DarkModeToggle;
