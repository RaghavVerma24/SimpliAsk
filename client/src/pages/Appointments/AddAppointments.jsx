import React, {useState} from 'react';
import axios from "axios";
import DoctorChat from './DoctorChat';
import PatientChat from './PatientChat'
import ChatFeature from './ChatFeature';

function AddAppointment () {

    const clearData = () => {
        setDoctorName('');
        setPatientName('');
        setAptDate('');
        setAptTime('');
        setAptNotes('');
      };

    let [doctorName, setDoctorName] = useState("");
    let [patientName, setPatientName] = useState("");
    let [aptDate, setAptDate] = useState("");
    let [aptTime, setAptTime] = useState("");
    let [aptNotes, setAptNotes] = useState("");
    
    async function submit(e) {
        e.preventDefault();

        let status = "create"
        try {
            await axios
                .post("http://localhost:8080/appointments", {
                    type: status,
                    doctorName: doctorName,
                    patientName: patientName,
                    aptDate: aptDate,
                    aptTime:  aptTime,
                    aptNotes: aptNotes,
                })
                .then((res) => {
                    // if (JSON.stringify(res.data) === JSON.stringify({key: "test"})) {
                    //     console.log("Appointment Created")
                    // }
                })
                .catch((e) => {
                    alert("Appointment Details Invalid");
                    console.log(e);
                });
        } catch {
            console.log(e);
        }

        clearData()
    }

    return (
        <div className='p-6'>
            <button 
                    className={`w-full 
                    bg-[#191b3c] text-white px-2 py-3 text-left rounded-t-md`}>
                <div className='ml-2'>Add Appointment</div>
            </button>
                <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
                    <form action="POST">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                            <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Doctor Name
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input type="text" value={doctorName} name="doctorName" id="doctorName" required onChange={(e) => {setDoctorName(e.target.value);}}
                                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"/>
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                            <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Patient Name
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input type="text" value={patientName} name="patientName" id="patientName" required onChange={(e) => {setPatientName(e.target.value);}}
                                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"/>
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                            <label htmlFor="aptDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Appointment Date
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input type="date" value={aptDate} name="aptDate" id="aptDate" required onChange={(e) => {setAptDate(e.target.value);}}
                                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"/>
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                            <label htmlFor="aptTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Appointment Time
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input type="time" value={aptTime} name="aptTime" id="aptTime" required onChange={(e) => {setAptTime(e.target.value);}}
                                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"/>
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                            <label htmlFor="aptNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Notes
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <textarea id="aptNotes" value={aptNotes} name="aptNotes" rows="3"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                                placeholder="Detailed comments about the condition" onChange={(e) => {setAptNotes(e.target.value);}}>
                                    
                                </textarea>
                            </div>
                        </div>

                        <div className="pt-5">
                            <div className="flex justify-end">
                                <button type="submit"
                                        onClick={submit}
                                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#191b3c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <ChatFeature/> */}
                {/* <DoctorChat/> */}
                {/* <PatientChat/> */}
        </div>
    );
}

export default AddAppointment;