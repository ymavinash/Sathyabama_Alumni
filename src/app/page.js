'use client';
import "./page.module.css";
import HomeScreen from "./components/LandingPage/HomeScreen";
import React from "react";
import HeaderTem from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomFooter from "./components/footer/footer";
import EventImage from "./components/eventImage/eventImage";
// import CollegeSlider from "./components/NotableAlumni/notablealumni";
import VideoPlayer from "./components/homevid/homevid";
// import TestimonialSlider from "./components/testimonial_slider/testimoni_template";
import NotableAlumni from "./components/NotableAlumni/notablealumni"
import Gallery from "./components/Gallery/galleryTemplate";
import TestimonialSlider from "./components/testimonial_slider/Testimonialtemplate"
import App from "./components/testimonial_slider/Testimonialtemplate"

export default function Home() {
  return (
    <div className="MainContainer">
      <HeaderTem></HeaderTem>
      <div>
        <VideoPlayer></VideoPlayer>
      </div>
      <div>
        <App></App>
      </div>
      <div>
        <Gallery></Gallery>
      </div>
      <div>
        <NotableAlumni></NotableAlumni>
      </div>
      <CustomFooter></CustomFooter>
    </div>
  );
}
