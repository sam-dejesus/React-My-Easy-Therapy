import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import {BiSolidMessageDetail} from 'react-icons/bi'

import './nav.css'


export default function Navbar({ currentPage, handlePageChange }) {
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu((prev) => !prev);
    };
  


    return (
        <section className=" sticky-top">
    <nav className='nav nav-tabs bg-dark sticky-top'>

      <div className='col-12 navDiv d-md-none'>
        <button className='nav-link sandwichBox' onClick={toggleMenu}>
          
          <FontAwesomeIcon
                  icon={faNavicon}

                />
        </button>
      </div>


      <div className={`col-12 navDiv ${showMenu ? 'd-flex flex-column ' : 'd-none'} d-md-flex justify-content-end pe-5`}>

         <a href="https://www.facebook.com" id="nav-link">
          <FaFacebook ></FaFacebook>
         </a>
          


        <a href="https://www.facebook.com"
       
          
          id='nav-link'
        >
          <FaInstagram></FaInstagram>
        </a>
        <a href="https://www.facebook.com"
          to="/"
      
          id='nav-link'
        >
          <FaXTwitter></FaXTwitter>
        </a>
        <a href="https://www.facebook.com"
          to="/"

          id='nav-link'
        >
          <BiSolidMessageDetail></BiSolidMessageDetail>
        </a>
      </div>
    </nav>
      </section>
    );
  }

