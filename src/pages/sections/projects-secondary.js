import React from "react"
import "./projects-secondary.css"

const ProjectSecondary = () => {
  const configAOS = {
    'data-aos': "fade-zoom-in",
    'data-aos-offset':"0",
    'data-aos-delay':"300",
    'data-aos-duration':"300",
    'data-aos-mirror':"true",
    'data-aos-easing':"ease-in-sine"

  };
  
return (
  <div className="ProjectsSecondary">
    <h3 className="section-title" {...configAOS}> Interesting works </h3>
    <div className="projects">
      <div className="project" {...configAOS}>
        <div className="project-card-body">
          <span className='project-description'>
          Build CLI JS to recude deployment delay
          </span>
          <div className="tags">
            <span>#tag</span>
            <span>#tag</span>
            <span>#angular</span>
            <span>#angular</span>
            
          </div>

        </div>
        <div className="links">
          <img className='btn' src='/content/link-dark.svg'/>
          <img className='btn' src='/content/github-dark.svg'/>
        </div>
        
      </div>

      <div className="project" {...configAOS}>
        <div className="project-card-body">
          <span className='project-description'>
          Integrating web SSO to web app (internal) for BNP authentication policies
          </span>
          <div className="tags">
            <span>#tag</span>
            <span>#tag</span>
            <span>#tag</span>
          </div>

        </div>
        <div className="links">
          <img className='btn' src='/content/link-dark.svg'/>
          <img className='btn' src='/content/github-dark.svg'/>
        </div>
        
      </div>


      <div className="project" {...configAOS}>
        <div className="project-card-body">
          <span className='project-description'>
          Avoid messy Git history post
          </span>
          <div className="tags">
            <span>#tag</span>
            <span>#tag</span>
            <span>#tag</span>
          </div>

        </div>
        <div className="links">
          <img className='btn' src='/content/link-dark.svg'/>
          <img className='btn' src='/content/github-dark.svg'/>
        </div>
        
      </div>

      <div className="project" {...configAOS}>
        <div className="project-card-body">
          <span className='project-description'>
            Unit testing introduction
          </span>
          <div className="tags">
            <span>#tag</span>
            <span>#tag</span>
            <span>#tag</span>
          </div>

        </div>
        <div className="links">
          <img className='btn' src='/content/link-dark.svg'/>
          <img className='btn' src='/content/github-dark.svg'/>
        </div>
        
      </div>


      <div className="project" {...configAOS}>
        <div className="project-card-body">
          <span className='project-description'>
            Package extension for Mustache JS
          </span>
          <div className="tags">
            <span>#tag</span>
            <span>#tag</span>
            <span>#tag</span>
          </div>

        </div>
        <div className="links">
          <img className='btn' src='/content/link-dark.svg'/>
          <img className='btn' src='/content/github-dark.svg'/>
        </div>
        
      </div>

      <div className="project" {...configAOS}>
        <div className="project-card-body">
          <span className='project-description'>
            Bug tracker, learning and futur projects board
          </span>
          <div className="tags">
            <span>#tag</span>
            <span>#tag</span>
            <span>#tag</span>
          </div>

        </div>
        <div className="links">
          <img className='btn' src='/content/link-dark.svg'/>
          <img className='btn' src='/content/github-dark.svg'/>
        </div>
        
      </div>

    </div>
  </div>
)
}
export default ProjectSecondary
