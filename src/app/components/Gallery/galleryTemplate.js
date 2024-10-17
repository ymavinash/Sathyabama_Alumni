"use client";
import React from 'react';
import './galleryTemplate.css'; // Import your CSS file for styling

const Gallery = () => {
  // Replace these image paths with your actual image paths or URLs
  const images = [
    "/Alumnimeet2014/DSC_0912.JPG",
    "/Alumnimeet2015/3Y4A6922.JPG",
    "/Alumnimeet2017/photo_1_2024-04-12_23-29-58.jpg",
    "/Alumnimeet2018/IMG_0600.JPG",
    "/Alumnimeet2019/IMG_6861.JPG",
    "/convocation/2017/IMG_0361.jpg",
    "/convocation/2018/IMG_4608.JPG",
    "/convocation/2019/SBUV2524.JPG",
    "/convocation/2021/_AMS3257.jpg",
    "/convocation/2023/9Y8A8704.JPG"
  ];

  return (
    <div className='main'>
      <div className="header-container">
        <h2 className="gallery-heading">Gallery</h2>
        <button className="gallery-button" onClick={() => window.location.href = "/routes/Gallery"}>
          View Gallery
        </button>
      </div>
      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;