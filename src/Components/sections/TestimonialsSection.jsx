import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { 
    fadeInUp, 
    staggerContainer,
    HybridMotionSection,
    HybridMotionDiv
} from '../../utils/hybridAnimations';

const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            text: "Silas helped me transform my business with his automation strategies. The results were incredible - we increased efficiency by 300% and saved countless hours every week.",
            name: "David Thompson",
            title: "Financial Advisor",
            rating: 5
        },
        {
            id: 2,
            text: "Working with Silas was a game-changer. His web development skills and strategic thinking helped us launch our product faster than we ever imagined possible.",
            name: "Sarah Johnson",
            title: "Startup Founder",
            rating: 5
        },
        {
            id: 3,
            text: "Silas's expertise in AI automation revolutionized our workflow. His solutions are not just technical - they're business-focused and deliver real value.",
            name: "Michael Chen",
            title: "Operations Director",
            rating: 5
        }
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index) => {
        setCurrentTestimonial(index);
    };

    const current = testimonials[currentTestimonial];

    return (
        <HybridMotionSection 
            className="testimonials-section section-spacing"
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
                Client Success Stories
            </motion.h2>
            
            <motion.p 
                className="section-subtext"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                Don't just take my word for it - hear from clients who have transformed their businesses with my help.
            </motion.p>
            
            <HybridMotionDiv 
                className="testimonials-container"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.div 
                    className="testimonial-card"
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="quote-icon">
                        <FaQuoteLeft />
                    </div>
                    
                    <p className="testimonial-text">{current.text}</p>
                    
                    <div className="testimonial-author">
                        <div className="author-info">
                            <h4 className="author-name">{current.name}</h4>
                            <p className="author-title">{current.title}</p>
                        </div>
                        <div className="testimonial-rating">
                            {[...Array(current.rating)].map((_, i) => (
                                <FaStar key={i} className="star" />
                            ))}
                        </div>
                    </div>
                </motion.div>
                
                <div className="testimonial-navigation">
                    <button 
                        className="nav-btn prev-btn"
                        onClick={prevTestimonial}
                        aria-label="Previous testimonial"
                    >
                        <FaChevronLeft />
                    </button>
                    
                    <div className="testimonial-dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                                onClick={() => goToTestimonial(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                    
                    <button 
                        className="nav-btn next-btn"
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </HybridMotionDiv>
        </HybridMotionSection>
    );
};

export default TestimonialsSection;
