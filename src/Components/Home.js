import React, { useState } from 'react'
import HeaderImage from '../Assets/Home/Banner_Img.png';
import BannerImage1 from '../Assets/Home/Header_Img_1.png';
import BannerImage2 from '../Assets/Home/Header_Img_2.png';
import BannerImage3 from '../Assets/Home/Header_Img_3.png';
import LandImage1 from '../Assets/Home/Landing_Img_1.png';
import LandImage3 from '../Assets/Home/Landing_Img_3.png';
import FlexImage1 from '../Assets/Home/Container_Img.png';
import sliceimage from '../Assets/Home/Slice_Img.png';
import sliceimage1 from '../Assets/Home/Slice_Img_1.png';
import sliceimage2 from '../Assets/Home/Slice_Img_2.png';
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
    toast.error("!!Please input all fields");  
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
                <div className='col-lg-6  my-5 '>
                    <h1 style={{color:'#6E260E',textShadow: '3px 2px 2px rgba(255, 255, 255, 1)',}}>BURGER</h1>
                        <h1 style={{color:'#6E260E',textShadow: '3px 2px 2px rgba(255, 255, 255, 1)',fontSize:'30px'}}>WEEK</h1>
                    
                    <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam consequatur minima corrupti distinctio perferendis totam illo est quam laboriosam dignissimos? Aperiam officia fugit atque sunt rerum provident voluptate adipisci quos? Fuga asperiores facere perferendis debitis eligendi aut omnis itaque nam corrupti optio explicabo, inventore quas soluta placeat magnam provident odit?</p>
                </div>

                <div className=' col-lg-6 ' >
                    <img src={HeaderImage} alt="CompoImage" className='justify-content-right' />
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
    ALWAYS TASTY
    </h5>
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
    <section className='carousel burger'>
    <Carousel interval={1550}
    pause='hover' controls={false} indicators={false}  >
      {/* Slide 1 */}
      <Carousel.Item>
        <div className='text-center'>
          <img src={LandImage1} alt="LandImage1" width="300px" className='mx-auto ' />
          <h4 className='text-primary'>Tandoor Chicken Burger</h4>
          <p className='text-primary'>
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
        <div className='text-center '>
          <img src={LandImage1} alt="LandImage2" width="300px" className='mx-auto ' />
          <h4 className='text-primary'>Classic Veggie Burger</h4>
          <p className='text-primary '>
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
          <img src={LandImage3} alt="LandImage3" width="300px" className='mx-auto ' />
          <h4 className='text-primary'>Cheese Overload Burger</h4>
          <p className='text-primary'>
            A juicy burger with double cheese, perfect for cheese lovers.
          </p>
          <button className='btn btn-danger' style={{ backgroundColor: 'red' }} onClick={()=>navigate("/menu")}>
            Order Now
          </button>
        </div>
      </Carousel.Item>
    </Carousel>
  
</section>


    {/* Flex card Section */}
    <section className="container my-5">
  <div className="row align-items-center rounded shadow p-4 ">
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
            <img src={sliceimage} alt='sliceimg' width={200} />
         </div>
         <div className='col-12 col-sm-7 col-md-6 col-lg-4'>
            <h4 className='text-center text-primary '>RESERVATION</h4>
            <h2 className='text-center text-primary fw-bold'>BOOK YOUR TABLE</h2>
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
             <input type='text'  placeholder='NAME' required className='form-control w-100  '
             value={name} onChange={(e) => setName(e.target.value)}/>
               <input type='Email'  placeholder='EMAIL' required className='form-control w-100 my-3 '
               value={email} onChange={(e) => setEmail(e.target.value)}></input>
                 <input type='date'  placeholder='DATE' required className='form-control w-100  my-3'
                 value={date} onChange={(e) => setDate(e.target.value)}/> 
                 

          </div>
          <div className='col-lg-3'>
             <input type='time'   placeholder='Time' required className='form-control w-100 '
             value={time} onChange={(e) => setTime(e.target.value)}/>
              <input type='text'  placeholder='PEOPLE'className='form-control w-100 my-3'
              value={people} onChange={(e) => setPeople(e.target.value)}></input>
               <button className='btn btn-danger w-100 'onClick={tablebtn}style={{backgroundColor:'red'}} >FIND A TABLE</button>
             
              </div>
              <div className='col-lg-3 '>
              <img src={sliceimage2} alt='sliceimage2' width={400} />
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
