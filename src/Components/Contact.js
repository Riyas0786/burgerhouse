import React from 'react'
import language from '../Assets/CONTACT/langauage.png'
import customer from '../Assets/CONTACT/customer.png'
import footerlogo from '../Assets/Home/Footer_Logo.png'

const Contact = () => {
  return (
  <>
x  <section className='header' >
    <h3 className=' text-center'>IF YOU NEED ENQUIRY/HELP<br/>WE ARE HERE TO HELP YOU</h3>
    <div className='container'>
      <div className='row'>
    <div className='col-12 col-sm-7 col-md-6 col-lg-4 mx-auto '>
    <div className='circle my-5'>
      <img src={customer} alt='customer' width={200}/>
    </div>
    <h4 className='text-primary '>MAIL TO US SUPPORT@BURGERHOUSE</h4>
    <input type='text' id='text' placeholder='write your concern' className='mx-auto'></input>
    <button className=' btn btn-primary '>SUBMIT</button>
    </div>
      <div className=' col-12 col-sm-7 col-md-6 col-lg-4 mx-auto '>
        <div className='circle my-5'>
      <img src={language} alt='language' width={200}/>
    </div>
    <div className='mx-5'>
    <h4 className='text-primary  '>TALK TO OUR SUPPORT TEAM </h4>
    <button className='btn btn-danger'>CALL <h5>978653478</h5></button>
    </div>
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

export default Contact
