'use client';

import React, { useRef, useEffect } from 'react';
import { useTheme } from './ThemeProviderClient';

const CornerNeuralBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let animationFrameId;

    // Dark mode = Orange (250, 145, 0), Light mode = Navy Blue (0, 21, 52)
    const colorBase = theme === 'light' ? '0, 21, 52' : '250, 145, 0';
    const particleCount = 65;
    const connectionDistance = 150;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.originX = width - Math.random() * Math.min(width, 650);
        this.originY = Math.random() * Math.min(height, 550);
        this.x = this.originX;
        this.y = this.originY;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = 0.002 + Math.random() * 0.003;
        this.radius = 10 + Math.random() * 25;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.angle += this.speed;
        this.x = this.originX + Math.cos(this.angle) * this.radius;
        this.y = this.originY + Math.sin(this.angle) * this.radius;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colorBase}, 0.6)`;
        ctx.fill();
      }
    }

    const init = () => {
      resize();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.update();
        p.draw();

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${colorBase}, ${0.7 * (1 - dist / connectionDistance)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        const dxC = p.x - width;
        const dyC = p.y - 0;
        const distC = Math.sqrt(dxC * dxC + dyC * dyC);
        if (distC < 450) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${colorBase}, ${0.4 * (1 - distC / 450)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(width, 0);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
};

export default CornerNeuralBackground;
