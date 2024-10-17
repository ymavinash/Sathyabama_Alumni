"use client";
import React, {useState} from "react";
import ImageTem from "../../../components/image_template/imagetemplate";
import HeaderTem from "../../../components/Header/Header";
import "../convocation.css"; 
import CardSliderTemplate from "../../../components/cards_template/cards";


export default function Convo2018 (){
    const images=[
        "/convocation/2018/IMG_4608.JPG",
        "/convocation/2018/IMG_4611.jpg",
        "/convocation/2018/IMG_4615.jpg",
        "/convocation/2018/IMG_4616.JPG",
        "/convocation/2018/IMG_4620.JPG",
    ]

    return(
        <div>
            <HeaderTem></HeaderTem> 
            <div className="content-container">
            <div className="text-container"><h1>Convocation 2018</h1></div>
                <ImageTem images={images}></ImageTem>
            </div>
        </div>
    )
}