import React, { useState } from 'react';
import { saveContact } from "../services/apiservice";

const SERVICES = [
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M24 4L4 14v10c0 11 8.4 21.3 20 24 11.6-2.7 20-13 20-24V14L24 4z" />
                <path d="M16 24l5 5 11-11" />
            </svg>
        ),
        title: 'Security Risk Management',
        desc: 'Identify, assess, and mitigate risks with tailored security strategies and advisory.',
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="6" y="6" width="36" height="36" rx="4" />
                <path d="M6 18h36M18 6v36" />
                <path d="M26 26h8M26 32h6" />
                <circle cx="15" cy="28" r="3" />
            </svg>
        ),
        title: 'Facilities Management',
        desc: 'Optimize operations, maintain infrastructure, and ensure safe, efficient workplaces.',
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="18" cy="16" r="7" />
                <circle cx="34" cy="16" r="5" />
                <path d="M2 40c0-8.8 7.2-16 16-16s16 7.2 16 16" />
                <path d="M34 26c4.4 0 8 3.6 8 8" />
            </svg>
        ),
        title: 'Strategic Advisory',
        desc: 'Drive growth and resilience through data-driven insights and strategic consulting.',
    },
];

export default function Services() {
    const [formData, setFormData] = useState({
        name: '', email: '', company: '', phone: '', service: '', message: '',
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setStatus('loading');
            // Simulate API call
            await new Promise(r => setTimeout(r, 1200));
            await saveContact(formData);
            setStatus('success');
            setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
        } catch (err) {
            console.log(err);
            setStatus('failed');
        }
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <section id="services" className="services-section">
            <div className="services-section__inner">

                <div className="services-block">
                    <p className="section-label">OUR SERVICES</p>
                    <h2 className="section-title services-block__title">
                        Solutions That Secure &amp; Strengthen
                    </h2>
                    <p className="section-subtitle services-block__sub">
                        Integrated services designed to mitigate risk, improve efficiency,
                        and create long-term value.
                    </p>

                    <div className="services-grid">
                        {SERVICES.map((s, i) => (
                            <article key={i} className="service-card">
                                <div className="service-card__icon">{s.icon}</div>
                                <h3 className="service-card__title">{s.title}</h3>
                                <p className="service-card__desc">{s.desc}</p>
                                <a href="#contact" className="service-card__link">
                                    LEARN MORE <span>→</span>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="contact-block" id="contact">
                    <p className="section-label">GET IN TOUCH</p>
                    <h2 className="contact-block__title">Let's Start a Conversation</h2>
                    <p className="contact-block__sub">
                        Have a question or need expert guidance?<br />We're here to help.
                    </p>

                    <div className="contact-block__info">
                        <div className="info-item">
                            <div className="info-item__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                    <circle cx="12" cy="9" r="2.5" />
                                </svg>
                            </div>
                            <div>
                                <span className="info-item__label">Our Office</span>
                                <span className="info-item__value">Matrix Industries<br />London, United Kingdom</span>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-item__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.7 3.58.7a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.25 2.45.7 3.58a1 1 0 01-.24 1.01l-2.34 2.2z" />
                                </svg>
                            </div>
                            <div>
                                <span className="info-item__label">Phone</span>
                                <span className="info-item__value">+44 20 8123 4567</span>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-item__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="M2 8l10 6 10-6" />
                                </svg>
                            </div>
                            <div>
                                <span className="info-item__label">Email</span>
                                <span className="info-item__value">info@matrixindustries.com</span>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-item__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <div>
                                <span className="info-item__label">Hours</span>
                                <span className="info-item__value">Mon – Fri: 09:00 AM – 06:00 PM</span>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-form__row">
                            <input
                                className="contact-form__input"
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                className="contact-form__input"
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact-form__row">
                            <input
                                className="contact-form__input"
                                type="text"
                                name="company"
                                placeholder="Company Name"
                                value={formData.company}
                                onChange={handleChange}
                            />
                            <input
                                className="contact-form__input"
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <select
                            className="contact-form__input contact-form__select"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                        >
                            <option value="">Select Service</option>
                            <option value="security">Security Risk Management</option>
                            <option value="facilities">Facilities Management</option>
                            <option value="advisory">Strategic Advisory</option>
                        </select>
                        <textarea
                            className="contact-form__input contact-form__textarea"
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            required
                        />
                        <button
                            type="submit"
                            className={`contact-form__submit ${status === 'loading' ? 'loading' : ''} ${status === 'success' ? 'success' : ''} ${status === 'failed' ? 'failed' : ''}`}
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'SENDING...' : status === 'success' ? '✓ MESSAGE SENT' : status === 'failed' ? '✗ MESSAGE FAILED' : 'SEND MESSAGE →'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}