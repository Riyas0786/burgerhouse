
import React, { useState } from 'react';
import '../Components/Style.css';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Home/Logo.png'

  const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
    <section className="fixed-background d-flex justify-content-center">
        <div className='container'>
            <nav className='navbar'>
                <div className='logo'>
                    <img src={Logo} alt='logo' />
                </div>
                     <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            <i className="bi bi-list"></i>
          </button>
                 <ul className={`navlinks ${isOpen ? 'active' : ''}`}>
                    <li><Link className='link' to='/'>HOME</Link></li>
                    <li><Link className='link'  to='/menu'>MENU</Link></li>
                    <li><Link className='link'  to='/career'>CAREER</Link></li>
                    <li><Link className='link'  to='/contact'>CONTACT</Link></li>
                    <li><Link className='link'  to='/branch'>BRANCH</Link></li>
                </ul>
                <div>
                     <ul className="iconlinks ">
                      <li><Link className='navicon' to='/bi bi-person-fill'><i className='bi bi-person-fill'></i></Link></li>
                      <li><Link className='navicon'to= '/bi bi-cart-fill'><i className='bi bi-cart-fill'></i></Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </section>
    </>
  )
}

export default Header
