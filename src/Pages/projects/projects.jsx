import React from 'react'
import projectData from '../../projectData'
import { FaExternalLinkAlt, FaGithubSquare } from 'react-icons/fa'
import './projects.css'

import { Link } from 'react-router-dom'
const projects = () => {
    return (
        <div className="page_container">
            <h2 style={{color : 'white'}}>My Projects</h2>
            <div className="project_lists">
                {projectData.map((project) => {
                    return <div key={project.id} className="project_card">
                    <div className="img_sec">
                        <img src={project.img} alt="project" className="p_image" />
                        <div class="overlay">
                            <div class="text">
                                <Link> 
                                    <FaExternalLinkAlt />
                                </Link>
                                <Link>
                                    <FaGithubSquare />
                                </Link>
                            </div>
                        </div>
                    </div>
                        <h4 className="p_title">{project.projectTitle}</h4>
                        <p className="p_text">{project.projectTools}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default projects