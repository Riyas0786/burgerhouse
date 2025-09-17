import React from "react";
import Logo from '../Assets/Home/Logo.png';

export default function Loading() {
  return (
    <div className="loading-wrapper">
      <div className="logo-circle">
        <img src={Logo}alt="logo"  
      /></div>
      <h2 className="loading-text text-white">THINK BURGER</h2>
      <h2 className="loading-text  text-primary text-center">THINK BURGER HOUSE</h2>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
