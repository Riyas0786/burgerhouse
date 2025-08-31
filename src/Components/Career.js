import React from 'react'
import reliableimg from '../Assets/CAREER/reliable img.png'
import franchiseimg from '../Assets/CAREER/franchise img.png'
const Career= () => {

  const showAlert = () => {
     // prevents page reload
    alert("Thanks Our customer support will call you ");
  };
  return (
   <>
   
       <section className='header'>
        <div className='container '>
         <div className='row'>
           <h1>WELCOME TO INDIA'S MOST ADMIRED <br/>AND AFFORDABLE FRANCHISE</h1>
           <div className='col-12 col-sm-7 col-md-6 col-lg-4  '> 
              <img src={franchiseimg} alt='franchiseimg' width={500} className='my-5 'style={{borderRadius:'15px'}}/>
            </div>
             <div className='col-12 col-sm-7 col-md-6 col-lg-4 my-5 '> 
           <div className='careercard'>
             <h3>FRANCHISE ENQUIRY</h3>
             <form className='mx-2 '>
              <label form='name'><h3>Name</h3></label>
              <input type="text" placeholder='Enter your name' required className='form-control mx-auto ' />
              <label form='name'><h3>Mobile Number</h3></label>
              <input type="text" placeholder='Enter your number'required className='form-control mx-auto ' />
              <label form='name'><h3>Email</h3></label>
              <input type="email" placeholder='Enter your email' required className='form-control mx-auto ' />
              <label form='name'><h3>Location</h3></label>
              <input type="location" placeholder='Enter your location' required className='form-control mx-auto ' />
              <button className='btn btn-danger tablebtn my-3 mx-5'onClick={showAlert}>SUBMIT</button>
              </form>
              </div>
              </div>
          </div>
         </div>
       </section>
   </>
  )
}

export default Career
