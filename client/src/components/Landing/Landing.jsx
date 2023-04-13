import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Faq from './Components/Faq'
import Features from './Components/Features'
import Home from './Components/Home'
import Contact from './Components/Contact'

const Landing = () => {
  return (
    <div className='bg-[#191b3c] h-100'>
      <Navbar/>
      <Home/>
      <Features/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Landing