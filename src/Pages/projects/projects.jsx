// Project.jsx (assuming this matches your structure)
import React from 'react';
import projectData from '../../projectData';
import { ExternalLink } from 'react-external-link';
import { FaExternalLinkAlt, FaGithubSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './projects.css';

export default function Projects() {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        },
        hover: { 
            scale: 1.05, 
            boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="page_container">
                <motion.h2 style={{ color: 'white' }}>My Projects</motion.h2>
                <div className="project_lists">
                    {projectData.map((x, index) => (
                        <motion.div 
                            key={x.id} 
                            className="project_card"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="img_sec">
                                <img src={x.img} alt="project" className="p_image" />
                                <div className="overlay">
                                    <div className="text">
                                        <ExternalLink href={x.liveProject}> 
                                            <FaExternalLinkAlt />
                                        </ExternalLink>
                                        <ExternalLink href={x.repoLink}>
                                            <FaGithubSquare />
                                        </ExternalLink>
                                    </div>
                                </div>
                            </div>
                            <h4 className="p_title">{x.projectTitle}</h4>
                            <p className="p_text">{x.projectTools}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}