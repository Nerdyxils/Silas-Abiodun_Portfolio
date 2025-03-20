import React from 'react';
import ContactComponent from '../../Components/signIn-Components/contactComponent';
import { motion } from 'framer-motion';
import './contact.css';

const Contact = () => {
    const containerVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: "spring",
                stiffness: 120,
                damping: 15,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        },
        exit: { opacity: 0, y: -50 }
    };

    const childVariants = {
        initial: { opacity: 0, x: -50 },
        animate: { 
            opacity: 1, 
            x: 0,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <div className="page_container">
                <motion.div 
                    className="contact_wrapper"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h2
                        variants={childVariants}
                        style={{ color: 'white' }}
                        whileHover={{ 
                            scale: 1.05, 
                            textShadow: "0px 0px 10px rgba(239, 45, 86, 0.8)"
                        }}
                    >
                        Would You Like To Work With Me?
                    </motion.h2>
                    <motion.div
                        variants={childVariants}
                        className="contact_form_container"
                        whileHover={{ boxShadow: "0px 10px 30px rgba(0,0,0,0.3)" }}
                    >
                        <ContactComponent />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;