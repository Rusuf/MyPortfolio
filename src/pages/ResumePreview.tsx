
import React from 'react';
import { skills, projects, certifications } from '../data/portfolioData';

const ResumePreview: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Mathwaque Rufus</h1>
          <p className="text-lg">Junior Full Stack Developer</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="mailto:mathwaquerufus@gmail.com" className="hover:text-blue-400">mathwaquerufus@gmail.com</a>
            <a href="https://github.com/Rusuf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
            <a href="https://linkedin.com/in/rufus-mathwaque" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Summary</h2>
          <p>Highly motivated Junior Full Stack Developer with a passion for creating efficient and user-friendly web applications. Experience in building and maintaining responsive websites using modern technologies. Proven ability to learn quickly and collaborate effectively in a team environment. Currently seeking a challenging role to apply and expand my skills in a professional setting.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map(skill => (
              <div key={skill.id} className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-bold">{skill.category}</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>{skill.name}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Projects</h2>
          {projects.map(project => (
            <div key={project.id} className="mb-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="italic">{project.problem}</p>
              <p>{project.solution}</p>
              <p className="text-gray-400">Technologies: {project.technologies.join(', ')}</p>
              <div className="flex gap-4 mt-2">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Live Demo</a>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Frontend Developer</h3>
            <p className="text-gray-400">Meallensai - Nairobi | Sept 2024 - Present</p>
            <ul className="list-disc list-inside ml-4">
              <li>Building and maintaining user interfaces with HTML, CSS, and JavaScript.</li>
              <li>Collaborating with designers and backend developers to ensure cohesive experience.</li>
              <li>Optimizing frontend performance for better load times and user interaction.</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Education</h2>
          <div>
            <h3 className="text-xl font-bold">Bachelor of Science in Information Science</h3>
            <p className="text-gray-400">Technical University of Kenya - Nairobi | Expected Graduation: December 2025</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Certifications</h2>
          {certifications.map(cert => (
            <div key={cert.id} className="mb-2">
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{cert.title} - {cert.issuer}</a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ResumePreview;
