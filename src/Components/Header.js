import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Components/Style.css";
import Logo from "../Assets/Home/Logo.png";
import { CartContext } from "./Cartprovider";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItem } = useContext(CartContext);

  const totalQty = cartItem.reduce((sum, item) => sum + item.qty, 0);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <section className="fixed-background2  d-flex justify-content-center  ">
      <div className="container">
        <div className="navbar">
          {/* Logo */}
          <div className="logo" style={{position:"relative"}} >
            
            <Link to="/">
              <img src={Logo} alt="logo"    />
            </Link>
            
          </div>

          {/* ✅ Menu Toggle Icon */}
          <div className="menuicon" onClick={toggleMenu}>
            {isOpen ? < RiCloseLine/> : <RiMenu3Line />}
          </div>

          {/* ✅ Navigation Links */}
          <ul className={`navlinks ${isOpen ? "open" : ""}`}  >
            
              <NavLink className="link bi bi-house-fill navbtn" to="/">
                Home
              </NavLink>
          

              <NavLink className="link bi bi-card-checklist navbtn " to="/menu">
                Menu
              </NavLink>
            
              <NavLink className="link bi bi-briefcase-fill navbtn" to="/career">
                Career
              </NavLink>
            
              <NavLink className="link bi bi-person-square navbtn " to="/contact">
                Contact
              </NavLink>
              
              <NavLink className="link bi bi-shop navbtn " to="/branch">
                Branch
              </NavLink>
          
              <NavLink className="link bi bi-info-square-fill navbtn" to="/about">
                About
              </NavLink>
          </ul>
                {/* Cart + Account Icons */}
          <div className="d-flex">
            <ul className="iconlinks d-flex list-unstyled mb-0  " style={{marginLeft:'100px'}}>
              <li className="position-relative">
                <NavLink className="navicon me-3   " to="/account">
                  <i className="bi bi-person-fill fs-3"></i>
                </NavLink>
              </li>
              <li className="position-relative">
                <NavLink className="navicon me-3" to="/cart">
                  <i className="bi bi-bag-fill fs-3"></i>
                  {totalQty > 0 && (
                    <span
                      className="badge bg-danger position-absolute top-1 start-63 w-4 p-1 translate-middle" >
                      {totalQty}
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
         
              </div>
        </div>
    
  </section>
  );
};

export default Header;
