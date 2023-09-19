import React from "react";
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import './home.css'

import kids from '../../images/kids.jpg'

export default function Home() {
    return (
      <div className="">
        <Hero />
        <Navbar />
        <main className="d-flex flex-column">
          <div className="homeDivOne d-flex flex-row">
           <div className="hdo-1">
            <h1 className="ms-5 mt-5 hd-title">Our vision</h1>
            <p class="lead ms-5 mt-5">"At My Easy Therapy, our vision is to be the premier provider of ABA services, recognized for our expertise, innovation, and commitment to improving the lives of individuals with autism and related developmental disabilities. We aim to be a leader in the field of ABA, driving advances in research and practice and setting the highest standards for quality and ethical conduct. We envision a world where every individual has access to effective and evidence-based treatment, and we strive to make this vision a reality through our dedication to excellence and collaboration with other professionals and organizations. Our goal is to be a positive force for change in the lives of our clients, their families, and the community as a whole."</p>
           <button className="ms-5 btn btn-outline-info btn-lg">learn more</button>
           </div>
            
            <div className="hdo-2">
             <img src={kids} alt="img1" className="kids"/> 
            </div>

            
          </div>
          <hr />
          <div className="homeDivOne d-flex flex-row">
            <div className="hdo-1">
              <h1 className="ms-5 mt-5 hd-title">Our services</h1>
              <p className="lead ms-5 mt-5">"At My Easy Therapy, we offer a range of services to support individuals with diverse needs. Our highly trained and experienced team provides ABA therapy services as well as speech, physical, and occupational therapy services. We believe in a holistic approach to care that focuses on each individual's unique needs and strengths. Whether you're seeking support for communication, movement, or other areas, we are here to help. Our team is dedicated to creating a safe and nurturing environment where everyone can thrive. Contact us today to learn more about our services and how we can support you."</p>
              <button className="ms-5 btn btn-outline-info btn-lg">learn more</button>
            </div>
            <div className="hdo-2">
             <img src={kids} alt="img1" className="kids"/> 
            </div>
          </div>
          
        </main>
      </div>
    );
  }