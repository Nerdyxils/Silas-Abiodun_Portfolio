import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaNewspaper, FaExternalLinkAlt, FaCalendarAlt, FaLightbulb, FaFire } from 'react-icons/fa';
import imageBg from '../../assets/image_bg.jpg';
import {
    fadeInUp,
    staggerContainer,
    HybridMotionSection,
    HybridMotionDiv,
    HybridMotionButton
} from '../../utils/hybridAnimations';

const UnfilteredCTASection = () => {
    const handleNewsletterClick = () => {
        window.open('https://unfiltered.silasabiodun.com/', '_blank');
    };

    const handleBrandGotoClick = () => {
        window.open('https://www.brandgoto.ca/', '_blank');
    };

    const handleCalendlyClick = () => {
        window.open('https://calendly.com/silas-brandgoto/30min', '_blank');
    };

    return (
        <HybridMotionSection 
            id="unfiltered-cta"
            className="unfiltered-cta-section section-spacing"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="cta-background">
                <img src={imageBg} alt="Background" className="cta-bg-image" />
                <div className="cta-overlay"></div>
                <div className="cta-pattern"></div>
            </div>

            <HybridMotionDiv 
                className="cta-content"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.div className="cta-header" variants={fadeInUp}>
                    <div className="cta-icon-container">
                        <FaRocket className="cta-main-icon" />
                        <FaFire className="cta-accent-icon" />
                    </div>
                    <h2 className="cta-title">
                        Ready to <span className="highlight">build something amazing</span> and get <span className="highlight">real results?</span>
                    </h2>
                    <p className="cta-description">
                        If you want digital solutions that actually work—and a founder who gets it—let's make it happen. 
                        Or just want my unfiltered takes and the best memes? Either way, you're in the right place.
                    </p>
                </motion.div>

                <motion.div className="cta-options" variants={fadeInUp}>
                    <div className="cta-option-card newsletter-card">
                        <div className="card-header">
                            <FaNewspaper className="card-icon" />
                            <h3 className="card-title">Unfiltered by Silas</h3>
                        </div>
                        <p className="card-description">
                            Want my unfiltered, raw thoughts on life, tech, and the funniest memes I find online? 
                            Subscribe to my newsletter and get the real deal straight to your inbox.
                        </p>
                        <HybridMotionButton 
                            className="cta-option-btn newsletter-btn"
                            onClick={handleNewsletterClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Get Unfiltered</span>
                            <FaExternalLinkAlt className="btn-icon" />
                        </HybridMotionButton>
                    </div>

                    <div className="cta-option-card brandgoto-card">
                        <div className="card-header">
                            <FaLightbulb className="card-icon" />
                            <h3 className="card-title">Visit BrandGoto</h3>
                        </div>
                        <p className="card-description">
                            Check out my agency where we help ambitious people and brands launch, grow, 
                            and automate with confidence. See what we're building.
                        </p>
                        <HybridMotionButton 
                            className="cta-option-btn brandgoto-btn"
                            onClick={handleBrandGotoClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Explore BrandGoto</span>
                            <FaExternalLinkAlt className="btn-icon" />
                        </HybridMotionButton>
                    </div>

                    <div className="cta-option-card consult-card">
                        <div className="card-header">
                            <FaCalendarAlt className="card-icon" />
                            <h3 className="card-title">Book a 30-min Consult</h3>
                        </div>
                        <p className="card-description">
                            Ready to discuss your project? Let's hop on a call and figure out how to 
                            turn your ideas into something that actually works.
                        </p>
                        <HybridMotionButton 
                            className="cta-option-btn consult-btn"
                            onClick={handleCalendlyClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Book Now</span>
                            <FaExternalLinkAlt className="btn-icon" />
                        </HybridMotionButton>
                    </div>
                </motion.div>

                <motion.div className="cta-footer" variants={fadeInUp}>
                    <p className="cta-footer-text">
                        No fluff. No BS. Just real talk and real results.
                    </p>
                </motion.div>
            </HybridMotionDiv>
        </HybridMotionSection>
    );
};

export default UnfilteredCTASection;
