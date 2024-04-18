import React from 'react'
import "./Cars.css"
import audiphoto from "../../Assets/audiphoto.png"
import golfphoto from "../../Assets/golfphoto.png"
import toyotaphoto from "../../Assets/toyotaphoto.png"
import bmwphoto from "../../Assets/bmwphoto.png"
import mercedesphoto from "../../Assets/mercedesphoto.png"
import passatphoto from "../../Assets/passatphoto.png"
import Car from "../Car/Car.jsx"
const Cars = () => {
    const cars=[
        {
          Model: "Audi A1",
          image: audiphoto,
          Manufacturer: "A1",
          Doors: "4/5",
          Transimission: "Manual",
          Fuel: "Gasoline",
          Price: 45,
          Rating : 5/5
        },
         {
            Model: "Golf 6",
          image: golfphoto,
          Manufacturer: "Volkswagen",
          Doors: "4/5",
          Transimission: "Manual",
          Fuel: "Diesel",
          Price: 37,
          Rating : 5/5
          
        },
        {
            Model: "Toyota",
          image: toyotaphoto,
          Manufacturer: "Toyota",
          Doors: "4/5",
          Transimission: "Automatic",
          Fuel: "Hybrid",
          Price: 30,
          Rating : 4/5
        },
        {
            Model: "BMW 320",
          image: bmwphoto,
          Manufacturer: "BMW",
          Doors: "4/5",
          Transimission: "Manual",
          Fuel: "Diesel",
          Price: 35,
          Rating : 2/5
        },
        {
            Model: "Mercedes",
          image: mercedesphoto,
          Manufacturer: "Mercedes",
          Doors: "4/5",
          Transimission: "Manual",
          Fuel: "Diesel",
          Price: 50,
          Rating : 3/5
        },
        {
            Model: "Passat CC",
          image: passatphoto,
          Manufacturer: "Volkswagen",
          Doors: "4/5",
          Transimission: "Automatic",
          Fuel: "Gasoline",
          Price:25,
          Rating : 3/5
        }
      
    ]
  return (
    <div className="cars">
    <div className="container">
        {cars.map((car, index) => (
            <Car key={index} {...car} />  // Add key and spread operator
        ))}
    </div>
    </div>  
    )
}

export default Cars