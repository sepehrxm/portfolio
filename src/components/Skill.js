import './skill.css'
import down from '../assets/down.gif'
import check from '../assets/check.gif'
import { motion } from 'framer-motion'

const Skill = (props) => {
  return (
    <div id="skillPage">
        <h1 id='sHead'>My Skills</h1>

        <div id='skillContainer'>
          <motion.div whileHover={{scale: 1.1}} id='skillCard'><div><img id='check' src={check} alt="check" /> HTML</div></motion.div>
          <motion.div whileHover={{scale: 1.1}} id='skillCard'><div><img id='check' src={check} alt="check" /> CSS</div></motion.div>
          <motion.div whileHover={{scale: 1.1}} id='skillCard'><div><img id='check' src={check} alt="check" /> JavaScript</div></motion.div>
          <motion.div whileHover={{scale: 1.1}} id='skillCard'><div><img id='check' src={check} alt="check" /> React JS</div></motion.div>
          <motion.div whileHover={{scale: 1.1}} id='skillCard'><div><img id='check' src={check} alt="check" /> Basic Bootstrap</div></motion.div>
          <motion.div whileHover={{scale: 1.1}} id='skillCard'><div><img id='check' src={check} alt="check" /> Git & Github</div></motion.div>      
          <motion.div whileHover={{scale: 1.1}} id='skillCard'><div><img id='check' src={check} alt="check" /> Node Js </div><p>(Fundamentals)</p></motion.div>      
          <motion.div whileHover={{scale: 1.1}} id='skillCard'><div><img id='check' src={check} alt="check" /> Express Js </div><p>(Fundamentals)</p></motion.div>      
        </div>
        
        <div>
          <img onClick={()=> props.scroll(props.projects)} id='down' src={down} alt="down"/>
        </div>
    </div>
  )
}
export default Skill