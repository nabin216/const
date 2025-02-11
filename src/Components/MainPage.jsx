import React from 'react'
import '../Styles/MainPage.css'
import Statisticsbar from './Statisticsbar'
import WhatWeDo from './WhatWeDo'
import LandmarksMainPage from './LandmarksMainPage'
import OurClients from './OurClients'
export default function MainPage() {
  const redirectToAboutPage = () => {
    window.location.href = '/about';
  };

  return (
    <>
      <div className="main-container">
        <div className="main-container-content">
          <h1>UTTARA CONSTRUCTION</h1>
          <h2>From Ideation to Realization </h2>
          <p>As Bangladeshi fastest-growing contract-based construction company with 20 years of industry expertise, we excel in delivering cutting-edge construction services. Our commitment to value, driven by advanced technology and a discerning vision, sets us apart in the sector.</p>
          <button className='read-more-button' onClick={redirectToAboutPage}>Read More</button>
        </div>
      </div>
      <Statisticsbar/>
      <WhatWeDo/>
      <LandmarksMainPage/>
      <OurClients/>
    </>
  );
}
