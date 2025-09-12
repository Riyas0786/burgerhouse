import React, { useState } from "react";
import language from "../Assets/CONTACT/langauage.png";
import customer from "../Assets/CONTACT/customer.png";
import footerlogo from "../Assets/Home/Footer_Logo.png"


// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [issueType, setIssueType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!issueType || !message.trim()) {
      toast.warn("⚠️ Please select an issue type and enter your concern.", {
        position: "top-center",
      });
      return;
    }

    toast.success(`✅ Your concern about "${issueType}" has been submitted!`, {
      position: "top-center",
    });

    setIssueType("");
    setMessage("");
  };

  return (
    <>
      <section className="header">
        <h3 className="text-center">
          IF YOU NEED ENQUIRY/HELP <br /> WE ARE HERE TO HELP YOU
        </h3>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-7 col-md-6 col-lg-4  text-center">
               <span className="bi bi-shield-fill-check " style={{fontSize:'100px'}}>
                <h5 className="text-center">100%<br/>Trustable</h5>
               </span>
              </div>

            {/* Customer Support */}
            <div className="col-12 col-sm-7 col-md-6 col-lg-4 mx-auto text-center">
                <span className="bi bi-chat-left-text" style={{fontSize:'100px'}}></span>

              
              <h4 className="text-primary">MAIL TO US: SUPPORT@BURGERHOUSE</h4>

              {/* Dropdown */}
              <select
                className="form-select my-3"
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
              >
                <option value="">-- Select Issue Type --</option>
                <option value="Payment Related">💳 Payment Related</option>
                <option value="Order Not Delivered">🚚 Order Not Delivered</option>
                <option value="Wrong Item Delivered">🍔 Wrong Item Delivered</option>
                <option value="Refund Request">💰 Refund Request</option>
                <option value="Others">📩 Others</option>
              </select>

              {/* Message box */}
              <textarea
                placeholder="Write your concern"
                className="form-control my-3"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              {/* Submit */}
              <button className="btn btn-primary" onClick={handleSubmit}>
                SUBMIT
              </button>
            </div>

            {/* Call Support */}
            <div className="col-12 col-sm-7 col-md-6 col-lg-4 mx-auto text-center">
             <span className="bi bi-telephone"style={{fontSize:'100px'}}></span>
              <h4 className="text-primary ">TALK TO OUR SUPPORT TEAM</h4>
              <button className="btn btn-danger">
                CALL: <span className="fw-bold">978653478</span>
              </button>
            </div>
          </div>
          </div>
        
      </section>

     
       <section className="footerfixed-background2">
  <div className="container-fluid">
    <div className="row align-items-center"> {/* ✅ makes both columns level */}
      
      {/* Left Column */}
      <div className="col-lg-6 text-lg-start text-center">
        <img
          src={footerlogo}
          alt="footerlogo"
          className="py-3 mx-lg-0 mx-auto d-block"
          width={250}
        />
        <p className="text-white py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis amet
          necessitatibus velit vitae inventore quae iusto repellendus ullam libero voluptates,
          numquam cum cumque atque. Recusandae exercitationem perferendis quibusdam quos?
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
            <span className="fa-brands fa-google-play text-white mx-1"></span>GET IT ON <br/>
            GOOGLE PLAY
          </button>
          <br />
          <button className="btn btn-primary my-2" style={{width:'127px'}}>
            <span className="bi bi-apple text-white mx-auto"></span>
            GET IT ON<br/>APP STORE
          </button>
          <h6 className="text-white py-3">DESIGNED & DEVELOPED BY <br /> RIYAS KHAN</h6>

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
           {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default Contact;
