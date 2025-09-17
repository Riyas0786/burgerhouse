import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import franchiseimg from "../Assets/CAREER/franchise img.png";
import trustableimg from "../Assets/CAREER/trustableimg.png";
import Branch from "../Assets/CAREER/branches.png";
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
      <section className="header ">
            <h1 style={{textAlign:'center'}}>
              WELCOME TO INDIA'S MOST ADMIRED  AND AFFORDABLE FRANCHISE
            </h1>
          
            <Carousel interval={2000}
            pause="hover" controls='true' indicators='true '>
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
              <Carousel.Item>
                <img src={Branch} alt="branch"className="my-5 mx-auto"
                style={{borderRadius:'15px',height:'600px',width:'500px'}}/>
              </Carousel.Item>

              <Carousel.Item>
              <div className="card rounded shadow  mx-auto mb-5" style={{width:'500px', height:'600px'}}>
                <h3 className="mx-3">FRANCHISE ENQUIRY</h3>
                <form  onSubmit={handlesubmit}>
                  <label htmlFor="name mx-auto">
                    <h4 className="mx-auto">Name</h4>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="form-control mx-auto "
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
                    className="form-control mx-auto "
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
                  </Carousel.Item>
                </Carousel>    
      </section>

      
    </>
  );
};

export default Career;
