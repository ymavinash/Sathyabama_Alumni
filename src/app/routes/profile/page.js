"use client";
import React, { useState, useEffect } from 'react';
import './profile.css'; // Import your CSS file for styling
import HeaderTem from '../../components/Header/Header';
import CustomFooter from '../../components/footer/footer';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

function EditableProfile(){

    const { name , registernumber, profilepic, designation} = useAuth();

    const [userInfo, setUserInfo] = useState({
        username: "",
        email: 'john.doe@example.com',
        register: "",
        yearOfGraduation: '2020',
        designation: '',
        contactNumber: '1234567890',
        profilePicture: '/blank-profile.png', // Replace with the path to your default image
    });

    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        setUserInfo((prevInfo) => ({
            ...prevInfo,
            username: name,
            register: registernumber,
            designation: designation
        }));
    }, [name, registernumber, designation]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setUserInfo((prevInfo) => ({
                ...prevInfo,
                profilePicture: URL.createObjectURL(file),
            }));
        }
    };

    const handleToggleEditMode = () => {
        setIsEditMode((prevMode) => !prevMode);
    };

    const handleSaveChanges = () => {
        const profilepic = userInfo.profilePicture;
        const contactnumber = document.getElementById('contactNumber').value;
        const designation = document.getElementById('designation').value;
        axios.post('http://localhost:8100/update-user', { registernumber, profilepic, contactnumber, designation })
        .then(res=>{
            if(res.data.message == "User details updated successfully"){
                alert("Updated Successfully")
            }
            else{
                alert("Internal Server Error")
            }
        })
        setIsEditMode(false); // Exit edit mode after saving changes
    };

    return (
        <>
            <HeaderTem></HeaderTem>
            <div className="profile-container">
                <h2>Profile</h2>
                <div className={`profile-picture-container ${isEditMode ? 'edit-mode' : ''}`}>
                    {userInfo.profilePicture && (
                        <img
                            src={userInfo.profilePicture}
                            alt="Profile"
                            className="profile-picture"
                        />
                    )}
                    {isEditMode && (
                        <input
                            type="file"
                            id="profilePicture"
                            name="profilePicture"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    )}
                </div>
                <form className="form-container">
                    <div className="form-pair">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={userInfo.username}
                            onChange={handleChange}
                            disabled={!isEditMode}
                        />
                    </div>
                    <div className="form-pair">
                        <label htmlFor="register">Register Number</label>
                        <input
                            type="number"
                            id="register"
                            name="register"
                            value={userInfo.register}
                            onChange={handleChange}
                            disabled={!isEditMode}
                        />
                    </div>
                    <div className="form-pair">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleChange}
                            disabled={!isEditMode}
                        />
                    </div>
                    <div className="form-pair">
                        <label htmlFor="yearOfGraduation">Year of Graduation</label>
                        <input
                            type="text"
                            id="yearOfGraduation"
                            name="yearOfGraduation"
                            value={userInfo.yearOfGraduation}
                            onChange={handleChange}
                            disabled={!isEditMode}
                        />
                    </div>
                    <div className="form-pair">
                        <label htmlFor="designation">Designation</label>
                        <input
                            type="text"
                            id="designation"
                            name="designation"
                            value={userInfo.designation}
                            onChange={handleChange}
                            disabled={!isEditMode}
                        />
                    </div>
                    <div className="form-pair">
                        <label htmlFor="contactNumber">Contact Number</label>
                        <input
                            type="text"
                            id="contactNumber"
                            name="contactNumber"
                            value={userInfo.contactNumber}
                            onChange={handleChange}
                            disabled={!isEditMode}
                        />
                    </div>
                    {/* Add more pairs of fields as needed */}
                    {isEditMode && (
                        <button type="button" onClick={handleSaveChanges}>
                            Save Changes
                        </button>
                    )}
                </form>
                <button type="button" onClick={handleToggleEditMode}>
                    {isEditMode ? 'Cancel' : 'Edit Profile'}
                </button>
            </div>
            <CustomFooter></CustomFooter>
        </>
    );
};

export default EditableProfile;
