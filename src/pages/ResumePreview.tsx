
import React from 'react';
import { Link } from 'react-router-dom';
import { skills, projects, certifications, experiences } from '../data/portfolioData';
import { ArrowLeft } from 'lucide-react';

const ResumePreview: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-6 text-blue-400 hover:text-blue-300 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">Mathwaque Rufus</h1>
            <p className="text-lg text-blue-400 mt-1">Software Engineer · Founder, NiTip Africa</p>
            <p className="text-gray-400 mt-1">Nairobi, Kenya</p>
            <div className="flex justify-center gap-4 mt-4 flex-wrap text-sm">
              <a href="mailto:mathwaquerufus@gmail.com" className="hover:text-blue-400">mathwaquerufus@gmail.com</a>
              <span className="text-gray-600">|</span>
              <a href="tel:+254758503824" className="hover:text-blue-400">+254 758 503 824</a>
              <span className="text-gray-600">|</span>
              <a href="https://github.com/Rusuf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
              <span className="text-gray-600">|</span>
              <a href="https://linkedin.com/in/rufus-mathwaque" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
              <span className="text-gray-600">|</span>
              <a href="https://nitip.africa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">nitip.africa</a>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Summary</h2>
            <p className="leading-relaxed">Software Engineer and Founder with hands-on experience building real-time data systems, analytical backends, and mobile payment infrastructure. Founded NiTip Africa — a live M-Pesa tipping platform for Kenyan streamers, featuring QR-code tipping, instant payouts, and YouTube integration. Previously engineered an AI-powered market intelligence engine at SamzDixon Technologies using a high-performance Rust backend.</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Experience</h2>
            {experiences.map(exp => (
              <div key={exp.id} className="mb-6">
                <div className="flex justify-between items-start flex-wrap">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                </div>
                <p className="text-blue-400 mb-2">{exp.company} · {exp.type} · {exp.location}</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-gray-300">{h}</li>
                  ))}
                </ul>
                {exp.liveUrl && (
                  <a href={exp.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm mt-1 inline-block">
                    {exp.liveUrl}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Projects</h2>
            {projects.map(project => (
              <div key={project.id} className="mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.status === "live" && (
                    <span className="text-xs px-2 py-0.5 bg-green-900 text-green-300 rounded-full border border-green-500">LIVE</span>
                  )}
                </div>
                <p className="text-gray-300">{project.solution}</p>
                <p className="text-gray-400 text-sm mt-1">Technologies: {project.technologies.join(', ')}</p>
                <div className="flex gap-4 mt-2">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">GitHub</a>
                  {project.liveDemoUrl !== "#" && (
                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">Live Site</a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(
                skills.reduce((acc, skill) => {
                  if (!acc[skill.category]) acc[skill.category] = [];
                  acc[skill.category].push(skill.name);
                  return acc;
                }, {} as Record<string, string[]>)
              ).map(([category, names]) => (
                <div key={category} className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-base font-bold mb-2 text-blue-400">{category}</h3>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    {names.map((name, i) => (
                      <li key={i} className="text-gray-300 text-sm">{name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Education</h2>
            <div>
              <h3 className="text-xl font-bold">Bachelor of Science in Information Science</h3>
              <p className="text-gray-400">Technical University of Kenya — Nairobi | 2021 – 2025</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Certifications</h2>
            {certifications.map(cert => (
              <div key={cert.id} className="mb-2">
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{cert.title} — {cert.issuer}</a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom back button */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
