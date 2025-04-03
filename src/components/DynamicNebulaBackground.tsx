
import React, { useEffect, useRef, useState } from 'react';

const DynamicNebulaBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [timeOfDay, setTimeOfDay] = useState<'day' | 'night'>('day');
  
  useEffect(() => {
    // Determine time of day based on user's local time
    const hour = new Date().getHours();
    const isDaytime = hour >= 6 && hour < 18;
    setTimeOfDay(isDaytime ? 'day' : 'night');
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Animation variables
    let hue = isDaytime ? 330 : 220; // Pink for day, Blue for night
    const hueShiftSpeed = 0.2;
    let time = 0;
    
    const drawNebula = () => {
      // Semi-transparent overlay to create trail effect
      ctx.fillStyle = 'rgba(10, 10, 35, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw nebula clouds
      const cloudCount = 5;
      
      for (let i = 0; i < cloudCount; i++) {
        const x = canvas.width * (0.2 + 0.6 * Math.sin(time * 0.001 + i));
        const y = canvas.height * (0.2 + 0.6 * Math.cos(time * 0.001 + i * 2));
        const radius = Math.min(canvas.width, canvas.height) * (0.1 + 0.1 * Math.sin(time * 0.002 + i));
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `hsla(${(hue + i * 30) % 360}, 100%, 70%, 0.3)`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Slowly shift hue for color cycling effect
      hue = (hue + hueShiftSpeed) % 360;
      time += 16;
      
      requestAnimationFrame(drawNebula);
    };
    
    drawNebula();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-2]"
    />
  );
};

export default DynamicNebulaBackground;
