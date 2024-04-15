import React from 'react'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Testimonials from './Pages/Testimonials/Testimonials';
import Models from './Pages/Models/Models';
import About from './Pages/About/About';
import Team from './Pages/Team/Team';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <Router>
        <Navbar/>
    <Routes>
        <Route exact  path="/" element={<Home/>}/>
        <Route exact  path="/about" element={<About/>}/>
        <Route exact  path="/models" element={<Models/>}/>
        <Route exact  path="/testimonials" element={<Testimonials/>}/>
        <Route exact  path="/team" element={<Team/>}/>
        <Route exact  path="/contact" element={<Contact/>}/>

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App