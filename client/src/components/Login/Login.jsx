import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import axios from "axios";
import DoctorImg from "../../assets/doctor.svg";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useNavigate();

    async function submit(e) {
        e.preventDefault();
        console.log("Login");

        try {
            await axios
                .post("http://localhost:8000/login", {
                    email,
                    password,
                })
                .then((res) => {
                    if (res.data == "exist") {
                        history("/dashboard", { state: { id: email } });
                    } else if (res.data == "nonexist") {
                        alert("User has not signed up");
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
            <section className="gradient-form h-100vh bg-[#191b3c]">
                <div className="container h-full p-10 m-auto">
                    <div className="h-30 g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                        <div className="h-30 w-full">
                            <div className="h-30 block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                                <div className="h-30 g-0 lg:flex lg:flex-wrap">
                                    <div className="px-4 md:px-0 lg:w-6/12">
                                        <div className="md:mx-2 md:p-8">
                                            <h1 className="text-2xl font-bold font-['Inter']">
                                                Welcome Back
                                            </h1>
                                            <form action="POST">
                                                <div
                                                    className="relative mb-4"
                                                    data-te-input-wrapper-init
                                                >
                                                    <input
                                                        type="email"
                                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                        id="userEmail"
                                                        placeholder="Email"
                                                        onChange={(e) => {
                                                            setEmail(
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                    <label
                                                        htmlFor="userEmail"
                                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-blue-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                                    >
                                                        Email
                                                    </label>
                                                </div>
                                                <div
                                                    className="relative mb-4"
                                                    data-te-input-wrapper-init
                                                >
                                                    <input
                                                        type="password"
                                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                        id="userPassword"
                                                        placeholder="Password"
                                                        onChange={(e) => {
                                                            setPassword(
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                    <label
                                                        htmlFor="userPassword"
                                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-blue-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                                    >
                                                        Password
                                                    </label>
                                                </div>
                                                <div className="mb-12 pt-1 pb-1 text-center">
                                                    <button
                                                        className="bg-[#191b3c] mb-3 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                        type="submit"
                                                        data-te-ripple-init
                                                        data-te-ripple-color="light"
                                                        onClick={submit}
                                                    >
                                                        Log in
                                                    </button>
                                                    <a href="#!">
                                                        Forgot password?
                                                    </a>
                                                </div>
                                                <div className="flex items-center justify-between pb-6">
                                                    <p className="mb-0 mr-2">
                                                        Don't have an account?
                                                    </p>
                                                    <button
                                                        type="button"
                                                        className="inline-block rounded border-2 border-danger px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                        data-te-ripple-init
                                                        data-te-ripple-color="light"
                                                    >
                                                        Register
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={DoctorImg}
                                            alt="Doctor Image "
                                            style={{ width: 600 }}
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

export default Login;
