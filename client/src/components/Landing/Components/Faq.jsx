import React, { useState } from 'react'

const Faq = () => {
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);

    return (
        <div>
            <section class="bg-[#191b3c] mt-20 py-10 sm:py-16 lg:py-24" id="faq">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="max-w-5xl mx-auto text-center">
                        <h2 className="text-[40px] font-bold text-[#fff]">
                            Frequently Asked Questions
                        </h2>
                        <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">We can answer them for you!</p>
                    </div>

                    <div class="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                        <div class="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                            <button type="button" class="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => setToggle1(!toggle1)}>
                                <span class="flex text-lg font-semibold text-black"> How to create an account? </span>

                                {toggle1 ?
                                    <svg class="w-6 h-6 text-gray-400 rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                :
                                    <svg class="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                }
                            </button>

                            {toggle1 &&
                                <div class="px-4 pb-5 sm:px-6 sm:pb-6">
                                    <p>Click Sign up and register an account. You will need to have a profile picture and a valid health card with you during the process.</p>
                                </div>
                            }
                            
                        </div>

                        <div class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <button type="button" class="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => setToggle2(!toggle2)}>
                                <span class="flex text-lg font-semibold text-black"> What should patients do in case of technical issues or app-related problems? </span>

                                {toggle2 ?
                                    <svg class="w-6 h-6 text-gray-400 rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                :
                                    <svg class="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                }
                            </button>

                            {toggle2 &&
                                <div class="px-4 pb-5 sm:px-6 sm:pb-6">
                                    <p> In case of technical issues or app-related problems, patients should typically contact the support team on the main page.</p>
                                </div>
                            }
                        </div>

                        <div class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <div class="">
                                <button type="button" class="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => setToggle3(!toggle3)}>
                                    <span class="flex text-lg font-semibold text-black"> Can doctors conduct virtual consultations using the app? </span>

                                    {toggle3 ?
                                        <svg class="w-6 h-6 text-gray-400 rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    :
                                        <svg class="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    }
                                </button>

                                {toggle3 &&
                                    <div class="px-4 pb-5 sm:px-6 sm:pb-6">
                                        <p>Yes, virtual consultations are a common feature of doctor patient connectivity apps. Doctors can conduct video consultations with patients through the app, allowing for remote diagnosis, treatment, and follow-up appointments.</p>
                                    </div>
                                }
                            </div>
                        </div>

                        <div class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <button type="button" class="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => setToggle4(!toggle4)}>
                                <span class="flex text-lg font-semibold text-black"> How can patients book appointments using the doctor patient connectivity app? </span>

                                {toggle4 ?
                                    <svg class="w-6 h-6 text-gray-400 rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                :
                                    <svg class="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                }
                            </button>

                            {toggle4 &&
                                <div class="px-4 pb-5 sm:px-6 sm:pb-6">
                                    <p>Patients can typically book appointments through the app by selecting an available time slot from the doctor's schedule.</p>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Faq