
import React, { useState } from 'react';
import { skills } from '@/data/portfolioData';

const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  
  // Function to generate proficiency rings
  const renderProficiencyRings = (skillId: number, proficiency: number, color: string) => {
    const isHovered = hoveredSkill === skillId;
    const ringCount = Math.floor(proficiency / 10); // 1 ring per 10% proficiency
    
    return [...Array(ringCount)].map((_, index) => {
      const size = 60 + (index + 1) * 8; // Increasing size for each ring
      const animationDuration = 10 - (index * 0.5); // Faster animation for outer rings
      const animationDirection = index % 2 === 0 ? 'normal' : 'reverse'; // Alternate directions
      
      return (
        <div
          key={`ring-${skillId}-${index}`}
          className={`absolute rounded-full border border-cosmic-electric transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-30'}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%) rotate(0deg)',
            animation: `orbit ${animationDuration}s linear infinite ${animationDirection}`,
            borderColor: color,
          }}
        ></div>
      );
    });
  };
  
  return (
    <section id="skills" className="cosmic-section">
      <div className="cosmic-container">
        <h2 className="cosmic-title text-center">My Cosmic Arsenal</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-cosmic-star">
            Navigating through the vast universe of technologies, I've mastered various tools and languages.
            Each skill represents a planet in my cosmic arsenal, ready to be deployed in the right project.
          </p>
        </div>
        
        {/* Solar System Skills */}
        <div className="relative max-w-5xl h-[500px] mx-auto">
          {/* Sun/Central Element */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 shadow-lg shadow-orange-500/50 animate-pulse z-10">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 blur-sm"></div>
          </div>
          
          {/* Skill Planets */}
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * 2 * Math.PI;
            const orbitRadius = 200; // Base orbit radius
            const left = `calc(50% + ${orbitRadius * Math.cos(angle)}px)`;
            const top = `calc(50% + ${orbitRadius * Math.sin(angle)}px)`;
            const isHovered = hoveredSkill === skill.id;
            
            return (
              <div
                key={skill.id}
                className={`skill-planet absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 transition-all duration-300 ${isHovered ? 'scale-125' : ''}`}
                style={{
                  left,
                  top,
                  width: `${50 + skill.proficiency / 5}px`,
                  height: `${50 + skill.proficiency / 5}px`,
                  background: `rgba(${parseInt(skill.color.slice(1, 3), 16)}, ${parseInt(skill.color.slice(3, 5), 16)}, ${parseInt(skill.color.slice(5, 7), 16)}, 0.8)`,
                  borderColor: skill.color,
                  boxShadow: isHovered ? `0 0 20px ${skill.color}` : `0 0 10px ${skill.color}`
                }}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Proficiency rings - only render when hovered */}
                {renderProficiencyRings(skill.id, skill.proficiency, skill.color)}
                
                <div className="flex flex-col items-center justify-center h-full">
                  <span className="text-2xl mb-1">{skill.icon}</span>
                  <span className="font-orbitron text-xs">{skill.name}</span>
                  {isHovered && (
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-cosmic-galaxy bg-cosmic-star px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                      {skill.proficiency}%
                    </span>
                  )}
                </div>
              </div>
            );
          })}
          
          {/* Orbit Paths */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-cosmic-galaxy opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
