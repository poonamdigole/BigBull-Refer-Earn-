import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import logo from "../Navbar/logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="NavSection">
      <div className="bg-danger p-1 d-flex flex-row justify-content-between align-item-center ">
        <div>
          <a href="/" target="/blank">
            {" "}
            <FaTwitter className="bg-dark p-1 fs-5 rounded-1 shadow-lg-hover m-auto" />{" "}
          </a>
          <a href="/" target="/blank">
            {" "}
            <FaLinkedinIn className="bg-dark p-1 fs-5 rounded-1 shadow-lg-hover m-auto" />
          </a>
          <a href="/" target="/blank">
            {" "}
            <TfiFacebook className="bg-dark p-1 fs-5 rounded-1 shadow-lg-hover m-auto " />{" "}
          </a>
        </div>
        <div className=" align-content-center ">
          <p className="mb-0 address ">+0123456789|admin@geniusocean.com</p>
        </div>
      </div>

      {/* ---------------------second Navbar----------------------------------- */}
      <div className=" container-fluid secnav px-1 d-flex flex-row justify-content-between align-item-center ">
          <img src={logo} alt="" className="logo rounded-circle w3  p-0"></img>
          <div className=" align-content-center ">
            <Link to="/" className='cursor-pointer navs'>Home</Link>
            <Link to="/about" className='cursor-pointer navs'> About</Link>
            <Link to="/plans" className='cursor-pointer navs'>Plans</Link>
            <Link to="/contact" className='cursor-pointer navs'>Contact</Link>
            <button class="btn btn-outline-dark p-1 button">
             Log In
            </button>
         
        </div>
      </div>

      {/* ---------------------------------------------------------Hero section -------------------------------------*/}

      <div className="heroSec align-content-end container ">
        <div className=" w-auto">
          <h1 className=" text-danger fs-1 ">
            Invest for Future in Stable Platform.
          </h1>
          <p className="text-white para1">
            Make a profitable business from these niches, Grow your profit,
            invest now. See The Platform, Feel The Shine
          </p>
          <button type="button" class="btn btn-outline-danger mt-1 ">
            Get Start <BsArrowRightCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
