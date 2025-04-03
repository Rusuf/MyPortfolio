
import React, { useState, useEffect } from 'react';
import { Toast } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

const Comet: React.FC = () => {
  const [showComet, setShowComet] = useState(false);
  const [cometPosition, setCometPosition] = useState({ x: -100, y: -100 });
  const { toast } = useToast();

  useEffect(() => {
    const cometInterval = setInterval(() => {
      // Random starting position at the top-left quadrant of the screen
      const startX = -100 + Math.random() * -100;
      const startY = -100 + Math.random() * -100;
      
      setCometPosition({ x: startX, y: startY });
      setShowComet(true);
      
      // Hide comet after animation completes
      setTimeout(() => setShowComet(false), 5000);
    }, 30000); // Show comet every 30 seconds
    
    return () => clearInterval(cometInterval);
  }, []);
  
  const handleCometClick = () => {
    toast({
      title: "Cosmic Secret Discovered!",
      description: "You found my cosmic secret! Here's a fun fact: I coded this site while listening to space synth music.",
      duration: 5000,
    });
    setShowComet(false);
  };
  
  if (!showComet) return null;
  
  return (
    <div 
      className="fixed pointer-events-auto cursor-pointer z-50"
      style={{
        left: `${cometPosition.x}px`,
        top: `${cometPosition.y}px`,
        animation: 'comet 5s linear forwards'
      }}
      onClick={handleCometClick}
    >
      <div className="relative">
        <div className="w-4 h-4 rounded-full bg-cosmic-neon animate-pulse"></div>
        <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-cosmic-neon to-transparent transform -rotate-45 origin-left"></div>
      </div>
    </div>
  );
};

export default Comet;
