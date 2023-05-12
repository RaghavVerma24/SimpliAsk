import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import axios from 'axios'; 
import SignupImg from "../../assets/signup.svg";
import User1 from "../../assets/users/user1.png"
import User2 from "../../assets/users/user2.png"
import User3 from "../../assets/users/user3.png"
import User4 from "../../assets/users/user4.png"

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let [profile, setProfile] = useState("");
    const [card, setCard] = useState("");

    const history = useNavigate();

    async function submit(e) {
        e.preventDefault();

        profile = profile.split("\\")[2]
        try {
            await axios
                .post("http://localhost:8080/signup", {
                    email,
                    password,
                    profile
                })
                .then((res) => {
                    if ((res.data == "exist")) {
                        alert("User already exists");
                    } else if ((res.data == "nonexist")) {
                        // console.log("New User")
                        history("/dashboard", { state: { id: email } });
                    }
                })
                .catch((e) => {
                    alert("Incorrect Login");
                    console.log(e);
                });
        } catch {
            console.log(e);
        }
    }

    return (
        <div className="">
            <Navbar />
            <section className="gradient-form h-full bg-[#191b3c]">
                <div className="container h-full p-10 m-auto">
                    <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                        <div className="w-full">
                            <div className="h-full block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                                <div className="h-full g-0 lg:flex lg:flex-wrap">
                                    <div className="px-4 md:px-0 lg:w-1/2">
                                        <div className="md:mx-2 md:p-8">
                                            <h1 className="text-2xl md:text-3xl font-bold leading-tight">Join Us Today</h1>
                                            <form className="mt-5" action="POST" enctype="multipart/form-data">
                                                <div className="flex w-full">
                                                    <div className="w-1/2">
                                                        <div>
                                                            <label className="block text-gray-700">First and Last Name</label>
                                                            <input type="email" name id placeholder="Enter Full Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autoComplete required onChange={(e) => {setName(e.target.value);}}/>
                                                        </div>
                                                        <div className="mt-4">
                                                            <label className="block text-gray-700">Email Address</label>
                                                            <input type="email" name id placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autoComplete required onChange={(e) => {setEmail(e.target.value);}}/>
                                                        </div>
                                                        <div className="mt-4">
                                                            <label className="block text-gray-700">Password</label>
                                                            <input type="password" name id placeholder="Enter Password" minLength={6} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required onChange={(e) => {setPassword(e.target.value);}}/>
                                                        </div>
                                                    </div>
                                                    <div className="w-1/2 ml-5">
                                                        <div>
                                                            <label className="block text-gray-700">Upload a profile picture</label>
                                                            <input onChange={(e) => {
                                                                        console.log("Uploaded")
                                                                        setProfile(e.target.value);
                                                                    }} className="mt-2 relative m-0 block w-full min-w-0 flex-auto rounded-lg cursor-pointer bg-gray-200 px-3 py-[0.32rem] text-lg leading-[2.15] font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary" id="formFileLg" type="file" accept="image/*"/>
                                                        </div>
                                                        <div className="mt-4">
                                                            <label className="block text-gray-700">Upload your health card</label>
                                                            <div class="flex mt-2 items-center justify-center w-full">
                                                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                                    <div class="flex flex-col items-center justify-center pt-5 pb-8">
                                                                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                                    </div>
                                                                    <input id="dropzone-file" type="file" class="hidden" accept="image/*" onChange={(e) => {
                                                                        console.log("Uploaded")
                                                                        setCard(e.target.value);
                                                                    }}/>
                                                                </label>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </div>
                                            <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                                                px-4 py-3 mt-10" onClick={submit}>Get Started</button>
                                            </form>
                                            <hr className="my-6 border-gray-300 w-full" />
                                            <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                                            <div className="flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible" /></clipPath><path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg>
                                                <span className="ml-4">
                                                Sign up
                                                with
                                                Google
                                                </span>
                                            </div>
                                            </button>
                                            <p className="mt-8">
                                            Already have an account? 
                                            
                                            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold ml-1">
                                                Login
                                            </a>
                                            </p>
                                            <div className="flex">
                                                <div className="flex my-5 -space-x-4">
                                                    <img className="w-10 h-10 border-2 border-[#191b3c] rounded-full dark:border-gray-800" src={User1} alt="f" />
                                                    <img className="w-10 h-10 border-2 border-[#191b3c] rounded-full dark:border-gray-800" src={User2} alt="" />
                                                    <img className="w-10 h-10 border-2 border-[#191b3c] rounded-full dark:border-gray-800" src={User3} alt="" />
                                                    <img className="w-10 h-10 border-2 border-[#191b3c] rounded-full dark:border-gray-800" src={User4} alt="" />
                                                </div>
                                                <div class="bg-gray-700 w-0.5 h-7 my-auto ml-3"></div>
                                                <h1 className="float-left ml-3 my-auto text-black">Join <span className="font-bold">Hundreds</span> of Happy Clients</h1>
                                            </div>
                                            <p className="text-sm text-gray-500 mt-5">© 2023 SimpliAsk - All Rights Reserved.</p>
                                        </div>
                                    </div>
                                    <div className="px-4 md:px-0 lg:w-1/2 bg-[#FD7401] rounded-r-lg max-w-[full] hidden lg:block">
                                        <img
                                            src={SignupImg}
                                            alt="Doctor Image "
                                            className="w-full p-10"
                                        />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SignUp;
