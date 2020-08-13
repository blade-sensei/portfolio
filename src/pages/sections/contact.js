import React from "react"
import './contact.css'

const Contact = () => (
  <div className='Contact'>
    <span className='caption'>So let’s talk</span>
    <div className='description'>
    Fullstack developer @ BNP Paribas Dev Backoffice applications Fullstack JS (Angular + NodeJS Framework)
    </div>
    <a className='go-to'>
      Hello !
    </a>

    <div className='links'>

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
 
export default Contact
