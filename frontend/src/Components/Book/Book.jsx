import React from 'react'
import "./Book.css"
import { FaCarSide } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

const Book = () => {
  return (
    <div className="book">
        <div className="container">
            <h3>Book a car </h3>    
            <form className="booking-information">
                <div className="first-info">
                    <div className="booking-info-header">

                    <FaCarSide className='booking-icon'/>
                    <h4>Select Your Car Type<span>*</span></h4>
                    </div>
                    <select name="" id="">
                        <option >Select your car type</option>
                        <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                        <option value="VW Gold 6">VW Gold 6</option>
                        <option value="Toyota Camry">Toyota Camry</option>    
                        <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>                      
                        <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>  
                        <option value="VW Passat CC">VW Passat CC</option>
                    </select>
                </div>
                <div className="first-info">
                    <div className="booking-info-header">
                    <FaCarSide className='booking-icon'/>
                    <h4>Pick-up<span>*</span></h4>
                    </div>
                    <select name="" id="">
                        <option >Select your pick up location</option>
                        <option value="Budapest">Budapest</option>
                        <option value="Debrecen">Debrecen</option>
                        <option value="Gyor">Gyor</option>    
                        <option value="Berlin">Berlin</option>                      
                        <option value="Barcelona">Barcelona</option>  
                        <option value="Amesterdam">Amesterdam</option>
                    </select>
                </div>   
                <div className="first-info">
                <div className="booking-info-header">
                    <FaLocationDot className='booking-icon' />
                    <h4>Drop-off<span>*</span></h4>
                    
                    </div><select name="" id="">
                        <option >Select your drop off location</option>
                        <option value="Budapest">Budapest</option>
                        <option value="Debrecen">Debrecen</option>
                        <option value="Gyor">Gyor</option>    
                        <option value="Berlin">Berlin</option>                      
                        <option value="Barcelona">Barcelona</option>  
                        <option value="Amesterdam">Amesterdam</option>
                    </select>
                </div>   
                <div className="first-info">
                <div className="booking-info-header">
                    <FaRegCalendarAlt className='booking-icon'/>
                    <h4>Pick-up time<span>*</span></h4>
                </div>
                <input type="date" id="birthday" name="birthday"/>
                </div>    
                <div className="first-info">
                <div className="booking-info-header">
                    <FaRegCalendarAlt className='booking-icon'/>
                    <h4>Drop-off time<span>*</span></h4>
                    </div><input type="date" id="birthday" name="birthday" />
                </div>  
                <div className="first-info">
                <button className='search'>Search</button>         
                </div>    
            </form>
        </div>
    </div>
  )
}

export default Book