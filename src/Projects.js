import weather from './Weather.png'
import weather2 from './Weather2.png'
import movie from './Movie.png'
import movie2 from './Movie2.png'
import crypto from './Crypto.png'
import crypto2 from './Crypto2.png'
import down from './down.gif'

const Projects = () => {
  return (
    <div id="page3">
        <div>
        <h1 id='sHead'>Projects</h1>
        </div>

        <div id="projects">
            <div id="project">
                <div id='img'>
                    <img id='screenw' src={movie} alt="movie" />
                    <img id='screen' src={movie2} alt="movie" />
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
                    <img id='screenw' src={weather} alt="weather" />
                    <img id='screen' src={weather2} alt="weather" />
                </div>
                <div id='apps'>
                Weather App
                <div id='link'>
                    <a target='_blank' href="https://sepehrxm.github.io/weatherapp/">Live</a>
                    <a target='_blank' href="https://github.com/sepehrxm/weatherapp/">Github</a>
                </div>
                </div>
            </div>
            <div id="project">
                <div id='img'>
                    <img id='screenw' src={crypto} alt="crypto" />
                    <img id='screen' src={crypto2} alt="crypto" />
                </div>
                <div id='apps'>
                Crypto App
                <div id='link'>
                    <a target='_blank' href="https://sepehrxm.github.io/cryptoapp/">Live</a>
                    <a target='_blank' href="https://github.com/sepehrxm/cryptoapp/">Github</a>
                </div>
                </div>
            </div>
        
        </div>
        <div id='projectDown'>
          <img id='down' src={down} alt="down"/>
        </div>
    </div>
  )
}
export default Projects