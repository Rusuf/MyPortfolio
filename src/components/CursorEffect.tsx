
import React, { useState, useEffect } from 'react';

interface StarParticle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  dx: number;
  dy: number;
}

const CursorEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<StarParticle[]>([]);
  
  useEffect(() => {
    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create a new particle
      const newParticle = {
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 2 + 1,
        alpha: 1,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2
      };
      
      setParticles(prevParticles => {
        // Limit the number of particles
        const updatedParticles = [...prevParticles, newParticle];
        if (updatedParticles.length > 30) {
          return updatedParticles.slice(-30);
        }
        return updatedParticles;
      });
    };
    
    // Update particles animation
    const animationId = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles
          .map(particle => ({
            ...particle,
            x: particle.x + particle.dx,
            y: particle.y + particle.dy,
            alpha: particle.alpha - 0.02
          }))
          .filter(particle => particle.alpha > 0)
      );
    }, 30);
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(animationId);
    };
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {/* Custom cursor */}
      <div 
        className="w-6 h-6 rounded-full border-2 border-cosmic-electric fixed pointer-events-none z-50 mix-blend-difference"
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>
      
      {/* Trail particles */}
      {particles.map((particle, index) => (
        <div 
          key={index}
          className="absolute rounded-full bg-cosmic-star"
          style={{
            left: particle.x,
            top: particle.y,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.alpha,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
      ))}
    </div>
  );
};

export default CursorEffect;
