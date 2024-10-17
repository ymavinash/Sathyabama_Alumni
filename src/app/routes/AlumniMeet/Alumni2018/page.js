"use client";
import React, {useState} from "react";
import ImageTem from "../../../components/image_template/imagetemplate";
import HeaderTem from "../../../components/Header/Header";
import CustomFooter from "../../../components/footer/footer";
import "../alumni.css"; 


export default function Alumni2018 (){
    const images=[
        "/Alumnimeet2018/IMG_0600.JPG",
        "/Alumnimeet2018/IMG_0601.JPG",
        "/Alumnimeet2018/IMG_0602.JPG",
        "/Alumnimeet2018/IMG_0604.JPG",
        "/Alumnimeet2018/IMG_0606.JPG",
        "/Alumnimeet2018/IMG_0608.JPG",
        "/Alumnimeet2018/IMG_0609.JPG",
        "/Alumnimeet2018/IMG_0610.JPG",
        "/Alumnimeet2018/IMG_0627.JPG",
        "/Alumnimeet2018/IMG_0631.JPG",
        "/Alumnimeet2018/IMG_0725.JPG",
        "/Alumnimeet2018/IMG_0726.JPG",
        "/Alumnimeet2018/IMG_0732.JPG",
        "/Alumnimeet2018/IMG_0737.JPG",
        "/Alumnimeet2018/IMG_0747.JPG",
        "/Alumnimeet2018/IMG_0748.JPG",
        "/Alumnimeet2018/IMG_0753.JPG",
        "/Alumnimeet2018/IMG_0760.JPG",
        "/Alumnimeet2018/IMG_0764.JPG",
        "/Alumnimeet2018/IMG_0766.JPG",
        "/Alumnimeet2018/IMG_0768.JPG",
        "/Alumnimeet2018/IMG_0770.JPG",
        "/Alumnimeet2018/IMG_0773.JPG",
        "/Alumnimeet2018/IMG_0777.JPG",
        "/Alumnimeet2018/IMG_0780.JPG",
        "/Alumnimeet2018/IMG_0781.JPG",
        "/Alumnimeet2018/IMG_0782.JPG",
        "/Alumnimeet2018/IMG_0783.JPG",
        "/Alumnimeet2018/IMG_0784.JPG",
        "/Alumnimeet2018/IMG_0787.JPG",
        "/Alumnimeet2018/IMG_0791.JPG",
        "/Alumnimeet2018/IMG_0793.JPG",
        "/Alumnimeet2018/IMG_0795.JPG",
        "/Alumnimeet2018/IMG_0802.JPG",
        "/Alumnimeet2018/IMG_0804.JPG",
        "/Alumnimeet2018/IMG_0807.JPG",
        "/Alumnimeet2018/IMG_0809.JPG",
        "/Alumnimeet2018/IMG_0810.JPG",
        "/Alumnimeet2018/IMG_0812.JPG",
        "/Alumnimeet2018/IMG_0814.JPG",
        "/Alumnimeet2018/IMG_0817.JPG",
        "/Alumnimeet2018/IMG_0823.JPG",
        "/Alumnimeet2018/IMG_0829.JPG",
        "/Alumnimeet2018/IMG_0831.JPG",
        "/Alumnimeet2018/IMG_0837.JPG",
        "/Alumnimeet2018/IMG_0847.JPG",
        "/Alumnimeet2018/IMG_0853.JPG",
        "/Alumnimeet2018/IMG_0858.JPG",
        "/Alumnimeet2018/IMG_0865.JPG",
        "/Alumnimeet2018/IMG_0873.JPG",
        "/Alumnimeet2018/IMG_0877.JPG",
        "/Alumnimeet2018/IMG_0886.JPG",
        "/Alumnimeet2018/IMG_0892.JPG",

    ]

    return(
        <div>
      <HeaderTem></HeaderTem>
      <div className="content-container">
        <div className="text-container"><h1>ALUMNIMEET 2018</h1></div>
        {/* <CardSliderTemplate slides={slides}></CardSliderTemplate> */}
         <ImageTem images={images}></ImageTem>
      </div>
      <CustomFooter></CustomFooter>
    </div>
    )
}