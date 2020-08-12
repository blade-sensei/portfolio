import React from "react"
import './projects-main.css'

const ProjectsMain = () => (
  <div className='ProjectsMain'>
    <h3 className='subtitle'>
      Always building
    </h3>
    
    <div className='project'>
      <div className='project-description'>
        Fullstack developer @ BNP Paribas Dev Backoffice applications Fullstack JS (Angular + NodeJS Framework)
      </div>
      <div className='links'>
      <div className='link-icons'>
        <img href='https://github.com/blade-sensei/rtn-front' className='btn' src='/content/link-pink.svg'/>
        <img href='https://roadtoninja-f5ad8.firebaseapp.com' taget='_blank' className='btn' src='/content/github.svg'/>
        </div>
      </div>
      <div className='medias'>
        <img src='/content/rtn.gif' alt='gif'/>
      </div>
      <div className='tags'>
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
 
export default ProjectsMain
