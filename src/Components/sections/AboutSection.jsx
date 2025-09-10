import React from 'react';
import { motion } from 'framer-motion';
import silasImg from '../../assets/silas_new.jpg';
import { 
    fadeInUp, 
    fadeInLeft, 
    fadeInRight, 
    staggerContainer,
    HybridMotionSection,
    HybridMotionDiv
} from '../../utils/hybridAnimations';

const AboutSection = () => {

    return (
        <HybridMotionSection 
            id="about" 
            className="about-section section-spacing"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            role="main"
            aria-labelledby="about-heading"
        >
            <motion.hr 
                className="section-divider" 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                aria-hidden="true"
            />
            
            <HybridMotionDiv 
                className="about-content"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.article className="about-left" variants={fadeInLeft}>
                    <h2 id="about-heading" className="about-title">About Me</h2>
                    
                    <div className="about-story">
                        <h3 className="about-subtitle">My Story</h3>
                        <p>
                            I'm <strong>Silas Abiodun</strong>, a Techpreneur and AI Automation expert with a passion for building scalable solutions. My journey combines entrepreneurial vision with technical expertise to create digital products that drive real business value.
                        </p>
                    </div>
                    
                    <div className="about-philosophy">
                        <h3 className="about-subtitle">My Philosophy</h3>
                        <p>
                            As a <strong>Techpreneur at BrandGoto</strong>, I believe in leveraging cutting-edge technology to solve complex business challenges. My approach combines full-stack development skills with AI automation to create efficient, scalable solutions.
                        </p>
                    </div>
                    
                    <div className="about-credentials">
                        <h3 className="about-subtitle">Technical Expertise</h3>
                        <ul className="credentials-list">
                            <li>Techpreneur at BrandGoto</li>
                            <li>AI & Machine Learning Automation</li>
                            <li>Full Stack Development (React, Node.js, Python)</li>
                            <li>Project Management & Technical Leadership</li>
                        </ul>
                    </div>
                    
                    <div className="about-approach">
                        <h3 className="about-subtitle">My Approach</h3>
                        <p>
                            I focus on delivering high-quality, maintainable code while implementing AI-driven automation solutions that streamline business processes. If you're looking for a technical partner who understands both code and business, let's connect.
                        </p>
                    </div>
                </motion.article>
                
                <motion.aside className="about-right" variants={fadeInRight}>
                    <div className="about-image-container">
                        <img 
                            src={silasImg} 
                            alt="Silas Abiodun - Professional Techpreneur, Web Developer, and Project Manager" 
                            className="about-image"
                        />
                    </div>
                </motion.aside>
            </HybridMotionDiv>
        </HybridMotionSection>
    );
};

export default AboutSection; 