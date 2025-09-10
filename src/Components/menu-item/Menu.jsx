import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo.png';
import { ReactComponent as CloseMenu } from '../../assets/x.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import './Menu.css'

const SECTIONS = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'technologies', label: 'Tech' },
    { id: 'faq', label: 'FAQ' },
    { id: 'unfiltered-cta', label: 'Connect' },
    { id: 'contact', label: 'Contact' },
];

export default function Menu() {
    const [click, setClick] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // Smooth scroll handler with offset for fixed header
    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            const yOffset = -80; // adjust for fixed header height
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        closeMobileMenu();
    };

    // Scrollspy effect
    useEffect(() => {
        const handleScrollSpy = () => {
            const scrollPosition = window.scrollY + 100; // offset for better detection
            let current = 'hero';
            
            for (const sec of SECTIONS) {
                const el = document.getElementById(sec.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;
                    const elementBottom = elementTop + rect.height;
                    
                    if (scrollPosition >= elementTop - 100 && scrollPosition < elementBottom) {
                        current = sec.id;
                    }
                }
            }
            setActiveSection(current);
        };
        
        window.addEventListener('scroll', handleScrollSpy);
        handleScrollSpy();
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, []);

    return (
        <div className="header">
            <a className="logo-container" href="#hero" onClick={e => handleScroll(e, 'hero')}>
                <img src={Logo} alt="logo" className="logo" />
            </a>
            <div className={click ? "options active" : "options"}>
                {SECTIONS.map(sec => (
                    <a
                        key={sec.id}
                        className={`option${activeSection === sec.id ? ' active' : ''}`}
                        href={`#${sec.id}`}
                        onClick={e => handleScroll(e, sec.id)}
                    >
                        {sec.label}
                    </a>
                ))}
                <a
                    className="cta-button"
                    href="https://calendly.com/silas-brandgoto/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Book a Session
                </a>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </div>
    )
}