"use client";
import React, {useState} from "react";
import ImageTem from "../../../components/image_template/imagetemplate";
import HeaderTem from "../../../components/Header/Header";
import "../convocation.css"; 
import CardSliderTemplate from "../../../components/cards_template/cards";

export default function Convo2021 (){
    const images=[
        "/convocation/2021/_AMS3257.jpg",
        "/convocation/2021/_AMS3263.JPG",
        "/convocation/2021/_AMS3269.jpg",
        "/convocation/2021/_AMS3272.JPG",
        "/convocation/2021/_AMS3274.jpg",
    ]

    return(
        <div>
            <HeaderTem></HeaderTem> 
            <div className="content-container">
            <div className="text-container"><h1>Convocation 2020</h1></div>
                <ImageTem images={images}></ImageTem>
            </div>
        </div>
    )
}