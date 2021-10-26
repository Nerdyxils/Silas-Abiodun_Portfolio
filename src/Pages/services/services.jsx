import React from 'react'
import Data from '../../Data.jsx'
import { motion } from 'framer-motion'
import './services.css'

const services = () => {

    const pageVariants = {
        in: {
          opacity: 1,
          x: 0
        },
        out: {
          opacity: 0,
          x: "-100%"
        }
      }
    
      const pageTransition = {
        duration: 0.5
      }

    return (
        <motion.div
            initial='out'
            animate='in' 
            exit='out'
            variants={pageVariants}
            transition={pageTransition}
        >
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
        </motion.div>
       
        
    )
}

export default services;