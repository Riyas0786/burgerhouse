import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import franchiseimg from "../Assets/CAREER/franchise img.png";
import trustableimg from "../Assets/CAREER/trustableimg.png";
import Branch from "../Assets/CAREER/branches.png";
import { toast } from "react-toastify";
const Career = () => {
  const [Name, setName] = useState("");
  const [number, setnumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setlocation] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!Name || !number || !email || !location) {
      toast.error("Please input all fields");
      return;
    }
    toast.success("Thanks! Our customer support will call you.");
    setEmail("");
    setName("");
    setnumber("");
    setlocation("");
  };

  return (
    <>
      <section className="header ">
            <h1 style={{textAlign:'center'}}>
              WELCOME TO INDIA'S MOST <br/>ADMIRED  AND AFFORDABLE FRANCHISE
            </h1>
          
            <Carousel interval={2000}
            pause="hover" controls='false' indicators='false '>
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
              <div className="card shadow mx-auto mb-5" style={{width:'500px', height:'600px',borderRadius:'20px'}}>
                <h4 className="mx-auto bg-danger text-white">FRANCHISE ENQUIRY</h4>
                <form  onSubmit={handlesubmit}>
                  <label htmlFor="name mx-auto">
                    <h4 className=" bg-light">Name</h4>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="form-control mx-auto "
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <label htmlFor="mobile">
                    <h4 className="bg-light my-2">Mobile Number</h4>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your number"
                    className="form-control mx-auto "
                    value={number}
                    onChange={(e) => setnumber(e.target.value)}
                  />

                  <label htmlFor="email">
                    <h4 className="bg-light my-2">Email</h4>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control mx-auto"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label htmlFor="location">
                    <h4 className="bg-light my-2">Location</h4>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="form-control mx-auto"
                    value={location}
                    onChange={(e) => setlocation(e.target.value)}
                  />
                  <label htmlFor="Description">
                    <h4 className="bg-light mt-2">Description</h4>
                  </label>
                  <textarea
                    type="text"
                    placeholder="write here..."
                    className="form-control mx-auto"
                    value={location}
                    onChange={(e) => setlocation(e.target.value)}
                  />


                  <button
                    type="submit"
                    className="btn btn-danger my-3 mx-3"
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
