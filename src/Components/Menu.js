import React, { useContext,useState } from 'react'
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

const products =[
  {id:1,  name:'VEG BURGER',subtitle:'lorem ispum sdjfksacfj fhufhwjf fdwhuf', price:100,image:Burger_1},
  {id:2, name:'MUTTON BURGER',subtitle:'lorem ispum sdjfksacfj fhufhwjf fdwhuf', price:220,image:Burger_2},
  {id:3, name:'PRAWN BURGER',subtitle:'lorem ispum sdjfksacfj fhufhwjf fdwhuf', price:200,image:Burger_3},
  {id:4, name:'BEEF BURGER',subtitle:'lorem ispum sdjfksacfj fhufhwjf fdwhuf', price:140,image:Burger_4},
  {id:5, name:'CHICKEN BURGER',subtitle:'lorem ispum sdjfksacfj fhufhwjf fdwhuf', price:130,image:Burger_5},
  {id:6, name:'CHEESE BURGER',subtitle:'lorem ispum sdjfksacfj fhufhwjf fdwhuf', price:110,image:Burger_6},
  {id:7, name:'HOTDOG BURGER',subtitle:'lorem ispum sdjfksacfj fhufhwjf fdwhuf', price:180,image:Burger_7},
  {id:8, name:'CHICKEN WINGS ',subtitle:'lorem ispum sdjfksacfj fhufhwjf fdwhuf', price:190,image:Burger_8},
  {id:9, name:'BROASTED BURGER',subtitle:'lorem ispum sdjfksacfj fhufhwjf fdwhuf', price:160,image:Burger_9},
  {id:10, name:'MOJITO',subtitle:'lorem ispum sdjfksacfj fhufhwjf fdwhuf', price:90,image:Drinks_1},
  {id:11, name:'LIME',subtitle:'lorem ispum sdjfksacfj fhufhwjf fdwhuf', price:50,image:Drinks_2},
  {id:12, name:'GINGER LIME',subtitle:'lorem ispum sdjfksacfj fhufhwjf fdwhuf', price:60,image:Drinks_3},
  {id:13, name:'ORANGE',subtitle:'lorem ispum sdjfksacfj fhufhwjf fdwhuf', price:40,image:Drinks_4},
  {id:14, name:'COCKTAIL',subtitle:'lorem ispum sdjfksacfj fhufhwjf fdwhuf', price:110,image:Drinks_5},
  {id:15, name:'GRAPE LIME',subtitle:'lorem ispum sdjfksacfj fhufhwjf fdwhuf', price:80,image:Drinks_6},
]


const MenuPage = () => {
  
  const {addToCart}=useContext(CartContext);
  const [searchTerm,setSearchTerm] = useState('');
  const filteredProducts = 
  products.filter((product)=>product.name.toLowerCase().includes(searchTerm.toLowerCase()))
;
 
  return(
    <>
      {/* search bar */}     
        < div className='container'>
         <input type='search'className='form-control mb-3 ' value={searchTerm}
          placeholder='searchfor products' onChange={(e)=> setSearchTerm(e.target.value)}/>
        <div className='row'>
          {filteredProducts.length===0?
           (<p>no products found</p>):(filteredProducts.map((product)=>(
          
           <div className='col-12 col-sm-7 col-md-6 col-lg-4 my-5 'key={product.id}>
            <div className='card-2 '>
             <div class="go-corner" href="#">
              <div class="go-arrow">
               <img src={product.image} alt='cardimage' className='mx-auto my-5'width={150} height={150} margin={50} />
                <h5 className='text-center '>{product.name}</h5>
                 <i className='text-center'>{product.icon}</i>
                  <p className='text-center '>{product.subtitle}</p>
                   <h5 className='text-center '>₹{product.price}</h5> 
                   <button className='btn btn-danger mx-3 w-50'>BUY NOW</button>
                    <button className='btn btn-warning' onClick={()=>addToCart(product)}><i className="bi bi-bag-fill"></i></button>
                   </div>
                  </div>
                 </div>
                </div>    
                )))}
             </div>
            </div>
      
         {/* Footer Section */}
            <section className='footerfixed-background2'>
              <div className='container-fluid'>
               <div className='row'>
                 <div className='col-lg-6'>
                  <img src={footerlogo} alt='footerlogo'className='py-3' width={250}/>
                   <p className='text-white py-5'>Lorem ipsum dolor sit amet consecteltur adipisicing elit.deofu fjeufd fjefjs fefjef djwdskwld Dolorum perspiciatis amet necessitatibus velit vitae inventore quae iusto repellendus ullam libero voluptates, numquam cum cumque atque. Recusandae exercitationem perferendis quibusdam quos?</p>
                </div>
                   <div className='col-lg-6' >
                     <div className='icons-2'>
                       <i className="bi bi-geo-alt-fill text-white ">45,SOUTH CAR STREET,MADURAI</i><br/>
                         <i className="bi bi-envelope text-white ">INFO@BURGERHOUSE.COM</i><br/>
                       </div>
                     </div>
                  <div className='col-lg-4 '>
                    <h6 className='text-white py-3'>BURGERHOUSE 2025 ALL RIGHTS RESERVED </h6>  
                  </div>
                  <div className='col-lg-4'>
                   <h6 className='text-white mx-5'>DESGNED & DEVELOPED BY <br/>RIYAS</h6>
                    </div>
                   <div className='col-lg-4'>         
                    <div className='icons '>
                     <i className="bi bi-instagram text-white mx-2 "></i>
                      <i className="bi bi-facebook text-white mx-2"></i>
                       <i className="bi bi-twitter text-white mx-2"></i>
                        <i className="bi bi-whatsapp  text-white mx-2"></i>
                      </div>
                     </div>                      
                    </div>
                  </div>
                </section>
        
    </>
  
  )
}
export default MenuPage
