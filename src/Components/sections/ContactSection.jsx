import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaWhatsapp, FaBolt } from 'react-icons/fa';
import { 
    fadeInUp, 
    fadeInLeft, 
    fadeInRight, 
    staggerContainer,
    HybridMotionSection,
    HybridMotionDiv,
    HybridMotionButton
} from '../../utils/hybridAnimations';
import Swal from 'sweetalert2';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCall = () => {
        window.open('tel:+16479377031', '_self');
    };

    const handleEmail = () => {
        window.open('mailto:silas@silasabiodun.com?subject=Portfolio Inquiry', '_self');
    };

    const handleWhatsApp = () => {
        window.open('https://wa.me/16479377031?text=Hi%20Silas,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.', '_blank');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/xyzpzlgo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Portfolio Contact from ${formData.name}`,
                }),
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent successfully!',
                    icon: 'success',
                    confirmButtonText: 'Great!'
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to send message. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <HybridMotionSection 
            id="contact" 
            className="contact-section section-spacing"
            variants={fadeInUp}
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
                Let's Connect
            </motion.h2>
            
            <motion.p 
                className="section-subtext"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                Ready to transform your business? Get in touch and let's discuss how I can help you achieve your goals.
            </motion.p>
            
            <HybridMotionDiv 
                className="contact-content"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.div className="contact-left" variants={fadeInLeft}>
                    <div className="contact-card">
                        <h3 className="contact-card-title">Get In Touch</h3>
                        <p className="contact-card-description">
                            I'm here to help you succeed. Reach out through any of these channels and I'll get back to you quickly.
                        </p>
                        
                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="contact-method-icon">
                                    <FaPhone />
                                </div>
                                        <div className="contact-method-content">
                                            <h4>Call Me</h4>
                                            <p>+1 (647) 937 7031</p>
                                            <HybridMotionButton 
                                                className="contact-method-btn"
                                                onClick={handleCall}
                                            >
                                                Call Now
                                            </HybridMotionButton>
                                        </div>
                            </div>
                            
                            <div className="contact-method">
                                <div className="contact-method-icon">
                                    <FaEnvelope />
                                </div>
                                        <div className="contact-method-content">
                                            <h4>Email Me</h4>
                                            <p>silas@silasabiodun.com</p>
                                            <HybridMotionButton 
                                                className="contact-method-btn"
                                                onClick={handleEmail}
                                            >
                                                Send Email
                                            </HybridMotionButton>
                                        </div>
                            </div>
                            
                            <div className="contact-method">
                                <div className="contact-method-icon">
                                    <FaWhatsapp />
                                </div>
                                        <div className="contact-method-content">
                                            <h4>WhatsApp</h4>
                                            <p>+1 (647) 937 7031</p>
                                            <HybridMotionButton 
                                                className="contact-method-btn"
                                                onClick={handleWhatsApp}
                                            >
                                                Message
                                            </HybridMotionButton>
                                        </div>
                            </div>
                        </div>
                        
                        <div className="quick-response-tag">
                            <FaBolt className="quick-response-icon" />
                            <span>Quick Response</span>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div className="contact-right" variants={fadeInRight}>
                    <div className="contact-card">
                        <h3 className="contact-card-title">Send Me a Message</h3>
                        
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name*"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address*"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                />
                            </div>
                            
                            <HybridMotionButton 
                                type="submit"
                                className="contact-submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </HybridMotionButton>
                        </form>
                    </div>
                </motion.div>
            </HybridMotionDiv>
        </HybridMotionSection>
    );
};

export default ContactSection; 