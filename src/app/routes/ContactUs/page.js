'use client'
import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css'; 
import HeaderTem from '../../components/Header/Header';
import CustomFooter from "../../components/footer/footer";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData); // corrected typo here
            const response = await axios.post('http://localhost:8100/contactus', formData);
            alert('Form data sent successfully');
            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            alert('Error sending form data:', error.message);
        }
    };

    return (
        <>
            <HeaderTem></HeaderTem>
            <div className="contact-container">
                <div className='contact-form-info-container'>
                    <div className="contact-form-container">
                        <h2>Contact Us</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-field">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                    <br />
                    <div className="contact-info">
                        <h2>Contact Info:</h2>
                        <p><span>Sathyabama Institute of Science and Technology (Deemed to be University)</span> Jeppiaar Nagar, Rajiv Gandhi Salai, Chennai-600 119, Tamilnadu, INDIA.</p>
                        <p><span>Phone:</span> +1234567890</p>
                        <p><span>Email:</span> cse.alumnimeet@sathyabama.ac.in</p>
                    </div>
                </div>
                <div className="map-container">
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.541231832468!2d80.2260766!3d12.872880900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b8c90befe2b%3A0x170ab8b5b21bb530!2sSathyabama%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1711002566845!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <CustomFooter></CustomFooter>
        </>
    );
}
