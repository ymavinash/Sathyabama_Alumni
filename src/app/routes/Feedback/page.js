"use client";
import React, { useState, useContext } from "react";
import HeaderTem from "../../components/Header/Header";
import CustomFooter from "../../components/footer/footer";
import "./feedback.css";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

export default function RegistrationScreen() {
    const { auth } = useAuth();
    const [formData, setFormData] = useState({
        fullName: "",
        yearOfPassing: "",
        email: "",
        contactNumber: "",
        contactAddress: "",
    });

    const [formErrors, setFormErrors] = useState({
        fullName: "",
        yearOfPassing: "",
        email: "",
        contactNumber: "",
        contactAddress: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const validateForm = () => {
        const errors = {};

        // Validate full name (only letters and spaces allowed)
        if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
            errors.fullName = "Invalid full name";
        }

        // Validate year of passing (must be a number)
        if (isNaN(formData.yearOfPassing)) {
            errors.yearOfPassing = "Invalid year of passing";
        }

        // Validate email address
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Invalid email address";
        }

        // Validate contact number (must be a valid phone number)
        if (!/^\d{10}$/.test(formData.contactNumber)) {
            errors.contactNumber = "Invalid contact number";
        }

        // Validate contact address (only letters, numbers, and spaces allowed)
        if (!/^[a-zA-Z0-9\s]+$/.test(formData.contactAddress)) {
            errors.contactAddress = "Invalid contact address";
        }

        setFormErrors(errors);

        // Check if there are no errors
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            axios.post('https://alumni-backend-yqo6.onrender.com/feedbackform', {formData})
            .then(response => {
                alert(`Response from backend: ${JSON.stringify(response.data)}`);
            })
            .catch(error => {
                alert(error);
            });
        } else {
            console.log("Form has errors. Please fix them before submitting.");
        }
    };

    const yearOptions = [];
    for (let year = 1980; year <= 2024; year++) {
        yearOptions.push(
            <option key={year} value={year}>
                {year}
            </option>
        );
    }

    return (
        <div className="RegForm">
            <div>
                <HeaderTem/>
            </div>
            {auth && (<div className="Whole">
            <form method="POST" onSubmit={handleSubmit}>
                
                    <div className="form">
                    <h1>Feedback Form</h1>
                    <div className="InputForm">
                        <div className="InputElem">
                            <p>Full name</p>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your name"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                            <div>
                                {formErrors.fullName && (
                                    <span className="error">{formErrors.fullName}</span>
                                )}
                            </div>
                        </div>
                        <div className="InputElem">
                            <p>Year of passing</p>
                            <select
                                name="yearOfPassing"
                                value={formData.yearOfPassing}
                                onChange={handleChange}
                            >
                                <option value="" disabled>
                                    Select year
                                </option>
                                {yearOptions}
                            </select>
                            <div>
                            {formErrors.yearOfPassing && (
                                <span className="error">{formErrors.yearOfPassing}</span>
                            )}
                            </div>
                        </div>
                        <div className="InputElem">
                            <p>Email ID</p>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your mail id"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <div>
                            {formErrors.email && (
                                <span className="error">{formErrors.email}</span>
                            )}
                            </div>
                        </div>
                        <div className="InputElem">
                            <p>Contact Number</p>
                            <input
                                type="tel"
                                name="contactNumber"
                                placeholder="Enter your number"
                                value={formData.contactNumber}
                                onChange={handleChange}
                            />
                            <div>
                            {formErrors.contactNumber && (
                                <span className="error">{formErrors.contactNumber}</span>
                            )}
                            </div>
                        </div>
                        <div className="InputElem">
                            <p>Contact Address</p>
                            <input
                                type="text"
                                name="contactAddress"
                                placeholder="Enter your address"
                                value={formData.contactAddress}
                                onChange={handleChange}
                            />
                            <div>
                            {formErrors.contactAddress && (
                                <span className="error">{formErrors.contactAddress}</span>
                            )}
                            </div>
                        </div>
                        <div className="buttonCon">
                            <button type="submit">SUBMIT</button>
                        </div>
                    </div>
                    </div>
            </form>
            </div>)}
            <div>
                <CustomFooter></CustomFooter>
            </div>
        </div>
    );
}
