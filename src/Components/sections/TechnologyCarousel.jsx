import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaReact, 
    FaNodeJs, 
    FaPython, 
    FaJs, 
    FaHtml5, 
    FaCss3Alt, 
    FaGitAlt, 
    FaDocker, 
    FaAws, 
    FaDatabase,
    FaBrain,
    FaRocket,
    FaProjectDiagram,
    FaCogs
} from 'react-icons/fa';
import { 
    SiTypescript, 
    SiMongodb, 
    SiPostgresql, 
    SiRedis, 
    SiKubernetes, 
    SiTerraform,
    SiTensorflow,
    SiPytorch,
    SiOpenai,
    SiJira,
    SiSlack,
    SiNotion
} from 'react-icons/si';
import { 
    fadeInUp, 
    HybridMotionSection,
    HybridMotionDiv
} from '../../utils/hybridAnimations';

const TechnologyCarousel = () => {
    const technologies = [
        // Full Stack Development
        { name: 'React', icon: FaReact, category: 'Frontend' },
        { name: 'Node.js', icon: FaNodeJs, category: 'Backend' },
        { name: 'TypeScript', icon: SiTypescript, category: 'Language' },
        { name: 'JavaScript', icon: FaJs, category: 'Language' },
        { name: 'HTML5', icon: FaHtml5, category: 'Frontend' },
        { name: 'CSS3', icon: FaCss3Alt, category: 'Frontend' },
        { name: 'Python', icon: FaPython, category: 'Language' },
        { name: 'Git', icon: FaGitAlt, category: 'Version Control' },
        
        // AI & Machine Learning
        { name: 'TensorFlow', icon: SiTensorflow, category: 'AI/ML' },
        { name: 'PyTorch', icon: SiPytorch, category: 'AI/ML' },
        { name: 'OpenAI', icon: SiOpenai, category: 'AI/ML' },
        { name: 'Brain', icon: FaBrain, category: 'AI/ML' },
        
        // Databases
        { name: 'MongoDB', icon: SiMongodb, category: 'Database' },
        { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database' },
        { name: 'Redis', icon: SiRedis, category: 'Database' },
        { name: 'Database', icon: FaDatabase, category: 'Database' },
        
        // DevOps & Cloud
        { name: 'Docker', icon: FaDocker, category: 'DevOps' },
        { name: 'Kubernetes', icon: SiKubernetes, category: 'DevOps' },
        { name: 'AWS', icon: FaAws, category: 'Cloud' },
        { name: 'Terraform', icon: SiTerraform, category: 'DevOps' },
        
        // Project Management
        { name: 'Jira', icon: SiJira, category: 'Project Management' },
        { name: 'Slack', icon: SiSlack, category: 'Communication' },
        { name: 'Notion', icon: SiNotion, category: 'Documentation' },
        { name: 'Project', icon: FaProjectDiagram, category: 'Project Management' },
        
        // Automation & Tools
        { name: 'Automation', icon: FaCogs, category: 'Automation' },
        { name: 'Rocket', icon: FaRocket, category: 'Deployment' }
    ];

    return (
        <HybridMotionSection 
            id="technologies"
            className="technology-carousel-section section-spacing"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <motion.hr 
                className="section-divider" 
                variants={fadeInUp}
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
                Technologies & Tools
            </motion.h2>
            
            <motion.p 
                className="section-subtext"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                A comprehensive toolkit for full-stack development, AI automation, and project management
            </motion.p>
            
            <HybridMotionDiv 
                className="carousel-container"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <div className="carousel-wrapper">
                    <div className="carousel-track">
                        {technologies.map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <div
                                    key={`${tech.name}-${index}`}
                                    className="tech-item"
                                >
                                    <div className="tech-icon">
                                        <Icon />
                                    </div>
                                    <span className="tech-name">{tech.name}</span>
                                    <span className="tech-category">{tech.category}</span>
                                </div>
                            );
                        })}
                        {technologies.map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <div
                                    key={`${tech.name}-duplicate-${index}`}
                                    className="tech-item"
                                >
                                    <div className="tech-icon">
                                        <Icon />
                                    </div>
                                    <span className="tech-name">{tech.name}</span>
                                    <span className="tech-category">{tech.category}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </HybridMotionDiv>
        </HybridMotionSection>
    );
};

export default TechnologyCarousel;
