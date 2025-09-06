import { useContext } from "react";
import { CartContext } from "./Cartprovider";


const Cart = () => {
  const { cartItem } = useContext(CartContext);
  const totalPrice = cartItem.reduce((acc, product) => acc + product.price, 0);

  return (
    <>
      <div className="container">
        <i className="bi bi-bag-fill">
          
          <h3>Cart</h3>
        </i>

        {cartItem.length === 0 ? (
          <h3>No items in cart</h3>
        ) : (
          <>
            <p>{cartItem.length} item(s) in cart</p>

            {cartItem.map((item) => (
              <div
                key={item.id}
                className="card-2 col-12 col-sm-7 col-md-6 col-lg-4 py-4"
              >
                <div className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="mx-auto my-5"
                    width={150}
                    height={150}
                  />
                  <h4 className="text-center">{item.name}</h4>
                  <p className="text-center">₹{item.price}</p>
                </div>
              </div>
            ))}

            <h3>TOTAL PRICE ₹: {totalPrice}</h3>
            <button className="btnadd">ORDER</button>
          </>
        )}
      </div>
      <section className="icons3">
        <div className="container">
          <i classname="bi bi-credit-card-fill"></i>
        </div>
      </section>
    </>
  );
};

export default Cart;
