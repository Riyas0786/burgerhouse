import { useContext } from "react";
import { CartContext } from "./Cartprovider";
import { useNavigate } from "react-router-dom";
import cuppng from "../Assets/BRANCH/cup png.png";
import burgervid from "../Assets/CONTACT/burgervid.mp4";
// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoAdd, IoClose, IoRemove } from "react-icons/io5";



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
  if (cartItem.length === 0) return;   // important check

  const options = {
    key: "rzp_live_S3FQxAdD8F1tWv",   // your Razorpay key
    amount: totalPrice * 100,
    currency: "INR",
    name: "Burger House",
    description: "Order Payment",

    handler: function (response) {
      toast.success(<VideoToast src={burgervid} />, {
        position: "top-center",
        autoClose: 1500,
      });

      setTimeout(() => {
        setCartItem([]);  // clear cart
        navigate("/menu"); // redirect
      }, 2000);
    },

   modal: {
      ondismiss: function () {
        toast.error("Payment Cancelled ❌",{
        position:"top-center",
      autoClose:1500,},);
      
        
      }
    },
     theme: {
      color: "#ffb300"
    }
  };


  const razor = new window.Razorpay(options);
  razor.open();  

  console.log("totalprice:",totalPrice);
  if (totalPrice <= 0) {
  toast.error("Invalid payment amount");
  return;
}

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
                className="bg-amber-400 w-40 rounded-pill h-10 fs-4 text-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-400 ..."
                onClick={() => navigate("/menu")}
              >
                Make Order
              </button>
              
              <img
                src={cuppng}
                alt="cup"
                className="img-fluid mt-5 flex mx-auto cupimg"
                style={{ maxWidth: "300px" }}
              /></div>
           
          ) : (
            <>
              <h3 className="mb-4">{totalQty} item(s) in cart</h3>

              <div className="row">
                {cartItem.map((item) => (
                  <div key={item.id} className="col-12 col-sm-6 col-md-4 py-3">
                    {/* Cartpage card */}
                    <div className="productcard text-center  p-4 h-100 position-relative"
                      style={{ minHeight: "350px" }}
                    >
                      
                          <div style={{ position: "absolute", top: "8px", right: "8px" }}>
                          <button
                            className="p-2 rounded-full hover:bg-amber-400 transition duration-200"
                            onClick={() => removeItem(item.id)}
                          >
                            <IoClose size={24} className="hover:scale-110 transition" />
                          </button>
                          </div>
                      {/* Veg/Non-Veg icons */}
                      <div style={{ position: "absolute", top: "8px", left: "8px" }}>
                        <img src={item.image1} alt="" width={20} />
                        <img src={item.image2} alt="" width={20} />
                      </div>
                        {/* card image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid mx-auto my-3"
                        style={{ maxHeight: "150px", objectFit: "contain" }}
                      />
                      {/* card price name */}
                      <div className="card-body">
                        <h5 className="card-title bg-amber-400">{item.name}</h5>
                        <h5 className="text-danger fw-bold">₹{item.price}</h5>
                        
                        <div className="flex justify-center align-items-center gap-4 mt-3">
                          {/* decrement */}
                          <button className="p-2 rounded-full hover:bg-amber-400 transition duration-200"
                            onClick={() => item.qty > 1 && decreaseQty(item.id)}
                          >
                            <IoRemove size={24} className="hover:scale-110 transition text-black" />
                          </button>
                          {/* Increment */}
                          <span className="fw-bold bg-amber-300 fs-4 w-10  ">{item.qty || 1}</span>
                          <button
                            className="p-2 rounded-full hover:bg-amber-400 transition duration-200"
                            onClick={() => increaseQty(item.id)}
                          >
                            <IoAdd size={24} className="hover:scale-110 transition text-black" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center my-4 p-2 mx-auto rounded shadow "style={{maxWidth:"350px",border:'2px solid  rgba(255, 179, 0, 0.75)'}} >
                <h5>Total Items: {totalQty}</h5>
                <h4>
                  TOTAL PRICE ₹:{" "}
                  <span className="text-danger fw-bold">{totalPrice}</span>
                </h4>
              </div>

              <div className="text-center pb-3">
                <button
                  type="button"
                  className="btn-amber"
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
      <section className="footer bg-black text-center text-white py-2 ">
        <div className="container my-5">
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
