import React from 'react'
import "./Footer.css"
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="footer-element">
                <h1 className="footer-element-title">Vroom</h1>
                <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                <div className="phone-number">
                <MdOutlinePhoneInTalk  className='phone'/>
                <h3 className='number'>(36)20-354-6360</h3>
                </div>
                <div className="email-section">
                <MdOutlineEmail className='email-icon'/>
                <h3 className='email'>abderrahmenmalouchework@gmail.com</h3>
                </div>
            </div>
            <div className="footer-element">
                <h1 className="footer-element-title">COMPANY</h1>
                <ul>
                    <li>Budapset</li>
                    <li>Careers</li>
                    <li>Mobile</li>
                    <li>Creator Portfolio</li>
                </ul>
            </div>
            <div className="footer-element">
                <h1 className="footer-element-title">WORKING HOURS</h1>
                <ul>
                    <li>Mon - Fri: 9:00AM - 9:00PM</li>
                    <li>Sat: 9:00AM - 19:00PM</li>
                    <li>Sun: Closed</li>
                </ul>
            </div>
            <div className="footer-element">
                <h1 className="footer-element-title">SUBSCRIPTION</h1>
                 <div className="sub-text">Subscribe your Email address for latest news & updates.</div>
                 <form action="">
                 <input type="email" name="sub-email" id="sub-email"  placeholder='Enter Email Address'/>
                 <input type="submit" id="submit"/>

                 </form>
            </div>
        </div>
    </div>
  )
}

export default Footer