import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <p>I'm an EEE student at NIT Jamshedpur with skills in DSA and MERN stack development.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2025 Saurav Kumar. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
                <div className="footer-links">
                    <a
                    href="https://www.linkedin.com/in/saurav-kumar-32b61128a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="footer-link"
                >
                    <i class="fab fa-linkedin fa-2x"></i>
                </a>
                <a
                    href="https://github.com/SauravKumar04"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="footer-link"
                >
                    <i class="fab fa-github fa-2x"></i>
                </a>
                </div>

            </div>

        </div>
    )
}

export default Footer
