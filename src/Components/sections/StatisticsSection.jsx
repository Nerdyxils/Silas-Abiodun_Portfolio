import React from 'react';
import { motion } from 'framer-motion';
import { 
    fadeInUp, 
    staggerContainer,
    HybridMotionSection,
    HybridMotionDiv
} from '../../utils/hybridAnimations';

const StatisticsSection = () => {
    const stats = [
        { number: "50+", label: "Projects Delivered" },
        { number: "100%", label: "Client Satisfaction" },
        { number: "5+", label: "Years Experience" }
    ];

    const statsVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <HybridMotionSection 
            id="statistics"
            className="statistics-section"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <HybridMotionDiv 
                className="stats-container"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {stats.map((stat, index) => (
                    <motion.div 
                        key={index}
                        className="stat-card"
                        variants={statsVariants}
                    >
                        <div className="stat-number">{stat.number}</div>
                        <div className="stat-label">{stat.label}</div>
                    </motion.div>
                ))}
            </HybridMotionDiv>
        </HybridMotionSection>
    );
};

export default StatisticsSection;
