import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import Navbar from '../../components/Navbar/Navbar';

function About() {
  return (
   
    <div>
       <Navbar/>
      <div className="heroSec align-content-end container ">
        <div className=" w-auto">
          <h1 className=" text-danger ">
            Invest for Future in Stable Platform.
          </h1>
          <p className="text-white fs-4 ">
            Make a profitable business from these niches, Grow your profit,
            invest now. <br></br> See The Platform, Feel The Shine
          </p>
          <button type="button" class="btn btn-outline-danger mt-1 fs-5 ">
            Get Start <BsArrowRightCircleFill />
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
