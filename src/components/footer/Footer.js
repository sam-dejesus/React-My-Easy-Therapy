// import React from 'react';
// import './footer.css'
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// export default function Footer(){

//     return (
//         // <div className='footerDiv bg-info'>

//         // </div>
//         <footer className="bg-dark text-light p-3 text-center">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6">
//               <p>&copy; 2023 Your Website</p>
//             </div>
//             <div className="col-lg-6">
//               <div className="social-icons">
//                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                   <FaFacebook />
//                 </a>
//                 <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                   <FaTwitter />
//                 </a>
//                 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                   <FaInstagram />
//                 </a>
//                 <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//                   <FaLinkedin />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     );
//   };
import React from 'react';
import './footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='icons'>
                <FaFacebook />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='icons'>
                <FaTwitter />
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
      </div>
    </footer>
  );
};

export default Footer;

    
