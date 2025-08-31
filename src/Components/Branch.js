import React from 'react'
import chennaiimage from '../Assets/BRANCH/chennaicentral.png'
import hyderabadimage from '../Assets/BRANCH/hyderabad.png'
import maduraiimage from '../Assets/BRANCH/madurai.png'
import bangaloreimage from '../Assets/BRANCH/bangalore.png'

const Branch = () => {
  return (
    <>
<section className='header'>
  <h3 className='text-primary text-center'>WE HAVE MULTIPLE BRANCHES ON TOP CITIES IN INDIA  </h3>
  <div className='container'>
    <div className='row py-5'>
      <div className='col-12 col-sm-7 col-md-6 col-lg-4  '>
       <div className='card-2 '>
        <div class="go-corner" href="#">
      <div class="go-arrow">
        <img src={chennaiimage} alt='chennai' width={200}/>
        <h3 className='text-center text-warning'>CHENNAI</h3>
        <i class="bi bi-telephone-fill text-center">9045286176</i>
      </div>
      </div>
      </div>
          </div>   
       <div className='col-12 col-sm-7 col-md-6 col-lg-4 '>
        <div className='card-2'>
        <div class="go-corner" href="#">
      <div class="go-arrow">
        <img src={hyderabadimage} alt='hyderabad' width={200}/>
        <h3 className='text-center text-primary'>HYDERABAD</h3>
        <i class="bi bi-telephone-fill text-center">9045286176</i>
        </div>
        </div>
        </div>
    </div>
       <div className='col-12 col-sm-7 col-md-6 col-lg-4 '>
        <div className='card-2'>
        <div class="go-corner" href="#">
      <div class="go-arrow"></div>
        <img src={maduraiimage} alt='MADURAI' width={200}/>
        <h3 className='text-center text-success'>MADURAI</h3>
        <i class="bi bi-telephone-fill text-center">9045286176</i>
        </div>
        </div>
        </div>
    </div>
    <div className=' col-12 col-sm-7 col-md-6 col-lg-4 '>
      <div className='card-2'>
        <div class="go-corner" href="#">
      <div class="go-arrow">
        <img src={bangaloreimage} alt='bangalore' width={200}/>
        <h3 className='text-center text-danger'>BANGALORE</h3>
        <i class="bi bi-telephone-fill text-center">9045286176</i>
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
