import React from "react"
import './landing-page.css'
import ProjectsMain from './sections/projects-main';
import ProjectsSecondary from './sections/projects-secondary';
import Testimonials from './sections/testimonials';
import Contact from './sections/contact';
import Hero from './sections/hero';

const LandingPage = () => (
  <div className='LandingPage'>
    <section className='hero-section'>
      <Hero/>
    </section>
    <section>
      <ProjectsMain/>
    </section>
    <section>
      <ProjectsSecondary/>
    </section>
    <section>
      <Testimonials/>
    </section>
    <section>
      <Contact/>
    </section>
  </div>
)
 
export default LandingPage
