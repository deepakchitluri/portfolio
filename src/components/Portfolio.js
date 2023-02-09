import "./PortfolioStyles.css"
import imgport from "../assets/imgport.jpeg"
import React from 'react'

const Portfolio = () => {
  return (
    <div className="Portfolio">
    <div className="port-container">
    <div className="detailport">
    
    <img className="myimgport" src={imgport} alt="" />
    <h3 className="mytitle">Leela Deepak Chitluri</h3>
    </div>
    <div className="chkitems"><h4>Web Developer</h4>
        <p>An undergraduate student waiting for an opportunity to step into corporate world of business.</p>
        <a className="btn-light btn btr" download href="https://drive.google.com/file/d/1OyBdhgBTydQGfBGZZYntJz9hq6tjPIrA/view?usp=sharing">Show Resume</a></div>

        
    </div>
      
    </div>
  )
}

export default Portfolio
