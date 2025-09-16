import footerlogo from '../Assets/Home/Footer_Logo.png';

const Footer = () => {
 
  const Google = () => {
    window.location.href = "https://play.google.com/store/games?hl=hi&pli=1"; // external site
  };
  const insta =()=>{
    window.location.href="https://www.instagram.com/its_riyaz005/?next=%2F";
  }

  return (
    <section className="footerfixed-background2">
  <div className="container-fluid">
    <div className="row align-items-end"> {/* ✅ makes both columns level */}
      
      {/* Left Column */}
      <div className="col-lg-4 text-lg-start text-center ">
        <img
          src={footerlogo}
          alt="footerlogo"
          className=" mx-lg-0 mx-auto d-block"
          width={250}
        />
        <p className="text-white py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis amet
          necessitatibus velit vitae inventore quae iusto repellendus ullam libero voluptates,
          numquam cum cumque atque. Recusandae exercitationem perferendis quibusdam quos?
        </p>

        <span className="bi bi-geo-alt-fill text-white d-block py-2">
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
          <h6 className="py-3 my-3 text-white mb-1">All Rights Reserved</h6>
          </div>
          <div className='col-lg-4 text-center text-white  '>
            
          <h5>LEGAL</h5> 
          <h6>Terms & Conditions<br/> Privacy Policy<br/>Promotional</h6>
          <h5 > LIFE AT BURGERHOUSE</h5>
          <h6>Explore with BurgreHouse<br/>BurgerHouse News<br/>Snackables</h6>
          
        </div>
      

      {/* Right Column */}
      <div className="col-lg-4 text-lg-end text-center">
        <div className="icons-2 my-3">
          <h5 className="text-white">DOWNLOAD APP ON</h5>
          <button className="btn btn-success my-2" onClick={Google}>
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
          <button className='btn btn-disabled'onClick={insta}>
          <i className="bi bi-instagram text-white mx-2 fs-4"></i></button>
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


  )
}

export default Footer