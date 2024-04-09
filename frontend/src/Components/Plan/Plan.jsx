
import React from 'react'
import "./Plan.css"
import image1 from "../../Assets/image1.png"
import image2 from "../../Assets/image2.png"
import image3 from "../../Assets/image3.png"
const Plan = () => {
    return (
    <div className="plan">
        <div className="container">
            <div className="specialheading1">Plan your trip now</div>
            <div className="specialheading2">Quick & easy car rental</div>
            <div className="offers">
                <div className="offer">
                    <img src={image1} alt="" />
                    <h3>Select Car</h3>
                    <p>We offer a big range of vehicles for all your driving needs . We have the perfect car to meet your needs</p>
                </div>
                <div className="offer">
                    <img src={image2} alt="" />
                    <h3>Contact Operator</h3>
                    <p>Our Knowledgeable and friendly operators are always ready to help with any questions or concers </p>
                </div>
                <div className="offer">
                    <img src={image3} alt="" />
                    <h3>Let's Drive</h3>
                    <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                </div>
            </div>
        </div>
    </div>
  )

}

export default Plan