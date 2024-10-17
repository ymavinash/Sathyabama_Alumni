"use client";
import React, {useState} from "react";
import ImageTem from "../../../components/image_template/imagetemplate";
import HeaderTem from "../../../components/Header/Header";
import CustomFooter from "../../../components/footer/footer";
import "../alumni.css"; 


export default function Alumni2019 (){
    const images=[
        "/Alumnimeet2019/IMG_6861.JPG",
        "/Alumnimeet2019/IMG_6864.JPG",
        "/Alumnimeet2019/IMG_6868.JPG",
        "/Alumnimeet2019/IMG_6874.JPG",
        "/Alumnimeet2019/IMG_6882.JPG",
        "/Alumnimeet2019/IMG_6886.JPG",
        "/Alumnimeet2019/IMG_6887.JPG",
        "/Alumnimeet2019/IMG_6899.JPG",
        "/Alumnimeet2019/IMG_6902.JPG",
        "/Alumnimeet2019/IMG_6908.JPG",
        "/Alumnimeet2019/IMG_6924.JPG",
        "/Alumnimeet2019/IMG_6930.JPG",
        "/Alumnimeet2019/IMG_6936.JPG",
        "/Alumnimeet2019/IMG_6938.JPG",
        "/Alumnimeet2019/IMG_6941.JPG",
        "/Alumnimeet2019/IMG_6944.JPG",
        "/Alumnimeet2019/IMG_6947.JPG",
        "/Alumnimeet2019/IMG_6949.JPG",
        "/Alumnimeet2019/IMG_6954.JPG",
        "/Alumnimeet2019/IMG_6956.JPG",
        "/Alumnimeet2019/IMG_6958.JPG",
        "/Alumnimeet2019/IMG_6971.JPG",
        "/Alumnimeet2019/IMG_6974.JPG",
        "/Alumnimeet2019/IMG_6975.JPG",
        "/Alumnimeet2019/IMG_6987.JPG",
        "/Alumnimeet2019/IMG_6993.JPG",
        "/Alumnimeet2019/IMG_6999.JPG",
        "/Alumnimeet2019/IMG_7000.JPG",
        "/Alumnimeet2019/IMG_7003.JPG",
        "/Alumnimeet2019/IMG_7011.JPG",
        "/Alumnimeet2019/IMG_7016.JPG",
        "/Alumnimeet2019/IMG_7019.JPG",
        "/Alumnimeet2019/IMG_7030.JPG",
        "/Alumnimeet2019/IMG_7045.JPG",
        "/Alumnimeet2019/IMG_7063.JPG",
        "/Alumnimeet2019/IMG_7070.JPG",
        "/Alumnimeet2019/IMG_7089.JPG",
        "/Alumnimeet2019/IMG_7090.JPG",
        "/Alumnimeet2019/IMG_7095.JPG",
        "/Alumnimeet2019/IMG_7098.JPG",
    ]

    return(
    <div>
      <HeaderTem></HeaderTem>
      <div className="content-container">
        <div className="text-container"><h1>ALUMNIMEET 2019</h1></div>
        {/* <CardSliderTemplate slides={slides}></CardSliderTemplate> */}
         <ImageTem images={images}></ImageTem>
      </div>
      <CustomFooter></CustomFooter>
    </div>
    )
}