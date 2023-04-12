import React from "react";
import DoctorImg from "../../../assets/doctor.svg";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Features = () => {
    return (
        <>
            
            <div className="py-10 bg-[#fff] justify-center xl:max-w-8xl mx-auto md:items-center flex flex-row md:px-8">
                <div className="max-w-50">
                    <img
                        src={DoctorImg}
                        alt="Doctor Image "
                        style={{ width: 600 }}
                    />
                </div>
                <div className="float-left ml-20 xl:max-w-3xl">
                    <h2 className="text-[40px] font-bold text-[#202454]">
                        Try a virtual communication platform
                    </h2>
                    <h2 className="text-[20px] text-[#c0b2ac] break-word mb-10">
                        Facilitate secure and reliable communication between doctors
                        and patients through a range of digital channels, such as video conferencing, messaging, and email.
                    </h2>
                    <div className="flex">
                        <div className="">
                            <div className="flex">
                                <FontAwesomeIcon
                                    icon={faVideoCamera}
                                    className="text-black text-[25px]"
                                />
                                <h2 className="float-left text-[25px] font-bold text-[#202454]">
                                    Quick Response
                                </h2>
                            </div>
                            <h2 className="text-[20px] text-[#c0b2ac] break-word mb-10">
                                Facilitate secure and reliable communication between doctors
                                and patients through a range of digital channels, such as video conferencing, messaging, and email.
                            </h2>
                        </div>
                        <div className="">
                            <h2 className="text-[40px] font-bold text-[#202454]">
                                Try a virtual communication platform
                            </h2>
                            <h2 className="text-[20px] text-[#c0b2ac] break-word mb-10">
                                Facilitate secure and reliable communication between doctors
                                and patients through a range of digital channels, such as video conferencing, messaging, and email.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10 justify-center xl:max-w-8xl mx-auto md:items-center flex flex-row md:px-8">
                <div className="max-w-50">
                    <img
                        src={DoctorImg}
                        alt="Doctor Image "
                        style={{ width: 600 }}
                    />
                </div>
                <div className="float-left ml-20 xl:max-w-3xl">
                    <h2 className="text-[40px] font-bold text-white">
                        The Ultimate Doctor to Patient connectivity tool
                    </h2>
                    <h2 className="text-[20px] text-[#c0b2ac] break-word mb-10">
                        Facilitate secure and reliable communication between doctors
                        and patients through a range of digital channels, such as video conferencing, messaging, and email.
                    </h2>
                    <div className="hidden space-x-2 md:inline-block">
                        <a
                            href="javascript:void(0)"
                            className="px-8 py-4 text-white bg-[#202454] font-bold rounded-md shadow text-[18px]"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
            <div className="py-10 bg-[#fff] justify-center xl:max-w-8xl mx-auto md:items-center flex flex-row md:px-8">
                <div className="max-w-50">
                    <img
                        src={DoctorImg}
                        alt="Doctor Image "
                        style={{ width: 600 }}
                    />
                </div>
                <div className="float-left ml-20 xl:max-w-3xl">
                    <h2 className="text-[40px] font-bold text-white">
                        The Ultimate Doctor to Patient connectivity tool
                    </h2>
                    <h2 className="text-[20px] text-[#c0b2ac] break-word mb-10">
                        Facilitate secure and reliable communication between doctors
                        and patients through a range of digital channels, such as video conferencing, messaging, and email.
                    </h2>
                    <div className="hidden space-x-2 md:inline-block">
                        <a
                            href="javascript:void(0)"
                            className="px-8 py-4 text-white bg-[#202454] font-bold rounded-md shadow text-[18px]"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
            <div className="py-10 justify-center xl:max-w-8xl mx-auto md:items-center flex flex-row md:px-8">
                <div className="max-w-50">
                    <img
                        src={DoctorImg}
                        alt="Doctor Image "
                        style={{ width: 600 }}
                    />
                </div>
                <div className="float-left ml-20 xl:max-w-3xl">
                    <h2 className="text-[40px] font-bold text-white">
                        The Ultimate Doctor to Patient connectivity tool
                    </h2>
                    <h2 className="text-[20px] text-[#c0b2ac] break-word mb-10">
                        Facilitate secure and reliable communication between doctors
                        and patients through a range of digital channels, such as video conferencing, messaging, and email.
                    </h2>
                    <div className="hidden space-x-2 md:inline-block">
                        <a
                            href="javascript:void(0)"
                            className="px-8 py-4 text-white bg-[#202454] font-bold rounded-md shadow text-[18px]"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
