import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaGitAlt, FaGithubSquare, FaReact, FaNpm, FaTrello, FaSlack, FaWordpress, FaJira, FaWpforms } from 'react-icons/fa'
import { SiJavascript, SiRedux, SiFirebase, SiTailwindcss, SiNotion } from 'react-icons/si'
import { motion } from 'framer-motion';
import myImg from '../../assets/silas_new.jpg'
import './about.css'

const About = () => {
    const [clickedTab, setClickedTab] = useState(0);
    const handleTabClick = (index) => {
        setClickedTab(index);
      };
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
        duration: 1.0
      }
    
    return (
        <motion.div initial='out'
        animate='in' 
        exit='out'
        variants={pageVariants}
        transition={pageTransition} > 
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
                    Hey, I’m Silas — a versatile Web Developer with a knack for crafting pixel-perfect, cross-browser masterpieces that don’t just work, but wow. Beyond the code, I’m a wizard at WordPress development, building dynamic, user-friendly sites that bring ideas to life, and a project management maestro, steering teams toward success with precision and flair. I thrive on writing clean, reusable, and razor-sharp code that’s as maintainable as it is innovative—because great design deserves great execution.
I’m fueled by a passion for solving puzzles, turning data into actionable strategies that bridge business goals with what users truly need. Right now, I’m rocking the global stage as an Independent Contractor with clients across the US and Canada, delivering cutting-edge web solutions, weaving WordPress magic, and orchestrating projects for clients worldwide. Whether I’m leading the charge or diving deep into development, I’m all about creating impact — one sleek site, one smart solution, one happy user at a time.


                    </p>
                    <div className="abt-details">
                        <Tabs>
                        <TabList className="tablist">
                            <Tab onClick={() => handleTabClick(0)} className={clickedTab === 0 ? 'tab-item focus' : 'tab-item'}>
                                Main Skills
                            </Tab>
                            <Tab onClick={() => handleTabClick(1)} className={clickedTab === 1 ? 'tab-item focus' : 'tab-item'}>
                                Experience
                            </Tab>
                            <Tab onClick={() => handleTabClick(2)} className={clickedTab === 2 ? 'tab-item focus' : 'tab-item'}>
                                Education
                            </Tab>
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
                            <div className="skills-icon">
                                <FaWordpress className="icon"/>      {/* WordPress core */}
                                <FaWpforms className="icon"/>        {/* WordPress forms/plugins */}
                                <FaTrello className="icon"/>         {/* Project management - Trello */}
                                <FaJira className="icon"/>           {/* Project management - Jira */}
                                <SiNotion className="icon"/>         {/* Project management - Notion */}
                                <FaSlack className="icon"/>          {/* Team communication */}
                            </div>
                        </TabPanel>


                            <TabPanel className="experience-tab">
                                <p><span className="bold-text">Web Developer</span> - Social Movement Technologies <b><i>(Remote, USA)</i></b></p>
                                <p>2024 - till date</p>
                                <p><span className="bold-text">Web Developer & Project Manager</span> - Higher Glyphs Content Group <b><i>(Remote, USA)</i></b></p>
                                <p>2021 - till date</p>
                                <p><span className="bold-text">Web Developer</span> - Mother Meraki <b><i>(Remote, USA)</i></b></p>
                                <p>2020 - 2023</p>
                                <p><span className="bold-text">Front End Developer</span> - Instar <b><i>(Remote, USA)</i></b></p>
                                <p>2020 - 2021</p>
                                <p><span className="bold-text">Front End Developer Intern</span> - HNGi <b><i>(Remote, Nigeria)</i></b></p>
                                <p>2019</p>
                            </TabPanel>
                            <TabPanel className="experience-tab">
                                <p><span className="bold-text">PG Diploma. Network Administration - </span> CIMT College, Ontario, Canada</p>
                                <p>2023 - 2024</p>
                                <p><span className="bold-text">M.ed. Educational Psychology - </span> University of Ilorin</p>
                                <p>2019 - Not Completed</p>
                                <p><span className="bold-text">B.ed. Primary Education Studies - </span> University of Ilorin</p>
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

