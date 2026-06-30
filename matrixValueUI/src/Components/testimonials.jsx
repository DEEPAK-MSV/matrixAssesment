import React, { useState } from 'react';

const TESTIMONIALS = [
    {
        quote: "Matrix Industries transformed our security posture completely. Their systematic approach identified vulnerabilities we hadn't even considered, and the implementation was seamless.",
        name: 'Sarah Mitchell',
        role: 'COO, Hargreaves Financial Group',
        initials: 'SM',
    },
    {
        quote: "The Value Generation Framework is exactly what our organization needed. Six months in, we're seeing measurable improvements across every KPI they helped us define.",
        name: 'James Okoye',
        role: 'CEO, Meridian Logistics',
        initials: 'JO',
    },
    {
        quote: "Low profile, high impact — that tagline is no marketing speak. Their team works quietly in the background and delivers results that speak loudly.",
        name: 'Priya Sharma',
        role: 'Director of Operations, Nexus Capital',
        initials: 'PS',
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);

    return (
        <section id="testimonials" className="testimonials">
            <div className="testimonials__inner">
                <div className="testimonials__header">
                    <p className="section-label">CLIENT TESTIMONIALS</p>
                    <h2 className="section-title testimonials__title">
                        Trusted by Industry Leaders
                    </h2>
                </div>

                <div className="testimonials__cards">
                    {TESTIMONIALS.map((t, i) => (
                        <article
                            key={i}
                            className={`tcard ${active === i ? 'tcard--active' : ''}`}
                            onClick={() => setActive(i)}
                        >
                            <div className="tcard__quote-mark">"</div>
                            <p className="tcard__quote">{t.quote}</p>
                            <div className="tcard__author">
                                <div className="tcard__avatar">{t.initials}</div>
                                <div>
                                    <p className="tcard__name">{t.name}</p>
                                    <p className="tcard__role">{t.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="testimonials__dots">
                    {TESTIMONIALS.map((_, i) => (
                        <button
                            key={i}
                            className={`testimonials__dot ${active === i ? 'testimonials__dot--active' : ''}`}
                            onClick={() => setActive(i)}
                            aria-label={`Testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
