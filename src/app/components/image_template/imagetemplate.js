// convoone.js
import React, { useState } from "react";
import "./imagetemp.css";


export default function ImageTem({ images }) {
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const openSlideshow = (index) => {
    setSelectedImage(index);
    setShowSlideshow(true);
  };

  const closeSlideshow = (e) => {
    if (e.target.classList.contains("slideshow-modal") || e.target.classList.contains("close-btn")) {
      setShowSlideshow(false);
      setSelectedImage(0);
    }
  };

  const prevSlide = () => {
    setSelectedImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setSelectedImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container">
      <div className="Main-container">
        {images.map((image, index) => (
          <div key={index} className="image-container" onClick={() => openSlideshow(index)}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}

        {showSlideshow && (
          <div className="slideshow-modal" onClick={closeSlideshow}>
            <div className="slideshow-content">
              <span className="close-btn" onClick={closeSlideshow}>&times;</span>
              <button className="nav-btn prev-btn" onClick={prevSlide}>&lt;</button>
              <img src={images[selectedImage]} alt={`Slideshow Image ${selectedImage + 1}`} />
              <button className="nav-btn next-btn" onClick={nextSlide}>&gt;</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
