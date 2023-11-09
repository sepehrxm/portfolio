import './App.css';
import Navbar from './components/Navbar.js'
import Profile from './components/Profile.js';
import Projects from './components/Projects.js';
import Skill from './components/Skill.js';
import Contact from './components/Contact.js';
import { useRef } from 'react';


function App() {
  let home = useRef(null)
  let skills = useRef(null)
  let projects = useRef(null)
  let contact = useRef(null)

  let scroll = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div className="App">
     <Navbar scroll={scroll} skills={skills} home={home} contact={contact} projects={projects}/>
     <div ref={home}>
     <Profile scroll={scroll} skills={skills}/>
     </div>

     <div ref={skills}>
     <Skill scroll={scroll} projects={projects}/>
     </div>

     <div ref={projects}>
     <Projects scroll={scroll} contact={contact}/>
     </div>
     <div ref={contact}>
      <Contact scroll={scroll} home={home}/>
     </div>
     <footer>
      <p>Copyright © 2023</p>
     </footer>
    </div>
  );
}

export default App;
