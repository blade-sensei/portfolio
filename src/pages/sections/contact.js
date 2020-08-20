import React from "react"
import './contact.css'

const Contact = () => {
  const configAOS = {
    'data-aos': "fade-zoom-in",
    'data-aos-offset':"0",
    'data-aos-delay':"300",
    'data-aos-duration':"300",
    'data-aos-mirror':"true",
    'data-aos-easing':"ease-in-sine"

  }
return (
  <div className='Contact' id='contact'>
    <span className='caption'>So let’s talk</span>
    <div className='description'>
    Work together, Try new things, Take risks, Have fun, Help, Feedback, Questions ? ! <br/>
    </div>
    <a className='go-to' href='https://www.linkedin.com/in/juan-carlos-coyla' {...configAOS}>
      Hello ! 👋
    </a>

    <div className='links'>

      <div className='link-icons'>
      <a href='https://github.com/blade-sensei' target='_blank'> 
      <img src='/content/github-bot.svg'></img>
      </a>
      <a href='https://www.linkedin.com/in/juan-carlos-coyla' target='_blank'> 
      <img src='/content/linkedin-bot.svg'></img>
      </a>
      <a href='https://dev.to/bladesensei' target='_blank'> 
      <img src='/content/devto-bot.svg'></img>
       </a>
       <a href='mailto:jcarlos.coyla@gmail.com' target='_blank'> 
      <img src='/content/mail-bot.svg'></img>
       </a>
      </div>
    </div>
    <div className='copyright'>
      Coyla © 2020
    </div>
  </div>
)
}
export default Contact
