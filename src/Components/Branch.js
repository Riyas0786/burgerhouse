import React from 'react'
import chennaiimage from '../Assets/BRANCH/chennaicentral.png'
import hyderabadimage from '../Assets/BRANCH/hyderabad.png'
import maduraiimage from '../Assets/BRANCH/madurai.png'
import bangaloreimage from '../Assets/BRANCH/bangalore.png'
import footerlogo from "../Assets/Home/Footer_Logo.png"

const Branch = () => {
  return (
    <>
<section className='header'>
  <h3 className='text-primary text-center'>WE HAVE MULTIPLE BRANCHES ON TOP CITIES IN INDIA  </h3>
  <div className='container'>
    <div className='row py-5'>
      <div className='col-12 col-sm-7 col-md-6 col-lg-4  '>
       <div className='card-2 '>
        <div class="go-corner" href="#">
      <div class="go-arrow">
        <img src={chennaiimage} alt='chennai' className='mx-auto' width={200}/>
        <h3 className='text-center text-warning'>CHENNAI</h3>
        <i class="bi bi-shop-window">30+</i>
      </div>
      </div>
      </div>
          </div>   
       <div className='col-12 col-sm-7 col-md-6 col-lg-4 '>
        <div className='card-2'>
        <div class="go-corner" href="#">
      <div class="go-arrow">
        <img src={hyderabadimage} alt='hyderabad' className='mx-auto' width={200}/>
        <h3 className='text-center text-primary'>HYDERABAD</h3>
        <i class="bi bi-shop-window">30+</i>
        </div>
        </div>
        </div>
    </div>
       <div className='col-12 col-sm-7 col-md-6 col-lg-4 '>
        <div className='card-2'>
        <div class="go-corner" href="#">
      <div class="go-arrow"></div>
        <img src={maduraiimage} alt='MADURAI' className='mx-auto' width={200}/>
        <h3 className='text-center text-success'>MADURAI</h3>
        <span class="bi bi-shop-window">10+</span>
        </div>
        </div>
        </div>
    </div>
    <div className=' col-12 col-sm-7 col-md-6 col-lg-4 '>
      <div className='card-2'>
        <div class="go-corner" href="#/menu">
      <div class="go-arrow">
        <img src={bangaloreimage} alt='bangalore' className='mx-auto'width={200}/>
        <h3 className='text-center text-danger'>BANGALORE</h3>
        <span class="bi bi-shop-window">25+</span>
    </div>
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

export default Branch
