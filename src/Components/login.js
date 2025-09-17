import React, { useState } from "react";
import BurgerImg from "../Assets/Account/burgerimg.png";
import logo from "../Assets/Home/Logo.png";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const google = () => {
    window.location.href = "https://accounts.google.com/v3/signin/" // external site
  };
  const apple =()=>{
    window.location.href="https://support.apple.com/en-in/apple-account"
  };
  const microsoft =()=>{
    window.location.href="https://login.microsoftonline.com/"
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    // simple email/phone check
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email) && !phoneRegex.test(email)) {
      toast.error("⚠️ Enter a valid email or 10-digit phone number.");
      return;
    }

    if (password.length < 6) {
      toast.error("⚠️ Password must be at least 6 characters.");
      return;
    }

    toast.success("✅ Welcome back to Burger House!");
     setTimeout(() => navigate("/menu"), 2000);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-warning-subtle p-3">
      <div className="d-flex flex-wrap shadow rounded-3 overflow-hidden bg-white" style={{ maxWidth: "800px" }}>
        
        {/* Left Side - Form */}
        <div className="p-4 flex-fill">
          <img src={logo} alt="logo" width={180} className="mb-3" />
          <h3 className="text-warning fw-bold">SIGN IN</h3>

          <form onSubmit={handleLogin} className="d-flex flex-column gap-3 mt-3">
            <input
              type="text" placeholder="Email or Phone Number"
              className="form-control"value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"  placeholder="Password"
              className="form-control"value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
            <button className="btn btn-outline-primary flex-fill" onClick={google}>
              <i className="bi bi-google"></i> Google
            </button>
            <button className="btn btn-outline-dark flex-fill" onClick={apple}>
              <i className="bi bi-apple"></i> Apple
            </button>
            <button className="btn btn-outline-success flex-fill" onClick={microsoft}>
              <i className="bi bi-microsoft"></i> Microsoft
            </button>
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
