import React from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
    const location = useLocation();

    return <div>Hello, {location.state.id} and welcome</div>;
}

export default Dashboard;
