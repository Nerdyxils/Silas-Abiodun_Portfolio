import React from 'react';
import projectData from '../../projectData'
import { ExternalLink } from 'react-external-link'
import { FaExternalLinkAlt, FaGithubSquare } from 'react-icons/fa'
import { motion } from 'framer-motion'

import './projects.css'

export default function projects ()  {
    const pageVariants = {
        in: {
          opacity: 1,
          y: 0
        },
        out: {
          opacity: 0,
          y: "-100%"
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
        <div className="page_container">
            <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}  
                > 
                 <h2 style={{color : 'white'}}>My Projects</h2>
            </motion.div>
            <div className="project_lists">
                {projectData.map((x) => {
                    return <div key={x.id} className="project_card">
                    <div className="img_sec">
                        <img src={x.img} alt="project" className="p_image" />
                        <div class="overlay">
                            <div class="text">
                                <ExternalLink href={x.liveProject}> 
                                    <FaExternalLinkAlt />
                                </ExternalLink>
                                <ExternalLink href={x.repoLink}>
                                    <FaGithubSquare />
                                </ExternalLink>
                            </div>
                        </div>
                    </div>
                        <h4 className="p_title">{x.projectTitle}</h4>
                        <p className="p_text">{x.projectTools}</p>
                    </div>
                })}
            </div>
        </div>
    </motion.div>
    )
}