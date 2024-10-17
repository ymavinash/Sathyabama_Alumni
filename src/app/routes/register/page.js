"use client"
import React, { useState } from 'react';
import './register_style.css';


function Register() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        registerNumber: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFocus = (e) => {
        const label = e.target.parentNode.querySelector('label');
        label.classList.add('active');
        label.classList.add('hidden');
    };

    const handleBlur = (e) => {
        if (!e.target.value) {
            const label = e.target.parentNode.querySelector('label');
            label.classList.remove('active');
            label.classList.remove('hidden');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
        // Clear the form after submission
        setFormData({
            fullName: '',
            email: '',
            registerNumber: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <body>
            <div className="mainContainer">
         <div className="logo"> 
               <div>
                 <img src="/logonew1.png" alt="logo" className="logoImg"></img>
               </div>
               <div className="logo-text">
                 <h1>SATHYABAMA</h1>
                 <div className="subtitle">
                   <h3>INSTITUTE OF SCIENCE AND TECHNOLOGY</h3>
                   <h3>(DEEMED TO BE UNIVERSITY)</h3>
                   <h3>CATEGORY-1 UNIVERSITY BY UGC</h3> 
                 </div>
               </div>
               <div className='back_butt'>
                    <button type='back'>Back</button>
               </div>
         </div>
            <div className="register-container">
            <div>
                <img src="/excited-yay.gif" className='reg_img' alt="Animated GIF" />
            </div>
            <div className='register_form'>
            <h2>Register Account</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group">
                <input
                    placeholder='Full Name'
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                />
                <label htmlFor="fullName" className={formData.fullName ? 'active' : ''}>Full Name</label>
                </div>
                <div className="form-group">
                <input
                    placeholder='Email'
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                />
                <label htmlFor="email" className={formData.email ? 'active' : ''}>Email</label>
            </div>
            <div className="form-group">
                <input
                    placeholder='Regsiter Number'
                    type="text"
                    id="registerNumber"
                    name="registerNumber"
                    value={formData.registerNumber}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                />
                <label htmlFor="registerNumber" className={formData.registerNumber ? 'active' : ''}>Register Number</label>
            </div>
            <div className="form-group">
                <input
                    placeholder='Password'
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                />
                <label htmlFor="password" className={formData.password ? 'active' : ''}>Password</label>
            </div>
            <div className="form-group">
                <input
                    placeholder='Confirm Password'
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                />
                <label htmlFor="confirmPassword" className={formData.confirmPassword ? 'active' : ''}>Confirm Password</label>
            </div>
                <button className='regi_butt' type="submit">Register</button>
            </form>
            </div>
        </div>
        </div>
        </body>
    );
}

export default Register;