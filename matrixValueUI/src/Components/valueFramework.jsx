import React, { useEffect, useRef, useState } from 'react';

const STEPS = [
    {
        number: '01',
        title: 'Discover',
        desc: 'We understand your business, challenges, and objectives.',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="18" cy="18" r="10" />
                <path d="M26 26l6 6" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Assess',
        desc: 'We evaluate risks, processes, and current capabilities.',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="8" y="6" width="24" height="28" rx="3" />
                <path d="M14 14h12M14 19h12M14 24h8" strokeLinecap="round" />
                <path d="M12 10h2M12 14h0" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Strategize',
        desc: 'We design customized strategies aligned with your goals.',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="20" cy="20" r="12" />
                <circle cx="20" cy="20" r="5" />
                <path d="M20 8v4M20 28v4M8 20h4M28 20h4" strokeLinecap="round" />
                <path d="M17 17l6 6" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Implement',
        desc: 'We execute the plan with precision and industry best practices.',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="20" cy="20" r="10" />
                <path d="M14 20l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 6v4M20 30v4M6 20h4M30 20h4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        number: '05',
        title: 'Measure',
        desc: 'We track performance using KPIs and data-driven insights.',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 32V22l6-6 6 4 6-10 6 4" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="6" y="30" width="28" height="3" rx="1.5" />
            </svg>
        ),
    },
    {
        number: '06',
        title: 'Optimize',
        desc: 'We continuously refine to deliver sustained value.',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 10c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10" strokeLinecap="round" />
                <path d="M30 10l-4-4M30 10l-4 4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="20" cy="20" r="3" />
            </svg>
        ),
    },
];

export default function ValueFramework() {
    const [visible, setVisible] = useState(false);
    const [activeStep, setActiveStep] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="framework" className="framework" ref={sectionRef}>
            <div className="framework__inner">

                {/* Header */}
                <div className={`framework__header ${visible ? 'framework__header--visible' : ''}`}>
                    <div className="framework__eyebrow">
                        <span className="framework__eyebrow-line" />
                        <p className="section-label">OUR FRAMEWORK</p>
                        <span className="framework__eyebrow-line" />
                    </div>
                    <h2 className="section-title framework__title">
                        Our Value Generation Framework
                    </h2>
                    <p className="section-subtitle framework__subtitle">
                        A proven, systematic approach that helps organizations<br />
                        mitigate risks, optimize operations, and drive sustainable growth.
                    </p>
                </div>

                {/* Steps Pipeline */}
                <div className="framework__pipeline">
                    {STEPS.map((step, i) => (
                        <React.Fragment key={step.number}>
                            <div
                                className={`step-card ${visible ? 'step-card--visible' : ''} ${activeStep === i ? 'step-card--active' : ''}`}
                                style={{ transitionDelay: `${i * 0.1}s` }}
                                onMouseEnter={() => setActiveStep(i)}
                                onMouseLeave={() => setActiveStep(null)}
                            >

                                <div className="step-card__icon-wrap">
                                    <div className="step-card__icon-ring" />
                                    <div className="step-card__icon">{step.icon}</div>
                                </div>

                                <h3 className="step-card__title">{step.title}</h3>
                                <p className="step-card__desc">{step.desc}</p>

                                <div className="step-card__arrow">
                                    <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                                        <path d="M0 4h16M13 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            {i < STEPS.length - 1 && (
                                <div className={`step-connector ${visible ? 'step-connector--visible' : ''}`} style={{ transitionDelay: `${i * 0.1 + 0.05}s` }}>
                                    <div className="step-connector__dot step-connector__dot--left" />
                                    <div className="step-connector__line" />
                                    <div className="step-connector__dot step-connector__dot--right" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Bottom Banner */}
                <div className={`framework__banner ${visible ? 'framework__banner--visible' : ''}`}>
                    <div className="framework__banner-left">
                        <div className="framework__banner-icon">
                            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M24 4L4 14v10c0 11 8.4 21.3 20 24 11.6-2.7 20-13 20-24V14L24 4z" />
                                <path d="M16 24l5 5 11-11" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="framework__banner-text">
                            <div className="framework__banner-keywords">
                                <span>Secure</span>
                                <span className="framework__banner-dot">·</span>
                                <span>Resilient</span>
                                <span className="framework__banner-dot">·</span>
                                <span>Sustainable</span>
                            </div>
                            <p className="framework__banner-desc">
                                Our framework ensures every step creates measurable impact
                                and long-term value for your organization.
                            </p>
                        </div>
                    </div>
                    <div className="framework__banner-wave">
                        <BannerWave />
                    </div>
                </div>

            </div>
        </section>
    );
}

function BannerWave() {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let t = 0, animId;

        const draw = () => {
            t += 0.012;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let w = 0; w < 4; w++) {
                ctx.beginPath();
                const offset = canvas.height * (0.3 + w * 0.15);
                const amp = 18 - w * 3;
                const freq = 2 + w * 0.5;
                for (let x = 0; x <= canvas.width; x += 3) {
                    const y = offset + Math.sin((x / canvas.width) * freq * Math.PI + t + w) * amp;
                    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                }
                const alpha = 0.25 - w * 0.04;
                const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
                grad.addColorStop(0, `rgba(0,255,135,0)`);
                grad.addColorStop(0.5, `rgba(0,255,135,${alpha})`);
                grad.addColorStop(1, `rgba(0,255,135,0)`);
                ctx.strokeStyle = grad;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }
            animId = requestAnimationFrame(draw);
        };
        draw();
        return () => cancelAnimationFrame(animId);
    }, []);

    return <canvas ref={canvasRef} width={340} height={120} style={{ width: '100%', height: '100%' }} />;
}
