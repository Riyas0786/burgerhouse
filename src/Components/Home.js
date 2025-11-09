import React, { useState } from 'react'
import HeaderImage from '../Assets/Home/Banner_Img.png';
import BannerImage1 from '../Assets/Home/Header_Img_1.png';
import BannerImage2 from '../Assets/Home/Header_Img_2.png';
import BannerImage3 from '../Assets/Home/Header_Img_3.png';
import carouselimg1 from '../Assets/Menu/Burger14.webp';
import carouselimg2 from '../Assets/Menu/Burger16.webp';
import carouselimg3 from'../Assets/Menu/Burger15.webp'
import FlexImage1 from '../Assets/Home/Container_Img.png';
import sliceimage from '../Assets/Home/Slice_Img.png';
import sliceimage1 from '../Assets/Home/Slice_Img_1.png';
import sliceimage2 from '../Assets/Home/Slice_Img_2.png';
import deliveryimg from '../Assets/Home/delivery.png';
import account from '../Assets/Home/acc.png.png';
import table from '../Assets/Home/Table.mp4';
import { Carousel } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';


const VideoToast = ({ src }) => (
   <video
      src={src}
      autoPlay
      muted
      playsInline
      loop
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        margin: "0 auto",
      }}
    />);

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const[date,setDate]=useState("");
  const[time,setTime]=useState("");
  const[people,setPeople]=useState("");
