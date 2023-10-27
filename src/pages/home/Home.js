import React from "react";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import test_img from "../../images/My-easy-therapy-center-llc.jpg";
import kids from "../../images/kids.jpg";

const services = [
  {
    name: "Speech",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    link: "",
    image: kids,
  },
  {
    name: "Occupational",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    link: "",
    image: kids,
  },
  {
    name: "Physical",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    link: "",
    image: kids,
  },
  {
    name: "Sensory Intergration",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    link: "",
    image: kids,
  },
  {
    name: "Social skills",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    link: "",
    image: kids,
  },
  {
    name: "Early Intervention",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    link: "",
    image: kids,
  },
];

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Navbar />
      <main className="d-flex flex-column mb-5">
        <div className="homeDivOne " id="home">
          <div className="hdo-1 ">
            <h1 className="ms-5 mt-5 hd-title">Our vision</h1>
            <p class=" m-5">
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

          <div className="hdo-2">
            <img src={kids} alt="img1" className="kids" />
          </div>
        </div>
        <div className="homeDivtwo">
          <div className=" ">
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
            <div className="service-item" key={index}>
              <img
                src={service.image}
                className=" service-img"
                alt={service.alt}
              ></img>
              <div className="service-text d-flex align-items-center justify-content-center flex-column">
                <h4 className="service-title">{service.name}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="homeDivOne " id="home">
          <div className="hdo-1 ">
            <h1 className="ms-5 mt-5 hd-title">Our Location</h1>
            <p class=" m-5">
              "At My Easy Therapy, we are committed to providing high-quality
              ABA therapy services to help individuals reach their full
              potential. We understand that reaching out for help can be a
              difficult decision, but we want to assure you that our team is
              knowledgeable, experienced, and compassionate. We encourage you to
              get in touch with us today to schedule a consultation or to learn
              more about our services. You can reach us by phone, fax, email, or
              by visiting our location ----. We'd love to hear from you and
              discuss how we can help."
            </p>
          </div>

          <div className="hdo-2">
            <img src={kids} alt="img1" className="kids" />
          </div>
        </div>
        <div className="d-flex flex-row col-12">
          <form
          id="contact"
            action="https://formsubmit.co/samuel1de2jesus3@gmail.com"
            method="POST"
            className="d-flex justify-content-center align-items-center flex-column col-6 "
          >
            <div className="d-flex flex-row first-row-contact">
              <div className="" >

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

          <div className="d-flex flex-column justify-content-center align-items-end col-6">
            <div className="contact-title">
              <h3>Contact Us Now</h3>
            </div>

            <p>
              Fill out the form below to get in touch with us. We are here to
              answer any questions you may have and provide the best ABA therapy
              services.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
