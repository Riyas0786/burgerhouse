import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';  
import { FaSearch } from "react-icons/fa";
import Burger_1 from '../Assets/Menu/Burger_1.png';
import Burger_2 from '../Assets/Menu/Burger_2.png';
import Burger_3 from '../Assets/Menu/Burger_3.png';
import Burger_4 from '../Assets/Menu/Burger_4.png';
import Burger_5 from '../Assets/Menu/Burger_5.png';
import Burger_6 from '../Assets/Menu/Burger_6.png';
import Burger_7 from '../Assets/Menu/Burger_7.png';
import Burger_8 from '../Assets/Menu/Burger_8.png';
import Burger10 from '../Assets/Menu/Burger_10.png';
import Burger11 from '../Assets/Menu/Burger_11.png';
import Burger12 from '../Assets/Menu/Burger_12.webp';
import Burger13 from '../Assets/Menu/Burger13.webp';
import Burger14 from '../Assets/Menu/Burger14.webp';
import Burger15 from '../Assets/Menu/Burger15.webp';
import Burger16 from '../Assets/Menu/Burger16.webp';
import Drinks_1 from '../Assets/Menu/Drinks_1.png';
import Drinks_2 from '../Assets/Menu/Drinks_2.png';
import Drinks_3 from '../Assets/Menu/Drinks_3.png';
import Drinks_4 from '../Assets/Menu/Drinks_4.png';
import Drinks_5 from '../Assets/Menu/Drinks_5.png';
import Drinks_6 from '../Assets/Menu/Drinks_6.png';
import vegpng from '../Assets/Menu/veg png.jpeg';
import { CartContext } from './Cartprovider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import nonveg from '../Assets/Menu/nonveg.jpg';
import broasted from '../Assets/Menu/chickenbroasted.jpg';
import noproduct from '../Assets/Menu/NoProducts_found.mp4';

// 🛒 Products Array (same as yours, unchanged)
const products = [
  { id: 1, name: 'VEG BURGER', category: 'Food',group:'veg', subtitle: 'Fresh and tasty veg burger', price: 150, image: Burger_1, image1: vegpng },
  { id: 2, name: 'MUTTON BURGER', category: 'Food',group:'nonveg', subtitle: 'Delicious mutton burger', price: 220, image: Burger_2, image2: nonveg },
  { id: 3, name: 'PRAWN BURGER', category: 'Food',group:'nonveg', subtitle: 'Crispy prawn delight', price: 200, image: Burger_3, image2: nonveg },
  { id: 4, name: 'BEEF BURGER', category: 'Food',group:'nonveg', subtitle: 'Juicy beef patty burger', price: 140, image: Burger_4, image2: nonveg },
  { id: 5, name: 'CHICKEN BURGER', category: 'Food',group:'nonveg', subtitle: 'Classic chicken burger', price: 130, image: Burger_5, image2: nonveg },
  { id: 6, name: 'CHEESE BURGER', category: 'Food',group:'veg', subtitle: 'Cheesy goodness burger', price: 110, image: Burger_6, image1: vegpng },
  { id: 7, name: 'HOTDOG BURGER', category: 'Food',group:'nonveg', subtitle: 'Hotdog style burger', price: 180, image: Burger_7, image2: nonveg },
  { id: 8, name: 'CHICKEN WINGS', category: 'Food',group:'nonveg', subtitle: 'Spicy crispy wings', price: 190, image: Burger_8, image2: nonveg },
  { id: 9, name: 'BROASTED BURGER', category: 'Food',group:'nonveg', subtitle: 'Crispy broasted burger', price: 160, image: broasted, image2: nonveg },
  { id: 10, name: 'CHICKEN BROASTED FRENCH FRIES',group:'nonveg', category: 'Food', subtitle: 'Crispy broasted chicken and french fries', price: 240, image: Burger10, image2: nonveg },
  { id: 11, name: 'COMBO BURGER',group:'nonveg', category: 'Food', subtitle: 'Crispy broasted chicken with pepsi and french fries', price: 250, image: Burger11, image2: nonveg },
  { id: 12, name: 'BURGER WITH FRENCH FRIES',group:'nonveg', category: 'Food', subtitle: 'Crispy broasted chicken and french fries', price: 210, image: Burger12, image2: nonveg },
  { id: 13, name: 'CHICKEN GRILL BURGER',group:'nonveg', category: 'Food', subtitle: 'Crispy broasted chicken and french fries', price: 199, image: Burger13, image2: nonveg },
  { id: 14, name: 'BACON BURGER',group:'nonveg', category: 'Food', subtitle: 'Crispy broasted chicken and french fries', price: 149, image: Burger14, image2: nonveg },
  { id: 15, name: 'BEEF CHEESE STUFF BURGER',group:'nonveg', category: 'Food', subtitle: 'Crispy broasted chicken and french fries', price: 229, image: Burger15, image2: nonveg },
  { id: 16, name: 'PANEER BURGER',group:'veg', category: 'Food', subtitle: 'Crispy broasted chicken and french fries', price: 189, image: Burger16, image1: vegpng },
  { id: 17, name: 'MOJITO', category: 'Drink',group:'veg', subtitle: 'Refreshing mint drink', price: 90, image: Drinks_1, image1: vegpng },
  { id: 18, name: 'LIME', category: 'Drink',group:'veg', subtitle: 'Fresh lime juice', price: 50, image: Drinks_2, image1: vegpng },
  { id: 19, name: 'GINGER LIME', category: 'Drink',group:'veg', subtitle: 'Spicy ginger lime', price: 60, image: Drinks_3, image1: vegpng },
  { id: 20, name: 'ORANGE', category: 'Drink',group:'veg', subtitle: 'Fresh orange juice', price: 40, image: Drinks_4, image1: vegpng },
  { id: 21, name: 'COCKTAIL', category: 'Drink',group:'veg', subtitle: 'Fruity cocktail mix', price: 110, image: Drinks_5, image1: vegpng },
  { id: 22, name: 'GRAPE LIME', category: 'Drink',group:'veg', subtitle: 'Tangy grape lime', price: 80, image: Drinks_6, image1: vegpng },
];

const MenuPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [group, setGroup] = useState('default');
  const [sortOrder, setSortOrder] = useState('default');

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || product.category === category;
    const matchesGroup = group === 'All' || product.group === group || group === 'default';
    return matchesSearch && matchesCategory && matchesGroup;
  });

  if (sortOrder === 'lowToHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'highToLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    
    <div className="container ">
      
      
      {/* 🔍 Search bar */}
      <div className='relative  '>
      <FaSearch className=" absolute right-10 top-1/2 -translate-y-1/2 text-red-950"/>
      <input
        type="search"
        className="glassSelect my-3 mb-3"
        value={searchTerm}
        placeholder="Search for burgers..."
        onChange={(e) => setSearchTerm(e.target.value)}
      /></div>

      {/* Filters Row */}
      <div className="d-flex flex-wrap gap-2 mb-3 ">
        <select
          className="glassSelect"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ maxWidth: "200px" }}
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Drink">Drinks</option>
        </select>

        <select
          className="glassSelect"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          style={{ maxWidth: "200px" }}
        >
          <option value="All">All</option>
          <option value="veg">Veg</option>
          <option value="nonveg">Non-Veg</option>
        </select>

        <select
          className="glassSelect"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{ maxWidth: "180px" }}
        >
          <option value="default">Sort by</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      
      </div>

      {/* Flash news */}
      <div className="text-center text-white bg-amber-300 p-1 mb-3 rounded">
        <h5 className="mb-0 text-black"> 🔥Buy One Get One Free For Limited Time Only🔥</h5>
      </div>

      {/* Products Grid */}
      <div className="row">
        {filteredProducts.length === 0 ? (
          <div className="text-center">
            <video
              className="rounded w-100 h-100"
              style={{ maxWidth: "500px", margin: "auto" }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={noproduct} type="video/mp4" />
            </video>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 my-3" key={product.id}>
              {/* Product card */}
              <motion.div
                className="rounded-4 shadow  p-4 mx-2 h-100 flex flex-column  justify-center"
                style={{ textAlign: 'center', position: 'relative' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.04 }}
                whileHover={{ scale: 1.07, boxShadow: "0px 3px 6px rgba(0,0,0,0.2)" }}
              >
                {/* Veg/Non-Veg icons */}
                <div style={{ position: "absolute", top: "7px", right: "7px" }}>
                  {product.image1 && <img src={product.image1} alt="veg" width={20} />}
                  {product.image2 && <img src={product.image2} alt="non-veg" width={20} />}
                </div>

                {/* Product Image */}
                <motion.img
                  src={product.image}
                  alt={product.name}
                  style={{ height: '150px', objectFit: 'contain' }}
                  className="mx-auto"
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                {/* Product Details */}
                <div className="flex-grow-1 d-flex flex-column justify-content-between mt-2">
                  <h5 className="card-title mx-auto bg-amber-400 w-35 fs-3 py-1">{product.name}</h5>
                  <h5 className="card-text bg-light my-2">{product.subtitle}</h5>
                  <h4 className="text-red-600">₹{product.price}</h4>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-2 mt-3">
                  <button
                     className="bg-red-600 rounded w-50 hover:bg-red-700 ... text-white" 
                    onClick={() => {
                      addToCart(product);
                      navigate('/cart');
                    }}
                  ><span className='Text-white'>
                    BuyNow</span>
                  </button>
                  <button
                    className="bg-amber-400 w-10 h-10 rounded hover:bg-amber-500 ... text-black"
                    onClick={() => addToCart(product)}
                  >
                    <i className="bi bi-bag-fill"></i>
                  </button>
                </div>
              </motion.div>
            </div>
          ))
        )}
             </div>      
          </div>
        
      
      
    
  );
};

export default MenuPage;
