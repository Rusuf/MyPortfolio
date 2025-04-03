
import React from 'react';
import { ChevronDown } from 'lucide-react';
import TypingEffect from './TypingEffect';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="cosmic-section flex items-center relative">
      <div className="cosmic-container text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6">
          Welcome to My 
          <span className="text-cosmic-electric"> Universe</span>
        </h1>
        
        <p className="cosmic-subtitle max-w-2xl mx-auto mb-12">
          <TypingEffect 
            text="A Developer Exploring the Galaxies of Code" 
            speed={70}
            className="text-cosmic-nebula"
          />
        </p>
        
        <div className="relative mb-12">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto overflow-hidden border-4 border-cosmic-neon animate-float relative">
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
              alt="Developer Profile" 
              className="w-full h-full object-cover"
            />
            
            {/* Orbiting Stars */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 bg-cosmic-star rounded-full"
                  style={{
                    transformOrigin: 'center',
                    animation: `orbit ${8 + i}s linear infinite`,
                    animationDelay: `${i * 0.5}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="cosmic-button"
        >
          Discover More
        </button>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-cosmic-star" size={32} />
        </div>
      </div>
      
      {/* Decorative Planets */}
      <div className="hidden lg:block absolute top-20 right-20 w-16 h-16 rounded-full bg-cosmic-galaxy opacity-70"></div>
      <div className="hidden lg:block absolute bottom-20 left-20 w-24 h-24 rounded-full bg-cosmic-nebula opacity-50"></div>
    </section>
  );
};

export default HeroSection;
