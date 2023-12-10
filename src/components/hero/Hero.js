import React from 'react';
import './assets/hero.css'
import video from './assets/video/childhood-132049.mp4'
import logo from "./assets/logo/My Easy Therapy Center_Logo.png"
export default function Hero() {
    return (
      <div className="heroDiv">

        <img src={logo} alt=""  className="img-hero" />
        <video className="video-hero"  src={video} autoPlay muted loop></video> 
        {/* <button className='btnOne btn btn-outline-info btn-lg'>Book now</button>
        <button className='btnTwo btn btn-outline-info btn-lg'>Learn more</button> */}

      </div>
    );
  }