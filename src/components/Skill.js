import './skill.css'
import down from '../assets/down.gif'
import check from '../assets/check.gif'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Skill = (props) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div id="skillPage">
        <h1 id='sHead'>My Skills</h1>

        <div id='skillContainer'>

          <div id='skillCard'>
            <div id='frontCard'><img id='check' src={check} alt="check" /> HTML</div>
          </div>

          <div id='skillCard'>
            <div id='frontCard'><img id='check' src={check} alt="check" /> CSS</div>
          </div>

          <div id='skillCard'>
            <div id='frontCard'><img id='check' src={check} alt="check" /> JavaScript</div>
          </div>

          <div id='skillCard'>
            <div id='frontCard'><img id='check' src={check} alt="check" /> React JS</div>
          </div>

          <div id='skillCard'>
            <div id='frontCard'><img id='check' src={check} alt="check" /> Basic Bootstrap</div>
          </div>

          <div id='skillCard'>
            <div id='frontCard'><img id='check' src={check} alt="check" /> Git & Github</div>
          </div>      

          <div id='skillCard'>
            <div id='frontCard'><img id='check' src={check} alt="check" /> Node Js </div><p>(Fundamentals)</p>
          </div>    

          <div id='skillCard'>
            <div id='frontCard'><img id='check' src={check} alt="check" /> Express Js </div><p>(Fundamentals)</p>
          </div>      
        </div>
        
        <div>
          <img onClick={()=> props.scroll(props.projects)} id='down' src={down} alt="down"/>
        </div>
    </div>
  )
}
export default Skill