'use client';
import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const fontSize = 14;
    let columns = Math.floor(width / fontSize);
    let drops = Array(columns).fill(1);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';

    const resize = () => {
      const currentCanvas = canvasRef.current!; // Non-null assertion
      width = window.innerWidth;
      height = window.innerHeight;
      currentCanvas.width = width;
      currentCanvas.height = height;
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(1);
    };

    const draw = () => {
      const currentCanvas = canvasRef.current!; // Non-null assertion
      const currentCtx = currentCanvas.getContext('2d')!; // Non-null assertion
      
      currentCtx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      currentCtx.fillRect(0, 0, width, height);
      currentCtx.fillStyle = '#0F0';
      currentCtx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        currentCtx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-10 z-0" />;
}