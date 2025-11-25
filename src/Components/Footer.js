import footerlogo from '../Assets/Home/Footer_Logo.png';
import playstore from '../Assets/CAREER/playstorepng.png'
import apple from '../Assets/CAREER/applepng.png'

const Footer = () => {
 
  
  return (
    <section className="footerfixed-background2 footer">
<div className="container-fluid">
    <div className="row "> {/* ✅ makes both columns level */}
      
      {/* Left Column */}
      <div className="col-lg-4 text-lg-start text-center">
        <img
          src={footerlogo}
          alt="footerlogo"
          className=" d-block my-2 "
          width={250}
        />
        <p className="text-white py-3 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis amet
          necessitatibus velit vitae inventore quae iusto repellendus ullam libero voluptates,
          numquam cum cumque atque. Recusandae exercitationem perferendis quibusdam quos?
        </p>

        <span className="bi bi-geo-alt-fill text-white d-block py-2">
          45, SOUTH CAR STREET, MADURAI
        </span>
        <span className="bi bi-envelope text-white d-block mt-3">
          INFO@BURGERHOUSE.COM
        </span>
             <div className='mt-5'>
          <span className="bi bi-shop-window text-white">
            MONDAY-FRIDAY: 10AM-11PM</span><br/>
            <span className='bi bi-shop-window text-white'> SATURDAY-SUNDAY: 10AM-12AM</span>          
          </div>
          </div>
          {/*center column  */}
          <div className='col-lg-4 text-center ' style={{marginTop:'30px'}}>
          <h5 className="text-white customtext ">DOWNLOAD APP ON</h5>
          <div className="icons-2  " >
           {/* Playstore */}
         <a href="https://play.google.com/store/games?hl=hi&pli=1" target="blank" rel="noopener noreferrer" className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  ' >
          <img src={playstore} alt='playstoreimg' width={180} /></a>
           {/* App store */}
          <a href="https://www.apple.com/in/app-store/" target="blank" rel="noopener noreferrer" className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  ' >
          <img src={apple} alt='playstoreimg' width={180} /></a>
          </div>
          <h5 className="text-white  fs-4">DESIGNED & DEVELOPED BY </h5>
            <p className='fs-5 text-white'>RIYAS KHAN</p> 
            
          <h5 className="text-white">FOLLOW US ON</h5>
  
          <i className="bi bi-instagram text-white mx-2 fs-4"></i>
          <i className="bi bi-facebook text-white mx-2 fs-4"></i>
          <i className="bi bi-twitter text-white mx-2 fs-4"></i>
          <i className="bi bi-whatsapp text-white mx-2 fs-4"></i>
        </div>
      

      {/* Right Column */}
      <div className="col-lg-4 text-lg-end text-center text-white  ">
        <div className='customtext'>
          <h5>LEGAL</h5> 
          <p>Terms & Conditions<br/> Privacy Policy<br/>Promotional</p>
          <h5 > LIFE AT BURGERHOUSE</h5>
          <p>Explore with BurgreHouse<br/>BurgerHouse News<br/>Snackables</p>
</div>
          <p className="py-3 my-3 text-white  customtext">ALL RIGHTS RESERVED</p>
          <span className="bi bi-c-circle text-white customtext">
            BURGERHOUSE 2025 ALL RIGHTS RESERVED
          </span>
      </div>
     </div>
   </div>
</section>


  )
}

export default Footer