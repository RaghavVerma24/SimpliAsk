import React from 'react'
import Faq from './Components/Faq'
import Features from './Components/Features'
import Home from './Components/Home'
import Reviews from './Components/Reviews'

const Landing = () => {
  return (
    <div className='h-96 bg-[#191b3c]'>
      <Home/>
      <Features/>
      <Faq/>
      <Reviews/>
    </div>
  )
}

export default Landing