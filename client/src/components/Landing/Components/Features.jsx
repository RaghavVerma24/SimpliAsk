import React from "react";
import DoctorImg from "../../../assets/doctor.svg";

const Features = () => {
    return (
        <div className="py-10 justify-center xl:max-w-8xl mx-auto md:items-center flex flex-row md:px-8">
            {/* <div className="float-left max-w-50 mr-20">
                <img
                    src={DoctorImg}
                    alt="Doctor Image "
                    style={{ width: 500 }}
                />
            </div>
            <div className="xl:max-w-3xl">
                <h2 className="text-[40px] font-bold text-white">
                    The Ultimate Doctor to Patient connectivity tool
                </h2>
                <h2 className="text-[20px] text-[#c0b2ac] break-word mb-10">
                    Facilitate secure and reliable communication between doctors
                    and patients through a range of digital channels, such as
                    video conferencing, messaging, and email.
                </h2>
                <div className="hidden space-x-2 md:inline-block">
                    <a
                        href="javascript:void(0)"
                        className="px-8 py-4 text-white bg-[#202454] font-bold rounded-md shadow text-[18px]"
                    >
                        Get Started
                    </a>
                </div>
            </div> */}
            <div className="grid grid-cols-3 gap-20 break-words w-full xl:max-w-7xl">
              <div className="bg-[#fff]">a</div>
              <div className="bg-[#fff]">b</div>
              <div className="bg-[#fff]">c</div>
          </div>
        </div>
    );
};

export default Features;
