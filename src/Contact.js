import down from './down.gif'
import mail from './system-outline-59-email.png'
import call from './system-outline-58-call-phone.png'
import chat from './system-outline-47-chat.png'

const Contact = () => {
  return (
    <div id='page4'>
        <div id="contact">
            <div>
            <h1 id='cinfo'>Contact Info</h1>
            </div>
            <div id='cback'>
                <p><img id='cIcon' src={mail} alt="mail" /> Mobayenlsepehr@gmail.com</p>
                <p><img id='cIcon' src={call} alt="call" /> +98-923-330-9793</p>
                <p><img id='cIcon' src={chat} alt="chat" /> Whatsapp & Telegram: +98-901-164-9768</p>
            </div>
            <div>
             <img className='cimg' id='down' src={down} alt="down"/>
            </div>

        </div>
        
    </div>
  )
}
export default Contact