import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { 
    fadeInUp, 
    staggerContainer,
    HybridMotionSection,
    HybridMotionDiv
} from '../../utils/hybridAnimations';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "What technical services do you offer?",
            answer: "I offer full-stack development, AI automation solutions, project management, system integration, and technical consulting. My services include building web applications, implementing AI-driven automation, managing technical projects, and providing strategic technology guidance."
        },
        {
            id: 2,
            question: "What technologies do you work with?",
            answer: "I work with modern full-stack technologies including React, Node.js, Python, TypeScript, and various databases. For AI automation, I use TensorFlow, PyTorch, and OpenAI APIs. I'm also experienced with cloud platforms like AWS and DevOps tools like Docker and Kubernetes."
        },
        {
            id: 3,
            question: "Do you work with startups or established companies?",
            answer: "I work with both! As a techpreneur at BrandGoto, I understand the unique challenges of building technology startups. I also help established companies modernize their systems and implement AI automation solutions. My approach is tailored to each client's specific technical needs."
        },
        {
            id: 4,
            question: "What makes your technical approach different?",
            answer: "I combine deep technical expertise with business understanding. I don't just write code - I focus on building scalable, maintainable solutions that drive real business value. My experience as both a developer and techpreneur gives me unique insights into what works in practice."
        },
        {
            id: 5,
            question: "Do you provide ongoing technical support?",
            answer: "Yes! I offer ongoing support packages that include maintenance, updates, performance optimization, and technical guidance. This ensures your applications and automation systems continue to perform optimally as your business grows and evolves."
        },
        {
            id: 6,
            question: "How do I get started with a technical project?",
            answer: "The best way to get started is to book a free technical consultation. We'll discuss your project requirements, technical challenges, and how I can help. From there, I'll provide a detailed technical proposal with timelines, architecture recommendations, and implementation strategy."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: "easeOut" } 
        }
    };

    return (
        <HybridMotionSection 
            id="faq"
            className="faq-section section-spacing"
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
                Frequently Asked Questions
            </motion.h2>
            
            <motion.p 
                className="section-subtext"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                Got questions? I've got answers. Here are the most common questions I receive from potential clients.
            </motion.p>
            
            <HybridMotionDiv 
                className="faq-container"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {faqs.map((faq, index) => (
                    <motion.div 
                        key={faq.id}
                        className={`faq-item ${openIndex === index ? 'open' : ''}`}
                        variants={faqVariants}
                    >
                        <button 
                            className="faq-question"
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={openIndex === index}
                        >
                            <span>{faq.question}</span>
                            <span className="faq-icon">
                                {openIndex === index ? <FaMinus /> : <FaPlus />}
                            </span>
                        </button>
                        
                        <motion.div 
                            className="faq-answer"
                            initial={false}
                            animate={{
                                height: openIndex === index ? 'auto' : 0,
                                opacity: openIndex === index ? 1 : 0
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="faq-answer-content">
                                <p>{faq.answer}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </HybridMotionDiv>
        </HybridMotionSection>
    );
};

export default FAQSection;
