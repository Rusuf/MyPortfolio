
import React from 'react';
import { aboutTimeline } from '@/data/portfolioData';
import AchievementBadges from './AchievementBadges';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="cosmic-section">
      <div className="cosmic-container">
        <h2 className="cosmic-title text-center">My Galactic Journey</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-cosmic-star mb-8">
            I'm a passionate developer who loves building projects that push the boundaries of technology. 
            With a creative approach to problem-solving and an eye for design, I create digital experiences 
            that are both functional and visually appealing. My journey through the cosmos of code has been 
            filled with exploration, discovery, and continuous learning.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cosmic-neon opacity-30"></div>
          
          {aboutTimeline.map((item, index) => (
            <div 
              key={item.id} 
              className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-16`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-cosmic-electric border-2 border-cosmic-neon animate-pulse"></div>
              
              {/* Content box */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-cosmic-nebula bg-opacity-20 p-5 rounded-lg backdrop-blur-sm border border-cosmic-galaxy">
                  <h3 className="text-xl font-orbitron text-cosmic-galaxy font-bold mb-1">{item.year}</h3>
                  <h4 className="text-lg text-cosmic-electric font-semibold mb-2">{item.title}</h4>
                  <p className="text-cosmic-star">{item.description}</p>
                </div>
              </div>
              
              {/* Empty space for the other side */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
        
        {/* Achievements Section */}
        <AchievementBadges />
      </div>
    </section>
  );
};

export default AboutSection;
