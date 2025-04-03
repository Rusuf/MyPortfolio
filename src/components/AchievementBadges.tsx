
import React from 'react';
import { Badge } from 'lucide-react';

// Sample data for cosmic achievements
const achievements = [
  {
    id: 1,
    name: "Hackathon Winner",
    date: "February 2025",
    icon: "🏆",
    color: "#FF69B4"
  },
  {
    id: 2,
    name: "10+ Projects Completed",
    date: "January 2025",
    icon: "🚀",
    color: "#1E90FF"
  },
  {
    id: 3,
    name: "Open Source Contributor",
    date: "December 2024",
    icon: "⭐",
    color: "#00FFFF"
  },
  {
    id: 4,
    name: "Full Stack Developer",
    date: "November 2024",
    icon: "🌐",
    color: "#FF69B4"
  }
];

const AchievementBadges: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20">
      <h3 className="text-2xl font-orbitron text-cosmic-electric mb-10 text-center">
        Cosmic Achievements
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {achievements.map((achievement) => (
          <div 
            key={achievement.id}
            className="relative group"
          >
            <div className="achievement-badge bg-cosmic-nebula bg-opacity-20 backdrop-blur-md rounded-lg p-6 border border-cosmic-neon flex flex-col items-center text-center transition-all duration-500 hover:transform hover:scale-105">
              {/* Meteor effect on hover */}
              <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="meteor-trail" style={{ 
                  position: 'absolute',
                  top: '-20%',
                  left: '-20%',
                  width: '140%',
                  height: '140%',
                  background: `radial-gradient(ellipse at center, ${achievement.color}33 0%, transparent 70%)`,
                  transform: 'rotate(45deg)',
                  animation: 'meteor-glow 2s ease-in-out infinite'
                }}></div>
              </div>
              
              <div 
                className="w-12 h-12 mb-3 flex items-center justify-center rounded-full text-2xl"
                style={{ 
                  background: `linear-gradient(135deg, ${achievement.color}88, ${achievement.color}44)`,
                  boxShadow: `0 0 15px ${achievement.color}88`
                }}
              >
                {achievement.icon}
              </div>
              
              <h4 className="text-cosmic-electric font-orbitron text-lg mb-1">
                {achievement.name}
              </h4>
              
              <span className="text-cosmic-star text-xs">
                {achievement.date}
              </span>
              
              <Badge
                className="mt-4 text-cosmic-star"
                size={14}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementBadges;
