import React from 'react'
import "./Download.css"
import appstore from "../../Assets/appstore.png"
import playstore from "../../Assets/playstore.png"
import downloadbackground from "../../Assets/download-background.png"

const Download = () => {
  return (
    <div className="download" >
        <div className="container">
        <h1>Download our app to get most out of it </h1>
        <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
        <div className="download-links">
          <img src={appstore} alt="" />
          <img src={playstore} alt="" />
        </div>
      </div>
        </div>
  )
}

export default Download