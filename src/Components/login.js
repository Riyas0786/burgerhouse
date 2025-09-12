import React, { useState } from "react";
import BurgerImg from "../Assets/Account/burgerimg.png"; 
import logo from "../Assets/Home/Logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("⚠️ Please fill in all fields.");
      return;
    }
    alert("✅ Welcome back to Burger House!");
    setEmail("");
    setPassword("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#fff7e6",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "950px",
          background: "#fffaf0",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Left Side - Form */}
        <div style={{ flex: 1, padding: "40px" }}>
          <img src={logo} alt="logo" width={200}/>
          <h3
            style={{
              marginTop: "15px",
              marginBottom: "20px",
              fontSize: "25px",
              fontWeight: "bold",
              color: "#ffb300",
            }}
          >
            SIGN IN
          </h3>

          <form
            onSubmit={handleLogin}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <input
              type="email"
              placeholder="Email / Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                outline: "none",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "12px",
                background: "#ffb300",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              SIGN IN
            </button>
          </form>

          <p style={{ marginTop: "15px", fontSize: "14px" }}>
            Don’t have an account?{" "}
            <a href="/account" style={{ color: "#b22222", fontWeight: "bold" }}>
              SIGN UP
            </a>
          </p>
             
          <h5 className="">Or Continue with</h5>
          <button className="btn btn-primary"><span className="bi bi-google"></span></button>
          <button className="btn btn-dark mx-2"><span className="bi bi-apple"></span></button>
          <button className="btn btn-success"><span className="bi bi-microsoft"></span></button>
          <h6 className="text-center ">All rights reserved</h6>
        </div>

        {/* Right Side - Image with Caption */}
        <div style={{ position: "relative" }}>
          <img
            src={BurgerImg}
            alt="Burger House"
            style={{ width: "400px", height: "600px" }}
          />
         
        </div>
      </div>
    </div>
  );
};

export default Login;
