import React from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram
} from 'react-icons/fa';
import Logo from '../../assets/Logo.png';
import { 
    fadeInUp, 
    staggerContainer,
    HybridMotionSection,
    HybridMotionDiv
} from '../../utils/hybridAnimations';

const FooterSection = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/Nerdyxils/', label: 'GitHub' },
        { icon: FaTwitter, href: 'https://x.com/ayomide_muyi', label: 'X (Twitter)' },
        { icon: FaInstagram, href: 'https://www.instagram.com/xilssilas/', label: 'Instagram' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/abiodun-silas-timi/', label: 'LinkedIn' }
    ];

    const serviceLinks = [
        { label: 'Full Stack Development', href: '#services' },
        { label: 'AI Automation', href: '#services' },
        { label: 'Project Management', href: '#services' },
        { label: 'Technical Consulting', href: '#services' }
    ];

    const companyLinks = [
        { label: 'About', href: '#about' },
        { label: 'Tech Stack', href: '#technologies' },
        { label: 'BrandGoto', href: 'https://www.brandgoto.ca/' },
        { label: 'Connect', href: '#unfiltered-cta' }
    ];

    const supportLinks = [
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        }
    };

    return (
        <HybridMotionSection 
            className="footer-section"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <HybridMotionDiv 
                className="footer-content"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src={Logo} alt="Silas Abiodun Logo" className="footer-logo-img" />
                        <span className="footer-logo-text">Silas Abiodun</span>
                        <div className="footer-logo-accent"></div>
                    </div>
                    <p className="footer-tagline">
                        Empowering techpreneurs and brands to launch, grow, and automate with confidence.
                    </p>
                    <div className="footer-social">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label={social.label}
                                >
                                    <Icon />
                                </a>
                            );
                        })}
                    </div>
                </div>
                
                <div className="footer-right">
                    <div className="footer-column">
                        <h4 className="footer-column-title">Services</h4>
                        <ul className="footer-links">
                            {serviceLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(link.href.replace('#', ''));
                                        }}
                                        className="footer-link"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="footer-column">
                        <h4 className="footer-column-title">Explore</h4>
                        <ul className="footer-links">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(link.href.replace('#', ''));
                                        }}
                                        className="footer-link"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="footer-column">
                        <h4 className="footer-column-title">Resources</h4>
                        <ul className="footer-links">
                            {supportLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(link.href.replace('#', ''));
                                        }}
                                        className="footer-link"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </HybridMotionDiv>
            
            <div className="footer-bottom">
                <p className="footer-copyright">
                    © {currentYear} Silas Abiodun. All rights reserved.
                </p>
            </div>
        </HybridMotionSection>
    );
};

export default FooterSection;
