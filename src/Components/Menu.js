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
import vegpng from '../Assets/Menu/veg png.jpeg';
import { CartContext } from './Cartprovider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import nonveg from '../Assets/Menu/nonveg.jpg';


const products = [
  { id: 1, name: 'VEG BURGER', category: 'Food', subtitle: 'Fresh and tasty veg burger', price: 150, image: Burger_1,image1:vegpng },
  { id: 2, name: 'MUTTON BURGER', category: 'Food', subtitle: 'Delicious mutton burger', price: 220, image: Burger_2,image2:nonveg },
  { id: 3, name: 'PRAWN BURGER', category: 'Food', subtitle: 'Crispy prawn delight', price: 200, image: Burger_3,image2:nonveg  },
  { id: 4, name: 'BEEF BURGER', category: 'Food', subtitle: 'Juicy beef patty burger', price: 140, image: Burger_4,image2:nonveg },
  { id: 5, name: 'CHICKEN BURGER', category: 'Food', subtitle: 'Classic chicken burger', price: 130, image: Burger_5,image2:nonveg },
  { id: 6, name: 'CHEESE BURGER', category: 'Food', subtitle: 'Cheesy goodness burger', price: 110, image: Burger_6,image1:vegpng },
  { id: 7, name: 'HOTDOG BURGER', category: 'Food', subtitle: 'Hotdog style burger', price: 180, image: Burger_7,image2:nonveg },
  { id: 8, name: 'CHICKEN WINGS', category: 'Food', subtitle: 'Spicy crispy wings', price: 190, image: Burger_8,image2:nonveg },
  { id: 9, name: 'BROASTED BURGER', category: 'Food', subtitle: 'Crispy broasted burger', price: 160, image: Burger_9,image2:nonveg },
  { id: 10, name: 'MOJITO', category: 'Drink', subtitle: 'Refreshing mint drink', price: 90, image: Drinks_1,image1:vegpng  },
  { id: 11, name: 'LIME', category: 'Drink', subtitle: 'Fresh lime juice', price: 50, image: Drinks_2,image1:vegpng },
  { id: 12, name: 'GINGER LIME', category: 'Drink', subtitle: 'Spicy ginger lime', price: 60, image: Drinks_3,image1:vegpng },
  { id: 13, name: 'ORANGE', category: 'Drink', subtitle: 'Fresh orange juice', price: 40, image: Drinks_4,image1:vegpng },
  { id: 14, name: 'COCKTAIL', category: 'Drink', subtitle: 'Fruity cocktail mix', price: 110, image: Drinks_5,image1:vegpng },
  { id: 15, name: 'GRAPE LIME', category: 'Drink', subtitle: 'Tangy grape lime', price: 80, image: Drinks_6,image1:vegpng },
];
const MenuPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');

  
  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory 
  });

  
  if (sortOrder === 'lowToHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'highToLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <div className="container">
        {/* Search bar */}
        <input
          type="search"     
          className="form-control mb-3 my-3"
          value={searchTerm}
          placeholder="Search for products..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filters Row */}
        <div className="d-flex flex-wrap gap-2 mb-3">
          {/* Category Filter */}
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ maxWidth: "200px" }}
          >
            <option value="All">All</option>
            <option value="Food">Burgers </option>
            <option value="Drink">Drinks</option>
          </select>


          {/* Sort Option */}
          <select
            className="form-select"
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
 
          <div className="text-center text-white bg-danger" >
          <p>🔥 BUY ONE GET ONE FREE FOR LIMITED TIME ONLY !!!! 🔥</p>
        </div>
    

        {/* Products Grid */}
        <div className="row">
          {filteredProducts.length === 0 ? (
            <h4>NO PRODUCTS FOUND</h4>
          ) : (
            filteredProducts.map((product) => (
              <div className="col-12 col-sm-6 col-md-4 my-3" key={product.id}>
                <div className=" rounded shadow  p-5 mb-3 mx-2" style={{textAlign:'center',position:'relative'}}>
                  <div style={{ position: "absolute", top: "8px", right: "8px" }}>
                    <img src={product.image1} alt=''  width={20}/>
                    <img src={product.image2} alt='' width={20}/></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ height: '150px', objectFit: 'contain' }}
                    className="mx-auto"
                  />  
                  <h5 className="card-title mt-2 bg-warning">{product.name}</h5>
                  <p className="card-text">{product.subtitle}</p>
                  <h5 className="text-danger">₹{product.price}</h5>
                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        addToCart(product);
                        navigate('/cart');
                      }}
                    >
                      BUY NOW
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        addToCart(product);
                        
                      }}
                    >
                      <i className="bi bi-bag-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
 


    </>
  );
};

export default MenuPage;
