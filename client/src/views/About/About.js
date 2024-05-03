import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import Navbar from '../../components/Navbar/Navbar';
import logo from "../logo.png";
import '../../components/Navbar/Navbar.css'
function About() {
  return (
   
    <div>
       <Navbar/>
      <div className="heroSec container d-flex flex-column-reverse flex-md-row justify-content-around align-items-center ">
       
        <div className=" w-auto">
          <h1 className=" text-danger ">
            Invest for Future in Stable Platform.
          </h1>
          <p className="text-white fs-6 ">
            Make a profitable business from these niches, Grow your profit,
            invest now. <br></br> See The Platform, Feel The Shine
          </p>
          <button type="button" class="btn btn-outline-danger mt-1 fs-5 ">
            Get Start <BsArrowRightCircleFill />
          </button>
        </div>
        <div className='hrsFirst w-md-50'>
       <img src={logo} className='w-100 h-100'></img>
        </div>
      </div>
    </div>
  )
}

export default About
