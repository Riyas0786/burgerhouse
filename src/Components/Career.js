import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import franchiseimg from "../Assets/CAREER/franchise img.png";
import trustableimg from "../Assets/CAREER/trustableimg.png";
import footerlogo from "../Assets/Home/Footer_Logo.png";

const Career = () => {
  const [Name, setName] = useState("");
  const [Mobilenumber, setMobilenumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setlocation] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!Name || !Mobilenumber || !email || !location) {
      alert("Please input all fields");
      return;
    }
    alert("Thanks! Our customer support will call you.");
    setEmail("");
    setName("");
    setMobilenumber("");
    setlocation("");
  };

  return (
    <>
      <section className="header">
        <div className="container">
          <div className="row">
            <h1>
              WELCOME TO INDIA'S MOST ADMIRED <br /> AND AFFORDABLE FRANCHISE
            </h1>

            <Carousel interval={3000}>
              <Carousel.Item>
                <img
                  src={franchiseimg}
                  alt="franchiseimg"
                  className="my-5 mx-auto"
                
                  style={{ borderRadius: "15px",height:'600px',width:'500px' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img src={trustableimg} alt="trustable" className="my-5 mx-auto" height={500} width={500} 
                style={{borderRadius:'15px',height:'600px',width:'500px'}}/>
              </Carousel.Item>
            </Carousel>

            <div className="col-12 col-sm-7 col-md-6 col-lg-4 my-5 mx-auto">
              <div className="careercard">
                <h3 className="mx-3">FRANCHISE ENQUIRY</h3>
                <form  onSubmit={handlesubmit}>
                  <label htmlFor="name">
                    <h4>Name</h4>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="form-control mx-auto"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <label htmlFor="mobile">
                    <h4>Mobile Number</h4>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your number"
                    required
                    className="form-control mx-auto"
                    value={Mobilenumber}
                    onChange={(e) => setMobilenumber(e.target.value)}
                  />

                  <label htmlFor="email">
                    <h4>Email</h4>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="form-control mx-auto"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label htmlFor="location">
                    <h4>Location</h4>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your location"
                    required
                    className="form-control mx-auto"
                    value={location}
                    onChange={(e) => setlocation(e.target.value)}
                  />

                  <button
                    type="submit"
                    className="btn btn-danger tablebtn my-3 mx-5"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footerfixed-background2">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-lg-6 text-lg-start text-center">
              <img
                src={footerlogo}
                alt="footerlogo"
                className="py-3 mx-lg-0 mx-auto d-block"
                width={250}
              />
              <p className="text-white py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                perspiciatis amet necessitatibus velit vitae inventore quae iusto
                repellendus ullam libero voluptates, numquam cum cumque atque.
              </p>

              <span className="bi bi-geo-alt-fill text-white d-block py-1">
                45, SOUTH CAR STREET, MADURAI
              </span>
              <span className="bi bi-envelope text-white d-block py-1">
                INFO@BURGERHOUSE.COM
              </span>
              <div className="my-2">
                <span className="bi bi-shop-window text-white">
                  MONDAY-FRIDAY: 10AM-11PM <br /> SATURDAY-SUNDAY: 10AM-12AM
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 text-lg-end text-center">
              <div className="icons-2 my-3">
                <h5 className="text-white">DOWNLOAD APP ON</h5>
                <button className="btn btn-success my-2">
                  <span className="fa-brands fa-google-play text-white mx-1"></span>
                  GET IT ON <br />
                  GOOGLE PLAY
                </button>
                <br />
                <button
                  className="btn btn-primary my-2"
                  style={{ width: "127px" }}
                >
                  <span className="bi bi-apple text-white mx-auto"></span>
                  GET IT ON
                  <br />
                  APP STORE
                </button>
                <h6 className="text-white py-3">
                  DESIGNED & DEVELOPED BY <br /> RIYAS KHAN
                </h6>

                <h6 className="text-white">FOLLOW US ON</h6>
                <i className="bi bi-instagram text-white mx-2 fs-4"></i>
                <i className="bi bi-facebook text-white mx-2 fs-4"></i>
                <i className="bi bi-twitter text-white mx-2 fs-4"></i>
                <i className="bi bi-whatsapp text-white mx-2 fs-4"></i>
              </div>

              <div className="copyright my-3">
                <span className="bi bi-c-circle text-white">
                  BURGERHOUSE 2025 ALL RIGHTS RESERVED
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
