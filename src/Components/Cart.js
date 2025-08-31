import { useContext } from "react"
import { CartContext } from "./Cartprovider"

const Cart = () => {
      const {cartItem}=useContext(CartContext)
  const totalPrice = cartItem.reduce((acc, product) => acc + product.price, 0);
 
  return (
<>
<div className="container">
    <i className="bi bi-bag-fill"><h3>Cart</h3></i>
    {cartItem.length=== 0?
    (<h3>No items in cart</h3>):
   cartItem.length>1?
    (<p>{cartItem.length}items in cart</p>):
    (cartItem.map((item)=>{

      return(
            <div className="card-2 col-12 col-sm-7 col-md-6 col-lg-4 py-4">
             < div key={item.id}>
              <img src={item.image} alt="cartimg" className='mx-auto my-5'width={150} height={150} margin={50}/>
               <h4 className="text-center">{item.name}</h4>
                <p className="text-center" >{item.price}</p> 
              </div>
             </div>       
        ) }))}
          <h3>TOTAL PRICE ₹:{totalPrice}</h3>
           <button className="btnadd">ORDER</button>
         </div>
        </>
      )
     }

  export default Cart;