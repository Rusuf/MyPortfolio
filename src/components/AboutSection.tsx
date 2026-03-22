import React from 'react';
import { aboutTimeline } from '@/data/portfolioData';
import AchievementBadges from './AchievementBadges';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="cosmic-section">
      <div className="cosmic-container">
        <h2 className="cosmic-title text-center">About Me</h2>

        <div className="max-w-4xl mx-auto mb-16">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            {/* Profile Image */}
            <div className="w-64 h-64 relative rounded-lg overflow-hidden shadow-xl border-2 border-cosmic-neon">
              <img
                src="/images/profile.jpg"
                alt="Mathwaque Rufus"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Bio */}
            <div className="flex-1 text-cosmic-star">
              <h3 className="text-2xl font-orbitron text-cosmic-electric mb-4">Mathwaque Rufus</h3>
              <p className="text-lg mb-4">
                I build systems that make data useful. I founded NiTip Africa — a live M-Pesa tipping
                platform for African creators, integrated with YouTube and Twitch. In active beta, NiTip
                serves 50+ creators and has processed over KES 100,000 in tips. Before that, I engineered
                a real-time market intelligence engine at SamzDixon Technologies, processing POS transaction
                data and web trend signals to generate pricing recommendations using a high-performance
                Rust backend.
              </p>
              <p className="text-lg mb-4">
                My background spans mobile payment infrastructure, analytical data pipelines, and real-time
                systems. I'm an Information Science graduate from the Technical University of Kenya,
                and I'm looking to move into data analytics and software engineering roles.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="/resume"
                  className="cosmic-button py-2 px-4 inline-flex items-center gap-2"
                >
                  <span>View Resume</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <h3 className="text-2xl font-orbitron text-cosmic-electric text-center mb-12">Professional Journey</h3>

          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cosmic-neon via-cosmic-electric to-cosmic-neon"></div>

          {aboutTimeline.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-24 group`}
            >
              {/* Timeline dot with year label */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-cosmic-space border-2 border-cosmic-neon flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-4 h-4 rounded-full bg-cosmic-electric group-hover:animate-pulse"></div>
                </div>
                <div className="mt-2 font-orbitron text-cosmic-electric font-bold text-lg">
                  {item.year}
                </div>
              </div>

              {/* Content box */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                <div className="bg-cosmic-space bg-opacity-40 p-6 rounded-lg backdrop-blur-sm border border-cosmic-galaxy hover:border-cosmic-neon transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-cosmic-neon/20">
                  <h4 className="text-xl text-cosmic-electric font-orbitron font-bold mb-3">{item.title}</h4>
                  <p className="text-cosmic-star leading-relaxed">{item.description}</p>

                  {/* Visual indicator for timeline flow */}
                  <div className={`absolute top-1/2 -mt-1 ${index % 2 === 0 ? 'right-0 mr-6' : 'left-0 ml-6'
                    } w-6 h-0.5 bg-cosmic-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>

              {/* Empty space for the other side */}
              <div className="w-5/12"></div>
            </div>
          ))}

          {/* Timeline end marker */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-6">
            <div className="w-4 h-4 rounded-full bg-cosmic-neon animate-ping"></div>
          </div>
        </div>

        {/* Achievements Section */}
        <AchievementBadges />
      </div>
    </section>
  );
};

export default AboutSection;
