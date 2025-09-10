import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaRocket, FaLightbulb, FaCheck } from 'react-icons/fa';
import imageBg from '../../assets/image_bg.jpg';
import { 
    fadeInUp, 
    staggerContainer,
    HybridMotionSection,
    HybridMotionDiv,
    HybridMotionButton
} from '../../utils/hybridAnimations';

const CTASection = () => {
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
            id="cta" 
            className="cta-section section-spacing"
            variants={fadeInUp}
        >
            <div className="cta-background">
                <img src={imageBg} alt="Background" className="cta-bg-image" />
                <div className="cta-overlay"></div>
            </div>
            
            <HybridMotionDiv 
                className="cta-content"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h2 className="cta-title" variants={fadeInUp}>
                    Ready to Build <span className="highlight">Something Amazing?</span>
                </motion.h2>
                
                <motion.p className="cta-description" variants={fadeInUp}>
                    Let's discuss your technical project and explore how we can build innovative solutions that drive real business results.
                </motion.p>
                
                <motion.div className="cta-features" variants={fadeInUp}>
                    <div className="cta-feature-tag">
                        <FaBullseye className="feature-icon" />
                        <span>Technical Consultation</span>
                    </div>
                    <div className="cta-feature-tag">
                        <FaRocket className="feature-icon" />
                        <span>Project Planning</span>
                    </div>
                    <div className="cta-feature-tag">
                        <FaLightbulb className="feature-icon" />
                        <span>Innovation Strategy</span>
                    </div>
                </motion.div>
                
                <HybridMotionButton 
                    className="cta-main-btn"
                    variants={fadeInUp}
                    onClick={() => scrollToSection('contact')}
                >
                    Start Your Project
                </HybridMotionButton>
                
                <motion.div className="guarantee-card" variants={fadeInUp}>
                    <FaCheck className="guarantee-icon" />
                    <div className="guarantee-content">
                        <h4 className="guarantee-title">100% Risk-Free</h4>
                        <p className="guarantee-text">If you're not completely satisfied, we'll work together to make it right.</p>
                    </div>
                </motion.div>
            </HybridMotionDiv>
        </HybridMotionSection>
    );
};

export default CTASection; 