import React from 'react'
import logoWhite from '../../media/img/laptop-hunter-logo white.png'
import logoDark from '../../media/img/laptop-hunter-logo-dark.png'
import logoBlue from '../../media/img/laptop-hunter-blue.png'
function Footer() {
  return (
    <div className="bg-blue-900 !text-white">
      <footer className="footer py-10 px-5 container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <img src={logoBlue} className="w-36" alt="" />
          <p>
            Laptop Hunter
            <br />
            WE ARE IN THE 2010 TO {new Date().getFullYear()}
          </p>
        </div>
        <div>
          <span className="footer-title !opacity-90">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title !opacity-90">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title !opacity-90">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 border-t-stone-300 border-t">
        <div>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Laptop Hunter
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
