import React from 'react'
import chennaiimage from '../Assets/BRANCH/chennaicentral.png'
import hyderabadimage from '../Assets/BRANCH/hyderabad.png'
import maduraiimage from '../Assets/BRANCH/madurai.png'
import bangaloreimage from '../Assets/BRANCH/bangalore.png'


const Branch = () => {
  return (
    <>
<section className='header'>
  <h2 className=' text-center bg-light mt-4'>WE HAVE MULTIPLE BRANCHES ON TOP CITIES IN INDIA  </h2>
  <div className='container  ' style={{textAlign:'center',}}>
    <div className='row py-5'>
      <div className='col-12 col-sm-7 col-md-6 col-lg-4 my-4 '>
       <div className='rounded shadow p-4'style={{height:'350px'}} >
        <img src={chennaiimage} alt='chennai' className='mx-auto' width={200}/>
        <h4 className='text-center text-warning'>CHENNAI</h4>
        <span class="bi bi-shop-window">30+</span>
      </div>
          </div>   
       <div className='col-12 col-sm-7 col-md-6 col-lg-4 my-4'>
        <div className='rounded shadow p-4'style={{height:'350px'}}>
        <img src={hyderabadimage} alt='hyderabad' className='mx-auto' width={200}/>
        <h4 className='text-center text-primary'>HYDERABAD</h4>
        <i class="bi bi-shop-window">30+</i>
        </div>
     </div>
       <div className='col-12 col-sm-7 col-md-6 col-lg-4 my-4 '>
        <div className='rounded shadow  p-4'style={{height:'350px'}}>
        <img src={maduraiimage} alt='MADURAI' className='mx-auto mt-4' width={200}/>
        <h4 className='text-center text-success '>MADURAI</h4>
        <span class="bi bi-shop-window ">10+</span>
        </div>
     </div>
    <div className=' col-12 col-sm-7 col-md-6 col-lg-4 '>
      <div className='rounded shadow my-4 p-4'style={{height:'350px'}}>
      <div class="go-arrow">
        <img src={bangaloreimage} alt='bangalore' className='mx-auto'width={200}/>
        <h4 className='text-center text-danger'>BANGALORE</h4>
        <span class="bi bi-shop-window">25+</span>
    </div>
    </div>
    </div>
   </div>
  </div>
</section>

    

    </>
  )
}

export default Branch
