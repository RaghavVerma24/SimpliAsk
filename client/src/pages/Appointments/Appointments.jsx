import React from 'react'
import DashboardHeader from '../Dashboard/DashboardHeader'
import Sidebar from '../Sidebar/Sidebar'
import AddAppointment from './AddAppointments'
import Calendar from './Calendar'

const Appointments = () => {
  return (
    <div className="bg-[#191b3c]" >
      <DashboardHeader/> 
      <div className="flex bg-white h-screen">
        <div className="float-left">
            <Sidebar/>
        </div>
        <div className="bg-[#fff] w-full">
          <div className="grid grid-cols-2 gap-4 h-full bg-[#fff]">
            <AddAppointment/>
            <div className="float-left">
              <Calendar/>
              {/* <AddAppointment/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointments