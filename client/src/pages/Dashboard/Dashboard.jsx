import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import DashboardHeader from "./DashboardHeader";

function Dashboard() {
    const location = useLocation();

    return (
        <div className="h-100vh bg-[#191b3c]" >
            <DashboardHeader/>
            <Sidebar/>
        </div>
    );
}

export default Dashboard;
