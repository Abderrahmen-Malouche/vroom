import React from 'react'

import Hero from '../../Components/Hero/Hero'
import Plan from '../../Components/Plan/Plan'
import Save from '../../Components/Save/Save'
import Choose from '../../Components/Choose/Choose'
import Review from '../../Components/Review/Review'

import Download from '../../Components/Download/Download'
import Model from '../../Components/Model/Model'
import FAQList from '../../Components/FAQList/FAQList'
import Book from '../../Components/Book/Book'

const Home = () => {
  return (
    <>
   <Hero/>
   <Book/>
   <Plan/>
   <Model/>
   <Save/>
   <Choose/>
   <Review/>
   <FAQList/>
   <Download/>
  
    </>
  )
}

export default Home