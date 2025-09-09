import { useContext } from "react";
import { CartContext } from "./Cartprovider";


// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cartItem, increaseQty, decreaseQty,removeItem } = useContext(CartContext);

  const totalQty = cartItem.reduce((acc, product) => acc + (product.qty || 1), 0);
  
  const totalPrice = cartItem.reduce(
    (acc, product) => acc + product.price * (product.qty || 1),
    0
  );

  const handleOrder = () => {
    if (cartItem.length === 0) {
      toast.warn("⚠️ Your cart is empty. Please add some items.", {
        position: "top-center",
      });
      return;
    }

    toast.success("✅ Your order has been placed successfully!", {
      position: "top-center",
    });
  };

  return (
    <>
      <section className="header">
        <div className="container">

          {cartItem.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-cart-x display-1 text-muted"></i>
              <h3 className="mt-3">Your cart is empty</h3>
              <p className="text-muted">Start shopping to add items!</p>
            </div>
          ) : (
            <>
              <h3>{totalQty} item(s) in cart</h3>

              <div className="row">
                {cartItem.map((item) => (
                  <div key={item.id}className="col-12 col-sm-7 col-md-6 col-lg-4 py-4" >
                    <div className="card-2 cart-item p-3 shadow-sm text-center">
                      <img src={item.image}alt={item.name}className="mx-auto my-3"width={150}height={150}/>
                      <h4>{item.name}</h4>
                      <h4>₹{item.price} </h4>

                      {/* Increment / Decrement Buttons */}
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <button className="btn btn-outline-warning "onClick={() => decreaseQty(item.id)} >-</button>
                        <span className="fw-bold">{item.qty || 1}</span>
                        <button className="btn btn-outline-warning "onClick={() => increaseQty(item.id)}>+</button>
                        <button className="btn btn-sm btn-outline-danger"onClick={() => removeItem(item.id)}><span className="bi bi-trash"></span></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center my-4 p-3 bg-light rounded shadow-sm">
                <h5>Total Items: {totalQty}</h5>
                <h3>
                  TOTAL PRICE ₹:{" "}
                  <span className="text-danger fw-bold">{totalPrice}</span>
                </h3>
              </div>

              <div className="text-center">
                <button
                  className="btn btn-danger"
                  onClick={handleOrder}
                  disabled={cartItem.length === 0}
                >
                  ORDER
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer Section */}
     <section className="footer bg-black text-center text-white py-5 mt-5">
  <h4>WE ACCEPT ALL CARDS</h4>
  <h5>Safe & secure payments</h5>
  <div className="h4 pb-2 mb-4 text-danger border-bottom border-danger"></div>
  <div className="icons">
    
    <i className="fa-brands fa-cc-visa"></i>
    <i className="fa-brands fa-cc-mastercard"></i>
    <i className="fa-brands fa-cc-paypal"></i>
  </div>
</section>

      <ToastContainer />
    </>
  );
};

export default Cart;
