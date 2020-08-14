import React from "react"
import './projects-main.css'

const ProjectsMain = () => {
  const configAOS = {
    'data-aos': "fade-zoom-in",
    'data-aos-offset':"0",
    'data-aos-delay':"300",
    'data-aos-duration':"300",
    'data-aos-mirror':"true",
    'data-aos-easing':"ease-in-sine"

  }
return (
  <div className='ProjectsMain'>
    <h3 className='subtitle' {...configAOS}>
      Always building
    </h3>
    
    <div className='project'>
      <div className='project-description'>
        Fullstack developer @ BNP Paribas Dev Backoffice applications Fullstack JS (Angular + NodeJS Framework)
      </div>
      <div className='links' {...configAOS} >
      <div className='link-icons'>
        <img href='https://github.com/blade-sensei/rtn-front' className='btn' src='/content/link-pink.svg'/>
        <img href='https://roadtoninja-f5ad8.firebaseapp.com' taget='_blank' className='btn' src='/content/github.svg'/>
        </div>
      </div>
      <div className='medias'>
        <img src='/content/rtn.gif' alt='gif'/>
      </div>
      <div className='tags' {...configAOS} >
        <span>#tag</span>
        <span>#tag</span>
        <span>#tag</span>
        <span>#tag</span>
        <span>#tag</span>
      </div>
    </div>

    <div className='project'>
      <div className='project-description'>
        Fullstack developer @ BNP Paribas Dev Backoffice applications Fullstack JS (Angular + NodeJS Framework)
      </div>
      <div className='links'>
        <img src='/content/link-pink.svg'/>
        <img src='/content/github.svg'/>
      </div>
      <div className='medias'>
        <img src='/content/review.gif' alt='gif'/>
      </div>
      <div className='tags'>
        <span>#tag</span>
        <span>#tag</span>
        <span>#tag</span>
      </div>
    </div>

    <div className='project'>
      <div className='project-description'>
        Fullstack developer @ BNP Paribas Dev Backoffice applications Fullstack JS (Angular + NodeJS Framework)
      </div>
      <div className='links'>
        <div className='link-icons'>
          <img src='/content/link-pink.svg'/>
          <img src='/content/github.svg'/>
        </div> 
      </div>
      <div className='medias'>
        <img src='content/rtn.gif' alt='gif'/>
      </div>
      <div className='tags'>
        <span>#tag</span>
        <span>#tag</span>
        <span>#tag</span>
      </div>
    </div>
  </div>
 )
}
export default ProjectsMain
