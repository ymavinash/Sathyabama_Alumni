'use client'
import React from "react";
import HeaderTem from "../../components/Header/Header";
import CustomFooter from "../../components/footer/footer";
import "./events.css";
import useAuth from "../../hooks/useAuth";

export default function Events() {
    const { auth } = useAuth();

    return (
        <>
        <HeaderTem></HeaderTem>
            {auth ? (
                <>
                <div className="main-container">
                        <div>
                            <h3>Application For Events:</h3>
                        </div>
                        <div className="container">
                            <div className="each">
                                <img src="/Events/regsitration form.jpg" alt="registration pic" />
                                <a href="/routes/registration">
                                    <h4>Registration Form</h4>
                                    <p>Click here to register for the <b>Alumni Meet</b> 2024</p>
                                </a>
                            </div>
                            <div className="each">
                                <img src="/Events/nomination form (2).jpg" alt="nomination pic" />
                                <a href="/routes/nomination">
                                    <h4>Nomination Form</h4>
                                    <p>Click here to nominate yourself for the <b>Alumni Awards</b></p>
                                </a>
                            </div>
                            <div className="each">
                                <img src="/Events/feedback (1).jpg" alt="feedback pic" />
                                <a href="">
                                    <h4>Feedback Form</h4>
                                    <p>Click here to give feedback about the <b>Alumni Events</b></p>
                                </a>
                            </div>
                        </div>
                    </div>   
                </>
            ) : (
                <div className="login-message">
                    <p>You need to login first to access this page!</p>
                    <a href="/routes/login">
                        <button>Login</button>
                    </a>
                </div>
            )}
            <CustomFooter></CustomFooter>
        </>
    );
}
