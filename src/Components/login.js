import React, { useState } from "react";
import BurgerImg from "../Assets/Account/burgerimg.png";
import logo from "../Assets/Home/Logo.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const [loading, setLoading] = useState(false);

  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /\S+@\S+\.\S+/;

  // 🔐 Setup reCAPTCHA
  const setupRecaptcha = () => {
    if (window.recaptchaVerifier) return;

    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          console.log("reCAPTCHA verified");
        },
      }
    );
  };

  // 📩 LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Enter email or phone number");
      return;
    }

    // 📱 PHONE LOGIN
    if (phoneRegex.test(email)) {
      try {
        setLoading(true);
        setupRecaptcha();

        const appVerifier = window.recaptchaVerifier;

        const confirmationResult = await signInWithPhoneNumber(
          auth,
          "+91" + email,
          appVerifier
        );

        setConfirmation(confirmationResult);
        toast.success("OTP sent successfully");
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
      return;
    }

    // 📧 EMAIL LOGIN (DEMO)
    if (!emailRegex.test(email)) {
      toast.error("Enter valid email");
      return;
    }

    if (!password) {
      toast.error("Enter password");
      return;
    }

    toast.success("Login successful");
    setTimeout(() => navigate("/menu"), 1500);
  };

  // ✅ VERIFY OTP
  const verifyOtp = async () => {
    if (!otp) {
      toast.error("Enter OTP");
      return;
    }

    try {
      setLoading(true);
      await confirmation.confirm(otp);
      toast.success("Login successful");
      navigate("/menu");
    } catch {
      toast.error("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="d-flex flex-wrap rounded-5 overflow-hidden bg-white" style={{ maxWidth: "800px" }}>
        {/* LEFT */}
        <div className="p-4 flex-fill">
          <img src={logo} alt="logo" width={180} className="mb-3" />
          <h3 className="text-warning fw-bold">SIGN IN</h3>

          <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
            <div className="position-relative">
              <FaEnvelope className="position-absolute top-50 end-0 translate-middle-y me-3" />
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {!confirmation && !phoneRegex.test(email) && (
              <div className="position-relative">
                <FaLock className="position-absolute top-50 end-0 translate-middle-y me-3" />
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            )}

            {confirmation && (
              <input
                type="text"
                placeholder="Enter OTP"
                className="form-control mb-3"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            )}

            {!confirmation && (
              <button type="submit" className="bg-warning rounded fw-bold" disabled={loading}>
                {loading ? "SENDING OTP..." : "SIGN IN"}
              </button>
            )}

            {confirmation && (
              <button type="button" onClick={verifyOtp} className="bg-success text-white rounded fw-bold" disabled={loading}>
                {loading ? "VERIFYING..." : "VERIFY OTP"}
              </button>
            )}
          </form>

          <p className="mt-3">
            Don’t have an account? <a href="/account" className="fw-bold text-danger">SIGN UP</a>
          </p>
        </div>

        {/* RIGHT */}
        <div className="d-none d-md-block">
          <img src={BurgerImg} alt="Burger" style={{ width: "350px", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* 🔐 REQUIRED */}
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Login;
