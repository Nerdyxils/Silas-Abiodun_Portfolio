import React from 'react';
import { motion } from 'framer-motion';
import Data from '../../Data.jsx';

const ServicesSection = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: {},
        visible: { 
            transition: { 
                staggerChildren: 0.15,
                delayChildren: 0.2
            } 
        }
    };

    const serviceCardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            transition: { 
                duration: 0.6, 
                ease: "easeOut" 
            } 
        },
        hover: { 
            y: -8, 
            scale: 1.03, 
            transition: { 
                duration: 0.2, 
                ease: "easeOut" 
            } 
        }
    };

    const dividerVariants = {
        hidden: { scaleX: 0 },
        visible: { 
            scaleX: 1, 
            transition: { 
                duration: 0.8, 
                ease: "easeOut" 
            } 
        }
    };

    return (
        <motion.section 
            id="services" 
            className="page_container services-section section-spacing"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
        >
            <motion.hr 
                className="section-divider" 
                variants={dividerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            />
            <motion.h2 
                className="section-title"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                How I Create Value
            </motion.h2>
            <motion.p 
                className="section-subtext"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                I combine smart strategy, sharp design, and automation to build digital experiences that move businesses forward — fast.
            </motion.p>
            <motion.div 
                className="service-list"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {Data.map((ele, index) => {
                    const Icon = ele.icon;
                    return (
                        <motion.div 
                            key={ele.id} 
                            className="service-item"
                            variants={serviceCardVariants}
                            whileHover="hover"
                        >
                            <div className="service-icon-wrap">
                                <Icon className="icon" />
                            </div>
                            <h3 className="service-title">{ele.serviceTitle}</h3>
                            <p className="service-text">{ele.serviceText}</p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.section>
    );
};

export default ServicesSection; 