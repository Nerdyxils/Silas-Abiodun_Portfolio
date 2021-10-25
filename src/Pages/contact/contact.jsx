import React from 'react'
import ContactComponent from '../../Components/signIn-Components/contactComponent';
import { motion } from 'framer-motion'

import './contact.css'

const contact = () => {
    return (
        <div className="page_container">
            <div className="row">
                <div className="contact_sec">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}  
                > 
                <h2 style={{color: 'white', marginBottom: '30px'}}>Would You Like To Work With Me?</h2>
            </motion.div>
                    <ContactComponent />
                </div>
                <div className="blank_sec">

                </div>
            </div>
            
        </div>
    )
}

export default contact;