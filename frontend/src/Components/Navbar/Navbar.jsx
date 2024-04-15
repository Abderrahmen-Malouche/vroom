import React from 'react'
import car_logo from "../../Assets/logo.png"
import "./Navbar.css"
import"../../App.css"
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
                <NavLink style={{ textDecoration: 'none' ,color:"black"}} exact to="/" activeClassName="active"><li>Home</li></NavLink>
                <NavLink style={{ textDecoration: 'none' ,color:"black"}} exact to="/about" activeClassName="active"><li>About</li></NavLink> 
                <NavLink style={{ textDecoration: 'none' ,color:"black"}} exact to="/models" activeClassName="active"><li>Vehicle Models</li></NavLink>
                <NavLink style={{ textDecoration: 'none' ,color:"black"}} exact to="/testimonials" activeClassName="active"><li>Testimonials</li></NavLink>
                <NavLink style={{ textDecoration: 'none' ,color:"black"}} exact to="/team" activeClassName="active"><li>Our Team</li></NavLink>
                <NavLink style={{ textDecoration: 'none' ,color:"black"}} exact to="/contact" activeClassName="active"><li>Contact</li></NavLink>
                </ul>
            </div>: <></>}
            
            
            <div className="logo">
            <NavLink style={{ textDecoration: 'none' ,color:"black"}} exact to="/" activeClassName="active">
            <img src={car_logo} alt="" />
              </NavLink>
                <h2>Vroom</h2>
            </div>
            
            <ul className='list'>
               <NavLink style={{ textDecoration: 'none' ,color:"black"}} exact to="/" activeClassName="active"><li>Home</li></NavLink>                
               <NavLink style={{ textDecoration: 'none' ,color:"black"}} exact to="/about" activeClassName="active"><li>About</li></NavLink> 
                <NavLink style={{ textDecoration: 'none' ,color:"black"}} exact to="/models" activeClassName="active"><li>Vehicle Models</li></NavLink>
                <NavLink style={{ textDecoration: 'none' ,color:"black"}} exact to="/testimonials" activeClassName="active"><li>Testimonials</li></NavLink>
                <NavLink style={{ textDecoration: 'none' ,color:"black"}} exact to="/team" activeClassName="active"><li>Our Team</li></NavLink>
                <NavLink style={{ textDecoration: 'none' ,color:"black"}} exact to="/contact" activeClassName="active"><li>Contact</li></NavLink>
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


