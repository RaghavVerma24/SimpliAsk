import React, {useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";

const Calendar = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });
    
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
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
            />
        </div>
    );
};

export default Calendar;