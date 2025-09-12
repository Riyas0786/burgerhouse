import React from 'react'
import HeaderImage from '../Assets/Home/Banner_Img.png';
import BannerImage1 from '../Assets/Home/Header_Img_1.png';
import BannerImage2 from '../Assets/Home/Header_Img_2.png';
import BannerImage3 from '../Assets/Home/Header_Img_3.png';
import LandImage1 from '../Assets/Home/Landing_Img_1.png';
import LandImage2 from '../Assets/Home/Landing_Img_2.png';
import LandImage3 from '../Assets/Home/Landing_Img_3.png';
import FlexImage1 from '../Assets/Home/Container_Img.png';
import sliceimage from '../Assets/Home/Slice_Img.png';
import sliceimage1 from '../Assets/Home/Slice_Img_1.png';
import sliceimage2 from '../Assets/Home/Slice_Img_2.png';
import footerlogo from '../Assets/Home/Footer_Logo.png';
import { Carousel } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';

const Home = () => {
const navigate = useNavigate();   
  const showAlert = () => {
    alert("Your table has been reserved successfully!");
  };  
  return (
    <>
    {/* Header Section */}
    <section className='fixed-background '>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-sm-7 col-md-6 col-lg-4  my-5 '>
                    <h1 style={{color:'#6E260E',textShadow: '4px 3px 3px rgba(255, 255, 255, 1)',}}>BURGER</h1>
                        <h1 style={{color:'#6E260E',textShadow: '4px 3px 3px rgba(255, 255, 255, 1)',fontSize:'30px'}}>WEEK</h1>
                    
                    <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam consequatur minima corrupti distinctio perferendis totam illo est quam laboriosam dignissimos? Aperiam officia fugit atque sunt rerum provident voluptate adipisci quos? Fuga asperiores facere perferendis debitis eligendi aut omnis itaque nam corrupti optio explicabo, inventore quas soluta placeat magnam provident odit?</p>
                </div>

                <div className='col-12 col-sm-7 col-md-6 col-lg-4 ' >
                    <img src={HeaderImage} alt="CompoImage" className='py-5 mx-5' />
                </div>
            </div>
        </div>
    </section>

    {/* Banner */}
    <section className='banner'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 px-3 py-5'>
                <img src={BannerImage1} alt='BannerImage' />
                </div>
                <div className='col-lg-6 px-3 py-5'>
                    <img src={BannerImage2} alt='BannerImage' />
                    <img src={BannerImage3} alt='BannerImage' className='py-3' />
                </div>
            </div>
        </div>
    </section>

   <section className='landing py-5'>
  <div className='container'>
    <h5 className='text-center text-primary mx-auto bg-warning w-50'>
      ALWAYS TASTY BURGER
    </h5>
    <h2 className='text-center text-primary py-2'>CHOOSE & ENJOY</h2>
    <p className='text-center text-primary py-2'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut corporis earum.
      Adipisci, earum consectetur? Laudantium voluptatum dignissimos ad molestiae qui ullam
      dolor hic est, ipsam maxime ipsa earum sit magni illo nemo labore eum quis.
      Iusto obcaecati consequatur delectus.
    </p>

    {/* Slideshow Carousel */}
    
    <Carousel interval={2000}
    pause='hover' controls={false} indicators={false} >
      {/* Slide 1 */}
      <Carousel.Item>
        <div className='text-center'>
          <img src={LandImage1} alt="LandImage1" width="300px" className='mx-auto my-3' />
          <h4 className='text-primary'>Tandoor Chicken Burger</h4>
          <p className='text-primary py-3'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Ipsum iure voluptatum explicabo, quae reprehenderit perferendis nihil.
          </p>
          <button className='btn btn-danger' style={{ backgroundColor: 'red' }}onClick={()=>navigate("/menu")}>
            Order Now
          </button>
        </div>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <div className='text-center'>
          <img src={LandImage2} alt="LandImage2" width="250px" className='mx-auto my-3' />
          <h4 className='text-primary'>Classic Veggie Burger</h4>
          <p className='text-primary py-3'>
            Delicious veggie burger made with fresh ingredients and special sauce.
          </p>
          <button className='btn btn-danger' style={{ backgroundColor: 'red' }}onClick={()=>navigate("/menu")}>
            Order Now
          </button>
        </div>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <div className='text-center'>
          <img src={LandImage3} alt="LandImage3" width="300px" className='mx-auto my-3' />
          <h4 className='text-primary'>Cheese Overload Burger</h4>
          <p className='text-primary py-3'>
            A juicy burger with double cheese, perfect for cheese lovers.
          </p>
          <button className='btn btn-danger' style={{ backgroundColor: 'red' }} onClick={()=>navigate("/menu")}>
            Order Now
          </button>
        </div>
      </Carousel.Item>
    </Carousel>
  </div>
</section>


    {/* Flex card Section */}
    <section className="container my-5">
  <div className="row align-items-center shadow p-4">
    {/* Text Section */}
    <div className="col-12 col-md-6">
      <h5 className="text-muted">Discover</h5>
      <h2 className="fw-bold">UPCOMING EVENTS</h2>
      <h6>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        perspiciatis amet necessitatibus velit vitae inventore quae iusto
        repellendus ullam libero voluptates, numquam cum cumque atque.
        Recusandae exercitationem perferendis quibusdam quos?
      </h6>
    </div>

    {/* Image Section */}
    <div className="col-12 col-md-6 text-center">
      <img
        src={FlexImage1}
        alt="Upcoming Event"
        className="img-fluid rounded shadow"
      />
    </div>
  </div>
</section>

    
    {/* Slice Section */}
    <section className='slice'>
       <div className='container '>
        <div className='row '>
          <div className='col-12 col-sm-7 col-md-6 col-lg-4 '>
            <img src={sliceimage} alt='sliceimg' width={200}/>
         </div>
         <div className='col-12 col-sm-7 col-md-6 col-lg-4'>
            <h5 className='text-center text-primary'>RESERVATION</h5>
            <h3 className='text-center text-primary'>BOOK YOUR TABLE</h3>
         </div>
        </div>
       </div>
    </section>

     {/* Table Reservation */}
         <section className='header'>
          <div className='container'> 
             <div className='row'>
               <div className='col-lg-3 '>
                 <img src={sliceimage1} alt='sliceimage' width={120}/>
              </div>
           <div className='col-lg-3' >
             <input type='text' id='name' placeholder='NAME' required className='form-control w-100  my-3'></input>
               <input type='Email' id='email' placeholder='EMAIL'className='form-control w-100  '></input>
                 <input type='date' id='date' placeholder='DATE'className='form-control w-100  my-3'></input> 
          </div>
          <div className='col-lg-3'>
             <input type='time'  id='time' placeholder='TIME'className='form-control w-100 my-3'></input>
              <input type='text' id='people' placeholder='PEOPLE'className='form-control w-100'></input>
               <button className='tablebtn my-3 w-100 'onClick={showAlert}>FIND A TABLE</button>
              </div>
              <div className='col-lg-3 '>
              <img src={sliceimage2} alt='sliceimage2' width={300} />
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
            <span className="fa-brands fa-google-play text-white mx-1"></span>GET IT ON <br/>
            GOOGLE PLAY
          </button>
          <br />
          <button className="btn btn-primary my-2" style={{width:'127px'}}>
            <span className="bi bi-apple text-white mx-auto"></span>
            GET IT ON<br/>APP STORE
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

export default Home
