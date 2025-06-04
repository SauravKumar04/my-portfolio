import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img id='img_profile' src={profile} alt="" />
            <h1> <span>I'm Saurav Kumar,</span> MERN developer based in India.</h1>
            <p>I am a third-year undergraduate student pursuing Electrical and Electronics Engineering, with a strong interest in Data Structures and Algorithms (DSA) and MERN Development. 
            </p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero
