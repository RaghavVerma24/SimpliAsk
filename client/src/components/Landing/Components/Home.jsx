import React from "react";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DoctorImg from "../../../assets/doctor.svg";
const Home = () => {
    return (
        <>
            <div className="py-10 justify-center xl:max-w-8xl mx-auto md:items-center flex flex-row md:px-8">
                <div className="float-left ml-20 xl:max-w-3xl pr-20">
                    <h2 className="text-[50px] font-bold text-white">
                        The Ultimate Doctor to Patient connectivity tool
                    </h2>
                    <h2 className="text-[20px] text-[#c0b2ac] break-word mb-10">
                        Facilitate secure and reliable communication between doctors
                        and patients through a range of digital channels, such as video conferencing, messaging, and email.
                    </h2>
                    <div className="hidden space-x-2 md:inline-block mr-5 shadow-2xl">
                        <a
                            href="javascript:void(0)"
                            className="px-8 py-4 text-white bg-[#6c63ff] font-bold rounded-md shadow text-[18px]"
                        >
                            Get Started
                        </a>
                    </div>
                    <div className="hidden space-x-2 md:inline-block shadow-2xl">
                        <a
                            href="javascript:void(0)"
                            className="px-8 py-4 text-[#191b3c] bg-white font-bold rounded-md shadow text-[18px]"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                <div className="max-w-50">
                    <img
                        src={DoctorImg}
                        alt="Doctor Image "
                        style={{ width: 800 }}
                    />
                </div>
                
            </div>
            <h1 className="animate-bounce text-white w-6 h-6 mx-auto mb-10">
                <FontAwesomeIcon
                    icon={faArrowCircleDown}
                    className=" text-[50px]"
                />
            </h1>
        </>
    );
};

export default Home;
