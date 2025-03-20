import React from 'react';
import Data from '../../Data.jsx';
import { motion } from 'framer-motion';
import './services.css';

const Services = () => {
    const serviceVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.8, 
            rotateX: 60 
        },
        visible: { 
            opacity: 1, 
            scale: 1,
            rotateX: 0,
            transition: { 
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.8
            }
        },
        hover: { 
            scale: 1.05,
            y: -15,
            boxShadow: "0px 15px 30px rgba(0,0,0,0.3)",
            transition: { 
                duration: 0.3,
                ease: "easeOut"
            }
        },
        tap: { 
            scale: 0.98,
            transition: { duration: 0.1 }
        }
    };

    const iconVariants = {
        hover: { 
            rotate: [0, 360],
            scale: 1.2,
            transition: { 
                duration: 0.6,
                ease: "easeInOut",
                repeat: 1
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
        >
            <div className="page_container">
                <motion.h2
                    className="services-title" // Added class for specific styling
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { type: "spring", bounce: 0.5, delay: 0.2 }
                    }}
                    whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgba(255,255,255,0.8)" }}
                >
                    What you get
                </motion.h2>
                <div className="service-list">
                    {Data.map((ele, index) => {
                        const Icon = ele.icon;
                        return (
                            <motion.div 
                                key={ele.id} 
                                className="service-item"
                                variants={serviceVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                whileTap="tap"
                                transition={{ delay: index * 0.15 }}
                            >
                                <motion.div
                                    variants={iconVariants}
                                    transition={{ delay: index * 0.15 + 0.1 }}
                                >
                                    <Icon className="icon" />
                                </motion.div>
                                <motion.h3 
                                    className="service-title"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ 
                                        opacity: 1, 
                                        y: 0,
                                        transition: { delay: index * 0.15 + 0.2, type: "spring", stiffness: 100 }
                                    }}
                                >
                                    {ele.serviceTitle}
                                </motion.h3>
                                <motion.p 
                                    className="service-text"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ 
                                        opacity: 1, 
                                        y: 0,
                                        transition: { delay: index * 0.15 + 0.3, type: "spring", stiffness: 100 }
                                    }}
                                >
                                    {ele.serviceText}
                                </motion.p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default Services;