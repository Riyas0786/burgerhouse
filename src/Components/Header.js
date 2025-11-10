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
            <li>
              <NavLink className="link " to="/">
                <span className="bi bi-house-fill p-1 " >Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/menu">
                <span className="bi bi-card-checklist">Menu</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/career">
                <span className="bi bi-briefcase-fill p-1" ></span>
                Career
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/contact">
                <span className="bi bi-person-square p-1" ></span>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/branch">
                <span className="bi bi-shop p-1" ></span>Branch
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/about">
                <span
                  className="bi bi-info-square-fill p-1"
                ></span>
                About
              </NavLink>
            </li>
          </ul>
                {/* Cart + Account Icons */}
          <div className="d-flex">
            <ul className="iconlinks d-flex list-unstyled mb-0  " style={{marginLeft:'100px'}}>
              <li className="position-relative">
                <NavLink className="navicon me-3 " to="/account">
                  <i className="bi bi-person-fill fs-3"></i>
                </NavLink>
              </li>
              <li className="position-relative">
                <NavLink className="navicon me-3" to="/cart">
                  <i className="bi bi-bag-fill fs-3"></i>
                  {totalQty > 0 && (
                    <span
                      className="badge bg-danger position-absolute top-60 start-70 p-1 translate-middle" >
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
