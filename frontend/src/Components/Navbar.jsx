import React from 'react'
import car_logo from "../Assets/logo.webp"
import "./Navbar.css"
import"../App.css"
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='Navbar'>
            {isOpen? <div className="navbar-mobile">
                <RxCross1 className='cross' onClick={toggleNavbar}/>
                <ul className="mobile-list">
                <li className='active'>Home</li>
                <li>About</li>
                <li>Vehicle Models</li>
                <li>Testimonials</li>
                <li>Our Team</li>
                <li>Contact</li>
                </ul>
            </div>: <></>}
            
            
            <div className="logo">
                <img src={car_logo} alt="" />
                <h2>Vroom</h2>
            </div>
            
            <ul className='list'>
                <li className='active'>Home</li>
                <li>About</li>
                <li>Vehicle Models</li>
                <li>Testimonials</li>
                <li>Our Team</li>
                <li>Contact</li>
            </ul>
            <div className="buttons">
                <button className='sign-in'>Sign In</button>
                <button className='register'>Register</button>
            </div>
            
            <CiMenuBurger className='burger_icon' onClick={toggleNavbar}/>

    </nav>
  )
}

export default Navbar
