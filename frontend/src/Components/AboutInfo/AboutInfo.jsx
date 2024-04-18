import React from 'react'
import "./AboutInfo.css"
import aboutphoto from "../../Assets/aboutphoto.jpg"
import smallcaricon from "../../Assets/smallcaricon.png"
import outlet from "../../Assets/outlet.png"
import shop from "../../Assets/shop.png"
const AboutInfo = () => {
  return (
    <div className="about_info">
        <div className="container">

        <img src={aboutphoto} alt="" />
        <div className="about_company">
            <h3>About Company</h3>
            <h1>You start the engine and your adventure begins</h1>
            <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
            <div className="counting">
                <div className="counting_element">
                    <div className="text">
                    <img src={smallcaricon} alt="" />
                    <h1>20 </h1> 
                    </div>
                    <h3>Car Types</h3>
                </div>
                <div className="counting_element">
                    <div className="text">
                    <img src={outlet} alt="" />
                    <h1>85 </h1> 
                    </div>
                    <h3>Rental Outlets</h3>
                </div>
                <div className="counting_element">
                    <div className="text">
                    <img src={shop} alt="" />
                    <h1>75 </h1> 
                    </div>
                    <h3>Repair Shop</h3>
                </div>
                
            </div>
        </div>
        </div>
    </div>     
)
}

export default AboutInfo