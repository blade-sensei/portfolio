import React, { useState } from 'react'
import BurgerMenuSvg from '../../components/burger-menu-icon';
import CloseMenuSvg from '../../components/close-menu-icon';
import './hero.css';


const Hero = () => {
  const configAOS = {
    'data-aos': "fade-up",
    'data-aos-duration':"1000",
    'data-aos-mirror':"true",

  }

  const configAOSZoom = {
    'data-aos': "fade-zoom-in",
    'data-aos-offset':"0",
    'data-aos-delay':"300",
    'data-aos-duration':"500",
    'data-aos-mirror':"true",
    'data-aos-easing':"ease-in-sine"

  }
  
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false)
  }
  const handleShow = () => {
    console.log('show');
    setShowModal(true);
  }

  const getModalDisplay = () => {
    let displayStyle = {
      opacity: '1',
      transform: 'none',

    }
    if (showModal) {
      return displayStyle;
    }
    displayStyle.opacity = '0';
    displayStyle.transform = 'translate3d(100%, 0px, 0px);'
    return 
  }


  return (
    <div className='Hero' id="about">
       <div className='modal' style={ getModalDisplay() }  onClick={handleClose}> 
        <div className='modal-body'>
          <a href='#about'> About </a>
              <a href='#main-projects'> Work</a>
              <a href='#testimonials'> References </a>
              <a href='#contact'> Contact </a>
              <span className='menu-close' onClick={handleClose}>
                <CloseMenuSvg/>
              </span>
        </div>
      </div> 
      <div className='menu-header'>
          <a href='#about'> About </a>
          <a href='#main-projects'> Work</a>
          <a href='#testimonials'> References </a>
              <a href='#contact'> Contact </a>
          
        </div>
      
      <h2 className='hero-title'>Welcome !</h2>
      <p className='hero-subtitle'>I'm someone who creates things with love</p>
      <span className='hero-details'>
        <p> I'm <b>Jean Coyla</b>, a passionated & confirmed developer, I am focused on the quality, the user experience and my teammates productivity...

        Currently I'm <b>looking for </b>
        a new adventure to create awesome things with awesome people 😁... Now I wish you a good visit !  
        </p>
      </span>
      <a href='https://www.linkedin.com/in/juan-carlos-coyla' target='_blank' className='action action-dark explore'>Work together</a>
      <span className='action menu-icon' onClick={handleShow}>
          <BurgerMenuSvg/>
      </span>
    </div>
  );
}

export default Hero