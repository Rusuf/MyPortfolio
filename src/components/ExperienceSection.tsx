import React from 'react';
import { experiences } from '@/data/portfolioData';
import { ExternalLink, Briefcase } from 'lucide-react';

const ExperienceSection: React.FC = () => {
    return (
        <section id="experience" className="cosmic-section">
            <div className="cosmic-container">
                <h2 className="cosmic-title text-center">Experience</h2>

                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-lg text-cosmic-star">
                        My professional journey through the galaxies of software engineering, data systems, and mobile payments.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-neon via-cosmic-electric to-cosmic-neon"></div>

                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-16 group`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                                <div className="w-10 h-10 rounded-full bg-cosmic-space border-2 border-cosmic-neon flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Briefcase className="w-5 h-5 text-cosmic-electric group-hover:animate-pulse" />
                                </div>
                            </div>

                            {/* Content card */}
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-20 md:pl-0`}>
                                <div className="bg-cosmic-space bg-opacity-40 p-6 rounded-lg backdrop-blur-sm border border-cosmic-galaxy hover:border-cosmic-neon transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-cosmic-neon/20">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="text-xl text-cosmic-electric font-orbitron font-bold flex items-center flex-wrap gap-2">
                                                {exp.company}
                                                {exp.liveUrl && (
                                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-orbitron font-bold bg-green-900/40 border border-green-400 text-green-300">
                                                        <span className="relative flex h-2 w-2">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                                                        </span>
                                                        LIVE
                                                    </span>
                                                )}
                                            </h3>
                                            <p className="text-cosmic-star text-sm font-orbitron">{exp.role}</p>
                                        </div>
                                    </div>

                                    {/* Meta info */}
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="px-2 py-0.5 rounded-full text-xs bg-cosmic-galaxy text-cosmic-star border border-cosmic-neon">
                                            {exp.period}
                                        </span>
                                        <span className="px-2 py-0.5 rounded-full text-xs bg-cosmic-galaxy text-cosmic-star border border-cosmic-galaxy">
                                            {exp.type}
                                        </span>
                                        <span className="px-2 py-0.5 rounded-full text-xs bg-cosmic-galaxy text-cosmic-star border border-cosmic-galaxy">
                                            {exp.location}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-cosmic-star text-sm mb-3 leading-relaxed">{exp.description}</p>

                                    {/* Highlights */}
                                    <ul className="space-y-1.5 mb-3">
                                        {exp.highlights.map((highlight, i) => (
                                            <li key={i} className="text-cosmic-star text-sm flex items-start gap-2">
                                                <span className="text-cosmic-electric mt-1 flex-shrink-0">▸</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Live link */}
                                    {exp.liveUrl && (
                                        <a
                                            href={exp.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-cosmic-electric hover:text-cosmic-neon transition-colors duration-300 font-orbitron"
                                        >
                                            <ExternalLink size={14} />
                                            Visit {exp.company}
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Empty space for the other side */}
                            <div className="hidden md:block w-5/12"></div>
                        </div>
                    ))}

                    {/* Timeline end marker */}
                    <div className="absolute bottom-0 left-8 md:left-1/2 transform -translate-x-1/2 -mb-4">
                        <div className="w-4 h-4 rounded-full bg-cosmic-neon animate-ping"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
