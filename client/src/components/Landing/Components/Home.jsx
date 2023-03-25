import React from 'react'

import DoctorImg from '../../../assets/doctor.svg';
const Home = () => {
  return (
    <div>
        <h2 className="float-left text-3xl font-bold text-white">The Ultimate Doctor to Patient connectivity tool</h2>     
        <div className="max-w-10">
            <img src={DoctorImg} alt="Your SVG"/>
        </div>
    </div>
  )
}

export default Home