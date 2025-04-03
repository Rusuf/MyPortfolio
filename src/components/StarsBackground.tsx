
import React, { useEffect, useRef } from 'react';

const StarsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const stars: Array<{x: number, y: number, radius: number, opacity: number, speed: number}> = [];
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Initialize stars
      stars.length = 0;
      for (let i = 0; i < 200; i++) {
        const radius = Math.random() * 1.5;
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: radius,
          opacity: Math.random(),
          speed: 0.05 + Math.random() * 0.1
        });
      }
    };
    
    // Animate stars
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw each star
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 245, 245, ${star.opacity})`;
        ctx.fill();
        
        // Twinkle effect
        star.opacity = Math.sin(Date.now() * star.speed) * 0.5 + 0.5;
        
        // Move star slightly
        star.y += 0.1;
        
        // Reset star position if it moves off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
    />
  );
};

export default StarsBackground;
