import React from 'react'
import Data from '../../Data.jsx'
import './services.css'

const services = () => {

    return (
        <div className='page_container'>
            <h2 style={{color: 'white'}}>My Services</h2>
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