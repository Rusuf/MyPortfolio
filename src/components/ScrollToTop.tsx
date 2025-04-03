
import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-cosmic-space bg-opacity-70 text-cosmic-electric hover:text-cosmic-neon transition-all duration-300 z-40"
          aria-label="Scroll to top"
        >
          <Rocket className="transform rotate-90 animate-float" size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
