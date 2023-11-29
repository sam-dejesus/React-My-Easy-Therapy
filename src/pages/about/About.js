
import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import hands from "../../images/web images/hands-assembling-jigsaw-puzzle-pieces/46503.jpg"
import red from '../../images/icons/puzzle (1).png'
import yellow from '../../images/icons/plugin.png'
import green from '../../images/icons/puzzle.png'
import blue from '../../images/icons/puzzle (2).png'
import './about.css'

const About = () => {
  return (
    <div className='col-12'>
        <Navbar />
        <div className='ourstoryDiv d-flex justify-content-center mt-5 container bg-white flex-column'>
        <div className='  d-flex justify-content-center '>
        <h1>Our story</h1>
        </div>
        <div >
        <p >
         At My Easy Therapy, we're on a mission to provide exceptional therapy services to children with autism and their families. Our founder, Sonia , understands firsthand the challenges of caring for a child with autism, which is why she started My Easy Therapy with a vision to provide a lifetime of support to families just like hers.
         As a parent of a child with autism, Sonia spent countless hours searching for the right therapy services for her daughter. At one point, she had to travel hours to find the right care, which is why she's passionate about offering a one-stop-shop for families looking for high-quality therapy services.
         At My Easy Therapy, we offer more than just ABA therapy – we also provide physical, occupational, and speech therapy. Our team of experienced therapists work together to provide a holistic approach to therapy, so your child can get all the care they need in one place.
         We know that every child with autism is unique, which is why we tailor our therapy services to meet each child's individual needs. Our team of highly trained and experienced therapists use evidence-based techniques to help children develop social, communication, and life skills, while reducing challenging behaviors.
         But our services are more than just therapy – we offer long-term care to children with autism, giving them the tools they need to lead happy, independent lives. We're dedicated to supporting families every step of the way, from the initial diagnosis to adulthood and beyond.
         At My Easy Therapy, we're more than just therapists – we're a family. We understand the challenges that families face when caring for a child with autism, and we're here to support you every step of the way. We offer a wide range of therapy services, including in-home therapy, school-based therapy, and center-based therapy, so you can choose the option that works best for your family.
         When you choose My Easy Therapy, you can rest assured that your child is receiving the highest quality of care. Our therapists are passionate about what they do, and they work tirelessly to help each child reach their full potential. We invite you to join our family and discover the life-changing benefits of our therapy services.
        </p>
        </div>
        </div>

        <div className=' d-flex justify-content-center mt-5 container bg-white flex-column'>
        <div className='  d-flex justify-content-center '>
        <h1>Our Colors our Promise</h1>
        </div>
        <img src={hands} className='handsImg' alt=''></img>
        <div >
        <p >
        At My Easy Therapy, we are committed to providing high-quality ABA services that prioritize our clients' needs and success. We believe that the key to achieving positive outcomes lies in our values, which we represent with the four-color puzzle pieces in our logo.

<span className="green">Green</span>  represents our dedication to evidence-based practices and continual learning. We strive to stay up-to-date with the latest research and techniques to provide the best possible care for our clients.

<span className="red">Red</span>  represents our passion for what we do. We are deeply committed to making a positive impact in the lives of our clients and their families, and we approach every session with enthusiasm and energy.

<span className="yellow">Yellow</span>  represents our focus on collaboration and teamwork. We believe that effective ABA requires a coordinated effort between our therapists, clients, families, and other healthcare professionals involved in our clients' care.

<span className="blue">Blue</span>  represents our commitment to individualized treatment. We recognize that every client is unique, and we tailor our services to meet their specific needs and goals.

Together, these values form the foundation of how we do ABA at My Easy Therapy. We believe that by staying true to these principles, we can help our clients achieve their full potential and lead fulfilling lives.
        </p>
        </div>
        </div>
<div class="container col-12 mt-5 bg-body bg-gradient d-flex flex-column shadow-lg p-3 mb-5 bg-body rounded">
  <div class="d-flex align-items-center justify-content-center d-flex flex-column">
    <h1 class="mt-10px boxheader" > HOW WE DO ABA</h1>
    <p>Click on the puzzle pieces to learn more about our values.</p>
  </div>
        
 
<div class="row mb-5 mt-5">
  <div class="col-md-6 col-lg-3 d-flex justify-content-center mt-5 border ">
    <img src={yellow} alt="" class="iconsp" data-bs-toggle="modal" data-bs-target="#myModal1"></img>
  </div>
  <div class="col-md-6 col-lg-3 d-flex justify-content-center  mt-5  border ">
    <img src={green} alt="" class="iconsp" data-bs-toggle="modal" data-bs-target="#myModal2"></img>
  </div>
  <div class="col-md-6 col-lg-3 d-flex justify-content-center  mt-5 border ">
    <img src={red} alt="" class="iconsp" data-bs-toggle="modal" data-bs-target="#myModal3"></img>
  </div>
  <div class="col-md-6 col-lg-3 d-flex justify-content-center  mt-5 border ">
    <img src={blue} alt="" class="iconsp" data-bs-toggle="modal" data-bs-target="#myModal4"></img>
  </div>
</div>


<div class="modal fade" id="myModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <img src={yellow} alt="" class=" iconsp"></img>
        <h4 class="modal-title mt-3">TEAMWORK</h4>
        <p class="modal-text">Collaboration and teamwork are essential to effective ABA. We work closely with our clients, their families, and other healthcare professionals involved in their care to ensure that everyone is working together towards the same goals. Our therapists collaborate with each other to share ideas and strategies, and we encourage our clients' families to be active participants in their treatment. By working together as a team, we can provide the most comprehensive and effective care for our clients.</p>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="myModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <img src={green} alt="" class=" iconsp"></img>
        <h4 class="modal-title mt-3">SUCCESS</h4>
        <p class="modal-text">Our dedication to evidence-based practices and continual learning is reflected in everything we do. We believe that by staying up-to-date with the latest research and techniques, we can provide the most effective care for our clients. Our therapists participate in ongoing training and professional development to ensure that they have the knowledge and skills necessary to deliver high-quality ABA services. We also regularly review and update our treatment plans to ensure that they are evidence-based and aligned with best practices.</p>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="myModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <img src={red} alt="" class=" iconsp"></img>
        <h4 class="modal-title mt-3">PASSION</h4>
        <p class="modal-text">Our passion for what we do is at the heart of our work. We are deeply committed to making a positive impact in the lives of our clients and their families, and we approach every session with enthusiasm and energy. Our therapists are dedicated to building strong relationships with our clients and providing them with the support and encouragement they need to succeed. We are passionate about helping our clients achieve their goals and we take pride in celebrating their successes along the way.</p>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="myModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <img src={blue} alt="" className=" iconsp"></img>
        <h4 class="modal-title mt-3">INDIVIDUALIZED TREATMENT</h4>
        <p class="modal-text">Our commitment to individualized treatment means that we recognize that every client is unique. We take the time to understand our clients' strengths, challenges, and goals, and we tailor our services to meet their specific needs. Our therapists work closely with each client and their family to develop treatment plans that are personalized and effective. We also regularly evaluate our clients' progress and adjust their treatment plans as needed to ensure that they are making meaningful progress towards their goals.</p>
      </div>
    </div>
  </div>
</div>
</div>
      
      
      <Footer />
    </div>
  );
};

export default About;
