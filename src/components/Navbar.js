import './navbar.css'
import navLogo from '../assets/navLogo1.svg'
import Burger from './Burger'
import homeIcon from '../assets/home1.svg'
import skillIcon from '../assets/skill1.svg'
import projectIcon from '../assets/project1.svg'

const Navbar = (props) => {
  
  return (
    <nav>
        <div id='leftNav'>
          <img id='navLogo' src={navLogo} alt="logo" />
          <p id='navName'>Sepehr Mobayen</p>
        </div>

        <div id='rightNav'>
          <button id='nav-button' onClick={()=> props.scroll(props.home)}><img id='navIcons' src={homeIcon} alt='logo'/> Home</button>
          <button id='nav-button' onClick={()=> props.scroll(props.skills)}><img id='navIcons' src={skillIcon} alt='logo'/> Skills</button>
          <button id='nav-button' onClick={()=> props.scroll(props.projects)}><img id='navIcons' src={projectIcon} alt='logo'/> Projects</button>
          <button id='nav-button2' onClick={()=> props.scroll(props.contact)}>Contact</button>
        </div>
        <Burger scroll={props.scroll} skills={props.skills} home={props.home} contact={props.contact} projects={props.projects}/>
    </nav>
  )
}
export default Navbar