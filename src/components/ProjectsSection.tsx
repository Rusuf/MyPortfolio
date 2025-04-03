
import React, { useState } from 'react';
import { projects } from '@/data/portfolioData';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  
  const toggleProject = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };
  
  return (
    <section id="projects" className="cosmic-section">
      <div className="cosmic-container">
        <h2 className="cosmic-title text-center">Galaxies I've Built</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-cosmic-star">
            Explore the digital galaxies I've created, each project a unique celestial body with its own
            characteristics and technologies. Click on a project to discover its atmosphere.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {projects.map((project) => {
            const isExpanded = expandedProject === project.id;
            
            return (
              <div 
                key={project.id}
                className={`project-galaxy ${isExpanded ? 'md:col-span-2' : ''}`}
                onClick={() => toggleProject(project.id)}
              >
                <div className={`transition-all duration-500 ${isExpanded ? 'flex flex-col md:flex-row gap-8' : ''}`}>
                  {/* Project Image */}
                  <div 
                    className={`${isExpanded ? 'md:w-1/2' : 'w-full'} mb-4 ${isExpanded ? 'md:mb-0' : ''}`}
                  >
                    <div className="overflow-hidden rounded-lg border-2 border-cosmic-galaxy group">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className={isExpanded ? 'md:w-1/2' : 'w-full'}>
                    <h3 className="text-xl md:text-2xl font-orbitron font-bold text-cosmic-electric mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-cosmic-star mb-4">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 rounded-full text-xs bg-cosmic-galaxy text-cosmic-star border border-cosmic-neon"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project Links */}
                    {isExpanded && (
                      <div className="flex space-x-4">
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cosmic-button py-2 flex items-center space-x-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                        
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cosmic-button py-2 flex items-center space-x-2 bg-cosmic-space border-cosmic-galaxy"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                          <span>Source Code</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                
                {!isExpanded && (
                  <p className="text-center mt-4 text-sm text-cosmic-electric">
                    Click to explore this galaxy
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
