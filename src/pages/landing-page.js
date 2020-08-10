import React from "react"
import './landing-page.css'
import BurgerMenuSvg from '../components/burger-menu-icon';
import ProjectsMain from './sections/projects-main';
import ProjectsSecondary from './sections/projects-secondary';
import Testimonials from './sections/testimonials';
import Contact from './sections/contact';

const LandingPage = () => (
  <div className='LandingPage'>
    <section className='hero-section'>
      <div className='hero-title'> Coyla  </div>
      <div className='hero-subtitle'> Creating web things with love </div>
      <div className='hero-details'>Fullstack developer @ BNP Paribas Javascript developer (Angular, NodeJS) . Message me</div>
      <button> Explore </button>
      <BurgerMenuSvg/>
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
