"use client"
import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderTem from '../../components/Header/Header';
import CustomFooter from '../../components/footer/footer';
import './convo.css';


export default function ConvoScreen(){
  return (
    <>
    <HeaderTem></HeaderTem>
    <div className='convo-container'>
      <div className='img-container'>
      <a  href='./Convocation/convo2017'><img src='/convocation/2017/IMG_0361.jpg'/></a>
        <a className='convo-label' href='./Convocation/convo2017'>CONVOCATION 2017</a>
      </div>
      <div className='img-container'>
      <a  href='./Convocation/convo2018'><img src='/convocation/2018/IMG_4608.JPG'/></a>
        <a className='convo-label' href='./Convocation/convo2018'>CONVOCATION 2018</a>
      </div>
      <div className='img-container'>
      <a href='./Convocation/convo2019'><img src='/convocation/2019/SBUV2524.JPG'/></a>
        <a className='convo-label' href='./Convocation/convo2019'>CONVOCATION 2019</a>
      </div>
      <div className='img-container'>
      <a href='./Convocation/convo2021'><img src='/convocation/2021/_AMS3257.jpg'/></a>
        <a className='convo-label' href='./Convocation/convo2021'>CONVOCATION 2021</a>
      </div>
      <div className='img-container'>
      <a href='./Convocation/convo2022'><img src='/convocation/2022/FT2A9762.JPG'/></a>
        <a className='convo-label' href='./Convocation/convo2022'>CONVOCATION 2022</a>
      </div>
      <div className='img-container'>
      <a  href='./Convocation/convo2023'><img src='/convocation/2023/9Y8A8766.jpg'/></a>
        <a className='convo-label' href='./Convocation/convo2023'>CONVOCATION 2023</a>
      </div>
    </div>
    <CustomFooter></CustomFooter>
    </>
  )
}