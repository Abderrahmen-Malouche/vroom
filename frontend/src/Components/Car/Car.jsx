import React from 'react'
import "./Car.css"
import { FaCarSide } from "react-icons/fa";

const Car = ({ image, Model, Price, Rating,Transimission,Fuel,Manufacturer,Doors }) => {
  return (
    <div className="car">
        <div className="car_image">
            <img src={image} alt="" /> {/* Use alt attribute effectively */}
        </div>
        <div className="car-details">
            <div className="car_details_first">
            <div className="car_details_first_left">
                <h4>{Model}</h4>
                <h4>{Rating}</h4>
            </div>
            <div className="car_details_first_right">
                <h4>${Price}</h4>
                <h2>per day</h2>
            </div>
            </div>
            <div className="car_details_second">
                <div className="car_details_second_component">
                <h2> <FaCarSide className='car_icon' /> {Manufacturer}</h2>
                <h2> {Doors} <FaCarSide className='car_icon'/> </h2>
                </div>
                <div className="car_details_second_component">
                <h2> <FaCarSide className='car_icon'/> {Transimission}</h2>
                <h2> {Fuel} <FaCarSide className='car_icon'/> </h2>
                </div>
            </div>
            <div className="car_details_third">
            <button className="book-button">Book Ride</button>
            </div>
        </div>
    </div>
  )
}

export default Car