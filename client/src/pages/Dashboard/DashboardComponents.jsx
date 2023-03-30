import React from "react";
import Appointments from "./Components/Appointments";
import Chat from "./Components/Chat";
import Prescriptions from "./Components/Prescriptions";
import Records from "./Components/Records";
import DashboardHeader from "./DashboardHeader";

const DashboardComponents = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 h-screen bg-[#fff]">
                <Appointments />
                <Chat />
                <Prescriptions />
                <Records />
            </div>
        </>
    );
};

export default DashboardComponents;
