import React from "react"
import logopng from '../Assets/Home/Logo.png'
const Account = () => {
  const showAlert = () => {
    // prevents page reload
    alert("Welcome to Burger house! Your account has been created successfully.");
  };
  return (
<>
                {/*sign up page  */}
        <section className="acc-card mx-auto my-5" > 
         <div className=" col-12 col-sm-7 col-md-6 col-lg-4  ">
          <div className="input2">
           <h3>Registration</h3>
            <input type="email" id="email"placeholder="EMAIL/PHONE NUMBER" className=" mx-0 " ></input><br/> 
             <input type="password" id="pwd" placeholder="PASSWORD" className="mx-0"></input><br/>
              <button className="btn my-3  " style={{backgroundColor:'red',color:'white'}} onClick={showAlert}>SIGN IN</button>
             </div>
            </div>
          </section> 

  </>
    )
}

  export default Account  