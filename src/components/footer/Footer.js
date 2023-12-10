
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../images/Logo/My Easy Therapy Center_Logo_clean.png"

const Footer = () => {

  let currentPathname = window.location.pathname;;
  console.log(currentPathname)

  // // useEffect to update the currentPathname variable on component mount
  // useEffect(() => {
  //   currentPathname = window.location.pathname;
  // }, []);

  
  return (
    <footer className="bg-dark text-light p-4">
      <div className="container">
        <div className="row ">

          <div className='column col-md-4'>

          <div className=" d-flex flex-row  imgDiv">
            <img src={logo} alt='' className='footerImg'/>
            <p className='mt-5 ps-5 footerText'>6973 University Blvd, Winter Park, FL 32792.</p>
          </div> 
          
           <p> © My Easy Therapy LLC</p>
                    
          </div>


          <div className="col-md-4 d-flex flex-column mt-5  align-items-center justify-content-around ">
          {currentPathname === '/' ? (
            <a href='/About' className='webLinks'> <h3> About us</h3></a>
          ) : (
            <a href='#story' className='webLinks'> <h3> Our story</h3></a>
          )}
            {currentPathname === '/' ? (
              <a href="#services" className='webLinks'> <h3>Services</h3></a>
            ) : (
              <a href='/#services' className='webLinks'> <h3>Home</h3></a>
            )}

          </div>

          <div className="col-md-4">
            <h3 className=' d-flex justify-content-center'>Connect With Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='icons'>
                <FaFacebook />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='icons'>
                <FaXTwitter  />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='icons'>
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='icons'>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className=' col-12 d-flex justify-content-end'>
 

          <div className='creditDiv'>
            <p className='creditText'>Created by <a href='https://sam-dejesus.github.io/My-React-Portfolio/' className='creditLink'>Samuel Dejesus</a></p>
            <p className='creditText'>images provided by <a href='https://www.freepik.com/' className='creditLink'>Freepik</a></p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

    
