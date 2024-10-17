"use client";
import React, {useState} from "react";
import ImageTem from "../../../components/image_template/imagetemplate";
import HeaderTem from "../../../components/Header/Header";
import CustomFooter from "../../../components/footer/footer";
import "../alumni.css"; 


export default function Alumni2023 (){
    const images=[
        "/Alumnimeet2023/IMG_9767.JPG",
        "/Alumnimeet2023/IMG_9770.JPG",
        "/Alumnimeet2023/IMG_9771.JPG",
        "/Alumnimeet2023/IMG_9777.JPG",
        "/Alumnimeet2023/IMG_9781.JPG",
        "/Alumnimeet2023/IMG_9786.JPG",
        "/Alumnimeet2023/IMG_9792.JPG",
        "/Alumnimeet2023/IMG_9794.JPG",
        "/Alumnimeet2023/IMG_9798.JPG",
        "/Alumnimeet2023/IMG_9806.JPG",
        "/Alumnimeet2023/IMG_9809.JPG",
        "/Alumnimeet2023/IMG_9815.JPG",
        "/Alumnimeet2023/IMG_9820.JPG",
        "/Alumnimeet2023/IMG_9856.JPG",
        "/Alumnimeet2023/IMG_9858.JPG",
        "/Alumnimeet2023/IMG_9863.JPG",
        "/Alumnimeet2023/IMG_9865.JPG",
        "/Alumnimeet2023/IMG_9879.JPG",
        "/Alumnimeet2023/IMG_9888.JPG",
        "/Alumnimeet2023/IMG_9903.JPG",
    ]

    return(
    <div>
      <HeaderTem></HeaderTem>
      <div className="content-container">
        <div className="text-container"><h1>ALUMNIMEET 2023</h1></div>
        {/* <CardSliderTemplate slides={slides}></CardSliderTemplate> */}
         <ImageTem images={images}></ImageTem>
      </div>
      <CustomFooter></CustomFooter>
    </div>
    )
}