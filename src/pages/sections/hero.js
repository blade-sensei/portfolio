import React, { useState } from 'react'
import BurgerMenuSvg from '../../components/burger-menu-icon';
import CloseMenuSvg from '../../components/close-menu-icon';
import './hero.css';


const Hero = () => {
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
    <div className='Hero'>
       <div className='modal' style={ getModalDisplay() }> 
        <div className='modal-body'>
          <a href=''> About </a>
          <hr style={{border: "none"}}/>
              <a href=''> Work </a>
              
              <a href=''> References </a>
              <a href=''> Contact </a>
              <span className='menu-close' onClick={handleClose}>
                <CloseMenuSvg/>
              </span>
        </div>
      </div> 
      <h2 className='hero-title'>Coyla</h2>
      <p className='hero-subtitle'> Creating web things with love </p>
      <p className='hero-details'>Fullstack developer @ BNP Paribas Javascript developer (Angular, NodeJS) . Message me</p>
      <button className='action action-dark explore'>Explore</button>
      <span className='action menu-icon' onClick={handleShow}>
        <img src='/content/burger.svg'/>
      </span>
    </div>
  );
}

export default Hero