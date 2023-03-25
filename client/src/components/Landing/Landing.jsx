import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Faq from './Components/Faq'
import Features from './Components/Features'
import Home from './Components/Home'
import Reviews from './Components/Reviews'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Features/>
      <Faq/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Landing