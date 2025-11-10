import React, { useState } from "react";
import BurgerImg from "../Assets/Account/burgerimg.png";
import logo from "../Assets/Home/Logo.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock,FaUser } from "react-icons/fa";




const Account = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 
  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("⚠️ Please fill in all fields.",{className:'bg-danger text-white'});
      return;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error("⚠️ Please enter a valid email.",{className:'bg-danger text-white'});
      return;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("⚠️ Password must be 6+ chars, include uppercase, number & special char.",{className:'bg-danger text-white'});
      return;
    }
    toast.success('Account created successfull',{className:'bg-success  text-white'})
    setName("");
    setEmail("");
    setPassword("");
    setTimeout(() => navigate("/menu"), 2000);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100  ">
      <div className="d-flex flex-wrap  rounded-5 overflow-hidden bg-white flex-card " style={{ maxWidth: "800px" }}>
        
        {/* Left Side */}
        <div className="p-4 flex-fill">
          <img src={logo} alt="logo" width={180} className="mb-3" />
          <h3 className="text-warning fw-bold">SIGN UP</h3>

          <form onSubmit={handleSignUp} className="d-flex flex-column gap-3 mt-3">
             <div className="input-group mb-3" style={{ width: "250px" }}>
                  <span className="input-group-text">
                    <FaUser />
                  </span>
            <input
              type="text"
              placeholder="Full Name"
              aria-label="Full Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            </div>
             <div className="input-group mb-3" style={{ width: "250px" }}>
                  <span className="input-group-text">
                    <FaEnvelope />
                  </span>
            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /></div>
             <div className="input-group mb-3" style={{ width: "250px" }}>
                  <span className="input-group-text">
                    <FaLock />
                  </span>
            <input
              type="password"
              placeholder="Password"
              aria-label="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /></div>
            <button type="submit" className="btn btn-warning fw-bold text-white">
              SIGN UP
            </button>
          </form>

          <p className="mt-3">
            Already have an account?{" "}
            <a href="/login" className="fw-bold text-danger">
              SIGN IN
            </a>
          </p>

          <p className="fw-semibold">Or Continue with</p>
          <div className="d-flex gap-2">
            <a href="https://accounts.google.co.in/" target="blank" rel="noopener noreferrer"className="btn btn-primary flex-fill" >
              <i className="bi bi-google"></i> 
            </a>
            <a href="https://account.apple.com/" target="blank" rel="noopener noreferrer" className="btn btn-dark flex-fill" >
              <i className="bi bi-apple"></i>
            </a>
            <a href="https://login.microsoftonline.com/" target="blank" rel="noopener noreferrer" className="btn btn-success flex-fill" >
              <i className="bi bi-microsoft"></i> 
            </a>
          </div>

          <h6 className="text-muted small text-center mt-3">
            © Burger House. All rights reserved.
          </h6>
        </div>

        {/* Right Side */}
        <div className="d-none d-md-block">
          <img src={BurgerImg} alt="Burger House" style={{ width: "350px", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
    </div>

  );
};
    

export default Account;
