// convoone.js
"use client";
import React, { useState } from "react";
import ImageTem from "../../../components/image_template/imagetemplate";
import HeaderTem from "../../../components/Header/Header";
import CustomFooter from "../../../components/footer/footer";
import "../alumni.css"; 

export default function Alumni2017() {
  const images = [
    "/Alumnimeet2017/photo_1_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_2_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_3_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_4_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_5_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_6_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_7_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_8_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_9_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_10_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_11_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_12_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_13_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_14_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_15_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_16_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_17_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_18_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_19_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_20_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_21_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_22_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_23_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_24_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_25_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_26_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_27_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_28_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_29_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_30_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_31_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_32_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_33_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_34_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_35_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_36_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_37_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_38_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_39_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_40_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_41_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_42_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_43_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_44_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_45_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_46_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_47_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_48_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_49_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_50_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_51_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2017/photo_52_2024-04-12_23-29-58.jpg",
  ];


  
  return (
    
    <div>
      <HeaderTem></HeaderTem>
      <div className="content-container">
        <div className="text-container"><h1>ALUMNIMEET 2017</h1></div>
        {/* <CardSliderTemplate slides={slides}></CardSliderTemplate> */}
         <ImageTem images={images}></ImageTem>
      </div>
      <CustomFooter></CustomFooter>
    </div>
  );
}
