import React, { useState } from "react";
import BurgerImg from "../Assets/Account/burgerimg.png";
import logo from "../Assets/Home/Logo.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {   FaPhone } from "react-icons/fa";
import {RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";



const Login = () => {
  const navigate = useNavigate();
  const [phone,setphone]=useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const phoneRegex = /^[0-9]{10}$/;


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

    if (!phone) {
      toast.error(" phone number");
      return;
    }

    // 📱 PHONE LOGIN
    if (phoneRegex.test(phone)) {
      try {
        setLoading(true);
        setupRecaptcha();

        const appVerifier = window.recaptchaVerifier;

        const confirmationResult = await signInWithPhoneNumber(
          auth,
          "+91" + phone,
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
   const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const user = result.user;

    toast.success(`Welcome ${user.displayName}`);
    navigate("/menu");

  } catch (error) {
    toast.error(error.message);
  }
};

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="d-flex flex-wrap rounded-5 shadow overflow-hidden bg-white" style={{ maxWidth: "800px" }}>
        {/* LEFT */}
        <div className="p-4 flex-fill">
          <img src={logo} alt="logo" width={180} className="mb-3" />
          <h3 className="text-warning fw-bold">SIGN IN</h3>

          <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
            <div className="position-relative">
              <FaPhone className="position-absolute top-50 end-0 translate-middle-y me-3" />
              <input
                type="text"
                placeholder=" Phone Number"
                className="form-control"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </div>


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
              <button type="submit" className="bg-warning rounded fw-bold btn btn-md   " disabled={loading}>
                {loading ? "SENDING OTP..." : "GET OTP"}
              </button>
            )}

            {confirmation && (
              <button type="button" onClick={verifyOtp} className="bg-success text-white rounded fw-bold btn btn-md" disabled={loading}>
                {loading ? "VERIFYING..." : "VERIFY OTP"}
              </button>
            )}
          </form>
          <h5 className="mt-2"> Sign With Google</h5>
     <button
  type="button"
  onClick={handleGoogleLogin}
  className="bg-primary w-20 rounded h-10 text-white d-flex align-items-center justify-content-center mx-auto"
>
  <i className="bi bi-google"></i>
</button>

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
