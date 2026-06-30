import React, { useState, useEffect, useCallback } from 'react';
import logo from "../assets/matrix_logo.webp";

const NAV_LINKS = ['Home', 'Services', 'Framework', 'Testimonials', 'Contact'];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('Home');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    const setactiveState = useCallback((link) => {
        setActive(link);
        setTimeout(() => {
            setActive('');
        }, 3000)
        return () => clearTimeout();
    }, [active]);

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner">
                {/* Logo */}
                <a href="#home" className="navbar__logo">
                    <img className="BrandLogo" src={logo} alt="matrix logo" />
                </a>

                {/* Desktop Nav */}
                <nav className="navbar__links">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className={`navbar__link ${active === link ? 'navbar__link--active' : ''}`}
                            onClick={() => setactiveState(link)}
                        >
                            {link.toUpperCase()}
                        </a>
                    ))}
                </nav>

                {/* Empty div */}
                <div></div>

                {/* Mobile Hamburger */}
                <button
                    className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
                {NAV_LINKS.map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        className="navbar__mobile-link"
                        onClick={() => { setActive(link); setMenuOpen(false); }}
                    >
                        {link}
                    </a>
                ))}
                <a href="#contact" className="navbar__cta navbar__cta--mobile" onClick={() => setMenuOpen(false)}>
                    CONNECT →
                </a>
            </div>
        </header>
    );
}