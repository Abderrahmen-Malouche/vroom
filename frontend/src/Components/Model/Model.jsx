import React,{useState} from 'react'
import "./Model.css"
import audi from "../../Assets/audi.jpg"
import golf from "../../Assets/golf.jpg"
import toyota from "../../Assets/toyota.jpg"
import bmw from "../../Assets/bmw.jpg"
import mercedes from "../../Assets/mercedes.jpg"
import passat from "../../Assets/passat.jpg"
import CarInfo from '../CarInfo/CarInfo.jsx'
const carData={
  "Audi A1 S-Line": {
    image: audi,
    Model: "Audi",
    Mark: "A1",
    Year: 2012,
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Gasoline",
    Price: 45
  },
  "VW Golf 6": {
    image: golf,
    Model: "Golf 6",
    Mark: "Volkswagen",
    Year: 2008,
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Diesel",
    Price: 37
  },
  "Toyota Camry": {
    image: toyota,
    Model: "Camry",
    Mark: "Toyota",
    Year: 2006,
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Automatic",
    Fuel: "Hybrid",
    Price: 30
  },
  "BMW 320 ModernLine": {
    image: bmw,
    Model: "320",
    Mark: "BMW",
    Year: 2012,
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Diesel",
    Price: 35
  },
  "Mercedes-Benz GLK": {
    image: mercedes,
    Model: "4/5",
    Mark: "Mercedes",
    Year: 2006,
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Diesel",
    Price: 50
  },
  "VW Passat CC": {
    image: passat,
    Model: "Passat CC",
    Mark: "Volkswagen",
    Year: 2008,
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Automatic",
    Fuel: "Gasoline",
    Price: 25
  }

}
const Model = () => {
  const [selectedCar, setSelectedCar] = useState(carData["Audi A1 S-Line"]);

  const handleModelClick = (model) => {
    setSelectedCar(carData[model]);
  }

  return (
    <div className="model">
      <div className="container">
        <div className="specialheading1">Vehicle Models</div>
        <div className="specialheading2">Our rental fleet</div>
        <p className="specialheading3">Choose from a variety of our amazing Vehicles to rent from your next adventure or business trip</p>
        <div className="content">
          <div className="models-buttons">
          {Object.keys(carData).map((model, index) => (
            <button 
            key={index} 
            className={`model ${selectedCar === carData[model] ? 'active' : ''}`} 
            onClick={() => handleModelClick(model)}
          >
            {model}
          </button>
          ))}
          </div>
          <CarInfo car={selectedCar} />
        </div>
      </div>
    </div>
  )
}

export default Model