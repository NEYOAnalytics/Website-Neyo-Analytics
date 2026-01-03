import React, { useRef, useEffect } from 'react';
import './CornerNeuralBackground.scss';
import { useTheme } from '../../context/ThemeContext';

const CornerNeuralBackground = () => {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        // Colors based on theme
        // Dark mode = Orange (#fa9100), Light mode = Dark Blue (#001534)
        const isDark = theme === 'dark';
        const colorBase = isDark ? '250, 145, 0' : '0, 21, 52';

        // Configuration
        const particleCount = 60; // Number of nodes
        const connectionDistance = 150; // Max distance to connect
        const cornerFocus = { x: 0, y: 0 }; // Will be top-right

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            cornerFocus.x = width; // Top right
            cornerFocus.y = 0;
        };

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                // Spawn particles in top-right corner
                // Distribution: dense near corner, sparse further out
                const angle = Math.PI + Math.random() * Math.PI / 2; // Arc in bottom-left direction from corner
                const distance = Math.random() * 600; // Max radius from corner

                // Position relative to top-right corner (width, 0)
                this.originX = width - Math.random() * Math.min(width, 600);
                this.originY = Math.random() * Math.min(height, 500);

                this.x = this.originX;
                this.y = this.originY;

                // Movement properties for hovering/floating
                this.angle = Math.random() * Math.PI * 2;
                this.speed = 0.002 + Math.random() * 0.003;
                this.radius = 10 + Math.random() * 20; // Wander radius

                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.angle += this.speed;
                // Float around the origin
                this.x = this.originX + Math.cos(this.angle) * this.radius;
                this.y = this.originY + Math.sin(this.angle) * this.radius;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${colorBase}, 0.5)`;
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

                // Draw connections
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${colorBase}, ${1 - dist / connectionDistance})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                // Connect to corner "source"
                const dxC = p.x - width;
                const dyC = p.y - 0;
                const distC = Math.sqrt(dxC * dxC + dyC * dyC);
                if (distC < 400) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${colorBase}, ${0.5 * (1 - distC / 400)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(width, 0);
                    ctx.stroke();
                }
            });

            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, [theme]);

    return (
        <div className="corner-neural-background">
            <canvas ref={canvasRef} />
        </div>
    );
};

export default CornerNeuralBackground;
