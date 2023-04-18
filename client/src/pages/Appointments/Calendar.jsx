import React, {useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";
import axios from "axios";
import AddAppointment from "./AddAppointments";

function Calendar () {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });
    const [text, setText] = useState([]);

    async function handleValueChange (newValue) {
        setValue(newValue);
        await submit(newValue)
    }

    async function submit(newValue) {
        console.log("setCalander", newValue)

        let status = "calendar"
        try {
            await axios
                .post("http://localhost:8000/appointments", {
                    type: status,
                    starting: newValue.startDate,
                    ending: newValue.endDate,
                }).then(response => {
                    setText(response.data.data);
                });
            
        } catch(e) {
            console.log(e);
        }

    }
    
    return (
        <div className="p-6">
            <Datepicker
                configs={{
                    shortcuts: {
                        today: "Today", 
                        yesterday: "Yesterday", 
                        currentMonth: "This Month", 
                        pastMonth: "Last Month" 
                    },
                    footer: {
                        cancel: "Cancel", 
                        apply: "Apply" 
                    }
                }} 
                useRange={false} 
                showShortcuts={true} 
                showFooter={true}       
                primaryColor={"indigo"} 
                value={value}
                onChange={handleValueChange}
                inputClassName="p-3 w-full rounded-lg focus:ring-0 font-normal bg-[#191b3c] text-white cursor-pointer"
                toggleClassName="absolute bg-[#6c63ff] rounded-r-lg text-white right-0 h-full px-3 text-white font-bold focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed" 
                popoverDirection="down" 
                placeholder="Enter Appointment Dates"
            />
            <div id="appointments" className="bg-[#191b3c] rounded-lg mt-5 text-white">
            {text.map(elem =>
                    <div>
                        <ul className="divide-y divide-gray-200">
                            <li className="px-3 py-3 flex items-start">
                                {/* <button onClick={()=> onDeleteAppointment(elem.id)} type="button"
                                        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    <BiTrash/></button> */}
                                <div className="flex-grow">
                                    <div className="flex items-center">
                                        <span className="flex-none font-medium text-2xl text-blue-500">{elem.patientName}</span>
                                        <span className="flex-grow text-right">{elem.aptDate}</span>
                                    </div>
                                    <div><b className="font-bold text-blue-500">Doctor:</b>{elem.doctorName}</div>
                                    <div className="leading-tight">{elem.aptNotes}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calendar;