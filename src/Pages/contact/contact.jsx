import React, { Component } from 'react'
import ContactComponent from '../../Components/signIn-Components/contactComponent';

import './contact.css'

const contact = () => {
    return (
        <div className="page_container">
            <div className="row">
                <div className="contact_sec">
                    <h2 style={{color: 'white', marginBottom: '30px'}}>Contact Me</h2>
                    <ContactComponent />
                </div>
                <div className="blank_sec">
                    
                </div>
            </div>
            
        </div>
    )
}

export default contact;