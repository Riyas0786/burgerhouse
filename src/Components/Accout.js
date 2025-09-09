import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Account = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.warn("⚠️ Please fill in all fields.", { position: "top-center" });
      return;
    }

    toast.success("✅ Welcome to Burger House! You have signed in successfully.", {
      position: "top-center",
    });

    // Clear form
    setEmail("");
    setPassword("");
  };

  return (
    <section className="mx-auto my-5">
      <div className="container d-flex justify-content-center">
        <div className="col-12 col-sm-7 col-md-6 col-lg-4">
          <div className="input2 p-4 border rounded shadow">
            <h3 className="mb-4 text-center mx-auto bg-warning w-50">LOG IN</h3>
            <form onSubmit={handleSignIn}>
              <input
                type="email"
                placeholder="EMAIL/PHONE NUMBER"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-3 mx-auto"
              />
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-3 mx-auto"
              />
              <button type="submit" className="btn btn-warning w-100">
                SIGN IN
              </button>
            </form>

            <section className="text-center my-3">
              <p>Didn't have an account?</p>
              <button className="btn btn-danger btn-sm    ">SIGN UP</button>
              <p>OR SIGN IN WITH</p>
              <button className="btn btn-outline-danger">
                <i className="bi bi-google"></i>
              </button>
              <button className="btn btn-outline-dark mx-3">
                <i className="bi bi-apple"></i>
              </button>
              <button className="btn btn-outline-primary">
                <i className="bi bi-microsoft"></i>
              </button>
              <h6 className="text-center my-2">ALL TERMS & CONDITIONS APPLIED</h6>
            </section>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </section>
    
  );
};

export default Account;
