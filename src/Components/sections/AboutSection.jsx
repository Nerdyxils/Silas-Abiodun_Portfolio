import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const AboutSection = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: {},
        visible: { 
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.2
            } 
        }
    };

    const listItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <motion.section 
            id="about" 
            className="about-section section-spacing"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
        >
            <motion.hr 
                className="section-divider" 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            />
            <motion.div 
                className="about-content"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.div className="about-left about-card about-col" variants={fadeInLeft}>
                    <h2 className="section-title">About Me</h2>
                    <div className="about-subtitle">Founder, Builder, Techpreneur</div>
                    <p className="about-description">
                        I'm a builder, founder, and digital creator with a passion for turning ideas into systems that scale. My journey has always been about more than code — it's about vision, momentum, and making things happen.<br/><br/>
                        I founded <b>BrandGoto</b> to help ambitious people and brands launch, grow, and automate with confidence. But my work is about more than any one agency: it's about using technology, design, and strategy to create real impact.<br/><br/>
                        I believe in bold moves, clear thinking, and building for the future. If you're looking for a partner who brings energy, insight, and a builder's mindset, let's connect.
                    </p>
                </motion.div>
                <motion.div className="about-right about-card about-col" variants={fadeInRight}>
                    <div className="about-value-prop">
                        <motion.ul 
                            className="value-list about-value-list" 
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            <motion.li variants={listItemVariants}>
                                <FaCheckCircle className="about-check" />
                                Entrepreneurial mindset & creative strategy
                            </motion.li>
                            <motion.li variants={listItemVariants}>
                                <FaCheckCircle className="about-check" />
                                Building brands, systems, and automations
                            </motion.li>
                            <motion.li variants={listItemVariants}>
                                <FaCheckCircle className="about-check" />
                                Founder of BrandGoto (branding, web, AI automation)
                            </motion.li>
                            <motion.li variants={listItemVariants}>
                                <FaCheckCircle className="about-check" />
                                Driven by impact, growth, and collaboration
                            </motion.li>
                        </motion.ul>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default AboutSection; 