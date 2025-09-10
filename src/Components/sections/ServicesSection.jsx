import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaCode, 
    FaRobot, 
    FaProjectDiagram, 
    FaCogs, 
    FaRocket, 
    FaLightbulb 
} from 'react-icons/fa';
import { 
    fadeInUp, 
    staggerContainer,
    HybridMotionSection,
    HybridMotionDiv
} from '../../utils/hybridAnimations';

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            icon: FaCode,
            title: "Full Stack Development",
            description: "End-to-end web application development using modern technologies and best practices.",
            features: ["Frontend Development", "Backend APIs", "Database Design", "Cloud Deployment"]
        },
        {
            id: 2,
            icon: FaRobot,
            title: "AI Automation",
            description: "Intelligent automation solutions that streamline business processes and increase efficiency.",
            features: ["Process Automation", "Machine Learning", "Data Analysis", "Workflow Optimization"]
        },
        {
            id: 3,
            icon: FaProjectDiagram,
            title: "Project Management",
            description: "Technical project leadership from conception to delivery with agile methodologies.",
            features: ["Agile Development", "Team Leadership", "Technical Planning", "Quality Assurance"]
        },
        {
            id: 4,
            icon: FaCogs,
            title: "System Integration",
            description: "Seamless integration of existing systems with new technologies and platforms.",
            features: ["API Integration", "Legacy System Migration", "Data Synchronization", "Performance Optimization"]
        },
        {
            id: 5,
            icon: FaRocket,
            title: "Techpreneurship",
            description: "Building and scaling technology startups with a focus on innovation and growth.",
            features: ["Product Strategy", "Technical Architecture", "Team Building", "Market Analysis"]
        },
        {
            id: 6,
            icon: FaLightbulb,
            title: "Technical Consulting",
            description: "Expert guidance on technology decisions, architecture, and implementation strategies.",
            features: ["Technology Assessment", "Architecture Review", "Code Audits", "Strategic Planning"]
        }
    ];

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
        <HybridMotionSection 
            id="services" 
            className="services-section section-spacing"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
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
                My Services
            </motion.h2>
            
            <motion.p 
                className="section-subtext"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                I combine full-stack development expertise with AI automation to build scalable solutions that drive real business results.
            </motion.p>
            
            <HybridMotionDiv 
                className="services-grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {services.map((service) => {
                    const Icon = service.icon;
                    return (
                        <motion.div 
                            key={service.id} 
                            className="service-card"
                            variants={serviceCardVariants}
                            whileHover="hover"
                        >
                            <div className="service-icon">
                                <Icon />
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            
                                    <div className="service-features">
                                        <h4 className="features-title">What's included</h4>
                                        <ul className="features-list">
                                            {service.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                        </motion.div>
                    );
                })}
            </HybridMotionDiv>
        </HybridMotionSection>
    );
};

export default ServicesSection; 