
import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface NavLink {
  id: string;
  label: string;
  x: number; // position percentage from left
  y: number; // position percentage from top
}

const StarMapNavigation: React.FC = () => {
  const [hoveredStar, setHoveredStar] = useState<string | null>(null);

  const navLinks: NavLink[] = [
    { id: 'home', label: 'Home', x: 8, y: 50 },
    { id: 'about', label: 'About', x: 22, y: 50 },
    { id: 'experience', label: 'Experience', x: 36, y: 50 },
    { id: 'skills', label: 'Skills', x: 50, y: 50 },
    { id: 'projects', label: 'Projects', x: 64, y: 50 },
    { id: 'certifications', label: 'Certifications', x: 78, y: 50 },
    { id: 'contact', label: 'Contact', x: 92, y: 50 },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Create comet trail effect
      const comet = document.createElement('div');
      comet.className = 'fixed w-2 h-2 bg-cosmic-electric rounded-full z-50';
      document.body.appendChild(comet);

      // Starting position (from the star)
      const star = document.getElementById(`star-${id}`);
      const rect = star?.getBoundingClientRect();

      if (rect) {
        comet.style.left = `${rect.left + rect.width / 2}px`;
        comet.style.top = `${rect.top + rect.height / 2}px`;

        // Animate to the section
        const targetRect = element.getBoundingClientRect();
        const keyframes = [
          { left: `${rect.left + rect.width / 2}px`, top: `${rect.top + rect.height / 2}px`, opacity: 1 },
          { left: `${targetRect.left + targetRect.width / 2}px`, top: `${targetRect.top + 100}px`, opacity: 0 }
        ];

        const animation = comet.animate(keyframes, {
          duration: 1000,
          easing: 'ease-out',
          fill: 'forwards'
        });

        animation.onfinish = () => {
          document.body.removeChild(comet);
          element.scrollIntoView({ behavior: 'smooth' });
        };
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };



  return (
    <div className="relative h-20 my-8">


      {navLinks.map((link) => (
        <div
          key={link.id}
          id={`star-${link.id}`}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{ left: `${link.x}%`, top: `${link.y}%` }}
          onMouseEnter={() => setHoveredStar(link.id)}
          onMouseLeave={() => setHoveredStar(null)}
          onClick={() => scrollToSection(link.id)}
        >
          <div className={`relative ${hoveredStar === link.id ? 'scale-125' : ''} transition-transform duration-300`}>
            <Star
              className={`text-cosmic-star ${hoveredStar === link.id ? 'text-cosmic-neon' : ''}`}
              fill={hoveredStar === link.id ? "rgba(255, 105, 180, 0.5)" : "none"}
              size={hoveredStar === link.id ? 20 : 16}
            />

            {/* Glow effect */}
            <div
              className={`absolute inset-0 rounded-full blur-sm transition-opacity duration-300 ${hoveredStar === link.id ? 'opacity-100' : 'opacity-0'
                }`}
              style={{
                background: 'radial-gradient(circle, rgba(255,105,180,0.7) 0%, rgba(255,105,180,0) 70%)',
                transform: 'scale(1.5)'
              }}
            ></div>

            {/* Label */}
            <div
              className={`absolute mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-orbitron transition-opacity duration-300 ${hoveredStar === link.id ? 'opacity-100 text-cosmic-neon' : 'opacity-100 text-cosmic-star'
                }`}
            >
              {link.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StarMapNavigation;
