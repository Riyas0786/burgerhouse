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

const Home = () => {
  const showAlert = () => {
    alert("Your table has been reserved successfully!");
  }
  return (
    <>
    {/* Header Section */}
    <section className='fixed-background'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1 className='text-primary'>BURGER
                        <br/>WEEK
                    </h1>
                    <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam consequatur minima corrupti distinctio perferendis totam illo est quam laboriosam dignissimos? Aperiam officia fugit atque sunt rerum provident voluptate adipisci quos? Fuga asperiores facere perferendis debitis eligendi aut omnis itaque nam corrupti optio explicabo, inventore quas soluta placeat magnam provident odit?</p>
                </div>

                <div className='col-lg-6'>
                    <img src={HeaderImage} alt="CompoImage" className='px-5' width="500px" />
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

    {/* Landing order now*/}
    <section className='landing py-5'>
        <div className='container'>
            <h5 className='text-center text-primary bg-warning'style={{width:'300px',margin:'auto',}}>ALWAYS TASTY BURGER</h5>
            <h2 className='text-center text-primary py-2'>CHOOSE & ENJOY</h2>
            <p className='text-center text-primary py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut corporis earum. Adipisci, earum consectetur? Laudantium voluptatum dignissimos ad molestiae qui ullam dolor hic est, ipsam maxime ipsa earum sit magni illo nemo labore eum quis. Iusto obcaecati consequatur delectus.</p>
            <div className='row'>
                <div className='col-12 col-sm-7 col-md-6 col-lg-4 '>
                    <img src={LandImage1}  alt="LandngImage" width="300px"style={{marginLeft:'35px'}}  />
                    <h4 className='text-center text-primary'>Tandoor Chicken Burger</h4>
                    <p className='text-center text-primary py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum iure voluptatum explicabo, quae reprehenderit perferendis nihil.</p>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-danger'style={{backgroundColor:'red'}}>Order Now</button>
                    </div>
                </div>
                <div className='col-12 col-sm-7 col-md-6 col-lg-4'>
                    <img src={LandImage2}  alt="LandngImage" width="200px" style={{marginLeft:'75px'}} />
                    <h4 className='text-center text-primary py-3'>Tandoor Chicken Burger</h4>
                    <p className='text-center text-primary py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum iure voluptatum explicabo, quae reprehenderit perferendis nihil.</p>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-danger'style={{backgroundColor:'red'}}>Order Now</button>
                    </div>
                </div>
                <div className='col-12 col-sm-7 col-md-6 col-lg-4'>
                    <img src={LandImage3}  alt="LandngImage" width="300px"style={{marginLeft:'35px'}} />
                    <h4 className='text-center text-primary'>Tandoor Chicken Burger</h4>
                    <p className='text-center text-primary py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum iure voluptatum explicabo, quae reprehenderit perferendis nihil.</p>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-danger'style={{backgroundColor:'red'}}>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Flex card Section */}
    <section className='Flex py-5 '>  
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <div className='flex-card'>
                  <div className='row'>
                     <div className='col-12 col-sm-7 col-md-6 col-lg-4'>
                       <h5 className='text-primary px-5 py-2'>Discover</h5>
                         <h4 className='text-primary px-5'>UPCOMING EVENTS</h4>
                           <p className='text-primary  mx-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis amet necessitatibus velit vitae inventore quae iusto repellendus ullam libero voluptates, numquam cum cumque atque. Recusandae exercitationem perferendis quibusdam quos?</p>
                      </div>
                    <div className='col-12 col-sm-7 col-md-6 col-lg-4 mx-auto'>
                        <img src={FlexImage1} alt="FlexImage" width="380px" className='py-3' />
                        </div>
                    </div>
                </div>
              </div>
            </div>                
    </section>
    
    {/* Slice Section */}
    <section className='slice'>
       <div className='container-fluid py-auto '>
        <div className='row '>
          <div className='col-12 col-sm-7 col-md-6 col-lg-4 '>
            <img src={sliceimage} alt='sliceimg' width={200}/>
         </div>
         <div className='col-12 col-sm-7 col-md-6 col-lg-4'>
            <h5 className='text-center text-primary'style={{paddingTop:'50px'}}>RESERVATION</h5>
            <h3 className='text-center text-primary'>BOOK YOUR TABLE</h3>
         </div>
        </div>
       </div>
    </section>

     {/* Table Reservation */}
         <section className='header'>
           <div className='container-fluid '>
             <div className='row '>
               <div className='col-lg-3  '>
                 <img src={sliceimage1} alt='sliceimage' width={150}/>
              </div>
           <div className='col-lg-3 ' >
             <input type='text' id='name' placeholder='NAME'></input>
               <input type='Email' id='email' placeholder='EMAIL'></input>
                 <input type='date' id='date' placeholder='DATE'></input>
                 </div>
              <div className='col-lg-3 '>
             <input type='time'  id='time' placeholder='TIME'></input>
              <input type='text' id='people' placeholder='PEOPLE'></input>
                <button className='tablebtn'onClick={showAlert}>FIND A TABLE</button>
            </div>
             <div className='col-lg-3 '>
              <img src={sliceimage2} alt='sliceimage2' width={250} />
              </div>
           </div>
          </div> 
      </section>

    {/* Footer Section */}
    <section className='fixed-background2'>
      <div className='container-fluid'>
       <div className='row'>
         <div className='col-lg-6'>
          <img src={footerlogo} alt='footerlogo'className='py-3' width={250}/>
            <p className='text-white py-5'>Lorem ipsum dolor sit amet consecteltur adipisicing elit.deofu fjeufd fjefjs fefjef djwdskwld Dolorum perspiciatis amet necessitatibus velit vitae inventore quae iusto repellendus ullam libero voluptates, numquam cum cumque atque. Recusandae exercitationem perferendis quibusdam quos?</p>
          </div>
              <div className='col-lg-6' >
                <div className='icons-2'>
              <i className="bi bi-geo-alt-fill text-white ">45,SOUTH CAR STREET,MADURAI</i><br/>
                 <i className="bi bi-envelope text-white ">INFO@BURGERHOUSE.COM</i><br/>
                 </div>
           </div>
           <div className='col-lg-4 '>
                <h6 className='text-white py-3'>BURGERHOUSE 2025 ALL RIGHTS RESERVED </h6>  
                </div>
                <div className='col-lg-4'>
                  <h6 className='text-white mx-5'>DESGNED & DEVELOPED BY <br/>RIYAS</h6>
                </div>
                <div className='col-lg-4'>         
                  <div className='icons '>
                   <i className="bi bi-instagram text-white mx-2 "></i>
                    <i className="bi bi-facebook text-white mx-2"></i>
                     <i className="bi bi-twitter text-white mx-2"></i>
                      <i className="bi bi-whatsapp  text-white mx-2"></i>
                   </div>
                   </div>
                
              </div>
            </div>
       </section>


    </>
  )
}

export default Home
