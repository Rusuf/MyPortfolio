
import React, { useEffect, useRef } from 'react';

const CursorEffect: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const particles = useRef<Array<{ x: number; y: number; size: number; alpha: number; dx: number; dy: number }>>([]);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    if (!canvas || !cursor) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let frameCount = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Only spawn particle every 3rd frame to reduce load
      frameCount++;
      if (frameCount % 3 === 0) {
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 2 + 1,
          alpha: 1,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
        });
        if (particles.current.length > 20) {
          particles.current.shift();
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ps = particles.current;
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i];
        p.x += p.dx;
        p.y += p.dy;
        p.alpha -= 0.03;
        if (p.alpha <= 0) {
          ps.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 245, 245, ${p.alpha})`;
        ctx.fill();
      }
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="w-6 h-6 rounded-full border-2 border-cosmic-electric fixed pointer-events-none z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)', willChange: 'left, top' }}
      />
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-40"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CursorEffect;
