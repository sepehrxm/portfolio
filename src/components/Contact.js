import down from '../assets/down.gif'
import mail from '../assets/system-outline-59-email.png'
import call from '../assets/system-outline-58-call-phone.png'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'


const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_51845xm', 'template_gz70n2n', form.current, 'HnJCtnbSnZtyVK90U')
    e.target.reset()
  };

  return (
    <div id='contactPage'>
      <h1 id='contactHeader'>Contact Info</h1>

      <div id='contactContainer'>
        <div id='formContainer'>
          <form ref={form} onSubmit={sendEmail}>
            <h3 id='formHeader'>Write me a message.</h3>
            <label>Name</label>
            <input type="text" name="from_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input id='send' type="submit" value="Send" />
          </form>
        </div>

        <div id='infoContainer'>
          <h3 id='formHeader'>Or click one of the options below.</h3>
              <div id='contact'>
                  <a href="mailto:mobayenlsepehr@gmail.com?subject=email&body=hello" target='_blank'>
                    <p><img id='cIcon' src={mail} alt="mail" /> Mobayenlsepehr@gmail.com</p>
                  </a>
                  <a href="tel:+989233309793" target='_blank'>
                    <p><img id='cIcon' src={call} alt="call" /> +98-923-330-9793</p>
                  </a>
              </div>
        </div>
      </div>

        <div>
             <img onClick={()=> props.scroll(props.home)} className='contactImg' id='down' src={down} alt="down"/>
        </div>
        
    </div>
  )
}
export default Contact