import React from "react";
import Logo from '../Assets/Home/Logo.png';

export default function Loading() {
  return (
    <div className="loading-wrapper">
      <div className="logo-circle">
        <img src={Logo}alt="logo" width={200}
      /></div>
      <h2 className="loading-text">BURGER HOUSE</h2>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
