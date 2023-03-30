import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardComponents from "./DashboardComponents";

function Dashboard() {
    const location = useLocation();

    return (
        <div className="h-screen bg-[#191b3c]" >
            <DashboardHeader/>
            <>
            <div className="float-left">
                <Sidebar/>
            </div>
            <DashboardComponents/>
            </>
        </div>
    );
}

export default Dashboard;
