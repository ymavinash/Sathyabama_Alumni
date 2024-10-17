"use client"
import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderTem from '../../components/Header/Header';
import CustomFooter from '../../components/footer/footer';
import './alumnimeet.css';


export default function AlumniScreen(){
  return (
    <>
    <HeaderTem></HeaderTem>
    <div className='alumni-container'>
      <div className='img-container'>
      <a  href='./AlumniMeet/Alumni2014'><img src='/Alumnimeet2014/DSC_0881.JPG'/></a>
        <a className='alumni-label' href='./AlumniMeet/Alumni2014'>ALUMNIMEET 2014</a>
      </div>
      <div className='img-container'>
      <a  href='./AlumniMeet/Alumni2015'><img src='/Alumnimeet2015/3Y4A7038.JPG'/></a>
        <a className='alumni-label' href='./AlumniMeet/Alumni2015'>ALUMNIMEET 2015</a>
      </div>
      <div className='img-container'>
      <a href='./AlumniMeet/Alumni2017'><img src='/Alumnimeet2017/photo_42_2024-04-12_23-29-58.jpg'/></a>
        <a className='alumni-label' href='./AlumniMeet/Alumni2017'>ALUMNIMEET 2017</a>
      </div>
      <div className='img-container'>
      <a href='./AlumniMeet/Alumni2018'><img src='/Alumnimeet2018/IMG_0766.JPG'/></a>
        <a className='alumni-label' href='./AlumniMeet/Alumni2018'>ALUMNIMEET 2018</a>
      </div>
      <div className='img-container'>
      <a href='./AlumniMeet/Alumni2019'><img src='/Alumnimeet2019/IMG_6938.JPG'/></a>
        <a className='alumni-label' href='./AlumniMeet/Alumni2019'>ALUMNIMEET 2019</a>
      </div>
      <div className='img-container'>
      <a  href='./AlumniMeet/Alumni2023'><img src='/Alumnimeet2023/IMG_9777.JPG'/></a>
        <a className='alumni-label' href='./AlumniMeet/Alumni2023'>ALUMNIMEET 2023</a>
      </div>
    </div>
    <CustomFooter></CustomFooter>
    </>
  )
}