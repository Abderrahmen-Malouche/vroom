import React from 'react'
import "./Staff.css"
import person1 from "../../Assets/person1.png"
import person2 from "../../Assets/person2.png"
import person3 from "../../Assets/person3.png"
import person4 from "../../Assets/person4.png"
import person5 from "../../Assets/person5.png"
import person6 from "../../Assets/person6.png"
import Person from '../Person/Person'

const Staff = () => {
    const staff = [
    {
        image: person1,
        name: "Luke Miller",
        role: "Salesman"
    },
    {
        image: person2,
        name: "Michael Diaz",
        role: "Business Owner"
    },
    {
        image: person3,
        name: "Briana Ross",
        role: "Photographer"
    },
    {
        image: person4,
        name: "Lauren Rivera",
        role: "Car Detailist"
    },
    {
        image: person5,
        name: "Martin Rizz",
        role: "Mechanic"
    },
    {
        image: person6,
        name: "Caitlyn Hunt",
        role: "Manager"
    },
    ];

    return (
        <div className="staff">
            <div className="container">
                {staff.map((staff_person, index) => (
                    <Person key={index} {...staff_person} />  // Add key and spread operator
                ))}
            </div>
        </div>    
    );
}

export default Staff