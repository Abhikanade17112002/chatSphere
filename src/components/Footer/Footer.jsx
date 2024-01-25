import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import sendEmail from './Emailhandler'


function Footer() {
  return (
    <div class="container">
    <footer class="py-5 footer">
      <div class="row">
        <div className="footercols">
      <div class="  footercol ">
          <h5>Section</h5>
          <ul class="nav flex-column align-items-center">
            <li class="nav-item mb-2"><a href="#" class="">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-primary">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-primary">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-primary">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-primary">About</a></li>
          </ul>
        </div>
  
  
        <div class="footercol">
          <h5>Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-primary">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-primary">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-primary">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-primary">About</a></li>
          </ul>
        </div>
  
  
        <div class="footercol">
          <h5>Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-primary">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-primary">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-primary">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-primary">About</a></li>
          </ul>
        </div>
        
        <div class=" footercol">
          <form onSubmit={(e)=>sendEmail(e)} >
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
              <button class="btn btn-primary" type="submit">Subscribe</button>
            </div>
          </form>
        </div>
        </div>
      </div>
  
      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p className='lead bold'>© 2024 Company, Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
        </ul>
      </div>
    </footer>
  </div>
  )
}

export default Footer