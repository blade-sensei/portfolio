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
  <div className='Contact'>
    <span className='caption' {...configAOS}>So let’s talk</span>
    <div className='description'  {...configAOS}>
    Fullstack developer @ BNP Paribas Dev Backoffice applications Fullstack JS (Angular + NodeJS Framework)
    </div>
    <a className='go-to'  {...configAOS}>
      Hello !
    </a>

    <div className='links'  {...configAOS}>

      <div className='link-icons'>
      <a href=''> 
      <img src='/content/github-bot.svg'></img>
      </a>
      <a href=''>
      <img src='/content/linkedin-bot.svg'></img>
      </a>
      <a href=''> 
      <img src='/content/devto-bot.svg'></img>
       </a>
       <a href=''> 
      <img src='/content/mail-bot.svg'></img>
       </a>
      </div>
    </div>
    <div className='copyright'>
      Coyla @ 2020
    </div>
  </div>
)
}
export default Contact
