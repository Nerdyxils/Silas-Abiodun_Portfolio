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
            <motion.div 
                className="about-content"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.article className="about-left about-card about-col" variants={fadeInLeft}>
                    <h2 id="about-heading" className="section-title">About Silas Abiodun</h2>
                    <h3 className="about-subtitle">Founder, Builder, Techpreneur</h3>
                    <div className="about-description">
                        <p>
                            I'm <strong>Silas Abiodun</strong>, a builder, founder, and digital creator with a passion for turning ideas into systems that scale. My journey has always been about more than code — it's about vision, momentum, and making things happen.
                        </p>
                        <p>
                            I founded <strong>BrandGoto</strong> to help ambitious people and brands launch, grow, and automate with confidence. But my work as <strong>Silas Abiodun</strong> is about more than any one agency: it's about using technology, design, and strategy to create real impact.
                        </p>
                        <p>
                            As a <strong>Techpreneur</strong> and <strong>Web Developer</strong> based in <strong>Ontario, Canada</strong>, I believe in bold moves, clear thinking, and building for the future. If you're looking for a partner who brings energy, insight, and a builder's mindset, let's connect.
                        </p>
                    </div>
                </motion.article>
                <motion.aside className="about-right about-card about-col" variants={fadeInRight}>
                    <div className="about-value-prop">
                        <h3 className="about-subtitle">Core Expertise & Skills</h3>
                        <motion.ul 
                            className="value-list about-value-list" 
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            role="list"
                            aria-label="Silas Abiodun's professional skills and expertise"
                        >
                            <motion.li variants={listItemVariants} role="listitem">
                                <FaCheckCircle className="about-check" aria-hidden="true" />
                                <span>Entrepreneurial mindset & creative strategy</span>
                            </motion.li>
                            <motion.li variants={listItemVariants} role="listitem">
                                <FaCheckCircle className="about-check" aria-hidden="true" />
                                <span>Building brands, systems, and automations</span>
                            </motion.li>
                            <motion.li variants={listItemVariants} role="listitem">
                                <FaCheckCircle className="about-check" aria-hidden="true" />
                                <span>Founder of BrandGoto (branding, web, AI automation)</span>
                            </motion.li>
                            <motion.li variants={listItemVariants} role="listitem">
                                <FaCheckCircle className="about-check" aria-hidden="true" />
                                <span>Web Development & Project Management</span>
                            </motion.li>
                            <motion.li variants={listItemVariants} role="listitem">
                                <FaCheckCircle className="about-check" aria-hidden="true" />
                                <span>AI-Driven Business Automation Expert</span>
                            </motion.li>
                            <motion.li variants={listItemVariants} role="listitem">
                                <FaCheckCircle className="about-check" aria-hidden="true" />
                                <span>Driven by impact, growth, and collaboration</span>
                            </motion.li>
                        </motion.ul>
                    </div>
                </motion.aside>
            </motion.div>
        </motion.section>
    );
};

export default AboutSection; 