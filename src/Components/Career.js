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
  const [description, setDescription] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!Name || !number || !email || !location || !description) {
      toast.error("Please input all fields");
      return;
    }
    toast.success("Thanks! Our customer support will call you.");
    setEmail("");
    setName("");
    setnumber("");
    setlocation("");
    setDescription("");
  };

  return (
    <section className="header">
      <h1 className="text-center fw-bold mb-4">
        WELCOME TO INDIA'S MOST <br /> ADMIRED AND AFFORDABLE FRANCHISE
      </h1>

      {/* ✅ Carousel only for images */}
      <Carousel interval={2000} pause="hover" controls={true} indicators={true}>
        <Carousel.Item>
          <img
            src={franchiseimg}
            alt="franchiseimg"
            className="d-block mx-auto my-3 rounded shadow img-fluid"
            style={{
              maxWidth: "600px",
              height: "450px",
              width:'300px',
              objectFit: "cover",
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={trustableimg}
            alt="trustable"
            className="d-block mx-auto my-3 rounded shadow img-fluid"
            style={{
              maxWidth: "600px",
              height: "450px",
              width:'300px',  
              objectFit: "cover",
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Branch}
            alt="branch"
            className="d-block mx-auto my-3 rounded shadow img-fluid"
            style={{
              maxWidth: "600px",
              height: "450px",
              width:'300px',  
              objectFit: "cover",
            }}
          />
        </Carousel.Item>
      </Carousel>

      {/* ✅ Franchise Form BELOW carousel */}
      <div
        className="careercard shadow mx-auto my-5 p-4 w-100"
        style={{ maxWidth: "500px", borderRadius: "20px" }}
      >
        <h4 className="text-center bg-danger text-white p-2 rounded">
          FRANCHISE ENQUIRY
        </h4>
        <form onSubmit={handlesubmit}>
          <label htmlFor="name">
            <h6 className="bg-light p-2 rounded">Name</h6>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="form-control mb-3"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="mobile">
            <h6 className="bg-light p-2 rounded">Mobile Number</h6>
          </label>
          <input
            type="text"
            placeholder="Enter your number"
            className="form-control mb-3"
            value={number}
            onChange={(e) => setnumber(e.target.value)}
          />

          <label htmlFor="email">
            <h6 className="bg-light p-2 rounded">Email</h6>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="location">
            <h6 className="bg-light p-2 rounded">Location</h6>
          </label>
          <input
            type="text"
            placeholder="Enter your location"
            className="form-control mb-3"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          />

          <label htmlFor="description">
            <h6 className="bg-light p-2 rounded">Description</h6>
          </label>
          <textarea
            placeholder="Write here..."
            className="form-control mb-3"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit" className="btn btn-danger w-100">
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default Career;
