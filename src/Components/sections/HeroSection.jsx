import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import silasImg from '../../assets/silas_new.jpg';
import { 
    heroVariants, 
    heroTextVariants, 
    heroImageVariants,
    HybridMotionDiv,
    HybridMotionButton
} from '../../utils/hybridAnimations';

const HeroSection = () => {
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
        <motion.div 
            className="hero-container" 
            id="hero"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
        >
            <HybridMotionDiv className="hero-left" variants={heroTextVariants}>
                <motion.span className="txt-1" variants={heroTextVariants}>Hey, I'm</motion.span>
                <motion.h1 className="txt-2" variants={heroTextVariants}>Silas Abiodun</motion.h1>
                <motion.div variants={heroTextVariants}>
                    <TypeAnimation
                        sequence={[
                            'Techpreneur @ BrandGoto', 1800,
                            'Startup Launcher for Founders', 1800,
                            'Automation Strategist', 1800,
                        ]}
                        wrapper="span"
                        speed={80}
                        deletionSpeed={60}
                        repeat={Infinity}
                        className="alt-txt"
                    />
                </motion.div>
                <motion.div className="hero-tagline" variants={heroTextVariants}>
                    <span className="tagline-text">Building brands, systems, and automations for the bold.</span>
                </motion.div>
                <HybridMotionButton 
                    className="cta-btn"
                    variants={heroTextVariants}
                    onClick={() => scrollToSection('cta')}
                >
                    Let's Connect
                </HybridMotionButton>
            </HybridMotionDiv>
            <motion.div className="hero-right prominent-img" variants={heroImageVariants}>
                <img src={silasImg} alt="Silas Abiodun" className="hero-img flipped-img" />
            </motion.div>
        </motion.div>
    );
};

export default HeroSection; 