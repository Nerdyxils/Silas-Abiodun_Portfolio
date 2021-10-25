import React from 'react'
import Data from '../../Data.jsx'
import { motion } from 'framer-motion'
import './services.css'

const services = () => {

    return (
        <div className='page_container'>
             <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}  
                > 
                <h2 style={{color: 'white', marginBottom: "30px"}}>What you get</h2>
            </motion.div>
            <div className="service-list">
            {Data.map((ele) => {
                return <div key={ele.id} className="service-item">
                        <img src={ele.icon} alt="icon" className='icon' />
                        <h3 className="service-title">{ele.serviceTitle}</h3>
                        <p className="service-text">{ele.serviceText}</p>
                    </div>
            })}
            </div>
        </div>
        
    )
}

export default services;