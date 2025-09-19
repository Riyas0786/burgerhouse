import React, { useState } from "react";
import customer from '../Assets/CONTACT/Customer support.png';
import service from '../Assets/CONTACT/24.png';
import email from '../Assets/CONTACT/Email .png';


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
        <h2 className="text-center">
          IF YOU NEED ENQUIRY/HELP <br /> WE ARE HERE TO HELP YOU
        </h2>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-12 col-sm-7 col-md-6 col-lg-4  text-center my-4">
              
               <img src={service} alt="service" className="mx-auto" width={200}/>
               <h4 className="text-dark fw-bold text-center my-2">24/7<br/>CUSTOMER SUPPORT <br/>+</h4>
               <h4 className=" text-center fw-bold "> ALL REGIONAL LANGUAGE  </h4>
               <div className=" text-center ">
               <h5> TAMIL</h5>
               <h5>TELUGU</h5>
               <h5>MALAYALAM</h5>
               <h5>KANNADA</h5>
               </div>
              </div>

            {/* Customer Support */}
            <div className="col-12 col-sm-7 col-md-6 col-lg-4 mx-auto text-center">
              <div className=" img-fluid my-3">
                <img src={email} alt="email" className="mx-auto" width={150}/>
                </div>
              
              <h4 className="text-dark fw-bold text-center">MAIL TO US: SUPPORT@BURGERHOUSE</h4>

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
              <button className="btn btn-primary mb-3" onClick={handleSubmit} >
                SUBMIT
              </button>
            </div>

            {/* Call Support */}
            <div className=" col-12 col-sm-7 col-md-6 col-lg-4  text-center">
            <div className="img-fluid my-3 ">
             <img src={customer} alt='customer' className="mx-auto" width={150} /></div>
              <h4 className="fw-bold text-dark">TALK TO OUR <br/> SUPPORT TEAM</h4>
              <button className="btn btn-danger my-5 mb-3" onClick={()=>(window.location.href='tel:9159658882')}>
                CALL NOW <span className="fw-bold"></span>
              </button>
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
