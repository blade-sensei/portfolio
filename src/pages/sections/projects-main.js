import React from "react"
import './projects-main.css'

const ProjectsMain = () => {
  const configAOS = {
    'data-aos': "fade-zoom-in",
    'data-aos-offset':"0",
    'data-aos-delay':"200",
    'data-aos-duration':"200",
    'data-aos-mirror':"true",
    'data-aos-easing':"ease-in-sine"

  }
return (
  <div className='ProjectsMain' id="main-projects">
    <h3 className='subtitle'>
      Always building
    </h3>
    
    <div className='project'>
      <div className='left'>
      <div className='project-description' {...configAOS}>
        Fullstack developer @ BNP Paribas Dev Backoffice applications Fullstack JS (Angular + NodeJS Framework)
      </div>
      <div className='links'>
      <div className='link-icons'>
        <img href='https://github.com/blade-sensei/rtn-front' className='btn' src='/content/link-pink.svg'/>
        <img href='https://roadtoninja-f5ad8.firebaseapp.com' taget='_blank' className='btn' src='/content/github.svg'/>
        </div>
      </div>
      </div>
      <div className='right'>
      <div className='medias'>
        <img src='/content/rtn-gif.gif' alt='gif'/>
      </div>
      <div className='tags' {...configAOS}>
        <span>#tag</span>
        <span>#tag</span>
        <span>#tag</span>
        <span>#tag</span>
        <span>#tag</span>
      </div>
      </div>
    </div>

    <div className='project'>
      <div className='right'> 
      <div className='project-description' {...configAOS}>
        Fullstack developer @ BNP Paribas Dev Backoffice applications Fullstack JS (Angular + NodeJS Framework)
      </div>
      
      <div className='links'>
      <div className='link-icons'>
        <img href='https://github.com/blade-sensei/rtn-front' className='btn' src='/content/link-pink.svg'/>
        <img href='https://roadtoninja-f5ad8.firebaseapp.com' taget='_blank' className='btn' src='/content/github.svg'/>
      </div>
      </div>
      </div>
      <div className="left">
        <div className='medias'>
          <img src='/content/github-review.gif' alt='gif'/>
        </div>
        <div className='tags' {...configAOS}>
          <span>#tag</span>
          <span>#tag</span>
          <span>#tag</span>
        </div>
      </div>
    </div>

    <div className='project'>
    <div className="left">
      <div className='project-description'  {...configAOS}>
        Fullstack developer @ BNP Paribas Dev Backoffice applications Fullstack JS (Angular + NodeJS Framework)
      </div>
      <div className='links'>
        <div className='link-icons'>
          <img src='/content/link-pink.svg'/>
          <img src='/content/github.svg'/>
        </div> 
      </div>
      </div>
      <div className='right'>
      <div className='medias'>
        <img src='content/rtn-api.gif' alt='gif'/>
      </div>
      <div className='tags' {...configAOS}>
        <span>#tag</span>
        <span>#tag</span>
        <span>#tag</span>
      </div>
      </div>
    </div>
  </div>
 )
}
export default ProjectsMain
