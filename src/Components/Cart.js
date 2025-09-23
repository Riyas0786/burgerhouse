import { useContext } from "react";
import { CartContext } from "./Cartprovider";
import { useNavigate } from "react-router-dom";
import cuppng from "../Assets/BRANCH/cup png.png";
import burgervid from "../Assets/CONTACT/burgervid.mp4";
// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Custom component for video toast with overlay text
const VideoToast = ({ src }) => (
  <div
    style={{
      position: "relative",
    }}
  >
    {/* Video */}
    <video
      src={src}
      autoPlay
      muted
      loop
      style={{width:"100%", height: "100%", display: "block", margin: "0 auto"}}
    />

  </div>
);

const Cart = () => {
  const { cartItem, increaseQty, decreaseQty, removeItem, setCartItem } =
    useContext(CartContext);
  const navigate = useNavigate();

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

    toast.success(<VideoToast src={burgervid}  />, {
      position: "top-center my-5",
      autoClose: 1500,
    });

    setTimeout(() => {
      setCartItem([]); // clear cart
       navigate("/menu"); // redirect instead of reload
    }, 2000);
  };

  return (
    <>
      <section className="header">
        <div className="container">
          {cartItem.length === 0 ? (
            <div className="text-center py-5">
              <h2 className="mt-3 fw-bold text-warning fs-2">YOUR CART IS EMPTY</h2>
              <h2 className="mt-2 fw-bold fs-1">LET'S MAKE AN ORDER</h2>
              <button
                className="btn btn-warning btn-lg rounded-pill mt-3"
                onClick={() => navigate("/menu")}
              >
                Make Order
              </button>
              <img
                src={cuppng}
                alt="cup"
                className="img-fluid mt-5 mx-auto d-block"
                style={{ maxWidth: "300px" }}
              />
            </div>
          ) : (
            <>
              <h3 className="mb-4">{totalQty} item(s) in cart</h3>

              <div className="row">
                {cartItem.map((item) => (
                  <div key={item.id} className="col-12 col-sm-6 col-md-4 py-3">
                    <div
                      className="rounded shadow text-center p-4 h-100 position-relative"
                      style={{ minHeight: "350px" }}
                    >
                      {/* Veg/Non-Veg icons */}
                      <div style={{ position: "absolute", top: "8px", right: "8px" }}>
                        <img src={item.image1} alt="" width={20} />
                        <img src={item.image2} alt="" width={20} />
                      </div>

                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid mx-auto my-3"
                        style={{ maxHeight: "150px", objectFit: "contain" }}
                      />

                      <div className="card-body">
                        <h5 className="card-title bg-warning">{item.name}</h5>
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
                  TOTAL PRICE ₹:{" "}
                  <span className="text-danger fw-bold">{totalPrice}</span>
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
          <h4>WE ACCEPT ALL CARDS & UPI Payments</h4>

          <div className="my-3">
            <i className="bi bi-shield-check" style={{ fontSize: "70px" }}></i>
            <h5>
              100% <br /> Safe & Secure Payments
            </h5>
          </div>

          <div className="d-flex justify-content-center fs-1">
            <i className="fa-brands fa-cc-visa mx-2"></i>
            <i className="fa-brands fa-cc-mastercard mx-2"></i>
            <i className="fa-brands fa-cc-paypal mx-2"></i>
          </div>

          <div className="h4 pb-2 mb-4 text-danger border-bottom border-white">
            <h6 className="text-white  text-center mt-3">
            © Burger House. All rights reserved.
          </h6>
          </div>
        </div>
      </section>

     <ToastContainer
  hideProgressBar
  icon={false}
  closeButton={false}
  draggable={false}
  pauseOnHover={false}
  style={{
    background: "transparent",
    boxShadow: "none",
    padding: 0,
  }}
/>

    </>
  );
};

export default Cart;
