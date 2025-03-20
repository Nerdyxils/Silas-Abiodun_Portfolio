import React from 'react'
import { motion } from 'framer-motion';
import Typing from 'react-typing-animation';
import './Home.css'

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
}

const homeVariants = {
    initial: { opacity: 0, scale: 0.5, rotateY: 180 },
    in: { opacity: 1, scale: 1, rotateY: 0 },
    out: { opacity: 0, scale: 1.5, rotateY: -180 },
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
                        I'm Silas
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: 1,
                            transition: { delay: 0.6 }
                        }}
                    >
                        <Typing speed={50}>
                            <span className="alt-txt">A Web Developer</span>
                            <Typing.Backspace count={13} delay={900} />
                            <span className="alt-txt">ReactJs Developer</span>
                            <Typing.Backspace count={17} delay={900} />
                            <span className="alt-txt">Wordpress Developer</span>
                            <Typing.Backspace count={19} delay={900} />
                            <span className="alt-txt">Project Manager</span>
                            <Typing.Backspace count={16} delay={900} />
                            <span className="alt-txt">Front End Developer</span>
                        </Typing>
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
                        based remotely in Ontario, Canada.
                    </motion.h1>
                </div>
            </div>
        </div>
    </motion.div>
)
export default Home