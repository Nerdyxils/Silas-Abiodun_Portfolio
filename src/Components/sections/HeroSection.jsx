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
        <motion.section 
            className="hero-container" 
            id="hero"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            role="banner"
            aria-label="Silas Abiodun - Techpreneur and Web Developer Introduction"
        >
            <HybridMotionDiv className="hero-left" variants={heroTextVariants}>
                <motion.p className="txt-1" variants={heroTextVariants}>Hey, I'm</motion.p>
                <motion.h1 className="txt-2" variants={heroTextVariants}>Silas Abiodun</motion.h1>
                <motion.div variants={heroTextVariants}>
                    <TypeAnimation
                        sequence={[
                            'Techpreneur @ BrandGoto', 1800,
                            'Startup Launcher for Founders', 1800,
                            'Automation Strategist', 1800,
                            'Web Developer & Project Manager', 1800,
                            'AI-Driven Business Automation Expert', 1800,
                        ]}
                        wrapper="h2"
                        speed={80}
                        deletionSpeed={60}
                        repeat={Infinity}
                        className="alt-txt"
                        aria-label="Silas Abiodun's professional roles and expertise"
                    />
                </motion.div>
                <motion.div className="hero-tagline" variants={heroTextVariants}>
                    <p className="tagline-text">
                        Building brands, systems, and automations for the bold. 
                        Silas Abiodun specializes in AI-driven business automation, 
                        brand acceleration systems, and rapid digital product launches.
                    </p>
                </motion.div>
                <HybridMotionButton 
                    className="cta-btn"
                    variants={heroTextVariants}
                    onClick={() => scrollToSection('cta')}
                    aria-label="Connect with Silas Abiodun for web development and automation services"
                >
                    Let's Connect
                </HybridMotionButton>
            </HybridMotionDiv>
            <motion.div className="hero-right prominent-img" variants={heroImageVariants}>
                <img 
                    src={silasImg} 
                    alt="Silas Abiodun - Professional Techpreneur, Web Developer, and Project Manager based in Ontario, Canada. Founder of BrandGoto specializing in AI automation and brand acceleration." 
                    className="hero-img flipped-img"
                    loading="eager"
                    width="420"
                    height="535"
                />
            </motion.div>
        </motion.section>
    );
};

export default HeroSection; 