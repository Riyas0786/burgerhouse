import React from 'react'
import reliableimg from '../Assets/CAREER/reliable img.png'
import franchiseimg from '../Assets/CAREER/franchise img.png'
import footerlogo from "../Assets/Home/Footer_Logo.png";
const Career= () => {

  const showAlert = () => {
     // prevents page reload
    alert("Thanks Our customer support will call you ");
  };
  return (
   <>
   
       <section className='header'>
        <div className='container '>
         <div className='row'>
           <h1>WELCOME TO INDIA'S MOST ADMIRED <br/>AND AFFORDABLE FRANCHISE</h1>
           <div className='col-12 col-sm-7 col-md-6 col-lg-4  '> 
              <img src={franchiseimg} alt='franchiseimg'  className='my-5 'style={{borderRadius:'15px'}}/>
            </div>
             <div className='col-12 col-sm-7 col-md-6 col-lg-4 my-5 '> 
           <div className='careercard'>
             <h3 className='mx-3'>FRANCHISE ENQUIRY</h3>
             <form className='mx-2 '>
              <label form='name'><h3>Name</h3></label>
              <input type="text" placeholder='Enter your name' required className='form-control mx-auto ' />
              <label form='name'><h3>Mobile Number</h3></label>
              <input type="text" placeholder='Enter your number'required className='form-control mx-auto ' />
              <label form='name'><h3>Email</h3></label>
              <input type="email" placeholder='Enter your email' required className='form-control mx-auto ' />
              <label form='name'><h3>Location</h3></label>
              <input type="location" placeholder='Enter your location' required className='form-control mx-auto ' />
              <button className='btn btn-danger tablebtn my-3 mx-5'onClick={showAlert}>SUBMIT</button>
              </form>
              </div>
              </div>
          </div>
         </div>
       </section>
    
        <section className="footerfixed-background2">
      <div className="container-fluid">
        <div className="row align-items-center"> {/* ✅ makes both columns level */}
          
          {/* Left Column */}
          <div className="col-lg-6 text-lg-start text-center">
            <img
              src={footerlogo}
              alt="footerlogo"
              className="py-3 mx-lg-0 mx-auto d-block"
              width={250}
            />
            <p className="text-white py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis amet
              necessitatibus velit vitae inventore quae iusto repellendus ullam libero voluptates,
              numquam cum cumque atque. Recusandae exercitationem perferendis quibusdam quos?
            </p>
    
            <span className="bi bi-geo-alt-fill text-white d-block py-1">
              45, SOUTH CAR STREET, MADURAI
            </span>
            <span className="bi bi-envelope text-white d-block py-1">
              INFO@BURGERHOUSE.COM
            </span>
            <div className="my-2">
              <span className="bi bi-shop-window text-white">
                MONDAY-FRIDAY: 10AM-11PM <br /> SATURDAY-SUNDAY: 10AM-12AM
              </span>
            </div>
          </div>
    
          {/* Right Column */}
          <div className="col-lg-6 text-lg-end text-center">
            <div className="icons-2 my-3">
              <h5 className="text-white">DOWNLOAD APP ON</h5>
              <button className="btn btn-success my-2">
                <span className="fa-brands fa-google-play text-white mx-1"></span>
                ANDROID
              </button>
              <br />
              <button className="btn btn-primary  my-2">
                <span className="fa-brands fa-app-store text-white mx-auto"></span>
                APPLE
              </button>
              <h6 className="text-white py-3">DESIGNED & DEVELOPED BY <br /> RIYAS KHAN</h6>
    
              <h6 className="text-white">FOLLOW US ON</h6>
              <i className="bi bi-instagram text-white mx-2 fs-4"></i>
              <i className="bi bi-facebook text-white mx-2 fs-4"></i>
              <i className="bi bi-twitter text-white mx-2 fs-4"></i>
              <i className="bi bi-whatsapp text-white mx-2 fs-4"></i>
            </div>
    
            <div className="copyright my-3">
              <span className="bi bi-c-circle text-white">
                BURGERHOUSE 2025 ALL RIGHTS RESERVED
              </span>
            </div>
          </div>
    
        </div>
      </div>
    </section>
    
   </>
  )
}

export default Career
