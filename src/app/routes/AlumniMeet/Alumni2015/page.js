// convoone.js
"use client";
import React, { useState } from "react";
import ImageTem from "../../../components/image_template/imagetemplate";
import HeaderTem from "../../../components/Header/Header";
import CustomFooter from "../../../components/footer/footer";
import "../alumni.css"; 

export default function Alumni2015() {
  const images = [
    "/Alumnimeet2015/3Y4A6922.JPG",
    "/Alumnimeet2015/3Y4A6938.JPG",
    "/Alumnimeet2015/3Y4A6941.JPG",
    "/Alumnimeet2015/3Y4A6951.JPG",
    "/Alumnimeet2015/3Y4A6953.JPG",
    "/Alumnimeet2015/3Y4A6954.JPG",
    "/Alumnimeet2015/3Y4A6960.JPG",
    "/Alumnimeet2015/3Y4A6961.JPG",
    "/Alumnimeet2015/3Y4A6963.JPG",
    "/Alumnimeet2015/3Y4A6965.JPG",
    "/Alumnimeet2015/3Y4A6968.JPG",
    "/Alumnimeet2015/3Y4A6969.JPG",
    "/Alumnimeet2015/3Y4A6970.JPG",
    "/Alumnimeet2015/3Y4A6974.JPG",
    "/Alumnimeet2015/3Y4A6977.JPG",
    "/Alumnimeet2015/3Y4A6981.JPG",
    "/Alumnimeet2015/3Y4A6985.JPG",
    "/Alumnimeet2015/3Y4A6986.JPG",
    "/Alumnimeet2015/3Y4A6988.JPG",
    "/Alumnimeet2015/3Y4A6989.JPG",
    "/Alumnimeet2015/3Y4A6993.JPG",
    "/Alumnimeet2015/3Y4A6995.JPG",
    "/Alumnimeet2015/3Y4A7000.JPG",
    "/Alumnimeet2015/3Y4A7003.JPG",
    "/Alumnimeet2015/3Y4A7004.JPG",
    "/Alumnimeet2015/3Y4A7007.JPG",
    "/Alumnimeet2015/3Y4A7008.JPG",
    "/Alumnimeet2015/3Y4A7009.JPG",
    "/Alumnimeet2015/3Y4A7012.JPG",
    "/Alumnimeet2015/3Y4A7013.JPG",
    "/Alumnimeet2015/3Y4A7014.JPG",
    "/Alumnimeet2015/3Y4A7016.JPG",
    "/Alumnimeet2015/3Y4A7017.JPG",
    "/Alumnimeet2015/3Y4A7018.JPG",
    "/Alumnimeet2015/3Y4A7019.JPG",
    "/Alumnimeet2015/3Y4A7020.JPG",
    "/Alumnimeet2015/3Y4A7021.JPG",
    "/Alumnimeet2015/3Y4A7022.JPG",
    "/Alumnimeet2015/3Y4A7023.JPG",
    "/Alumnimeet2015/3Y4A7024.JPG",
    "/Alumnimeet2015/3Y4A7025.JPG",
    "/Alumnimeet2015/3Y4A7026.JPG",
    "/Alumnimeet2015/3Y4A7028.JPG",
    "/Alumnimeet2015/3Y4A7029.JPG",
    "/Alumnimeet2015/3Y4A7030.JPG",
    "/Alumnimeet2015/3Y4A7031.JPG",
    "/Alumnimeet2015/3Y4A7032.JPG",
    "/Alumnimeet2015/3Y4A7033.JPG",
    "/Alumnimeet2015/3Y4A7034.JPG",
    "/Alumnimeet2015/3Y4A7037.JPG",
    "/Alumnimeet2015/3Y4A7038.JPG",
    "/Alumnimeet2015/3Y4A7044.JPG",
    "/Alumnimeet2015/3Y4A7045.JPG",
    "/Alumnimeet2015/3Y4A7048.JPG",
    "/Alumnimeet2015/3Y4A7052.JPG",
    "/Alumnimeet2015/3Y4A7054.JPG",
    "/Alumnimeet2015/3Y4A7059.JPG",
    "/Alumnimeet2015/3Y4A7060.JPG",
    "/Alumnimeet2015/3Y4A7061.JPG",
  ];


  
  return (
    
    <div>
      <HeaderTem></HeaderTem>
      <div className="content-container">
        <div className="text-container"><h1>ALUMNIMEET 2015</h1></div>
        {/* <CardSliderTemplate slides={slides}></CardSliderTemplate> */}
         <ImageTem images={images}></ImageTem>
      </div>
      <CustomFooter></CustomFooter>
    </div>
  );
}
