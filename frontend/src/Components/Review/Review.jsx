import React from 'react'
import "./Review.css"
import { FaQuoteRight } from "react-icons/fa";
import harry from "../../Assets/harry.jpg"
import ron from "../../Assets/ron.jpg"

const Review = () => {
  return (
    <div className="reviews">
        <div className="container">

        <div className="specialheading1">Reviewed by People</div>
        <div className="specialheading2">Client's Testimonials</div>
        <p className="specialheading3">Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
        <div className="reviewslist">
            <div className="review">
                <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                <div className="person">
                   <div className="person-left">
                    <img src={harry} alt="" />
                    <div className="person-info">

                    <div className="name">Parry Hotter</div>
                    <div className="location">Budapest</div>
                    </div>
                   </div>
                   <div className="person-right">
                    <FaQuoteRight className='quote' />

                   </div>
                </div>
                
            </div>
            <div className="review">
                <p>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</p>
                <div className="person">
                   <div className="person-left">
                    <img src={ron} alt="" />
                    <div className="person-info">

                    <div className="name">Ron Rizzly</div>
                    <div className="location">Tunisia</div>
                    </div>
                   </div>
                   <div className="person-right">
                    <FaQuoteRight className='quote' />

                   </div>
                </div>
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default Review