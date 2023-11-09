import { useState } from "react"
import './burger.css'

const Burger = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
     <div className="burger-menu-container">
      <button onClick={toggle} className={`burger-icon ${isOpen ? 'open' : ''}`}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <div id="nav-list">
          <div>
            <button onClick={()=> props.scroll(props.home)}>Home</button>
          </div>
          <div>
            <button onClick={()=> props.scroll(props.skills)}>Skills</button>
          </div>
          <div>
            <button onClick={()=> props.scroll(props.projects)}>Projects</button>
          </div>
          <div>
            <button onClick={()=> props.scroll(props.contact)}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Burger