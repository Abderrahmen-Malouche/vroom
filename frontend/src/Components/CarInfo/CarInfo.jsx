import React from 'react'
import "./CarInfo.css"

const CarInfo = ({ car }) => {
  return (
    <div className="car-info">
          <div className="car-image">
            <img src={car.image} alt="" />
          </div>
        <div className="info-table">
        <div className="info-title">${car.Price} / rent per day</div>
        <div className="table-columns">
        <div className="row"><span>Model</span><span>{car.Model}</span></div>
        <div className="row"><span>Mark</span><span>{car.Mark}</span></div>
        <div className="row"><span>Year</span><span>{car.Year}</span></div>
        <div className="row"><span>Doors</span><span>{car.Doors}</span></div>
        <div className="row"><span>AC</span><span>{car.AC}</span></div>
        <div className="row"><span>Transmission</span><span>{car.Transmission}</span></div>
        <div className="row"><span>Fuel</span><span>{car.Fuel}</span></div>
    </div>
    <button className="reserve-button">RESERVE NOW</button>
      </div>
        </div>
  )
}

export default CarInfo