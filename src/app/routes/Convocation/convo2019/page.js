"use client";
import React, {useState} from "react";
import ImageTem from "../../../components/image_template/imagetemplate";
import HeaderTem from "../../../components/Header/Header";
import "../convocation.css"; 
import CardSliderTemplate from "../../../components/cards_template/cards";


export default function Convo2019 (){
    const images=[
        "/convocation/2019/SBUV2524.JPG",
        "/convocation/2019/SBUV2526.JPG",
        "/convocation/2019/SBUV2531.JPG",
        "/convocation/2019/SBUV2544.JPG",
        "/convocation/2019/SBUV2550.JPG",
        "/convocation/2019/SBUV2558.JPG",
        "/convocation/2019/SBUV2560.JPG",
        "/convocation/2019/SBUV2566.JPG",
        "/convocation/2019/SBUV2570.JPG",
    ]

    return(
        <div>
            <HeaderTem></HeaderTem> 
            <div className="content-container">
            <div className="text-container"><h1>Convocation 2019</h1></div>
                <ImageTem images={images}></ImageTem>
            </div>
        </div>
    )
}