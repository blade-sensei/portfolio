import React from "react"
import './testimonials.css'

const Testimonials = () => {
  const configAOS = {
    'data-aos': "fade-zoom-in",
    'data-aos-offset':"0",
    'data-aos-delay':"300",
    'data-aos-duration':"300",
    'data-aos-mirror':"true",
    'data-aos-easing':"ease-in-sine"

  }
  return (
  <div className='Testimonials'>
    <h3 className='section-title' {...configAOS}>Few words from</h3>


    <div className='testimonial' {...configAOS}>
      <div className='circle'>
      </div>
        <img className='avatar' src='/content/person.png' alt='' />
        <span className='person-information'>
        Fullstack developer @ BNP Paribas
        </span>
        <span className='date-from'> Setp 2019 - Jan 2020 </span>
        <div className='message'>
        Fullstack developer @ BNP ParibasDev Backoffice applications Fullstack JS (Angular + NodeJS Framework)
        </div>

    </div>

    <div className='testimonial'>

    <div className='circle'>
      </div>
        <img className='avatar' src='/content/person.png' alt='' />
        <span className='person-information'>
        Fullstack developer @ BNP Paribas
        </span>
        <span className='date-from'> Setp 2019 - Jan 2020 </span>
        <div className='message'>
        Fullstack developer @ BNP ParibasDev Backoffice applications Fullstack JS (Angular + NodeJS Framework)
        </div>
    </div>

    <div className='testimonial'>
    <div className='circle'>
      </div>
        <img className='avatar' src='/content/person.png' alt='' />
        <span className='person-information'>
        Fullstack developer @ BNP Paribas
        </span>
        <span className='date-from'> Setp 2019 - Jan 2020 </span>
        <div className='message'>
        Fullstack developer @ BNP ParibasDev Backoffice applications Fullstack JS (Angular + NodeJS Framework)
        </div>
    </div>
    
  </div>
)
  }
 
export default Testimonials
