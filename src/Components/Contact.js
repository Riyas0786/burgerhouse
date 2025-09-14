import React, { useState } from "react";


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

     
           {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default Contact;
