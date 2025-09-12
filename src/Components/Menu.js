import React, { useContext, useState } from 'react';
import Burger_1 from '../Assets/Menu/Burger_1.png';
import Burger_2 from '../Assets/Menu/Burger_2.png';
import Burger_3 from '../Assets/Menu/Burger_3.png';
import Burger_4 from '../Assets/Menu/Burger_4.png';
import Burger_5 from '../Assets/Menu/Burger_5.png';
import Burger_6 from '../Assets/Menu/Burger_6.png';
import Burger_7 from '../Assets/Menu/Burger_7.png';
import Burger_8 from '../Assets/Menu/Burger_8.png';
import Burger_9 from '../Assets/Menu/Burger_9.png';
import Drinks_1 from '../Assets/Menu/Drinks_1.png';
import Drinks_2 from '../Assets/Menu/Drinks_2.png';
import Drinks_3 from '../Assets/Menu/Drinks_3.png';
import Drinks_4 from '../Assets/Menu/Drinks_4.png';
import Drinks_5 from '../Assets/Menu/Drinks_5.png';
import Drinks_6 from '../Assets/Menu/Drinks_6.png';
import footerlogo from '../Assets/Home/Footer_Logo.png';
import { CartContext } from './Cartprovider';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'VEG BURGER', subtitle: 'Fresh and tasty veg burger', price: 150, image: Burger_1 },
  { id: 2, name: 'MUTTON BURGER', subtitle: 'Delicious mutton burger', price: 220, image: Burger_2 },
  { id: 3, name: 'PRAWN BURGER', subtitle: 'Crispy prawn delight', price: 200, image: Burger_3 },
  { id: 4, name: 'BEEF BURGER', subtitle: 'Juicy beef patty burger', price: 140, image: Burger_4 },
  { id: 5, name: 'CHICKEN BURGER', subtitle: 'Classic chicken burger', price: 130, image: Burger_5 },
  { id: 6, name: 'CHEESE BURGER', subtitle: 'Cheesy goodness burger', price: 110, image: Burger_6 },
  { id: 7, name: 'HOTDOG BURGER', subtitle: 'Hotdog style burger', price: 180, image: Burger_7 },
  { id: 8, name: 'CHICKEN WINGS', subtitle: 'Spicy crispy wings', price: 190, image: Burger_8 },
  { id: 9, name: 'BROASTED BURGER', subtitle: 'Crispy broasted burger', price: 160, image: Burger_9 },
  { id: 10, name: 'MOJITO', subtitle: 'Refreshing mint drink', price: 90, image: Drinks_1 },
  { id: 11, name: 'LIME', subtitle: 'Fresh lime juice', price: 50, image: Drinks_2 },
  { id: 12, name: 'GINGER LIME', subtitle: 'Spicy ginger lime', price: 60, image: Drinks_3 },
  { id: 13, name: 'ORANGE', subtitle: 'Fresh orange juice', price: 40, image: Drinks_4 },
  { id: 14, name: 'COCKTAIL', subtitle: 'Fruity cocktail mix', price: 110, image: Drinks_5 },
  { id: 15, name: 'GRAPE LIME', subtitle: 'Tangy grape lime', price: 80, image: Drinks_6 },
];

const MenuPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Search bar */}
      <div className="container">
        <input
          type="search"
          className="form-control mb-3 my-5 mx-3"
          value={searchTerm}
          placeholder="Search for products..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Flash news */}
        <div className="flash-news text-center my-3">
          <p>🔥 BUY ONE GET ONE FREE FOR TODAY ONLY !!!! 🔥</p>
        </div>

        {/* Products Grid */}
        <div className="row">
          {filteredProducts.length === 0 ? (
            <p>No products found</p>
          ) : (
            filteredProducts.map((product) => (
              <div className="col-12 col-sm-6 col-md-4 my-3" key={product.id}>
                <div className="card h-100 shadow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top p-3"
                    style={{ height: '200px', objectFit: 'contain' }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.subtitle}</p>
                    <h5 className="text-danger">₹{product.price}</h5>
                    <div className="d-flex justify-content-center gap-2 mt-3">
                      <button
                        className="btn btn-danger"
                        onClick={() => {addToCart(product); 
                                       navigate('/cart')}}
                      >
                        BUY NOW
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          addToCart(product);
                          navigate('/cart');
                        }}
                      >
                        <i className="bi bi-bag-fill"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Footer */}
      <section className="footerfixed-background2 mt-5 py-4 bg-dark">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-lg-6 text-lg-start text-center text-white">
              <img
                src={footerlogo}
                alt="footerlogo"
                className="py-3 mx-lg-0 mx-auto d-block"
                width={250}
              />
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis amet
                necessitatibus velit vitae inventore quae iusto repellendus ullam libero voluptates,
                numquam cum cumque atque.
              </p>

              <span className="bi bi-geo-alt-fill d-block py-1">
                45, SOUTH CAR STREET, MADURAI
              </span>
              <span className="bi bi-envelope d-block py-1">
                INFO@BURGERHOUSE.COM
              </span>
              <div className="my-2">
                <span className="bi bi-shop-window">
                  MONDAY-FRIDAY: 10AM-11PM <br /> SATURDAY-SUNDAY: 10AM-12AM
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 text-lg-end text-center text-white">
              <div className="icons-2 my-3">
                <h5>DOWNLOAD APP ON</h5>
                <button className="btn btn-success my-2">
                  <span className="fa-brands fa-google-play text-white mx-1"></span>
                  GET IT ON <br />
                  GOOGLE PLAY
                </button>
                <br />
                <button className="btn btn-primary my-2" style={{ width: '127px' }}>
                  <span className="bi bi-apple text-white mx-auto"></span>
                  GET IT ON<br />APP STORE
                </button>
                <h6 className="py-3">DESIGNED & DEVELOPED BY <br /> RIYAS KHAN</h6>

                <h6>FOLLOW US ON</h6>
                <i className="bi bi-instagram mx-2 fs-4"></i>
                <i className="bi bi-facebook mx-2 fs-4"></i>
                <i className="bi bi-twitter mx-2 fs-4"></i>
                <i className="bi bi-whatsapp mx-2 fs-4"></i>
              </div>

              <div className="copyright my-3">
                <span className="bi bi-c-circle">
                  BURGERHOUSE 2025 ALL RIGHTS RESERVED
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPage;
