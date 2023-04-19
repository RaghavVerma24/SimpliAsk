import React from "react";

import { useLocation } from "react-router-dom";

const DashboardHeader = () => {
    const location = useLocation();

    return (
        <nav className="w-full bg-[#191b3c] shadow h-[6vh]">
            <div className="justify-between px-4 md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <h2 className="text-2xl font-bold text-white">
                            SimpliAsk
                        </h2>
                    </div>
                </div>
                <div className="flex">
                    <h2 className="text-[24px] text-white mr-3">
                        {"location.state.id"}
                    </h2>
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex">
                        <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DashboardHeader;
