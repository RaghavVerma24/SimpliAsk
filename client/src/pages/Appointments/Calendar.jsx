import React, {useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";
import axios from "axios";
import AddAppointment from "./AddAppointments";


function Calendar () {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });
    
    async function handleValueChange (newValue) {
        setValue(newValue);
        await submit(newValue)
    }

    function mapAppointments(data) {
        console.log("Set", data)
        document.getElementById('appointments').innerHTML = `<ol><li>${data}</li></ol>`;
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
                })
                .then((res) => {
                    mapAppointments(res.data)
                })
                .catch((e) => {
                    alert("Invalid Calendar Dates");
                    console.log(e);
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
            <div id="appointments" className="bg-black rounded-lg mt-5 text-white">
            </div>
        </div>
    );
};

export default Calendar;