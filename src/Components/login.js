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
      <div className="d-flex flex-wrap  rounded-5 overflow-hidden bg-white flex-card" style={{ maxWidth: "800px" }}>
        
        {/* Left Side - Form */}
        <div className="p-4 flex-fill">
          <img src={logo} alt="logo" width={180} className="mb-3" />
          <h3 className="text-warning fw-bold">SIGN IN</h3>

          <form onSubmit={handleLogin} className="d-flex  flex-column gap-3 ">
             <div className="relative" >
           <FaEnvelope className="absolute right-3 top-3  text-gray-800  "/>
            <input type="text" placeholder="Email or PhoneNumber"
              className="form-control"value={email}
              onChange={(e) => setEmail(e.target.value)}
             /></div>
             <div className="relative">
           <FaLock className="absolute right-3 top-3 text-gray-800 "/>
            <input
              type="password"  placeholder="Password"
              className="form-control"value={password}
              onChange={(e) => setPassword(e.target.value)}
            /></div>
          
            <button type="submit" className="bg-amber-400 rounded h-10 fw-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-400 ...">
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
          <div className="d-flex gap-2 ">
            <a href="https://accounts.google.co.in/" target="blank" rel="noopener noreferrer"
              className="bg-blue-600 w-20 rounded h-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  ... 
               bi bi-google text-white items-center justify-center d-flex " >
              
            </a>
            <a href="https://account.apple.com/" target="blank" rel="noopener noreferrer" className="bg-gray-950 w-20 rounded h-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  ...
            bi bi-apple text-white items-center justify-center d-flex " >
            </a>
            <a href="https://login.microsoftonline.com/" target="blank" rel="noopener noreferrer" className="bg-green-700 w-20 rounded h-10 text-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  ...
            bi bi-microsoft text-white items-center justify-center flex list-none" >
              
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
