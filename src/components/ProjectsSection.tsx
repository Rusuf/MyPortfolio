
import React, { useState } from 'react';
import { projects } from '@/data/portfolioData';
import { ExternalLink, Github, X } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [zoomedProject, setZoomedProject] = useState<number | null>(null);
  
  const toggleProject = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };
  
  const zoomProject = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomedProject(id);
    document.body.style.overflow = 'hidden';
  };
  
  const closeZoom = () => {
    setZoomedProject(null);
    document.body.style.overflow = '';
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
                    <div className="overflow-hidden rounded-lg border-2 border-cosmic-galaxy group relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {isExpanded && (
                        <button
                          className="absolute bottom-4 right-4 px-3 py-1 bg-cosmic-galaxy bg-opacity-80 text-cosmic-star rounded-full text-sm hover:bg-cosmic-neon hover:text-cosmic-space transition-colors duration-300"
                          onClick={(e) => zoomProject(project.id, e)}
                        >
                          Zoom into Galaxy
                        </button>
                      )}
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
      
      {/* Zoomed project modal */}
      {zoomedProject !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeZoom}
        >
          {/* Background with galaxy swirl */}
          <div className="absolute inset-0 bg-cosmic-nebula-dark bg-opacity-95">
            {/* Add swirling galaxy effect */}
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(ellipse at center, rgba(75, 0, 130, 0.6) 0%, rgba(10, 10, 35, 0.9) 70%)',
              animation: 'spin 60s linear infinite'
            }}></div>
            
            {/* Star particles */}
            {[...Array(50)].map((_, i) => {
              const size = Math.random() * 3;
              const posX = Math.random() * 100;
              const posY = Math.random() * 100;
              const duration = 3 + Math.random() * 5;
              
              return (
                <div 
                  key={i}
                  className="absolute rounded-full bg-cosmic-star"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${posX}%`,
                    top: `${posY}%`,
                    opacity: Math.random() * 0.8,
                    animation: `twinkle ${duration}s ease-in-out infinite`
                  }}
                ></div>
              );
            })}
          </div>
          
          {/* Content */}
          <div 
            className="relative bg-cosmic-space bg-opacity-80 backdrop-blur-lg rounded-lg w-full max-w-4xl p-8 border border-cosmic-electric"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={closeZoom}
              className="absolute top-4 right-4 text-cosmic-star hover:text-cosmic-neon transition-colors"
            >
              <X size={24} />
            </button>
            
            {projects.filter(p => p.id === zoomedProject).map(project => (
              <div key={project.id} className="space-y-6">
                <h2 className="text-3xl font-orbitron text-cosmic-electric text-center">
                  {project.title}
                </h2>
                
                <div className="aspect-video overflow-hidden rounded-lg border-2 border-cosmic-electric">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-cosmic-star">
                  <p className="mb-4 text-lg leading-relaxed">{project.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-cosmic-electric font-orbitron mb-2">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 rounded-full text-xs bg-cosmic-galaxy text-cosmic-star border border-cosmic-neon"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-cosmic-electric font-orbitron mb-2">Key Features</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Responsive design across all devices</li>
                        <li>Intuitive user interface and navigation</li>
                        <li>Performance optimized for smooth experience</li>
                        <li>Creative and unique visual design</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-6 pt-4">
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button py-2 px-6 flex items-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button py-2 px-6 flex items-center space-x-2 bg-cosmic-space border-cosmic-galaxy"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