const navigate = useNavigate();   
  const tablebtn = (e) => {
    e.preventDefault();
  if(!name||!email||!date||!time||!people){
    toast.warn("⚠️!!Please input all fields",{position:'top-center',className:'fw-bold text-dark bg-warning'});
    return;}
    toast.success(<VideoToast src={table}   />, {
     position: "top-center mb-2",
     autoClose: 3000,
     closeOnClick: false,
     pauseOnHover: false,
     draggable: false,
      style: {
        background: "transparent",
        boxShadow: "none",
        padding: 0,
        border: "none",
      },
   });
   setTimeout(() => navigate("/menu"), 2000);
  
   
    setName();
    setEmail();
    setDate();
    setTime();
    setPeople();

  };  
  return (
    <>
    {/* Header Section */}
    <section className='fixed-background '>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6  my-5 py-5 headertext'>
                    <h1  style={{color:'#6E260E',textShadow: '3px 2px 2px rgba(255, 255, 255, 1)',}}>BURGER</h1>
                        <h1  style={{color:'#6E260E',textShadow: '3px 2px 2px rgba(255, 255, 255, 1)',fontSize:'30px'}}>WEEK</h1>
                    
                    <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam consequatur minima corrupti distinctio perferendis totam illo est quam laboriosam dignissimos? Aperiam officia fugit atque sunt rerum provident voluptate adipisci quos? Fuga asperiores facere perferendis debitis eligendi aut omnis itaque nam corrupti optio explicabo, inventore quas soluta placeat magnam provident odit?</p>
                </div>

                <div className=' col-lg-6 ' >
                  <img src={HeaderImage} alt="CompoImage" className='justify-content-end my-5 mx-5 headerimg' />
                </div>
                
            </div>
        </div>
    </section>

    {/* Banner */}
    <section className='banner'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 px-3 py-5'>
                <img src={BannerImage1} alt='BannerImage' className='image' />
                </div>
                <div className='col-lg-6 px-3 py-5'>
                    <img src={BannerImage2} alt='BannerImage' className='image' />
                    <img src={BannerImage3} alt='BannerImage' className='py-3 image' />
                </div>
            </div>
        </div>
    </section>

   <section className='landing py-5' >
  <div className='container'>
    <h6 className='text-center text-primary fw-bold mx-auto bg-warning w-25 fs-4'>
    ALWAYS TASTY
    </h6>
    <h2 className='text-center text-primary py-2'>CHOOSE & ENJOY</h2>
    <p className='text-center text-primary py-2'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut corporis earum.
      Adipisci, earum consectetur? Laudantium voluptatum dignissimos ad molestiae qui ullam
      dolor hic est, ipsam maxime ipsa earum sit magni illo nemo labore eum quis.
      Iusto obcaecati consequatur delectus.
    </p>
    </div>
    </section>

    {/* Slideshow Carousel */}
    <section className="carousel burger mb-5">
  <Carousel
    interval={1550}
    pause="hover"
    controls={false}
    indicators={false}
  >
    {/* Slide 1 */}
    <Carousel.Item>
      <div className="text-center">
        <img
          src={carouselimg1}
          alt="LandImage1"
          className="mx-auto d-block carousel-img " width={300}
        />
        <h4 className="text-primary">Tandoor Chicken Burger</h4>
        <p className="text-primary">
          Lorem ipsum dolor sit amet, consectetur adipisicing
        </p>
        <button
          className="btn btn-danger"
          onClick={() => navigate("/menu")}
        >
          Order Now
        </button>
      </div>
    </Carousel.Item>

    {/* Slide 2 */}
    <Carousel.Item>
      <div className="text-center">
        <img
          src={carouselimg2}
          alt="LandImage2"
          className="mx-auto d-block carousel-img" 
        />
        <h4 className="text-primary">Classic Veggie Burger</h4>
        <p className="text-primary">
          Delicious veggie burger made with fresh ingredients and
          special sauce.
        </p>
        <button
          className="btn btn-danger"
          onClick={() => navigate("/menu")}
        >
          Order Now
        </button>
      </div>
    </Carousel.Item>

    {/* Slide 3 */}
    <Carousel.Item>
      <div className="text-center">
        <img
          src={carouselimg3}
          alt="LandImage3"
          className="mx-auto d-block carousel-img "
        />
        <h4 className="text-primary">Cheese Overload Burger</h4>
        <p className="text-primary">
          A juicy burger with double cheese, perfect for cheese lovers.
        </p>
        <button
          className="btn btn-danger"
          onClick={() => navigate("/menu")}
        >
          Order Now
        </button>
      </div>
    </Carousel.Item>
  </Carousel>
</section>

{/* Flex card Section */}
<section className="container my-5  ">
  <div className="row g-4 align-items-stretch  flex-card p-4" >
    {/* Text Section */}
    <div className="col-12 col-sm-6 d-flex flex-column justify-content-center">
      <h5 className="text-muted fs-3 text-primary">Discover</h5>
      <h2 className="fw-bold text-primary">UPCOMING EVENTS</h2>
      <h6>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        perspiciatis amet necessitatibus velit vitae inventore quae iusto
        repellendus ullam libero voluptates, numquam cum cumque atque.
        Recusandae exercitationem perferendis quibusdam quos?
      </h6>
    </div>
    {/* Image Section */}
    <div className="col-12 col-sm-6 d-flex align-items-center justify-content-center">
      <img
        src={FlexImage1}
        alt="Upcoming Event"
        className="img-fluid rounded shadow image"
      />
    </div>
  </div>
</section>

    
    {/* Slice Section */}
    <section className='d-flex flex-column justify-content-start'>
       <div className='container-fluid '>
        <div className='row align-items-center '>
          <div className='col-12 col-md-6 col-lg-4 text-start' >
            <img src={sliceimage} alt='sliceimg' className='image' width={400}  />
         </div>
         <div className='col-12 col-md-6 col-lg-4 text-center' >
            <h4 className='text-center text-primary '>RESERVATION</h4>
            <h2 className='text-center text-primary fw-bold'>BOOK YOUR TABLE</h2>
         </div>
        </div>
       </div>
    </section>

     {/* Table Reservation */}
         <section className='header'  >
          <div className='container d-flex'> 
             <div className='row'>
               <div className='col-lg-3 '>
                 <img src={sliceimage1} alt='sliceimage' className='mx-5 image'  width={120}/>
              </div>
              <div className='col-lg-3' >
             <input type='text'  placeholder='Name' required className='form-control w-100 fs-5 '
             value={name} onChange={(e) => setName(e.target.value)}/>
             <input type='Email'  placeholder='Email' required className='form-control w-100 fs-5 my-3 '
             value={email} onChange={(e) => setEmail(e.target.value)}></input>
             <input type='date'  placeholder='Date' required className='form-control w-100 fs-5 my-3'
             value={date} onChange={(e) => setDate(e.target.value)}/> 
                 

          </div>
              <div className='col-lg-3'>
              <input type='time'   placeholder='Time' className='form-control w-100 fs-5 '
              value={time} onChange={(e) => setTime(e.target.value)}/>
              <input type='text'  placeholder='People'className='form-control w-100 my-3 fs-5'
              value={people} onChange={(e) => setPeople(e.target.value)}></input>
          <button className='btn btn-danger fs-5 w-100 'onClick={tablebtn}style={{backgroundColor:'red'}} >Book Table</button>
             
              </div>
              <div className='col-lg-3 d-flex'>
              <img src={sliceimage2} alt='sliceimage2' width={500}  className='d-flex mx-5 image'/>
              </div>
               </div>     
              </div>        
      </section>
      {/* Account Creation Section */}
      <section className= 'd-flex justify-content-center align-items-center mb-4 '>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <img src={deliveryimg}alt='delivery' className='img-fluid rounded shadow image'
              width={500}/>
            </div>
       
        <div className='col-lg-6  '>
           <img src={account} alt='account'className='mx-auto' width={140}/>
        <h2 className='text-center bg-light fs-2 w-50 mx-auto my-3'>Create Your Account</h2>
        <button className='btn btn-danger rounded-pill my-4 d-flex mx-auto fs-6 ' style={{backgroundColor:'red',}} onClick={()=>navigate("/account")}>JOIN NOW</button>
        </div>
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
    position: "top-center",
  }}
/>

    </>
  )
}

export default Home
