import './App.css'

const Navbar = (props) => {
  
  return (
    <nav>
        <div>
        <p>Sepehr Mobayen</p>
        </div>
        <div id='rightNav'>
        <p onClick={()=> props.scroll(props.home)}>Home</p>
        <p onClick={()=> props.scroll(props.skills)}>Skills</p>
        <p onClick={()=> props.scroll(props.projects)}>Projects</p>
        <p onClick={()=> props.scroll(props.contact)}>Contact</p>
        </div>
    </nav>
  )
}
export default Navbar