import React from 'react'
import { motion } from 'framer-motion';
import Typing from 'react-typing-animation';
import './Home.css'


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
  

const Home = () => (

    <motion.div
        initial='out'
        animate='in' 
        exit='out'
        variants={pageVariants}
        transition={pageTransition}
    >
        <div className="page_container">
            <div className="col-lg-12 main-c">
                <div className="text-left">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}  
                > 
                <span className="txt-1">Hey there!</span>
                </motion.div>
                    <h1 className="txt-2">I'm Silas</h1>
                    <Typing>
                        <span className="alt-txt">A Front End Developer</span>
                        <Typing.Backspace count={19} delay={900} />
                        <span className="alt-txt">ReactJs Developer</span>
                        <Typing.Backspace count={17} delay={900} />
                        <span className="alt-txt">Project Manager</span>
                        <Typing.Backspace count={15} delay={900} />
                        <span className="alt-txt">Front End Developer</span>
                    </Typing>
                    <h1 className="txt-2">based in Lagos, Nigeria.</h1>
                </div>
            </div>
        </div>
    </motion.div>
    
)

export default Home;