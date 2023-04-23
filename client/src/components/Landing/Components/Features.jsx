import React from "react";
import DoctorImg from "../../../assets/doctor.svg";
import AppointmentImg from "../../../assets/appointments.svg"
import ChatImg from "../../../assets/chat.svg"
import PrescriptionImg from "../../../assets/prescriptions.svg"
import RecordsImg from "../../../assets/records.svg"
import {faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Features = () => {
    return (
        <>
            <div className="py-20 bg-[#fff] justify-center xl:max-w-8xl mx-auto md:items-center flex flex-row md:px-8 my-20" id="appointments">
                <div className="max-w-50">
                    <img
                        src={AppointmentImg}
                        alt="Doctor Image "
                        style={{ width: 600 }}
                    />
                </div>
                <div className="float-left ml-20 xl:max-w-3xl">
                    <h2 className="text-[40px] font-bold text-[#202454]">
                        Schedule Appointments with Doctors
                    </h2>
                    <h2 className="text-[20px] text-[#c0b2ac] break-word mb-10">
                        User-friendly online platform that allows you to easily schedule appointments with doctors. Say goodbye to phone calls and waiting in queues, and book appointments at your convenience with our intuitive and secure system.
                    </h2>
                    <div className="flex">
                        <div className="bg-[#191b3c] p-5 rounded-[20px] mr-5 w-1/3">
                            <div className="flex">
                                <h2 className="float-left text-[20px] font-bold text-[#fff] ">
                                    High-quality video and audio
                                </h2>
                            </div>
                            <h2 className="text-[20px] text-[#c0b2ac] my-3">
                                Clear video/audio for effective communication without disruptions or lag
                            </h2>
                        </div>
                        <div className="bg-[#191b3c] p-5 rounded-[20px] mr-5 w-1/3">
                            <div className="flex">
                                <h2 className="float-left text-[20px] font-bold text-[#fff] ">
                                    Recording and playback options
                                </h2>
                            </div>
                            <h2 className="text-[20px] text-[#c0b2ac] break-word my-3">
                                Recording/playback options for capturing and reviewing important discussions.
                            </h2>
                        </div>
                        <div className="bg-[#191b3c] p-5 rounded-[20px] w-1/3">
                            <div className="flex">
                                <h2 className="float-left text-[20px] font-bold text-[#fff]">
                                    Meeting scheduling and calendar integration
                                </h2>
                            </div>
                            <h2 className="text-[20px] text-[#c0b2ac] break-word my-3">
                                Scheduling and calendar integration for easy meeting planning and organization.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-20 justify-center xl:max-w-8xl mx-auto md:items-center flex flex-row md:px-8 my-20">
                <div className="xl:max-w-3xl">
                    <h2 className="text-[40px] font-bold text-[#fff] mb-3">
                        Fast Chat Communication between Patients and Doctors
                    </h2>
                    <h2 className="text-[20px] text-[#c0b2ac] break-word mb-10">
                    Stay connected with your healthcare providers through our platform's messaging feature, enabling you to easily communicate, discuss health concerns, and receive personalized medical advice
                    </h2>
                    <div className="flex">
                        <div className="bg-[#fff] p-5 rounded-[20px] mr-5 w-1/3">
                            <div className="flex">
                                <h2 className="float-left text-[20px] font-bold text-[#191b3c] ">
                                    Instant Messaging
                                </h2>
                            </div>
                            <h2 className="text-[20px] text-[#c0b2ac] my-3">
                                Real-time messaging for quick, efficient conversations with doctors. Stay connected effortlessly.
                            </h2>
                        </div>
                        <div className="bg-[#fff] p-5 rounded-[20px] mr-5 w-1/3">
                            <div className="flex">
                                <h2 className="float-left text-[20px] font-bold text-[#191b3c] ">
                                    Multimedia Sharing
                                </h2>
                            </div>
                            <h2 className="text-[20px] text-[#c0b2ac] break-word my-3">
                                Convenient multimedia sharing, including photos, videos, audio clips, and documents. Collaborate and share media effortlessly.
                            </h2>
                        </div>
                        <div className="bg-[#fff] p-5 rounded-[20px] w-1/3">
                            <div className="flex">
                                <h2 className="float-left text-[20px] font-bold text-[#191b3c]">
                                    Group Chats
                                </h2>
                            </div>
                            <h2 className="text-[20px] text-[#c0b2ac] break-word my-3">
                                Effortless group chats for connecting, collaborating, and sharing updates with multiple patients.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="float-left max-w-50 ml-10">
                    <img
                        src={ChatImg}
                        alt="Doctor Image "
                        style={{ width: 600 }}
                    />
                </div>
            </div>
            <div className="py-20 bg-[#fff] justify-center xl:max-w-8xl mx-auto md:items-center flex flex-row md:px-8 my-25">
                <div className="max-w-50">
                    <img
                        src={PrescriptionImg}
                        alt="Doctor Image "
                        style={{ width: 600 }}
                    />
                </div>
                <div className="float-left ml-20 xl:max-w-3xl">
                    <h2 className="text-[40px] font-bold text-[#202454]">
                        Ask Questions to the Personal Assistant
                    </h2>
                    <h2 className="text-[20px] text-[#c0b2ac] break-word mb-10">
                        User-friendly online platform that allows you to easily schedule appointments with doctors. Say goodbye to phone calls and waiting in queues, and book appointments at your convenience with our intuitive and secure system.
                    </h2>
                    <div className="flex">
                        <div className="bg-[#191b3c] p-5 rounded-[20px] mr-5 w-1/3">
                            <div className="flex">
                                <h2 className="float-left text-[20px] font-bold text-[#fff] ">
                                    Personalized reminders and notifications
                                </h2>
                            </div>
                            <h2 className="text-[20px] text-[#c0b2ac] my-3">
                                Receive customized reminders and notifications for appointments, meetings, and prescriptions.
                            </h2>
                        </div>
                        <div className="bg-[#191b3c] p-5 rounded-[20px] mr-5 w-1/3">
                            <div className="flex">
                                <h2 className="float-left text-[20px] font-bold text-[#fff] ">
                                    Message management
                                </h2>
                            </div>
                            <h2 className="text-[20px] text-[#c0b2ac] break-word my-3">
                                Handle incoming and outgoing communications efficiently with message management
                            </h2>
                        </div>
                        <div className="bg-[#191b3c] p-5 rounded-[20px] w-1/3">
                            <div className="flex">
                                <h2 className="float-left text-[20px] font-bold text-[#fff]">
                                    Information retrieval
                                </h2>
                            </div>
                            <h2 className="text-[20px] text-[#c0b2ac] break-word my-3">
                                Quickly retrieve answers, health conditions, current news, and more.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
