"use client";
import React, { useState } from 'react';
import HeaderTem from '../../components/Header/Header';
import CustomFooter from '../../components/footer/footer';
import "./nomination.css";
import axios from "axios"
export default function Nomination() {

    const [pdfFile, setPdfFile] = useState(null);

    const [formData, setFormData] = useState({
        fullName: "",
        yearOfPassing: "",
        email: "",
        contactNumber: "",
        contactAddress: "",
        organizationName: "",
        designation: "",
        careerHighlights: "",
        awardsReceived: "",
        socialServices: "",
        ngosAssociated: "",
        professionalMemberships: "",
        otherContributions: "",
        resourcePerson: "",
        alumniTalks: "",
        others: "",
    });

    const [formErrors, setFormErrors] = useState({
        fullName: "",
        yearOfPassing: "",
        email: "",
        contactNumber: "",
        contactAddress: "",
        organizationName: "",
        designation: "",
        careerHighlights: "",
        awardsReceived: "",
        socialServices: "",
        ngosAssociated: "",
        professionalMemberships: "",
        otherContributions: "",
        resourcePerson: "",
        alumniTalks: "",
        others: "",
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPdfFile(file);
        }
    };

    

    const handleFileRemove = () => {
        setPdfFile(null);
    };    

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
            const formDataToSend = new FormData();
    
            Object.keys(formData).forEach(key => {
                formDataToSend.append(key, formData[key]);
            });
    
            if (pdfFile) {
                formDataToSend.append("pdfFile", pdfFile);
            }
    
            console.log("Form data to send:", formDataToSend);
    
            axios.post('http://localhost:8100/nominationdetails', formData)
                .then(response => {
                    alert(`Response from backend: ${JSON.stringify(response.data)}`);
                })
                .catch(error => {
                    console.error("Error:", error);
                    alert("An error occurred while submitting the form. Please try again later.");
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
        <div>
            <div>
                <HeaderTem></HeaderTem>
            </div>
            <div className='nomination_box'>
                <form onSubmit={handleSubmit}>
                    <div className="primary_nominbox">
                        <div className='nomin_form'>
                        <div className="InputElem">
                            <h1>Nomination Form</h1>
                                <p>First name</p>
                                <input className="input"
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                />
                                {formErrors.fullName && (
                                    <span className="error">{formErrors.fullName}</span>
                                )}
                            </div>
                            <div className="InputElem">
                                <p>Year of passing</p>
                                <select
                                    name="yearOfPassing"
                                    value={formData.yearOfPassing}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>
                                        Select year
                                    </option>
                                    {yearOptions}
                                </select>
                                {formErrors.yearOfPassing && (
                                    <span className="error">{formErrors.yearOfPassing}</span>
                                )}
                            </div>
                            <div className="InputElem">
                                <p>Contact Number</p>
                                <input className="input"
                                    type="text"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    placeholder="Enter your number"
                                    required
                                />
                                {formErrors.contactNumber && (
                                    <span className="error">{formErrors.contactNumber}</span>
                                )}
                            </div>
                            <div className="InputElem">
                                <p>Email ID</p>
                                <input className="input"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your mail id"
                                    required
                                />
                                {formErrors.email && (
                                    <span className="error">{formErrors.email}</span>
                                )}
                            </div>
                            <div className="InputElem">
                                <p>Contact Address</p>
                                <input className="input"
                                    type="text"
                                    name="contactAddress"
                                    value={formData.contactAddress}
                                    onChange={handleChange}
                                    placeholder="Enter your address"
                                    required
                                />
                                {formErrors.contactAddress && (
                                    <span className="error">{formErrors.contactAddress}</span>
                                )}
                            </div>
                        </div> 
                    </div>
                    <div className='secondary_nomin'>
                    <div className="InputElem">
                                <h1>Confluence 2024 - ALUMNI AWARDS - CALL FOR NOMINATIONS</h1>
                                <p>Award Categories</p>
                                <input
                                    className='radio'
                                    type="radio"
                                    name="awardCategory"
                                    value="Best Entrepreneur"
                                    onChange={handleChange}
                                    checked={formData.awardCategory === "Best Entrepreneur"}
                                />
                                <label>Best Entrepreneur</label><br/>
                                <input 
                                    className='radio'
                                    type="radio"
                                    name="awardCategory"
                                    value="Best Researcher"
                                    onChange={handleChange}
                                    checked={formData.awardCategory === "Best Researcher"}
                                />
                                <label>Best Researcher</label><br/>
                                <input 
                                    className='radio'
                                    type="radio"
                                    name="awardCategory"
                                    value="Exemplary Alumni Award (Best contribution towards department/Institution)"
                                    onChange={handleChange}
                                    checked={formData.awardCategory === "Exemplary Alumni Award (Best contribution towards department/Institution)"}
                                />
                                <label>Exemplary Alumni Award (Best contribution towards department/Institution)</label><br/>
                                <input 
                                    className='radio'
                                    type="radio"
                                    name="awardCategory"
                                    value="Best Social Worker"
                                    onChange={handleChange}
                                    checked={formData.awardCategory === "Best Social Worker"}
                                />
                                <label>Best Social Worker</label><br/>
                                <input 
                                    className='radio'
                                    type="radio"
                                    name="awardCategory"
                                    value="Best Industry Achiever"
                                    onChange={handleChange}
                                    checked={formData.awardCategory === "Best Industry Achiever"}
                                />
                                <label>Best Industry Achiever</label><br/>
                            </div>
                            <div className="InputElem">
                                <p>Field of Work</p>
                                <input 
                                    className='radio'
                                    type="radio"
                                    name="awardCategory"
                                    value="IT"
                                    onChange={handleChange}
                                    checked={formData.awardCategory === "IT"}
                                />
                                <label>IT</label><br/>
                                <input 
                                    className='radio'
                                    type="radio"
                                    name="awardCategory"
                                    value="Government Sector"
                                    onChange={handleChange}
                                    checked={formData.awardCategory === "Government Sector"}
                                />
                                <label>Government Sector</label><br/>
                                <input 
                                    className='radio'
                                    type="radio"
                                    name="awardCategory"
                                    value="Entrepreneur"
                                    onChange={handleChange}
                                    checked={formData.awardCategory === "Entrepreneur"}
                                />
                                <label>Entrepreneur</label><br/>
                                <input 
                                    className='radio'
                                    type="radio"
                                    name="awardCategory"
                                    value="Others"
                                    onChange={handleChange}
                                    checked={formData.awardCategory === "Others"}
                                />
                                <label>Others</label><br/>
                                {/* Add radio buttons for field of work */}
                            </div>
                            <div className="InputElem">
                                <p>Organization Name</p>
                                <input className="input"
                                    type="text"
                                    name="organizationName"
                                    value={formData.organizationName}
                                    onChange={handleChange}
                                    placeholder="Enter organization name"
                                    required
                                />
                                {/* Add error handling for organization name if needed */}
                            </div>
                            <div className="InputElem">
                                <p>Designation</p>
                                <input className="input"
                                    type="text"
                                    name="designation"
                                    value={formData.designation}
                                    onChange={handleChange}
                                    placeholder="Enter your designation"
                                    required
                                />
                                {/* Add error handling for designation if needed */}
                            </div>
                            <div>
                                <p>1. Career highlights / accomplishments (you may include details of past employers, positions held, and the number of years worked for each)</p>
                                <textarea
                                    name="careerHighlights"
                                    value={formData.careerHighlights}
                                    onChange={handleChange}
                                    placeholder="Enter your career highlights and accomplishments"
                                    rows={5} // Adjust the number of rows as needed
                                    cols={80} // Adjust the number of columns as needed
                                    required
                                />
                            </div>
                            <div>
                                <p>2. Awards / Honors received (Name of awards, year of achievement and awarding organization/entity)</p>
                                <textarea
                                    name="awards_honors"
                                    value={formData.awards_honors}
                                    onChange={handleChange}
                                    placeholder="Enter your Awards / Honors received"
                                    rows={5} // Adjust the number of rows as needed
                                    cols={80} // Adjust the number of columns as needed
                                    required
                                />
                            </div>
                            <div>
                                <p>3. Voluntary social welfare / community services (Type and duration of service)</p>
                                <textarea
                                    name="voluntary"
                                    value={formData.voluntary}
                                    onChange={handleChange}
                                    placeholder="Enter your Voluntary social welfare / community services"
                                    rows={5} // Adjust the number of rows as needed
                                    cols={80} // Adjust the number of columns as needed
                                    required
                                />
                            </div>
                            <div>
                                <p>4. NGOs currently associated with it</p>
                                <textarea
                                    name="ngos"
                                    value={formData.ngos}
                                    onChange={handleChange}
                                    placeholder="Any NGOs accociated with"
                                    rows={5} // Adjust the number of rows as needed
                                    cols={80} // Adjust the number of columns as needed
                                    required
                                />
                            </div>
                            <div>
                                <p>5. Membership in professional bodies / Business / similar organizations</p>
                                <textarea
                                    name="membership"
                                    value={formData.membership}
                                    onChange={handleChange}
                                    placeholder="Membership in any Business/Organizations"
                                    rows={5} // Adjust the number of rows as needed
                                    cols={80} // Adjust the number of columns as needed
                                    required
                                />
                            </div>
                            <div>
                                <p>6. Any other contribution / achievement that you wish to highlight</p>
                                <textarea
                                    name="achievement"
                                    value={formData.achievement}
                                    onChange={handleChange}
                                    placeholder="Enter your Achievement"
                                    rows={5} // Adjust the number of rows as needed
                                    cols={80} // Adjust the number of columns as needed
                                    required
                                />
                            </div>
                            <div>
                                <p>7. Resource person for webinar/ Workshop / Conference/</p>
                                <textarea
                                    name="resourceperson"
                                    value={formData.resourceperson}
                                    onChange={handleChange}
                                    placeholder="Resource person for webinar"
                                    rows={5} // Adjust the number of rows as needed
                                    cols={80} // Adjust the number of columns as needed
                                    required
                                />
                            </div>
                            <div>
                                <p>8. Alumni talks given to Sathyabama</p>
                                <textarea
                                    name="talks"
                                    value={formData.talks}
                                    onChange={handleChange}
                                    placeholder="Any talks in Sathyabama"
                                    rows={5} // Adjust the number of rows as needed
                                    cols={80} // Adjust the number of columns as needed
                                    required
                                />
                            </div>
                            <div>
                                <p>9. Others</p>
                                <textarea
                                    name="others"
                                    value={formData.others}
                                    onChange={handleChange}
                                    placeholder="Any mentionale remarks"
                                    rows={5} // Adjust the number of rows as needed
                                    cols={80} // Adjust the number of columns as needed
                                    required
                                />
                            </div>
                            
                            <div className="inputElem">
                            <p>Upload PDF file (optional)</p>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="file"
                                name="pdfFile"
                                accept=".pdf"
                                onChange={handleFileChange}
                            />
                            {/* {pdfFile && (
                                <button
                                    type="button"
                                    onClick={handleFileRemove}
                                    style={{ marginLeft: '10px', cursor: 'pointer' }}
                                >
                                    X
                                </button>
                            )} */}
                        </div>
                        <span className="note">Upload PDF files up to 5MB</span>
                        </div>
                    </div>
                    <div>
                        <button className='butt' type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
            <div>
                <CustomFooter></CustomFooter>
            </div>
        </div>
    );
}
