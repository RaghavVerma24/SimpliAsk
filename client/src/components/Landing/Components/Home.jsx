import React from 'react'

import DoctorImg from '../../../assets/doctor.svg';
const Home = () => {
  return (
    <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="float-left">
          <h2 className="text-[40px] font-bold text-white">The Ultimate Doctor to Patient connectivity tool</h2>     
          <h2 className="text-[20px] text-[#c0b2ac] break-word mb-10">Facilitate secure and reliable communication between doctors and patients through a range of digital channels</h2>  
          <div className="hidden space-x-2 md:inline-block">
          <a
            href="javascript:void(0)"
            className="px-8 py-4 text-white bg-[#202454] font-bold rounded-md shadow text-[18px]"
          >
            Get Started
          </a>
        </div> 
        </div>  
        <div className="max-w-40">
            <img src={DoctorImg} alt="Doctor Image " style={{width: 700 }}/>
        </div>
    </div>
  )
}

export default Home