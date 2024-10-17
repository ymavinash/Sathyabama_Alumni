// convoone.js
"use client";
import React, { useState } from "react";
import ImageTem from "../../../components/image_template/imagetemplate";
import HeaderTem from "../../../components/Header/Header";
import CustomFooter from "../../../components/footer/footer";
import "../convocation.css"; 
import CardSliderTemplate from "../../../components/cards_template/cards";

export default function Convo2017() {
  const images = [
    "/convocation/2017/IMG_0361.jpg",
    "/convocation/2017/IMG_0368.JPG",
    "/convocation/2017/IMG_0370.JPG",
    "/convocation/2017/IMG_0361.jpg",
    "/convocation/2017/IMG_0368.JPG",
    "/convocation/2017/IMG_0370.JPG",
    // Add more image paths as needed
  ];

  // const slides = [
  //   { image: '/convocation/2017/dr2017-01.jpg', description: " Dr. S. Christopher\nChairman, Defence Research and Development Organization (DRDO) & Secretary, Department of Defence (R&D) " },
  //   { image: '/convocation/2017/dr2017-02.jpg', description: 'Dr. V. Narayanan\nAssociate Director, Liquid Propulsion Systems Centre (LPSC), Indian Space Research Organization (ISRO)' },
  //   { image: '/convocation/2017/dr2017-03.jpg', description: 'Dr. V. R. Lalithambika\nOutstanding Scientist & Deputy Director, Vikram Sarabhai Space Center (VSSC), Indian Space Research Organization (ISRO)' },
  //   { image: '/convocation/2017/dr2017-04.jpg', description: 'Dr. J. Ajeeth Prasath Jain\nSenior Principal, Bhavan Rajaji Vidhyashram, Chennai.' },
  //   // Add more slides as needed
  // ];

  
  return (
    
    <div>
      <HeaderTem></HeaderTem>
      <div className="content-container">
        <div className="text-container"><h1>Convocation 2017</h1></div>
        {/* <CardSliderTemplate slides={slides}></CardSliderTemplate> */}
         <ImageTem images={images}></ImageTem>
      </div>
      <CustomFooter></CustomFooter>
    </div>
  );
}
