import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoimg from "../Assets/Home/Logo.png"
import burgerHouse from "../Assets/Account/burgerimg.png"; // use your burger image

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.warn("⚠️ Please fill in all fields.", { position: "top-center" });
      return;
    }

    toast.success("🎉 Account created successfully!", { position: "top-center" });

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <section className="signup-container d-flex align-items-center justify-content-center vh-100">
      <div className="signup-card d-flex shadow-lg rounded overflow-hidden">
        
        {/* Left Side: Form */}
        <div className="signup-left p-5 d-flex flex-column justify-content-center">
          {/* Logo + Title */}
                 <img src={logoimg} alt="logo" className="mb-5" width={200} />
           
                    <h3 className="fw-bold signup-heading mb-4">SIGN UP</h3>

          <form onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control mb-3"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mb-4"
            />
            <button type="submit" className="btn btn-warning w-100 fw-bold">
              CREATE ACCOUNT
            </button>
          </form>

          <p className="mt-3">
            Already have an account?{" "}
            <a href="/login" className="text-danger fw-semibold login-link">
              LOG IN
            </a>
          </p>
          <button className="btn btn-primary  "><span className="bi bi-google"></span></button>
          <button className="btn btn-dark my-2 "><span className="bi bi-apple"></span></button>
          <button className="btn btn-success  "><span className="bi bi-microsoft"></span></button>
        </div>

        {/* Right Side: Image + Tagline */}
        <div className="signup-right position-relative">
          <img
            src={burgerHouse}
            alt="Burger House"
            className="w-100 h-100"
            style={{ objectFit: "cover",opacity:'85%'}}
          />
          <div className="position-absolute bottom-0 w-100 text-center p-3 tagline">
            Think Burger, Think Burger House
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SignUp;
