import React, {useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";
import axios from "axios";
import AddAppointment from "./AddAppointments";
import AppointmentCard from "./AppointmentCard";
import { dateCheck } from "../../components/HelperFunctions";

function Calendar () {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });
    const [text, setText] = useState([]);
    const [dates, setDates] = useState("");

    async function handleValueChange (newValue) {
        setValue(newValue);
        setDates(`${(value.startDate).toString()} ~ ${(value.endDate).toString()}`)
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
                    for (let i = 0; i < response.data.data.length; i++) {
                        if(!dateCheck(newValue.startDate, newValue.endDate, response.data.data[i].aptDate)) {
                            delete response.data.data[i]
                        }
                    }
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

            <div id="appointments" >
                {dates != "" ? <div className="my-5 text-[#177eff] text-[18px] font-semibold">Showing results from: {dates}</div> : <></>}
                <div className="overflow-y-scroll max-h-[75vh]">
                    {text.map((event) => (
                        <div key={event._id} className="bg-[#191b3c] mb-4 p-5 h-full rounded-xl shadow-md ">
                            <AppointmentCard event={event}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;