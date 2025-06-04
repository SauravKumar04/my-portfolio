import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.jpeg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-right-para">
                        <p>I am currently a student in the Electrical and Electronics Engineering (EEE) department at NIT Jamshedpur. I have a strong interest in computer science concepts, especially Data Structures and Algorithms (DSA).</p>
                
                        <p>Along with that, I am skilled in web development and enjoy building interactive and user-friendly web applications. I’m always eager to learn more and take on new tech challenges.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>DSA</p><hr style={{width:"60%"}} />
                        </div>
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{width:"50%"}} />
                        </div>
                        <div className="about-skill">
                            <p>Javascript</p><hr style={{width:"60%"}} />
                        </div>
                        <div className="about-skill">
                            <p>React Js</p><hr style={{width:"70%"}} />
                        </div>
                        <div className="about-skill">
                            <p>Mongo DB</p><hr style={{width:"60%"}} />
                        </div>
                        <div className="about-skill">
                            <p>Express Js</p><hr style={{width:"50%"}} />
                        </div>
                        <div className="about-skill">
                            <p>Node Js</p><hr style={{width:"40%"}} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>8.37</h1>
                    <p>CURRENT CGPA</p>
                </div>
            </div>
        </div>
    )
}

export default About
