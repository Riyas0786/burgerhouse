import React from "react";
import burgerimg from '../Assets/Account/burgerimg.png'

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        {/* Left Section - Form */}
        <div className="login-form">
          


          <h3 className="login-heading">LOG IN</h3>

          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />

            <button type="submit" className="btn btn-warning w-100 fw-bold">
              LOGIN
            </button>
          </form>

          <p className="signup-text">
            Don’t have an account? <a href="/Account">SIGN UP</a>
          </p>
        </div>

        {/* Right Section - Burger Image */}
        <div className="signup-right position-relative">
          <img
            src={burgerimg}
            alt="Burger House"
            className="w-100 h-100"
            style={{ objectFit: "cover",opacity:'85%'}}
          />
          <div className="position-absolute bottom-0 w-100 text-center p-3 tagline">
            Think Burger, Think Burger House
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
