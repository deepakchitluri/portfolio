import "./FooterStyles.css"
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
    <div className="left">
        <div className="location">

        <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
        <div>
            <p>3-3-145 Baba Club Street, Nawabpet, Nellore</p>
            <p>Andhra Pradesh</p>
        </div>
        </div>
        <div className="phone">
        <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
        +91 6281107273</h4>
        
        </div>
        <div className="email">
        <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
        deepak.chitluri16@gmail.com</h4>
        
        </div>
    </div>
    <div className="right">
        <h4>About My Career</h4>
        <p>This is Leela Deepak, persuing under-graduation at geethanjali institute of science and technology, gangavaram, nellore.</p>
        <div className="social">
        <a href="/"><FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
        <a href="/"><FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
        <a href="/"><FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
        <a href="/"><FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
        
        
        

        </div>
    </div>
    </div>
    </div>
  )
}

export default Footer;