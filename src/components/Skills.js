import "./SkillsStyles.css"

import React from 'react'
import SkillsData from "./SkillsData"

const Skills = () => {
  
  return (
    <div className="work-container">
        <h1 className="project-heading">Skills</h1>
        <div className="project-container pt">
        {SkillsData.map((val,ind)=>{
                return(
                  <div className="item"><div className="outer"><div className="inner"><div className="number" id="number">{val.perc}</div></div></div>
                  <svg className="svg1" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <defs>
                      <linearGradient id="GradientColor">
                      <stop offset="0%" stop-color="#e91e63"></stop>
                      <stop offset="100%" stop-color="#673ab7"></stop>

                      </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" strokeDasharray={0} strokeDashoffset={472-(val.perc)*4.5}/>
                  </svg>
                  <h3 className="name">{val.name}</h3>



                  </div>
                )
            })}
            
        </div>
    </div>
  )
}

export default Skills