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
        <h4>Angular app to manage simple projects, inspired by
        Trello edition modals. </h4>
        <p>Authentication JWT, Search, Notifications, Crud</p>
        <p>Designed with Mobile First approach.</p>
      </div>
      <div className='links'>
      <div className='link-icons'>
        <a href='https://roadtoninja-f5ad8.firebaseapp.com' target='_blank' >
        <img alt='github link'className='btn' src='/content/link-pink.svg'/>
        </a>
        <a  href='https://github.com/blade-sensei/rtn-front' target='_blank'>
        <img alt='demo link' className='btn' src='/content/github.svg'/>
        </a>
        </div>
      </div>
      </div>
      <div className='right'>
      <div className='medias'>
        <img src='/content/rtn-gif.gif' alt='gif'/>
      </div>
      <div className='tags' {...configAOS}>
        <span>#angular</span>
        <span>#nodejs</span>
        <span>#mongo</span>
        <span>#cloud</span>
        <span>#heroku</span>
        <span>#mobile</span>
      </div>
      </div>
    </div>

    <div className='project'>
      <div className='right'> 
      <div className='project-description' {...configAOS}>
      <h4>React SPA that shows issues & comments of all
        github user repositories. </h4>
        
        <p>Issues are filtered by date (calendar).</p>
        <p>Made for my personal use.</p>
        <p>GraphQL API, Gatsby/React for the frontend & hosted on Netlify Cloud </p>
      </div>
      
      <div className='links'>
      <div className='link-icons'>
        <a alt='github link' href='https://github-review.netlify.app' target='_blank'>
        <img className='btn' src='/content/link-pink.svg'/>
        </a>
        <a alt='demo link' href='https://github.com/blade-sensei/rtn-review' target='_blank' >
        <img taget='_blank' className='btn' src='/content/github.svg'/>
        </a>
      </div>
      </div>
      </div>
      <div className="left">
        <div className='medias'>
          <img src='/content/github-review.gif' alt='gif'/>
        </div>
        <div className='tags'>
          <span>#react</span>
          <span>#gatsby</span>
          <span>#graphql</span>
          <span>#apollo</span>
          <span>#netlify</span>
        </div>
      </div>
    </div>

    <div className='project'>
    <div className="left">
      <div className='project-description'  {...configAOS}>
      <h4>Node.js API: backend for project management app. </h4>
      <p>Teamwork with a friend to teach him how APIs works.</p>
        <p>Documented/swagger for routes information</p>
        <p>Covered by unit tests using AVA.</p>
        <p>Stack: Express, Heroku cloud & Atlas MongoDB to persist data.</p>
      </div>
      <div className='links'>
        <div className='link-icons'>
        <a href='https://road-to-ninja-app.herokuapp.com/explorer' target='_blank' >
        <img alt='github link'className='btn' src='/content/link-pink.svg'/>
        </a>
        <a href='https://github.com/blade-sensei/rtn-api' target='_blank' >
        <img alt='demo link'className='btn' src='/content/github.svg'/>
        </a>
        </div> 
      </div>
      </div>
      <div className='right'>
      <div className='medias'>
        <img src='content/rtn-api.gif' alt='gif'/>
      </div>
      <div className='tags' {...configAOS}>
        <span>#nodejs</span>
        <span>#mongo</span>
        <span>#heroku</span>
        <span>#swagger</span>
        <span>#testing</span>
        <span>#security</span>
      </div>
      </div>
    </div>
  </div>
 )
}
export default ProjectsMain
