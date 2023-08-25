import './App.css';
import Navbar from './Navbar.js'
import Profile from './Profile';
import Projects from './Projects';
import Skill from './Skill';
import Contact from './Contact';
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
     <Profile/>
     </div>

     <div ref={skills}>
     <Skill/>
     </div>

     <div ref={projects}>
     <Projects/>
     </div>
     <div ref={contact}>
      <Contact/>
     </div>
    </div>
  );
}

export default App;
