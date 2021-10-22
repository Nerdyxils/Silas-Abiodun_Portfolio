import React, { Component } from 'react'
import ContactComponent from '../../Components/signIn-Components/contactComponent';

import './contact.css'

const contact = () => {
    return (
        <div className="page_container">
            <h2 style={{color: 'white', marginBottom: '30px'}}>Contact</h2>
            <ContactComponent />
        </div>
    )
}

export default contact;