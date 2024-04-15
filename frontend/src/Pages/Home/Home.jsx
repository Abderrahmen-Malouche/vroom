import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Plan from '../../Components/Plan/Plan'
import Save from '../../Components/Save/Save'
import Choose from '../../Components/Choose/Choose'
import Review from '../../Components/Review/Review'
import Footer from '../../Components/Footer/Footer'
import Download from '../../Components/Download/Download'
import Model from '../../Components/Model/Model'
import FAQList from '../../Components/FAQList/FAQList'
import Book from '../../Components/Book/Book'

const Home = () => {
  return (
    <>
   <Navbar/>
   <Hero/>
   <Book/>
   <Plan/>
   <Model/>
   <Save/>
   <Choose/>
   <Review/>
   <FAQList/>
   <Download/>
   <Footer/>
    </>
  )
}

export default Home