import React from "react";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import Map from "../../components/map/Map"
import Footer from '../../components/footer/Footer'
import "./home.css";
import { useNavigate } from "react-router-dom";
import kids from "../../images/kids.jpg";

const services = [
  {
    name: "Speech",
    description:
      " Speech therapy helps people improve their ability to communicate effectively, by treating speech and language disorders such as stuttering, articulation problems, and voice disorders. It can improve pronunciation, grammar, vocabulary, communication skills, social communication, coping strategies, confidence, and self-esteem.",
    link: "",
    image: kids,
  },
  {
    name: "Occupational",
    description:
      " Occupational therapy helps people develop, recover, or maintain skills for daily living and working, and is used to treat physical, cognitive, or mental health challenges. It includes exercises, cognitive therapy, and environmental modifications to improve fine motor skills, memory, problem-solving, and support independence. Its goal is to help individuals live life to the fullest.",
    link: "",
    image: kids,
  },
  {
    name: "Physical",
    description:
      "Physical therapy helps people recover from physical injuries or impairments, as well as prevent future injuries. It uses exercises, stretches, manual therapy, and assistive devices to improve mobility, strength, balance, and flexibility. It is often used in rehabilitation to help individuals regain function and independence.",
    link: "",
    image: kids,
  },
  {
    name: "Sensory Intergration",
    description:
      "Sensory Integration therapy enhances sensory processing for individuals on the autism spectrum. Through targeted exercises, it refines responses to stimuli, improving attention and promoting ease in navigating the environment. This empowers individuals with increased confidence and comfort in their surroundings",
    link: "",
    image: kids,
  },
  {
    name: "Social skills",
    description:
      "Social Skills therapy focuses on refining interpersonal communication and relationship-building for individuals on the autism spectrum. Through structured sessions, participants practice essential social skills, gaining confidence in navigating social interactions and fostering meaningful connections.",
    link: "",
    image: kids,
  },
  {
    name: "Early Intervention",
    description:
      "Early Intervention provides timely support for young learners on the autism spectrum. Emphasizing play-based therapies and skill-building activities, it lays a strong developmental foundation. This program, working closely with families, ensures each child receives the guidance needed for positive outcomes, fostering independence from an early age.",
    link: "",
    image: kids,
  },
];

