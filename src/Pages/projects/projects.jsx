import React from 'react'
import { ExternalLink } from 'react-external-link'
import projectData from '../../projectData'
import { FaExternalLinkAlt, FaGithubSquare } from 'react-icons/fa'
import './projects.css'


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
                                <ExternalLink href={project.liveProject}> 
                                    <FaExternalLinkAlt />
                                </ExternalLink>
                                <ExternalLink href={project.repoLink}>
                                    <FaGithubSquare />
                                </ExternalLink>
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

export default projects;