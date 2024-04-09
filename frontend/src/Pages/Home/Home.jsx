import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Plan from '../../Components/Plan/Plan'
import Save from '../../Components/Save/Save'
import Choose from '../../Components/Choose/Choose'
import Review from '../../Components/Review/Review'
import Footer from '../../Components/Footer/Footer'
import Download from '../../Components/Download/Download'

const Home = () => {
  return (
    <>
   <Navbar/>
   <Hero/>
   <Plan/>
   <Save/>
   <Choose/>
   <Review/>
   <Download/>
   <Footer/>
    </>
  )
}

export default Home