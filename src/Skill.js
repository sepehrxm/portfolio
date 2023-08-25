import './App.css'
import down from './down.gif'
import check from './check.gif'

const Skill = () => {
  return (
    <div id="page2">
      <div id='skills'>
        <div>
        <h1 id='sHead'>My Skills</h1>
        </div>

        <div id='ex'>
          <div>
          <div><img id='check' src={check} alt="check" /> HTML</div>
          <div><img id='check' src={check} alt="check" /> CSS</div>
          <div><img id='check' src={check} alt="check" /> JavaScript</div>

          </div>
          <div>
          <div><img id='check' src={check} alt="check" /> React JS</div>
          <div><img id='check' src={check} alt="check" /> Basic Bootstrap</div>
          <div><img id='check' src={check} alt="check" /> Basic Git & Github</div>      

          </div>
        </div>
        <div>
          <img id='down' src={down} alt="down"/>
        </div>

      </div>
        
    </div>
  )
}
export default Skill