import React from 'react';
import { certifications } from '@/data/portfolioData';

const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-gray-400 mb-4">{cert.issuer}</p>
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;