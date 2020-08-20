import React from "react"
import './testimonials.css'

const Testimonials = () => {
  const configAOS = {
    'data-aos': "fade-zoom-in",
    'data-aos-offset':"0",
    'data-aos-delay':"300",
    'data-aos-duration':"200",
    'data-aos-mirror':"true",
    'data-aos-easing':"ease-in-sine"

  }
  return (
  <div className='Testimonials' id='testimonials'>
    <h3 className='section-title'>A few words from</h3>

    <div className='testimonials'>
    <div className='testimonial' {...configAOS}>
      <div className='circle'>
      </div>
        <img className='avatar' src='/content/person.png' alt='' />
        <span className='person-information'>
        Benjamin Marchand @ BNP Paribas Digital Lab
        </span>
        <span className='date-from'>was my Lead Tech & Manager</span>
        <div className='message'>
        <p><span className='quote'>"</span>I had the pleasure of working with Juan Carlos... He is autonomous and knows how to take charge of projects. </p>
        <p>I challenge him on chatbots, and he impressed me every time! Lots of professionalism, seriousness and a very pleasant personality. </p> <p>Thank you Juan Carlos for the excellent work within the LAB!  </p>
        </div>

    </div>

    <div className='testimonial' {...configAOS}>

    <div className='circle'>
      </div>
        <img className='avatar' src='/content/person.png' alt='' />
        <span className='person-information'>
        Thomas Vauzelle @ BNP Paribas Digital Lab
        </span>
        <span className='date-from'> was my teammate - Agile coach  </span>
        <div className='message'>
          
        <p> <span className='quote'>"</span>Juan Carlos has been always a force of proposals ... He is a full member of an Agile team in which he doesn't hesitate to challenge himself and his teammates in order to improve and make his working environment conducive to creativity and performance.</p>

<p>Thank you Juan and I hope our paths will cross again sooner or later.</p>
        </div>
    </div>

    <div className='testimonial' {...configAOS}>
    <div className='circle'>
      </div>
        <img className='avatar' src='/content/person.png' alt='' />
        <span className='person-information'>Erwan Le Goascoz @ BNP Paribas
        </span>
        <span className='date-from'>was my teammate - Architect</span>
        <div className='message'>
        <p><span className='quote'>"</span> I worked with Juan as part of the "chatbot project"...
He took care to understand the customer's needs by not hesitating to ask and re-ask questions! He invested his time to gain expertise.
As a result, he very quickly appropriated and succeed on the project.</p>
<p>It is with pleasure that I will work with Juan again if our paths cross again! </p>


        </div>
    </div>
    </div>
  </div>
)
  }
 
export default Testimonials
