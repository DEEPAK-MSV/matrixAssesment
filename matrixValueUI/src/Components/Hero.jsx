import React, { useEffect, useRef } from 'react';

export default function Hero() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        let t = 0;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const PARTICLE_COUNT = 120;
        const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
            x: Math.random(),
            y: Math.random(),
            size: Math.random() * 2 + 0.5,
            speed: Math.random() * 0.0003 + 0.0001,
            opacity: Math.random() * 0.6 + 0.2,
        }));

        const drawWave = (offsetY, amplitude, frequency, alpha) => {
            ctx.beginPath();
            ctx.moveTo(0, canvas.height);
            for (let x = 0; x <= canvas.width; x += 3) {
                const y = offsetY + Math.sin((x / canvas.width) * frequency * Math.PI + t) * amplitude
                    + Math.sin((x / canvas.width) * frequency * 0.5 * Math.PI + t * 1.3) * (amplitude * 0.4);
                ctx.lineTo(x, y);
            }
            ctx.lineTo(canvas.width, canvas.height);
            ctx.closePath();
            const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
            grad.addColorStop(0, `rgba(0,255,135,0)`);
            grad.addColorStop(0.3, `rgba(0,255,135,${alpha})`);
            grad.addColorStop(0.7, `rgba(0,200,100,${alpha * 0.8})`);
            grad.addColorStop(1, `rgba(0,255,135,0)`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.5;
            ctx.stroke();
        };

        const drawConnections = () => {
            const pts = particles.map(p => ({
                x: p.x * canvas.width,
                y: p.y * canvas.height + Math.sin(p.y * 4 + t * 2) * 30,
            }));
            for (let i = 0; i < pts.length; i++) {
                for (let j = i + 1; j < pts.length; j++) {
                    const dx = pts[i].x - pts[j].x;
                    const dy = pts[i].y - pts[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 80) {
                        ctx.beginPath();
                        ctx.moveTo(pts[i].x, pts[i].y);
                        ctx.lineTo(pts[j].x, pts[j].y);
                        ctx.strokeStyle = `rgba(0,255,135,${(1 - dist / 80) * 0.15})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            t += 0.008;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Waves
            drawWave(canvas.height * 0.5, 60, 3, 0.12);
            drawWave(canvas.height * 0.55, 45, 4, 0.18);
            drawWave(canvas.height * 0.45, 50, 2.5, 0.1);

            // Connections
            drawConnections();

            // Particles
            particles.forEach(p => {
                const px = p.x * canvas.width;
                const py = p.y * canvas.height + Math.sin(p.y * 4 + t * 2) * 30;
                ctx.beginPath();
                ctx.arc(px, py, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0,255,135,${p.opacity})`;
                ctx.fill();
                p.y -= p.speed;
                if (p.y < -0.05) p.y = 1.05;
            });

            // Glow orb
            const gx = canvas.width * 0.65;
            const gy = canvas.height * 0.4;
            const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, 200);
            grad.addColorStop(0, 'rgba(0,255,135,0.06)');
            grad.addColorStop(1, 'rgba(0,255,135,0)');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            animId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <section id="home" className="hero">
            <canvas ref={canvasRef} className="hero__canvas" />

            <div className="hero__content">
                <div className="hero__text">
                    <p className="hero__eyebrow">LOW PROFILE. HIGH IMPACT.</p>
                    <h1 className="hero__title">
                        Consultants.<br />
                        Advisors.{' '}
                        <span className="hero__title-accent">Partners.</span>
                    </h1>
                    <p className="hero__desc">
                        We partner with organizations to manage risk, optimize operations,
                        and build resilient, future-ready businesses.
                    </p>
                    <div className="hero__actions">
                        <a href="#framework" className="btn btn--primary">
                            GET STARTED <span>→</span>
                        </a>
                        <a href="#services" className="btn btn--outline">
                            EXPLORE SERVICES <span>→</span>
                        </a>
                    </div>
                </div>

                <div className="hero__visual">
                    {/* The canvas covers the full section */}
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="hero__fade" />
        </section>
    );
}