import './profile.css'
import me from '../assets/me.jpg'
import down from '../assets/down.gif'
import cv from '../assets/cv.pdf'
import { Fade } from 'react-reveal';
import { Typewriter } from 'react-simple-typewriter'

const Profile = (props) => {
  return (
    <div id='profilePage'>
    <Fade bottom>
      
      <div id='profileCard'>

        <div>
          <div>
            <img id='me' src={me} alt="me" />
            <p id='myName'>Sepehr Mobayen</p>
            <p id='front'>
            <Typewriter
            words={['Frontend Developer', 'Web Developer', 'Frontend Developer']}
            loop={1}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}/>
            </p>
          </div>
        </div>

        <div id='profileBtn'>
          <a href={cv} download='cv'>Download CV</a>
          <a target='_blank' href='https://github.com/sepehrxm/portfolio/'>Github for this website</a>
        </div>
      </div>

      <div>
        <img onClick={()=> props.scroll(props.skills)} id='down' src={down} alt="down"/>
      </div>

      </Fade>
    </div>
  )
}
export default Profile