import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Components/Style.css";
import Logo from "../Assets/Home/Logo.png";
import HeaderImage from "../Assets/Home/Banner_Img.png";
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
            
              <NavLink className="link bi bi-house-fill " to="/">
                Home
              </NavLink>
          

              <NavLink className="link bi bi-card-checklist " to="/menu">
                Menu
              </NavLink>
            
              <NavLink className="link bi bi-briefcase-fill" to="/career">
                Career
              </NavLink>
            
              <NavLink className="link bi bi-person-square " to="/contact">
                Contact
              </NavLink>
              
              <NavLink className="link bi bi-shop " to="/branch">
                Branch
              </NavLink>
          
              <NavLink className="link bi bi-info-square-fill" to="/about">
                About
              </NavLink>
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
                      className="badge bg-danger position-absolute top-1 start-63 w-4 p-1 translate-middle" >
                      {totalQty}
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 ">
        <h1  style={{color:'#6E260E',textShadow: '3px 2px 2px rgba(255, 255, 255, 1)',}}>BURGER</h1>
         <h1  style={{color:'#6E260E',textShadow: '3px 2px 2px rgba(255, 255, 255, 1)',fontSize:'30px'}}>WEEK</h1>
                  
                  <p >Welcome to Burger House, the ultimate destination for burger lovers! Our homepage introduces visitors to a mouthwatering world of freshly grilled burgers, crispy fries, and chilled beverages — all made with love and the freshest ingredients.
                    Visitors are greeted with a hero banner showcasing signature burgers and an easy “Order Now” or “Book Your Table” button for quick access. 
                    Below, there’s a menu highlights section showing popular items like the Classic Cheeseburger, 
                    Spicy Chicken Burger, and Veggie Delight.
                  </p>
                  </div>
            

              <div className=' col-lg-6 ' >
                <img src={HeaderImage} alt="CompoImage" className=' headerimg' width={500}/>
              </div>
              </div>
        </div>
    
  </section>
  );
};

export default Header;
