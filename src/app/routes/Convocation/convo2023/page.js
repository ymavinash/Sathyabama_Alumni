"use client";
import React, {useState} from "react";
import ImageTem from "../../../components/image_template/imagetemplate";
import HeaderTem from "../../../components/Header/Header";
import "../convocation.css"; 


export default function Convo2023 (){
    const images=[
        "/convocation/2023/9Y8A8704.JPG",
        "/convocation/2023/9Y8A8715.JPG",
        "/convocation/2023/9Y8A8766.JPG",
        "/convocation/2023/9Y8A9317.JPG",
        "/convocation/2023/9Y8A9329.JPG",
        "/convocation/2023/9Y8A9340.JPG",
        "/convocation/2023/9Y8A9346.JPG",
        "/convocation/2023/9Y8A9350.JPG",
        "/convocation/2023/9Y8A9359.JPG",
        "/convocation/2023/9Y8A9364.JPG",
        "/convocation/2023/9Y8A9370.JPG",
        "/convocation/2023/9Y8A9382.JPG",
        "/convocation/2023/9Y8A9384.JPG",
        "/convocation/2023/9Y8A9387.JPG",
        "/convocation/2023/9Y8A9391.JPG",
        "/convocation/2023/9Y8A9395.JPG",
        "/convocation/2023/9Y8A9399.JPG",
        "/convocation/2023/9Y8A9401.JPG",
        "/convocation/2023/9Y8A9408.JPG",
        "/convocation/2023/9Y8A9416.JPG",
        "/convocation/2023/9Y8A9423.JPG",
        "/convocation/2023/9Y8A9428.JPG",
        "/convocation/2023/9Y8A9429.JPG",

    ]

    return(
        <div>
            <HeaderTem></HeaderTem> 
            <div className="content-container">
            <div className="text-container"><h1>Convocation 2023</h1></div>
                <ImageTem images={images}></ImageTem>
            </div>
        </div>
    )
}