
import React, { useState, useRef, useEffect } from 'react';
import { Headphones } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AudioToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/space-ambiance.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      toast({
        title: "Space ambiance muted",
        description: "The cosmos falls silent...",
        duration: 2000,
      });
    } else {
      // Play might be rejected if user hasn't interacted with the page
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            toast({
              title: "Space ambiance enabled",
              description: "Listen to the sounds of the cosmos...",
              duration: 2000,
            });
          })
          .catch(error => {
            console.error("Audio playback failed:", error);
            toast({
              title: "Could not play audio",
              description: "Try clicking somewhere on the page first",
              variant: "destructive",
              duration: 3000,
            });
            setIsPlaying(false);
            return;
          });
      }
    }
    setIsPlaying(!isPlaying);
  };
  
  return (
    <button
      aria-label="Toggle space ambiance"
      onClick={toggleAudio}
      className={`relative p-2 rounded-full transition-all duration-300 ${
        isPlaying 
          ? 'bg-cosmic-neon text-cosmic-space animate-pulse' 
          : 'bg-cosmic-galaxy text-cosmic-star'
      }`}
    >
      <Headphones size={20} />
      {isPlaying && (
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-cosmic-electric rounded-full"></span>
      )}
    </button>
  );
};

export default AudioToggle;
