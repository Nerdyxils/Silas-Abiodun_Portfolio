import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';

const pageVariants = {
    initial: { opacity: 0, scale: 0.8, rotateX: 90 },
    in: { 
        opacity: 1, 
        scale: 1, 
        rotateX: 0,
        transition: { 
            duration: 0.8, 
            ease: "easeOut",
            type: "spring",
            bounce: 0.4 
        }
    },
    out: { 
        opacity: 0, 
        scale: 1.2, 
        rotateX: -90,
        transition: { duration: 0.5 }
    }
};

const Home = () => (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
    >
        <div className="page_container">
            <div className="col-lg-12 main-c">
                <div className="text-left">
                    <motion.div
                        initial={{ opacity: 0, y: -100, rotate: -10 }}
                        animate={{ 
                            opacity: 1, 
                            y: 0, 
                            rotate: 0,
                            transition: { 
                                delay: 0.2, 
                                type: "spring", 
                                stiffness: 120 
                            }
                        }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                        <span className="txt-1">Hey there!</span>
                    </motion.div>
                    <motion.h1 
                        className="txt-2"
                        initial={{ opacity: 0, x: -200 }}
                        animate={{ 
                            opacity: 1, 
                            x: 0,
                            transition: { delay: 0.4, duration: 0.8 }
                        }}
                        whileHover={{ color: "#ff6b6b" }}
                    >
                        I'm Silas Abiodun
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: 1,
                            transition: { delay: 0.6 }
                        }}
                    >
                        <TypeAnimation
                            sequence={[
                                'A Web Developer',      // Text 1
                                1500,                  // Wait 1.5s
                                '',                    // Backspace to empty
                                500,                   // Wait 0.5s before next
                                'A ReactJs Developer',   // Text 2
                                1500,                  // Wait 1.5s
                                '',                    // Backspace
                                500,                   // Wait 0.5s
                                'A Wordpress Developer', // Text 3
                                1500,                  // Wait 1.5s
                                '',                    // Backspace
                                500,                   // Wait 0.5s
                                'A Project Manager',     // Text 4
                                1500,                  // Wait 1.5s
                                '',                    // Backspace
                                500,                   // Wait 0.5s
                                'A ReactJs Developer', // Text 5
                                1500,                  // Wait 1.5s
                                '',                    // Backspace
                                500                    // Wait 0.5s before loop
                            ]}
                            wrapper="span"
                            speed={50}                // Typing speed (ms per character)
                            repeat={Infinity}         // Loop forever
                            className="alt-txt"       // Apply your existing CSS class
                        />
                    </motion.div>
                    <motion.h1 
                        className="txt-2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                            opacity: 1, 
                            scale: 1,
                            transition: { 
                                delay: 0.8, 
                                type: "spring", 
                                stiffness: 100 
                            }
                        }}
                    >
                        based in Ontario, Canada.
                    </motion.h1>
                </div>
            </div>
        </div>
    </motion.div>
);

export default Home;