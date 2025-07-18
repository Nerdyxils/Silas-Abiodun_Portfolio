import React from 'react';
import { motion } from 'framer-motion';
import ContactComponent from '../signIn-Components/contactComponent';
import { 
    fadeInUp, 
    dividerVariants,
    HybridMotionSection,
    HybridMotionDiv
} from '../../utils/hybridAnimations';

const ContactSection = () => {
    return (
        <HybridMotionSection 
            id="contact" 
            className="contact-section section-spacing"
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
                Would You Like To Work With Me?
            </motion.h2>
            <HybridMotionDiv 
                className="contact_form_container"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <ContactComponent />
            </HybridMotionDiv>
        </HybridMotionSection>
    );
};

export default ContactSection; 