import React from 'react';
import * as emailjs from "emailjs-com";
import './contact.style.css';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const SERVICE_ID = "service_7ing9hi";
const TEMPLATE_ID = "template_cq899ev";
const USER_ID = "user_MgUIWcsi1jH4DWOrLSNHx";

const ContactComponent = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully',
                    color: '#fff',
                    background: '#101010',
                    customClass: {
                        popup: 'animated tada'
                    }
                });
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops, something went wrong',
                    text: error.text,
                    color: '#fff',
                    background: '#101010'
                });
            });
        e.target.reset();
    };

    const inputVariants = {
        focus: { 
            scale: 1.02, 
            borderBottomColor: "#ef2d56",
            transition: { duration: 0.3 }
        }
    };

    return (
        <div>
            <form className="ui form" onSubmit={handleOnSubmit}>
                <motion.input
                    id="name"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    whileFocus="focus"
                    variants={inputVariants}
                />
                <motion.input
                    id="email"
                    name="user_email"
                    placeholder="Your Email Address"
                    required
                    whileFocus="focus"
                    variants={inputVariants}
                />
                <motion.textarea
                    id="feedback"
                    name="user_message"
                    placeholder="What would you like to chat about?"
                    required
                    whileFocus="focus"
                    variants={inputVariants}
                />
                <motion.button
                    type="submit"
                    whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "#ef2d56",
                        color: "#fff",
                        boxShadow: "0px 5px 15px rgba(239, 45, 86, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    Send Message
                </motion.button>
            </form>
        </div>
    );
};

export default ContactComponent;