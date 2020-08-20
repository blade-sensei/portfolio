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
        Fullstack developer @ BNP Paribas
        </span>
        <span className='date-from'> Lead Tech & Manager </span>
        <div className='message'>
        " I had the pleasure of working with Juan Carlos, I really appreciated his ability to learn and handle new technical concepts. He is perfectly autonomous... I had the opportunity to challenge him on chatbots, and he impressed me every time! Lots of professionalism, seriousness and a very pleasant personality. Thank you Juan Carlos for the excellent work within the LAB! "
        </div>

    </div>

    <div className='testimonial' {...configAOS}>

    <div className='circle'>
      </div>
        <img className='avatar' src='/content/person.png' alt='' />
        <span className='person-information'>
        Fullstack developer @ BNP Paribas
        </span>
        <span className='date-from'> Teammate - Agile coach </span>
        <div className='message'>
        Juan Carlos has been a very active member of the team. Always a force of proposals, he was able to bring his technological knowledge within the team acquired mainly during technological watch and the pleasure he has in exercising his young profession of fullstack developer.
Beyond the technological aspect, he is a full member of an Agile team in which he does not hesitate to challenge himself and his team members in order to improve and make his working environment conducive to creativity and performance.

Thank you Juan and I hope our paths will cross again sooner or later.
        </div>
    </div>

    <div className='testimonial' {...configAOS}>
    <div className='circle'>
      </div>
        <img className='avatar' src='/content/person.png' alt='' />
        <span className='person-information'>
        Fullstack developer @ BNP Paribas
        </span>
        <span className='date-from'> Teammate - Solution architect </span>
        <div className='message'>
        I worked with Juan as part of the development of a "chatbot" for instant messaging. Me as a solution architect and he as a developer.
Starting from a rather general knowledge of instant messaging, he first set out to understand the customer's needs by not hesitating to ask and re-ask questions! He immediately invested his time to gain expertise in this type of development.
Result he very quickly appropriated the subject and carried out his project.
It is with pleasure that I would work again with Juan if our paths cross again! Beyond the technological aspect, he is a full member of an Agile team in which he does not hesitate to challenge himself and challenge his team members in order to improve and make their working environment conducive to creativity and performance.

Thank you Juan and I hope our paths will cross again sooner or later.
        </div>
    </div>
    </div>
  </div>
)
  }
 
export default Testimonials
