// convoone.js
"use client";
import React, { useState } from "react";
import ImageTem from "../../../components/image_template/imagetemplate";
import HeaderTem from "../../../components/Header/Header";
import CustomFooter from "../../../components/footer/footer";
import "../alumni.css"; 

export default function Alumni2014() {
  const images = [
    "/Alumnimeet2014/DSC_0881.JPG",
    "/Alumnimeet2014/DSC_0885.JPG",
    "/Alumnimeet2014/DSC_0893.JPG",
    "/Alumnimeet2014/DSC_0897.JPG",
    "/Alumnimeet2014/DSC_0898.JPG",
    "/Alumnimeet2014/DSC_0899.JPG",
    "/Alumnimeet2014/DSC_0900.JPG",
    "/Alumnimeet2014/DSC_0901.JPG",
    "/Alumnimeet2014/DSC_0902.JPG",
    "/Alumnimeet2014/DSC_0905.JPG",
    "/Alumnimeet2014/DSC_0906.JPG",
    "/Alumnimeet2014/DSC_0907.JPG",
    "/Alumnimeet2014/DSC_0908.JPG",
    "/Alumnimeet2014/DSC_0910.JPG",
    "/Alumnimeet2014/DSC_0911.JPG",
    "/Alumnimeet2014/DSC_0912.JPG",
    "/Alumnimeet2014/DSC_0922.JPG",
    "/Alumnimeet2014/DSC_0930.JPG",
    "/Alumnimeet2014/DSC_0932.JPG",
    "/Alumnimeet2014/DSC_0933.JPG",
    "/Alumnimeet2014/DSC_0936.JPG",
    "/Alumnimeet2014/DSC_0939.JPG",
    "/Alumnimeet2014/DSC_0940.JPG",
    "/Alumnimeet2014/DSC_0941.JPG",
    "/Alumnimeet2014/DSC_0943.JPG",
    "/Alumnimeet2014/DSC_0944.JPG",
    "/Alumnimeet2014/DSC_0947.JPG",
    "/Alumnimeet2014/DSC_0948.JPG",
    "/Alumnimeet2014/DSC_0953.JPG",
    "/Alumnimeet2014/DSC_0955.JPG",
    "/Alumnimeet2014/DSC_0957.JPG",
    "/Alumnimeet2014/DSC_0960.JPG",
    "/Alumnimeet2014/DSC_0961.JPG",
    "/Alumnimeet2014/DSC_0962.JPG",
    "/Alumnimeet2014/DSC_0964.JPG",
    "/Alumnimeet2014/DSC_0966.JPG",
    "/Alumnimeet2014/DSC_0968.JPG",
    "/Alumnimeet2014/DSC_0969.JPG",
    "/Alumnimeet2014/DSC_0974.JPG",
    "/Alumnimeet2014/DSC_0977.JPG",
    "/Alumnimeet2014/DSC_0984.JPG",
    "/Alumnimeet2014/DSC_0985.JPG",
    "/Alumnimeet2014/DSC_0986.JPG",
    "/Alumnimeet2014/DSC_0989.JPG",
    "/Alumnimeet2014/DSC_0991.JPG",
    "/Alumnimeet2014/DSC_0995.JPG",
    "/Alumnimeet2014/DSC_0996.JPG",
    "/Alumnimeet2014/DSC_0997.JPG",
    "/Alumnimeet2014/DSC_1004.JPG",
    "/Alumnimeet2014/DSC_1007.JPG",
    "/Alumnimeet2014/DSC_1008.JPG",
  ];


  
  return (
    
    <div>
      <HeaderTem></HeaderTem>
      <div className="content-container">
        <div className="text-container"><h1>ALUMNIMEET 2014</h1></div>
        {/* <CardSliderTemplate slides={slides}></CardSliderTemplate> */}
         <ImageTem images={images}></ImageTem>
      </div>
      <CustomFooter></CustomFooter>
    </div>
  );
}
