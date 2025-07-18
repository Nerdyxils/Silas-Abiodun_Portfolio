import React from 'react';
import { motion } from 'framer-motion';
import { 
    fadeInUp, 
    fadeInLeft, 
    fadeInRight, 
    staggerContainer,
    dividerVariants,
    HybridMotionSection,
    HybridMotionDiv,
    HybridMotionButton
} from '../../utils/hybridAnimations';

const CTASection = () => {
    return (
        <HybridMotionSection 
            id="projects" 
            className="projects-section section-spacing"
            variants={fadeInUp}
        >
            <motion.hr 
                className="section-divider" 
                variants={dividerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            />
            <HybridMotionDiv 
                className="cta-newsletter-wrap"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h2 className="cta-title" variants={fadeInUp}>
                    Ready to move fast and get real results?
                </motion.h2>
                <motion.p className="cta-text section-subtext" variants={fadeInUp}>
                    If you want digital solutions that actually work—and a founder who gets it—let's make it happen. Or just want my unfiltered takes and the best memes? Either way, you're in the right place.
                </motion.p>
                <HybridMotionDiv className="cta-newsletter-actions" variants={fadeInUp}>
                    <HybridMotionDiv className="cta-actions" variants={staggerContainer}>
                        <HybridMotionButton 
                            href="https://www.brandgoto.ca/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="cta-btn-main"
                            variants={fadeInLeft}
                        >
                            Visit BrandGoto
                        </HybridMotionButton>
                        <HybridMotionButton 
                            href="https://calendly.com/silas-brandgoto/30min" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="cta-btn-alt"
                            variants={fadeInRight}
                        >
                            Book a 30-min Consult
                        </HybridMotionButton>
                    </HybridMotionDiv>
                    <HybridMotionDiv className="newsletter-actions" variants={fadeInUp}>
                        <h3 className="newsletter-title">Unfiltered by Silas</h3>
                        <p className="newsletter-text">
                            Want my unfiltered, raw thoughts on life, tech, and the funniest memes I find online? Subscribe to my newsletter and get the real deal straight to your inbox.
                        </p>
                        <HybridMotionButton 
                            href="https://unfiltered.silasabiodun.com/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="newsletter-btn"
                            variants={fadeInUp}
                        >
                            Subscribe to Unfiltered
                        </HybridMotionButton>
                    </HybridMotionDiv>
                </HybridMotionDiv>
            </HybridMotionDiv>
        </HybridMotionSection>
    );
};

export default CTASection; 