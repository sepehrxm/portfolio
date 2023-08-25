import './App.css'
import me from './me.jpg'
import down from './down.gif'
import cv from './cv.pdf'
import { Fade } from 'react-reveal';

const Profile = () => {
  return (
    <div id='page'>
      <Fade bottom>

    <div id='profile'>
      <div id='pro'>
        <div>
          <img id='me' src={me} alt="me" />
          <p id='myName'>Sepehr Mobayen</p>
          <p id='front'>Frontend Developer</p>
        </div>

      </div>

      <div id='btns'>

        <a href={cv} download='cv'>Download CV</a>
      <a target='_blank' href='https://github.com/sepehrxm/portfolio/'>Github for this website</a>

      </div>
    </div>

    <div>
      <img id='down' src={down} alt="down"/>
    </div>
      </Fade>
    </div>
  )
}
export default Profile