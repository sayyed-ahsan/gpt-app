'use client'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Modal({ isOpen, closeModal }) {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });
    const [errors, setErrors] = useState({});
    if (!isOpen) return null;
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = "Name is required";
        }
        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            navigate("/checkout");
        }
    }
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 overflow-y-auto h-full w-full"
        >
            <form
                className="max-w-[690px] mx-auto lg:max-w-full"
                onClick={handleSubmit}
            >
                <div
                    className="relative top-20 mx-auto p-5 border max-w-[620px] shadow-lg bg-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute right-0 top-[0]" onClick={closeModal}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <p className="text-center text-[20px] sm:text-[22px] font-bold">STEP 1: Confirm Your Details</p>
                    <p className="text-center text-[20px] sm:text-[22px]">(For Access and Bonuses)</p>
                    <div className="max-w-[380px] mx-auto mt-4">
                        <input type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name Here (for account)*"
                            class="block w-full border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
                        />
                        <p className="text-start text-red-500 text-[16px]">{errors.name}</p>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email Here (for account)*"
                            class="block mt-3 w-full border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
                        />
                        <p className="text-start text-red-500 text-[16px]">{errors.email}</p>
                    </div>
                    <div className="mt-5 max-w-[380px] mx-auto">
                        <button
                            type="submit"
                            className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#e73904] text-[25px] font-bold text-white hover:bg-[#7e1900]  focus:outline-none "
                        >
                            NEXT...👉
                        </button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default Modal;