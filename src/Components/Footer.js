import footerlogo from '../Assets/Home/Footer_Logo.png';

const Footer = () => {
 
  const Google = () => {
    window.location.href = "https://play.google.com/store/games?hl=hi&pli=1"; // external site
  };
  const Apple = () => {
    window.location.href = "https://www.apple.com/in/app-store/"; // external site
  };


  return (
    <section className="footerfixed-background2">
  <div className="container-fluid">
    <div className="row "> {/* ✅ makes both columns level */}
      
      {/* Left Column */}
      <div className="col-lg-4 text-lg-start text-center ">
        <img
          src={footerlogo}
          alt="footerlogo"
          className=" d-block mt-3 mx-3"
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
          <div className='col-lg-4 mt-auto text-center '>
            
        <div className="icons-2 my-3  " >
          <h5 className="text-white">DOWNLOAD APP ON</h5>
          <button className="btn btn my-2 text-white" style={{backgroundColor:' rgba(255, 7, 7, 1)'}} onClick={Google}>
            <span className="fa-brands fa-google-play text-white mx-1"></span>GET IT ON <br/>
            GOOGLE PLAY
          </button>
          
          <button className="btn btn my-2 mx-3 text-white"onClick={Apple} style={{width:'127px',backgroundColor:'blue'}}>
            <span className="bi bi-apple text-white mx-auto"></span>
            GET IT ON<br/>APP STORE
          </button>
          </div>
        </div>
      

      {/* Right Column */}
      <div className="col-lg-4 text-lg-end text-center text-white mt-3">
          <h5>LEGAL</h5> 
          <h6>Terms & Conditions<br/> Privacy Policy<br/>Promotional</h6>
          <h5 > LIFE AT BURGERHOUSE</h5>
          <h6>Explore with BurgreHouse<br/>BurgerHouse News<br/>Snackables</h6>
          
          <h6 className="text-white py-3">DESIGNED & DEVELOPED BY <br /> RIYAS KHAN</h6>

          <h6 className="text-white">FOLLOW US ON</h6>
  
          <i className="bi bi-instagram text-white mx-2 fs-4"></i>
          <i className="bi bi-facebook text-white mx-2 fs-4"></i>
          <i className="bi bi-twitter text-white mx-2 fs-4"></i>
          <i className="bi bi-whatsapp text-white mx-2 fs-4"></i>
          
        <div className="copyright my-3">
          <h6 className="py-3 my-3 text-white mb-1">ALL RIGHTS RESERVED</h6>
          <span className="bi bi-c-circle text-white">
            BURGERHOUSE 2025 ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
     </div>
   </div>
</section>


  )
}

export default Footer