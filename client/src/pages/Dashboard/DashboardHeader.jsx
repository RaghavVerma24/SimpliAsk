import React from "react";

import { useLocation } from "react-router-dom";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardHeader = () => {
    const location = useLocation();

    return (
        <nav className="w-full bg-[#191b3c] shadow">
            <div className="justify-between px-4  md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <h2 className="text-2xl font-bold text-white">
                            SimpliAsk
                        </h2>
                    </div>
                </div>
                <div className="space-x-5 md:inline">
                    <h2 className="text-[24px] text-white">
                        {location.state.id}
                        <FontAwesomeIcon icon={faCircleUser} className="ml-2"/>
                    </h2>
                </div>
            </div>
        </nav>
    );
};

export default DashboardHeader;
