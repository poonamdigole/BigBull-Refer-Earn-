import React, { useEffect } from 'react'
import './Contact.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Contact() {

  useEffect(()=>{
    Aos.init();
  }, [])
  return (
   <>
   
   <div className="z">
        <h3 className="l ">CONTACT WITH US</h3>
       <p className="x text-danger fs-3">We are just step Away...</p>

    </div>
    {/* <!--card--> */}
   
   <br/>
    <div className="p" >
    <div className="card border-danger bg-black" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"
     >
        <div className="card-header bg-danger border-danger">CONTACT</div>
        <br/>
        <div className="card-body">
            <h5 className="card-title">ADDRESS</h5>
            <p className="card-text">Asset No.6,near International Airport,Moscat,Australia </p>
          </div>
          <hr class="m text-danger-emphasis "/>
          <div class="card-body">
            <h5 class="card-title">PHONE</h5>
            <p class="card-text">011 46050102</p>
          </div><hr class="m text-danger-emphasis"/>
          <div className="card-body ">
            <h5 className="card-title">EMAIL</h5>
            <p className="card-text">reservation@royalhotel.com</p>
          </div>
          </div>
          {/* <!--map--> */}
        <div class="img-map my-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120637.94989627846!2d74.66027112783725!3d19.11046628008788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb05d46788921%3A0x6677e92c1a5181b6!2sAhmednagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713975101344!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <br/>
    </div>
    <br/>
    <br/>
    {/* <!--form--> */}

    <div className="for-m py-4" >
    <div className="form bg-none" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"   data-aos-duration="3000">
      <h1 className="head text-danger text-center my-4 fs-1 font-bold">Get in touch..!</h1>
      <form class="row g-3">
        <div class="col-md-6">
          <label for="validationServer01" class="form-label text-white">First name</label>
          <input type="text" className="form-control is-valid py-2" id="validationServer01" value="" required placeholder='John'/>
          <div class="valid-feedback">
            
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationServer02" class="form-label text-white">Last name</label>
          <input type="text" class="form-control py-2 is-valid" id="validationServer02" value="" required placeholder=''/>
          <div class="valid-feedback">
         
          </div>
        </div>
        {/* <div class="col-md-4">
          <label for="validationServerUsername" class="form-label text-white">Username</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">@</span>
            <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div> */}

<label htmlFor="floatingInput" class="form-label text-white ">Email address</label>

             
            <input type="email" class="form-control py-2" id="floatingInput" placeholder="name@example.com"/>
            
          
         
          <label for="floatingPassword" class="form-label text-white ">Password</label>
       
            <input type="password" class="form-control py-2" id="floatingPassword" placeholder="Password"/>
          
        
        
     
            <label for="exampleFormControlTextarea1" class="form-label text-white">Query</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
       
                  <div class="col-12"/>
    
          <div className="col-12">
            <button className="btn btn-danger" type="submit">CONTACT US</button>
          </div>
      </form>
    </div>
    </div>
    
    


   </>
  )
}

export default Contact