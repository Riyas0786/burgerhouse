import React, { useState } from "react";
import BurgerImg from "../Assets/Account/burgerimg.png";
import logo from "../Assets/Home/Logo.png";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";


const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("⚠️ Please fill in all fields.",{className:'bg-danger text-white'});
      return;
    }

    // simple email/phone check
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email) && !phoneRegex.test(email)) {
      toast.error("⚠️ Enter a valid email or 10-digit phone number.",{className:'bg-danger text-white'});
      return;
    }

    if (password.length < 6) {
      toast.error("⚠️ Password must be at least 6 characters.",{className:'bg-danger text-white'});
      return;
    }

    toast.success("✅ Welcome back to Burger House!",{className:'bg-success text-white'});
     setTimeout(() => navigate("/menu"), 2000);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 ">
      <div className="d-flex flex-wrap  rounded-5 overflow-hidden bg-white acc-card" style={{ maxWidth: "800px" }}>
        
        {/* Left Side - Form */}
        <div className="p-4 flex-fill">
          <img src={logo} alt="logo" width={180} className="mb-3" />
          <h3 className="text-warning fw-bold">SIGN IN</h3>

          <form onSubmit={handleLogin} className="d-flex flex-column gap-3 mt-3">
             <div className="input-group mb-3" style={{ width: "250px" }}>
      <span className="input-group-text">
        <FaEnvelope />
      </span>
            <input type="text" placeholder="Email or PhoneNumber"
              className="form-control"value={email}
              onChange={(e) => setEmail(e.target.value)}
             /></div>
             <div className="input-group mb-3" style={{ width: "250px" }}>
      <span className="input-group-text">
        <FaLock />
      </span>
            <input
              type="password"  placeholder="Password"
              className="form-control"value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button type="submit" className="btn btn-warning fw-bold text-white">
              SIGN IN
            </button>
          </form>

          <p className="mt-3">
            Don’t have an account?{" "}
            <a href="/account" className="fw-bold text-danger">
              SIGN UP
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
        {/* Right Side - Image */}
        <div className="d-none d-md-block">
          <img
            src={BurgerImg}
            alt="Burger House"
            style={{ width: "350px", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
