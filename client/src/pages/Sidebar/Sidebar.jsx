import React from "react";
import { faCalendar, faCircleUser, faComment, faGear, faHouse, faList, faPrescriptionBottleMedical, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
    return (
        <div className="h-screen flex bg-[#fff]">
            <div className="flex flex-col p-3 bg-[#0C0404] shadow w-60">
                <div className="space-y-3">
                    <div className="flex-1">
                        <ul className="pt-2 pl-4 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <a
                                    href="/dashboard"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <FontAwesomeIcon
                                        icon={faHouse}
                                        className="text-[#fff] text-2xl"
                                    />

                                    <span className="text-gray-100 text-[18px]">
                                        Dashboard
                                    </span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="/appointments"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <FontAwesomeIcon
                                        icon={faCalendar}
                                        className="text-[#fff] text-2xl"
                                    />

                                    <span className="text-gray-100 text-[18px]">
                                        Appoinments
                                    </span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="/chat"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <FontAwesomeIcon
                                        icon={faComment}
                                        className="text-[#fff] text-2xl"
                                    />

                                    <span className="text-gray-100 text-[18px]">
                                        Chat
                                    </span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="/precriptions"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <FontAwesomeIcon
                                        icon={faPrescriptionBottleMedical}
                                        className="text-[#fff] text-2xl"
                                    />

                                    <span className="text-gray-100 text-[18px]">
                                        Prescriptions
                                    </span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="/records"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <FontAwesomeIcon
                                        icon={faList}
                                        className="text-[#fff] text-2xl"
                                    />

                                    <span className="text-gray-100 text-[18px]">
                                        Records
                                    </span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="/settings"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <FontAwesomeIcon
                                        icon={faGear}
                                        className="text-[#fff] text-2xl"
                                    />

                                    <span className="text-gray-100 text-[18px]">
                                        Settings
                                    </span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <FontAwesomeIcon
                                        icon={faRightFromBracket}
                                        className="text-[#fff] text-2xl"
                                    />
                                    <span
                                        className="text-gray-100 text-[18px]"
                                        onClick={() =>
                                            console.log("Logging out")
                                        }
                                    >
                                        Logout
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
