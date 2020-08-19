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
        <p>Web App for to manage simple projects, inspired by
        Trello edition modals. </p>
        <p>This app has authentication, search and crud components.</p>
        <p>This is designed with Mobile First approach.</p>
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
        <span>#angular</span>
        <span>#nodejs</span>
        <span>#mongodb</span>
        <span>#cloud</span>
        <span>#heroku</span>
        <span>#mobile-ux</span>
      </div>
      </div>
    </div>

    <div className='project'>
      <div className='right'> 
      <div className='project-description' {...configAOS}>
      <p>Single page app that retrieves & displayes github issues of whole
        user repositories. The issues are filtered by date (calendar).
        This was made for my personal use.</p>
        <p>I used the GraphQL API of Github and Gatsby/React for the frontend. </p>
        <p>Hosted on Netlify Cloud.</p>
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
          <span>#react</span>
          <span>#gatsby</span>
          <span>#graphql</span>
          <span>#netlify</span>
        </div>
      </div>
    </div>

    <div className='project'>
    <div className="left">
      <div className='project-description'  {...configAOS}>
      <p>Rest API for a project management app. I worked on it with a friend that wanted to
        know how to design/build APIs.</p>
        <p>This API is documented and is covered by unit testing code.</p>
        <p>Hosted on Heroku and uses Atlas MongoDB to persist data.</p>
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
        <span>#nodejs</span>
        <span>#mongodb</span>
        <span>#heroku</span>
        <span>#documented</span>
        <span>#testing</span>
      </div>
      </div>
    </div>
  </div>
 )
}
export default ProjectsMain
