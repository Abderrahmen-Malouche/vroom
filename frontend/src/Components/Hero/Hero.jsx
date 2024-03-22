import React from 'react'
import "./Hero.css"
import herocar from "../../Assets/herocar.png"
import { BiSolidRightArrow } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import background from "../../Assets/background.png"
const Hero = () => {
  return (
    <div className='Hero' style={{ backgroundImage: background }}>
        <div className='hero-firstpart'>
            <h4>Plan your trips now</h4>
            <h1>Save <span>big</span> with our car rental</h1>
            <p>Rent the car of your dreams . Unbeatable prices , unlimited miles , flexible pick-up options and much more </p>
            <div className="buttons">
                <button className="Ride-button">Book Ride<FaCheck className="check" /> </button>
                <button className="LearnMore-button">Learn More<BiSolidRightArrow className="right-arrow" /></button>
            </div>
        </div>
        <div className='hero-secondpart'>
            <img src={herocar} alt="" />
        </div>

    </div>
  )
}

export default Hero
