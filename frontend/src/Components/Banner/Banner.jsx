import React from 'react'
import "./Banner.css"
import { FaPhoneAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="banner">
        
        <div className="container">
        <h1>Book a car by getting in touch with us</h1>
        <div className="banner-phonenumber">
        <FaPhoneAlt  className='banner-icon'/>
        <h1>(36) 20-354-6360</h1>
        </div>
        </div>
    
    </div>
)
}

export default Banner