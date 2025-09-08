import React, { useState } from "react";

const Account = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      setSuccessMessage("");
    } else {
      setSuccessMessage("Welcome to Burger House! Your account has been created successfully.");
      setErrorMessage("");
      setEmail("");
      setPassword("");
    }
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
                placeholder="EMAIL/PHONE NUMBER "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-3 mx-auto "/>
              <input
                type="password"
                placeholder="PASSWORD "
                
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-3 mx-auto"
              />
              <button
                type="submit"
                className="btn btn-warning w-100"
              >
                SIGN IN
              </button>
            </form>
            <section className="text-center my-3">
              <p>Didn't have an account</p>
              <h6 className="text-success">SIGN UP</h6>
              <p>OR SIGN IN WITH</p>
              <button className="btn btn-outline-warning  "><span className="bi bi-google"></span></button>
              <button className="btn btn-outline-dark mx-3 "><span className="bi bi-apple"></span></button>
              <button className="btn btn-outline-primary  "><span className="bi bi-microsoft"></span></button>
            </section>

            {/* Messages */}
            {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
            {successMessage && <p className="text-success mt-3">{successMessage}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
