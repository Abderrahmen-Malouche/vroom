import React from 'react'
import "./Choose.css"
import group from "../../Assets/group.png"
import smallcar from "../../Assets/smallcar.png"
import money from "../../Assets/money.png"
import coin from "../../Assets/coin.png"

import { BiSolidRightArrow } from "react-icons/bi";
const Choose = () => {
  return (
    <div className="choose">
      <div className="container">
        
      <img src={group} alt="" />
      <div className="infos">
        <div className="info-left">
          <h3>Why Choose Us</h3>
          <h1>Best valued deals you will ever find</h1>
          <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
          <button className='details'>Find Details <BiSolidRightArrow className="right-arrow" /> </button>
        </div>
        <div className="info-right">
          <div className="info">
            <img src={smallcar} alt="" />
            <div className="text">
              <h3>Cross Country Drive</h3>
              <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
            </div>
          </div>
          <div className="info">
            <img src={money} alt="" />
            <div className="text">
              <h3>All Inclusive Pricing</h3>
              <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
            </div>
          </div>
          <div className="info">
            <img src={coin} alt="" />
            <div className="text">
              <h3>No Hidden Charges</h3>
              <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Choose