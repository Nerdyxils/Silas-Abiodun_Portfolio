import React from 'react'
import Typing from 'react-typing-animation';
import './Home.css'


const Home = () => (
    <div className="page_container">
        <div className="col-lg-12 main-c">
            <div className="text-left">
                <span className="txt-1">Hey there!</span>
                <h1 className="txt-2">I'm Silas</h1>
                <Typing>
                    <span className="alt-txt">Front End Developer</span>
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
)

export default Home;