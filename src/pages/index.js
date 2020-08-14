import React, { useEffect } from "react"
import './index.css';
import LandingPage from './landing-page';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IndexPage = () => {

  useEffect(() => {
    AOS.init({ mirror: true });
    AOS.refresh();
  });

  return (
  <div>
    <LandingPage />
  </div>
  )
}

export default IndexPage
