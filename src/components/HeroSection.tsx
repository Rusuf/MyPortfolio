import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, #0A0A23 0%, #4B0082 100%)',
             }}>
      {/* Twinkling Stars Effect - Add to your CSS */}
      <div className="stars-container absolute inset-0" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6">
          <span className="text-[#F5F5F5]">Welcome to </span>
          <span className="text-[#00FFFF]" style={{ textShadow: '0 0 10px #00FFFF' }}>
            My Universe
          </span>
        </h1>
        
        {/* Tagline */}
        <div className="relative mb-12">
          <p className="text-xl text-[#4B0082] font-orbitron mb-2">
            A Developer Exploring the Galaxies of Code
          </p>
          <div className="h-[2px] w-48 bg-[#00FFFF] mx-auto" />
        </div>
        
        {/* Intro Blurb with Nebula Effect */}
        <div className="relative mb-12">
          {/* Nebula Cloud Background */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                        w-[300px] h-[200px] opacity-20 pointer-events-none"
               style={{
                 background: 'radial-gradient(circle at center, #1E90FF 0%, transparent 70%)',
                 filter: 'blur(20px)',
               }} />
          
          {/* Blurb Text */}
          <p className="text-[#F5F5F5] text-lg max-w-[500px] mx-auto relative z-10"
             style={{ textShadow: '0 0 5px #FF69B4' }}>
            I'm Mathwaque Rufus, a developer crafting stellar solutions in the vast universe of tech. 
            Let's explore my cosmic journey together!
          </p>
        </div>
        
        {/* Discover More Button */}
        <button
          onClick={scrollToAbout}
          className="px-8 py-3 rounded-full bg-[#1E90FF] text-[#F5F5F5] font-orbitron
                   hover:bg-[#FF69B4] transition-colors duration-300 relative z-10"
        >
          Discover More
        </button>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-[#F5F5F5]" size={32} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// Add to your global CSS:
// .stars-container {
//   background-image: radial-gradient(2px 2px at 20px 30px, #F5F5F5, rgba(0,0,0,0)),
//                     radial-gradient(2px 2px at 40px 70px, #F5F5F5, rgba(0,0,0,0)),
//                     radial-gradient(2px 2px at 50px 160px, #F5F5F5, rgba(0,0,0,0)),
//                     radial-gradient(2px 2px at 90px 40px, #F5F5F5, rgba(0,0,0,0)),
//                     radial-gradient(2px 2px at 130px 80px, #F5F5F5, rgba(0,0,0,0));
//   background-repeat: repeat;
//   animation: twinkle 5s ease-in-out infinite;
// }
//
// @keyframes twinkle {
//   0% { opacity: 0.5; }
//   50% { opacity: 1; }
//   100% { opacity: 0.5; }
// }
