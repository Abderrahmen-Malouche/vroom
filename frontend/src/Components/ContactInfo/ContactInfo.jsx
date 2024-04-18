import React from 'react'
import "./ContactInfo.css"
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
<div className="contact_info">
    <div className="container" >

<div className="contact_info_additional">
    <h1>Need additional information?</h1>
    <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
    <div className="phone-number">
        <MdOutlinePhoneInTalk  className='phone'/>
        <h3 className='number'>(36)20-354-6360</h3>
    </div>
    <div className="email-section">
     <MdOutlineEmail className='email-icon'/>
     <h3 className='email'>abderrahmenmalouchework@gmail.com</h3>
    </div>
    <div className="location-section">
     <FaLocationArrow  className='location-icon'/>
     <h3 className='location'>Budapset, Hungary</h3>
    </div>
</div>
<form className="inputs">
    <h3 className="label">Full Name <span>*</span></h3>
    <input type="text" className='info' placeholder='E.g: "Joe Smith" '/>
    <h3 className="label">Email <span>*</span></h3>
    <input type="email" className='info' placeholder='youremail@example.com '/>
    <h3 className="label" >Tell us about it <span>*</span></h3>
    <textarea name="" id="" cols="30" rows="10" placeholder='Tell us about it'></textarea>
    <input type="submit" id="submit"/>
</form>
    </div>
</div>  
)
}

export default ContactInfo