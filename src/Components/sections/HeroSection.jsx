import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaRocket, FaLightbulb } from 'react-icons/fa';
import bgImage from '../../assets/Bg_image.png';
import { 
    heroVariants, 
    heroTextVariants, 
    HybridMotionDiv,
    HybridMotionButton
} from '../../utils/hybridAnimations';

const HeroSection = () => {
    const handleBookSession = () => {
        window.open('https://calendly.com/silas-brandgoto/30min', '_blank');
    };

    return (
        <motion.section 
            className="hero-section" 
            id="hero"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            role="banner"
            aria-label="Silas Abiodun - Techpreneur and Web Developer Introduction"
        >
            <div className="hero-background">
                <img src={bgImage} alt="Background" className="hero-bg-image" />
                <div className="hero-overlay"></div>
            </div>
            
            <div className="hero-content">
                <HybridMotionDiv className="hero-text" variants={heroTextVariants}>
                    <motion.h1 className="hero-title" variants={heroTextVariants}>
                        Techpreneur & <span className="highlight">AI Automation Expert</span>
                    </motion.h1>
                    <motion.p className="hero-description" variants={heroTextVariants}>
                        I'm Silas Abiodun, a Techpreneur at BrandGoto specializing in AI automation, 
                        full-stack development, and project management. Let's build innovative solutions that drive real business results.
                    </motion.p>
                    
                    <motion.div className="hero-features" variants={heroTextVariants}>
                        <div className="feature-tag">
                            <FaBullseye className="feature-icon" />
                            <span>Techpreneurship</span>
                        </div>
                        <div className="feature-tag">
                            <FaRocket className="feature-icon" />
                            <span>AI Automation</span>
                        </div>
                        <div className="feature-tag">
                            <FaLightbulb className="feature-icon" />
                            <span>Full Stack Development</span>
                        </div>
                </motion.div>
                    
                <HybridMotionButton 
                        className="hero-cta-btn"
                    variants={heroTextVariants}
                        onClick={handleBookSession}
                        aria-label="Book a session with Silas Abiodun"
                >
                        Book a Session
                </HybridMotionButton>
            </HybridMotionDiv>
            </div>
        </motion.section>
    );
};

export default HeroSection; 