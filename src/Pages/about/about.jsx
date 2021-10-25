import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaGitAlt, FaGithubSquare, FaReact, FaNpm } from 'react-icons/fa'
import { SiJavascript, SiRedux, SiFirebase, SiTailwindcss } from 'react-icons/si'
import { motion } from 'framer-motion';
import myImg from '../../assets/silas.jpg'
import './about.css'

const About = () => {

    const [clicked, setClicked] = useState('')


    const handlefocus1 = () =>  clicked ? setClicked('') : setClicked('tab-item focus');
    // const handlefocus2 = () =>  clicked ? setClicked('') : setClicked('tab-item focus');
    // const handlefocus3 = () =>  clicked ? setClicked('') : setClicked('tab-item focus');

    return (
        <motion.div exit={{ opacity: 0 }}> 
            <div className="page_container">
            <div className="row">
                <div className="col-md-6 img-div">
                <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}  
            > 
                <h2 className="abt_ht_mb">About Me</h2>
            </motion.div>
                    <img src={myImg} alt="Silas Front end developer" className="image-silas" />
                </div>
                <div className="col-md-6 txt-div">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}  
                > 
                <h2 className="abt_ht">About me</h2>
            </motion.div>
                    <p className="description">
                        My name is Silas Abiodun and I am a Front End Developer, 
                        sometimes I find myself managing projects and leading teams.
                        I love writing clean, effective and cross browser compatible code 
                        that is re-useable, maintainable and easy to understand. 
                        I am passionate about solving problems through data driven processes
                        that translate business objectives into solutions with 
                        the best interest of the end user at heart. <br></br><br></br>
                        Currently, I work with global clients as a freelance front end developer via Upwork 
                        and some times I take on project management roles and virtual assistant roles.
                    </p>
                    <div className="abt-details">
                        <Tabs>
                            <TabList className="tablist">
                                <Tab className={clicked || 'tab-item' } onClick={handlefocus1} activeClassName="focus">Main Skills</Tab>
                                <Tab className={clicked || 'tab-item' } activeClassName="focus">Experience</Tab>
                                <Tab className={clicked || 'tab-item' } activeClassName="focus">Education</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="skills-icon">
                                    <FaHtml5 className="icon"/>
                                    <FaCss3Alt className="icon"/>
                                    <FaBootstrap className="icon"/>
                                    <FaSass className="icon"/>
                                    <SiTailwindcss className="icon"/>
                                    <SiJavascript className="icon"/>
                                </div>
                                <div className="skills-icon">
                                    <FaNpm className="icon"/>
                                    <FaGitAlt className="icon"/>
                                    <FaGithubSquare className="icon"/>
                                    <FaReact className="icon"/>
                                    <SiRedux className="icon"/>
                                    <SiFirebase className="icon"/>
                                </div>
                            </TabPanel>
                            <TabPanel className="experience-tab">
                                <p><span className="bold-text">Front End Developer</span> - Instar</p>
                                <p>2020 - Current</p>
                                <p><span className="bold-text">Front End Developer Intern</span> - HNGi</p>
                                <p>2019</p>
                            </TabPanel>
                            <TabPanel className="experience-tab">
                                <p><span className="bold-text">M.ed. Educational Psychology</span> - University of Ilorin</p>
                                <p>2019 - Current</p>
                                <p><span className="bold-text">B.ed. Primary Education Studies</span> - University of Ilorin</p>
                                <p>2015</p>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
        
        </motion.div>
        
    )
}


export default About