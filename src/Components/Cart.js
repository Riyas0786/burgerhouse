import { useContext } from "react";
import { CartContext } from "./Cartprovider";
import { useNavigate } from "react-router-dom";
// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cartItem, increaseQty, decreaseQty, removeItem, setCartItem } = useContext(CartContext);
  const navigate =useNavigate();
  const totalQty = cartItem.reduce((acc, product) => acc + (product.qty || 1), 0);
  const totalPrice = cartItem.reduce(
    (acc, product) => acc + product.price * (product.qty || 1),
    0
  );

  const handleOrder = () => {
    if (cartItem.length === 0) {
      toast.warn("⚠️ Your cart is empty. Please add some items.", { position: "top-center" });
      return;
    }

    toast.success("✅ Your order has been placed successfully!", { position: "top-center" });

    // Wait for toast to show, then reload
    setTimeout(() => {
      // empty cart (so context is reset)
      setCartItem([]);
      // reload page
      window.location.reload();
    }, 1500);
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
              <button className="btn btn-warning" onClick={()=>{navigate('/menu') }}>make order</button>
            </div>
          ) : (
            <>
              <h3 className="mb-4">{totalQty} item(s) in cart</h3>

              <div className="row">
                {cartItem.map((item) => (
                  <div key={item.id} className="col-12 col-sm-6 col-md-4 py-3">
                    <div className="card h-100 shadow-sm p-3 text-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="mx-auto my-3"
                        width={150}
                        height={150}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <h6 className="text-danger">₹{item.price}</h6>

                        <div className="d-flex justify-content-center align-items-center gap-2 mt-3">
                          <button
                            className="btn btn-outline-warning"
                            onClick={() => item.qty > 1 && decreaseQty(item.id)}
                          >
                            -
                          </button>
                          <span className="fw-bold">{item.qty || 1}</span>
                          <button
                            className="btn btn-outline-warning"
                            onClick={() => increaseQty(item.id)}
                          >
                            +
                          </button>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => removeItem(item.id)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center my-4 p-3 bg-light rounded shadow-sm">
                <h5>Total Items: {totalQty}</h5>
                <h3>
                  TOTAL PRICE ₹: <span className="text-danger fw-bold">{totalPrice}</span>
                </h3>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-danger px-5"
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
        <div className="container">
          <div className="row">
        <h4>WE ACCEPT ALL CARDS & UPI Payments</h4>

        <div className="my-3">
          <i className="bi bi-shield-check" style={{ fontSize: "70px" }}></i>
          <h5>
            100% <br /> Safe & Secure Payments
          </h5>
        </div>
        <div className="icons fs-1">
          <i className="fa-brands fa-cc-visa mx-2"></i>
          <i className="fa-brands fa-cc-mastercard mx-2"></i>
          <i className="fa-brands fa-cc-paypal mx-2"></i>
        <div className="h4 pb-2 mb-4 text-danger border-bottom border-white"></div>   
        </div>
        <div className="col-lg-4">
            <li>LEGAL<br/>Terms & Conditions<br/>Privacy Policy<br/>Promotional</li>
        </div>
        <div className="col-lg-4">
        <li>Contact us <br/>Help & Support<br/>Partner with us <br/>Ride with u</li>
      </div>
          <div className="col-lg-4">
           <li > Life at BurgerHouse<br/>Explore with BurgreHouse<br/>BurgerHouse News<br/>Snackables</li>
          </div>
        <h6 className="my-5 mb-0">All Rights Reserved</h6>
        </div></div>
      </section>

      <ToastContainer />
    </>
  );
};

export default Cart;
