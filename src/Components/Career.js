import React from 'react'
import reliableimg from '../Assets/CAREER/reliable img.png'
const Career= () => {

  const showAlert = () => {
     // prevents page reload
    alert("Thanks Our customer support will call you ");
  };
  return (
   <>
   
       <section className='fixedbackground3 '>
        <div className='container'>
         <div className='row'>
          <div className='franchise'>
           <h1>WELCOME TO<br/>INDIA'S MOST ADMIRED AND<br/> AFFORDABLE FRANCHISE</h1>
          </div>
         <div className='col-md-6'>
           <div className='careercard'>
             <h3>FRANCHISE ENQUIRY</h3>
              <label form='name'><h3>Name</h3></label>
              <input type="text" placeholder='Enter your name' required className='form-control' />
              <label form='name'><h3>Mobile Number</h3></label>
              <input type="text" placeholder='Enter your number' className='form-control' />
              <label form='name'><h3>Email</h3></label>
              <input type="email" placeholder='Enter your email' className='form-control' />
              <label form='name'><h3>Location</h3></label>
              <input type="location" placeholder='Enter your location' className='form-control' />
              <button className='btn btn-danger tablebtn my-3'onClick={showAlert}>SUBMIT</button>
            </div>
           </div>
          <div className='col-md-6'>
            <img src={reliableimg} alt="reliable" className='mx-5' width={300}/>
           </div>
          </div>
         </div>
       </section>
   </>
  )
}

export default Career
