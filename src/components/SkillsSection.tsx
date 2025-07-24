import React from 'react';
import { skills } from '@/data/portfolioData';

const SkillsSection: React.FC = () => {
  const categorizedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="cosmic-section">
      <div className="cosmic-container">
        <h2 className="cosmic-title text-center">My Skills</h2>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-cosmic-star">
            Here are the technologies and tools I specialize in, ready to be deployed in your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <div key={category} className="bg-cosmic-nebula bg-opacity-20 p-6 rounded-lg backdrop-blur-sm border border-cosmic-galaxy">
              <h3 className="text-xl font-orbitron font-bold text-cosmic-electric mb-4 text-center">{category}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map(skill => (
                  <div key={skill.id} className="flex flex-col items-center space-y-2">
                    <div
                      className="skill-planet flex items-center justify-center w-20 h-20 rounded-full"
                      style={{
                        background: `rgba(${parseInt(skill.color.slice(1, 3), 16)}, ${parseInt(skill.color.slice(3, 5), 16)}, ${parseInt(skill.color.slice(5, 7), 16)}, 0.8)`,
                        borderColor: skill.color,
                      }}
                    >
                      <span className="text-4xl">{skill.icon}</span>
                    </div>
                    <span className="font-orbitron text-sm text-cosmic-star">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;