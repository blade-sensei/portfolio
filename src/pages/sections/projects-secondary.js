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
    <h3 className="section-title"> Interesting works </h3>
    <div className="projects">
      <div className="project" {...configAOS}>
        <div className="project-card-body">
          <span className='project-description'>
          Reduced internal Digital Lab (BNP Paribas) deployments time from 10 to 2min by creating JavaScript CLI
          </span>
          <div className="tags">
            <span>#kubernetes</span>
            <span>#oclif</span>
            <span>#nodejs</span>
            
          </div>

        </div>
        <div className="links">
          <span className='empty'>---</span>
        </div>
        
      </div>


      <div className="project" {...configAOS}>
        <div className="project-card-body">
          <span className='project-description'>
            Package extension for <a href='https://github.com/janl/mustache.js/'>MustacheJS </a>
            which allows to create layout templates
          </span>
          <div className="tags">
            <span>#javascript</span>
            <span>#mustache</span>
            <span>#npm</span>
          </div>

        </div>
        <div className="links">
          <a href='https://www.npmjs.com/package/mustache-layout-s' target='_blank'>
          <img className='btn' src='/content/link-dark.svg'/>
          </a>
          <img className='btn' src='/content/github-dark.svg'/>
        </div>
        
      </div>

      <div className="project" {...configAOS}>
        <div className="project-card-body">
          <span className='project-description'>
          Integrate web SSO authentification into angular apps (internal) for BNP authentication security policies
          </span>
          <div className="tags">
            <span>#angular</span>
            <span>#nodejs</span>
            <span>#sso</span>
            <span>#security</span>
          </div>

        </div>
        <div className="links">
          <span className='empty'>---</span>
        </div>
        
      </div>

      


      <div className="project" {...configAOS}>
        <div className="project-card-body">
          <span className='project-description'>
          "Avoid messy Git history and use linear history" post in order to 
          share my way to improve code maintenance
          </span>
          <div className="tags">
            <span>#git</span>
            <span>#clean</span>
            <span>#maintenance</span>
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
            Bug tracker and consitnuos learning path to collect useful 
            links.
          </span>
          <div className="tags">
            <span>#bug</span>
            <span>#tracker</span>
            <span>#management</span>
            <span>#road</span>
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
            "A short and simple unit testing introduction" post
          </span>
          <div className="tags">
            <span>#unit-testing</span>
            <span>#javascript</span>
            <span>#ava</span>
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
