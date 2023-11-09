import './projects.css'
import down from '../assets/down.gif'
import weatherImg from '../assets/w.png'
import movieImg from '../assets/m.png'

const Projects = (props) => {
  return (
    <div id="projectPage">
        <h1 id='sHead'>Instance Projects</h1>

        <div id="projects">

            <div id="project">
                <div id='img'>
                    <img id='screen' src={movieImg} alt="movie" />
                </div>
                <div id='apps'>
                    Movie App
                    <div id='link'>
                    <a target='_blank' href="https://sepehrxm.github.io/movieapp/">Live</a>
                    <a target='_blank' href="https://github.com/sepehrxm/movieapp/">Github</a>
                    </div>
                </div>
            </div>
            <div id="project">
                <div id='img'>
                    <img id='screen' src={weatherImg} alt="weather" />
                </div>
                <div id='apps'>
                Weather App
                <div id='link'>
                    <a target='_blank' href="https://sepehrxm.github.io/weatherapp/">Live</a>
                    <a target='_blank' href="https://github.com/sepehrxm/weatherapp/">Github</a>
                </div>
                </div>
            </div>      
        </div>

        <div id='projectDown'>
          <img onClick={()=> props.scroll(props.contact)} id='down' src={down} alt="down"/>
        </div>
    </div>
  )
}
export default Projects