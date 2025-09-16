import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../Components/Style.css";
import Logo from "../Assets/Home/Logo.png";
import { Navbar } from "react-bootstrap";
import { CartContext } from "./Cartprovider"; // ✅ import context

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItem } = useContext(CartContext); // ✅ get cart

  // ✅ total quantity of items in cart
  const totalQty = cartItem.reduce((sum, item) => sum + item.qty, 0);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <section className="fixed-background  d-flex justify-content-center">
      <div className="container">
        <nav className="navbar d-flex align-items-end justify-content-between">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="menuicon"
            onClick={toggleMenu}
          />

          {/* Navigation Links */}
          <ul className={`navlinks ${isOpen ? "open" : ""}`}>
            <li><Link className="link" to="/">HOME</Link></li>
            <li><Link className="link" to="/menu">MENU</Link></li>
            <li><Link className="link" to="/career">CAREER</Link></li>
            <li><Link className="link" to="/contact">CONTACT</Link></li>
            <li><Link className="link" to="/branch">BRANCH</Link></li>
            <li><Link className="link" to="/login"></Link></li>
          </ul>

          {/* Icons */}
          <div className="d-flex">
            <ul className="iconlinks d-flex list-unstyled mb-0">
              <li className="position-relative">
                <Link className="navicon me-3" to="/account">
                  <i className="bi bi-person-fill"></i>
                </Link>
              </li>
              <li className="position-relative">
                <Link className="navicon" to="/cart">
                  <i className="bi bi-bag-fill"></i>
                  {/* ✅ Show total quantity in badge */}
                  {totalQty > 0 && (
                    <span
                      className="badge bg-danger position-absolute top-0 start-100 translate-middle"
                      style={{
                        borderRadius: "50%",
                        fontSize: "0.7rem",
                        padding: "4px 6px",
                      }}
                    >
                      {totalQty}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Dark Overlay */}
      {isOpen && <div className="overlay"></div>}
    </section>
  );
};

export default Header;
