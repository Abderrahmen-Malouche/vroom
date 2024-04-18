import React from 'react'
import "./Person.css"

// Destructure the properties directly in the function parameter
const Person = ({ image, name, role }) => {
  return (
    <div className="personn">
        <div className="person_image">
            <img src={image} alt={name} /> {/* Use alt attribute effectively */}
        </div>
        <div className="person-info">
            <h4>{name}</h4>
            <h6>{role}</h6>
        </div>
    </div>
  )
}

export default Person