export default function Home() {
  const navigate = useNavigate();

  const about = ()=>{
    navigate("/About")
  }
  return (
    <div className=" ">
      <Hero />
      <Navbar />
      <main className=" mb-5 container-fluid d-flex justify-content-center flex-column">

        <div className="mt-4 mb-2 row homeDivOne" id="home">

          <div className=" shadow bg-white col-md-6 divItem col-12 mb-5 ">
            <h1 className="ms-5 hd-title">Our vision</h1>
            <p className=" p-3">
              "At My Easy Therapy, our vision is to be the premier provider of
              ABA services, recognized for our expertise, innovation, and
              commitment to improving the lives of individuals with autism and
              related developmental disabilities. We aim to be a leader in the
              field of ABA, driving advances in research and practice and
              setting the highest standards for quality and ethical conduct. We
              envision a world where every individual has access to effective
              and evidence-based treatment, and we strive to make this vision a
              reality through our dedication to excellence and collaboration
              with other professionals and organizations. Our goal is to be a
              positive force for change in the lives of our clients, their
              families, and the community as a whole."
            </p>
          </div>

          <div className=" col-md-6 col-12 d-flex justify-content-center align-items-center mb-5">
            <img src={kids} alt="kids " className="kids" />
          </div>
        </div>

        <hr />

        <div className="homeDivtwo">
          <div className="container shadow serviceDiv bg-white">
            <h1 className="ms-5 mt-5 hd-title d-flex justify-content-center">
              Our services
            </h1>
            <p className=" ms-5 mt-5 me-5 flow-text">
              "At My Easy Therapy, we offer a range of services to support
              individuals with diverse needs. Our highly trained and experienced
              team provides ABA therapy services as well as speech, physical,
              and occupational therapy services. We believe in a holistic
              approach to care that focuses on each individual's unique needs
              and strengths. Whether you're seeking support for communication,
              movement, or other areas, we are here to help. Our team is
              dedicated to creating a safe and nurturing environment where
              everyone can thrive. Contact us today to learn more about our
              services and how we can support you."
            </p>
          </div>
        </div>

        <div className="services">
          {services.map((service, index) => (
            <div className="service-item shadow-lg" key={index}>
              <img
                src={service.image}
                className=" service-img shadow"
                alt={service.alt}
              ></img>
              <div className="service-text d-flex align-items-center justify-content-center flex-column">
                <h4 className="service-title ms-2">{service.name}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <hr />

        <div className=" col-12 row" >
          <div className=" shadow bg-white col-md-7 col-12 ">
            <h1 className="ms-5 mt-3 hd-title">Our Location</h1>
            <p className="p-5">
              "At My Easy Therapy, we are committed to providing high-quality
              ABA therapy services to help individuals reach their full
              potential. We understand that reaching out for help can be a
              difficult decision, but we want to assure you that our team is
              knowledgeable, experienced, and compassionate. We encourage you to
              get in touch with us today to schedule a consultation or to learn
              more about our services. You can reach us by phone, fax, email, or
              by visiting our location at 6973 University Blvd, Winter Park, FL 32792. We'd love to hear from you and
              discuss how we can help."
            </p>
          </div>

          <div className="d-flex justify-content-center col-md-5 col-12"  id="contact">
            
            <div className="mapcontainer mt-5 shadow">
              <Map /> 
            </div>
            
          </div>
          
        </div>

      

        <div className="row contactDiv shadow bg-white mb-5 mt-5" >
        <div className="d-flex flex-column justify-content-center align-items-end  col-md-6 col-12">
            <div className="contact-title">
              <h3>Contact Us Now</h3>
            </div>

            <p>
              Fill out the form below to get in touch with us. We are here to
              answer any questions you may have and provide the best ABA therapy
              services.
            </p>
          </div>

          <form
            
            action="https://formsubmit.co/samuel1de2jesus3@gmail.com"
            method="POST"
            className="d-flex justify-content-center align-items-center flex-column col-md-6 col-12 "
          >
            <div className="d-flex flex-row first-row-contact ">
              <div className="">
                <label for="name" className="form-label font">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control first-row-contact-input"
                  id="name"
                  name="name"
                  placeholder=""
                  required
                ></input>
              </div>

              <div className="">
                <label for="phone" className=" form-label font">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control first-row-contact-input"
                  id="phone"
                  name="phone"
                  placeholder=""
                  required
                ></input>
              </div>
            </div>

            <label for="email" className="form-label font">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder=""
              required
            ></input>
            <label for="comment" className="form-label font">
              Comment
            </label>
            <textarea
              className="form-control"
              id="comment"
              name="comment"
              rows="3"
              placeholder=""
              required
            ></textarea>
            <button type="submit" className="btn btn-outline-info btn-lg ">
              Submit
            </button>
          </form>


        </div>
        <hr />

        <div id="gallery" className="col-12 galleryDiv bg-white shadow mt-5 pb-4">
          <h1 className="hd-title d-flex justify-content-center  mb-5">Gallery</h1>
          <div
            id="carouselExampleCaptions"
            className="carousel slide carousel-container container-fluid "
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner ">
              <div className="carousel-item active ">
                <img src={kids} className="d-block w-100" alt="..."></img>
                {/* <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div> */}
              </div>
              <div className="carousel-item">
                <img src={kids} className="d-block w-100" alt="..."></img>
                {/* <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div> */}
              </div>
              <div className="carousel-item">
                <img src={kids} className="d-block w-100" alt="..."></img>
                {/* <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div> */}
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </main>
      {/* <div className="mapcontainer">
      <Map /> 
      </div> */}

      <Footer />
    </div>
   
  );
}
