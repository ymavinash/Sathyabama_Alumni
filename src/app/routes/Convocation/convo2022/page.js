"use client";
import React, {useState} from "react";
import ImageTem from "../../../components/image_template/imagetemplate";
import HeaderTem from "../../../components/Header/Header";
import "../convocation.css"; 


export default function Convo2022 (){
    const images=[
        "/convocation/2022/FT2A9762.JPG",
        "/convocation/2022/FT2A9767.JPG",
        "/convocation/2022/FT2A9772.JPG",
        "/convocation/2022/FT2A9776.JPG",
        "/convocation/2022/FT2A9779.JPG",
        "/convocation/2022/FT2A9784.JPG",
        "/convocation/2022/FT2A9787.JPG",
    ]

    return(
        <div>
            <HeaderTem></HeaderTem> 
            <div className="content-container">
            <div className="text-container"><h1>Convocation 2021</h1></div>
                <ImageTem images={images}></ImageTem>
            </div>
        </div>
    )
}