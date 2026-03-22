import React, { useState } from 'react';
import { projects } from '@/data/portfolioData';
import { ExternalLink, Github, X, ChevronRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openProject = (id: number) => {
    setSelectedProject(id);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  const LiveBadge = ({ size = 'md' }: { size?: 'sm' | 'md' }) => (
    <span className={`inline-flex items-center gap-1.5 rounded-full font-orbitron font-bold bg-green-900/40 border border-green-400 text-green-300 ${size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs'}`}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
      </span>
      LIVE
    </span>
  );

  // NiTip is first (featured), rest follow
  const featured = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="cosmic-section">
      <div className="cosmic-container">
        <h2 className="cosmic-title text-center">My Projects</h2>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-cosmic-star">
            Real products and systems I've built — from live platforms handling real transactions to full-stack applications.
          </p>
        </div>

        {/* Featured Project — NiTip Africa */}
        {featured && (
          <div
            className="max-w-5xl mx-auto mb-12 cursor-pointer group"
            onClick={() => openProject(featured.id)}
          >
            <div className="bg-cosmic-space bg-opacity-50 rounded-xl border border-cosmic-neon/50 hover:border-cosmic-neon transition-all duration-500 overflow-hidden hover:shadow-lg hover:shadow-cosmic-neon/20">
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-2/5 overflow-hidden relative">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {featured.status === "live" && (
                    <div className="absolute top-4 left-4 z-20">
                      <LiveBadge size="sm" />
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="md:w-3/5 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-cosmic-electric">
                      {featured.title}
                    </h3>
                  </div>

                  <p className="text-cosmic-star mb-4 leading-relaxed">
                    {featured.solution}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-xs bg-cosmic-galaxy/60 text-cosmic-star border border-cosmic-neon/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 flex-wrap">
                    <a
                      href={featured.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button py-2 px-5 inline-flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      <span>Visit Live Site</span>
                    </a>
                    <a
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cosmic-star hover:text-cosmic-electric transition-colors text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                    <span className="inline-flex items-center gap-1 text-cosmic-electric text-sm ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects — Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="bg-cosmic-space bg-opacity-40 rounded-xl border border-cosmic-galaxy hover:border-cosmic-neon/60 transition-all duration-300 overflow-hidden cursor-pointer group hover:shadow-lg hover:shadow-cosmic-neon/10"
              onClick={() => openProject(project.id)}
            >
              {/* Image */}
              <div className="overflow-hidden h-40 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-orbitron font-bold text-cosmic-electric">
                    {project.title}
                  </h3>
                  {project.status === "live" && <LiveBadge size="sm" />}
                  {project.status === "completed" && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-orbitron bg-blue-900/40 border border-blue-400 text-blue-300">
                      COMPLETED
                    </span>
                  )}
                </div>

                <p className="text-cosmic-star text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.solution}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 rounded-full text-[10px] bg-cosmic-galaxy/40 text-cosmic-star border border-cosmic-galaxy"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] text-cosmic-star">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cosmic-star hover:text-cosmic-electric transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                    </a>
                    {project.liveDemoUrl !== "#" && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cosmic-star hover:text-cosmic-electric transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <span className="text-cosmic-electric text-xs opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1">
                    Details <ChevronRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {
        selectedProject !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeProject}
          >
            <div className="absolute inset-0 bg-cosmic-nebula-dark bg-opacity-95 backdrop-blur-sm"></div>

            <div
              className="relative bg-cosmic-space bg-opacity-90 backdrop-blur-lg rounded-xl w-full max-w-3xl max-h-[85vh] overflow-y-auto p-8 border border-cosmic-electric shadow-2xl shadow-cosmic-neon/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 text-cosmic-star hover:text-cosmic-neon transition-colors p-1"
              >
                <X size={24} />
              </button>

              {projects.filter(p => p.id === selectedProject).map(project => (
                <div key={project.id} className="space-y-6">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="text-2xl md:text-3xl font-orbitron text-cosmic-electric">
                      {project.title}
                    </h2>
                    {project.status === "live" && <LiveBadge />}
                    {project.status === "completed" && (
                      <span className="px-3 py-1 rounded-full text-xs font-orbitron bg-blue-900/40 border border-blue-400 text-blue-300">
                        COMPLETED
                      </span>
                    )}
                  </div>

                  <div className="aspect-video overflow-hidden rounded-lg border border-cosmic-galaxy">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-4 text-cosmic-star">
                    <div>
                      <h4 className="font-orbitron text-cosmic-electric mb-1 text-sm">The Challenge</h4>
                      <p className="leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-orbitron text-cosmic-electric mb-1 text-sm">The Solution</h4>
                      <p className="leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-orbitron text-cosmic-electric mb-2 text-sm">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-xs bg-cosmic-galaxy text-cosmic-star border border-cosmic-neon/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    {project.liveDemoUrl !== "#" && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cosmic-button py-2 px-6 flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        <span>{project.status === "live" ? "Visit Live Site" : "Live Demo"}</span>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button py-2 px-6 flex items-center gap-2 bg-cosmic-space border-cosmic-galaxy"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      }
    </section >
  );
};

export default ProjectsSection;
