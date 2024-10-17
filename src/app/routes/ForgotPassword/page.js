"use client";
import React, { useState } from "react";
import HeaderTem from "../../components/Header/Header";
import CustomFooter from "../../components/footer/footer";
import Head from "next/head";
import "./forgot.css";

export default function ForgotPaswwordScreen() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleOtpChange = (event) => {
        setOtp(event.target.value);
    };


    return(
        <>
        <HeaderTem></HeaderTem>
        <div className="MainContainer">
            <form className="formContiner">
                <h3>FORGOT PASSWORD</h3>
                <div className="inputContainer">
                    <div className="inputelemContainer">
                        <text>Email Id</text>
                        <input 
                            type="email" 
                            id="email" 
                            className="inputElement" 
                            placeholder="Enter your mail address"
                            required="true"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        </div>
                    <div className="inputelemContainer">
                        <text>Enter OTP</text>
                        <input 
                            type="text" 
                            id="otp" 
                            className="inputElement" 
                            placeholder="Enter the OTP" 
                            maxLength="6"
                            value={otp}
                            onChange={handleOtpChange}
                        />
                    </div>
                </div>
                <div className="btnContainer">
                    <button id="getOtpBtn">GET OTP</button>
                    <button id="verifyOtpBtn">VERIFY OTP</button>
                </div>
            </form>
        </div>
        <CustomFooter></CustomFooter>
        </>
    )
}