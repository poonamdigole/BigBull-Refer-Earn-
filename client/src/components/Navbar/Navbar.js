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
         
         
      </div>


      <nav class="navbar navbar-expand-lg bg-body-tertiary p-0  ">
      <img src={logo} alt="" className="logo rounded-circle p-0" height={'80px'} width={'100px'}></img>
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active text-white mx-4 fs-5" aria-current="page" href="/">Home</a>
        <a class="nav-link text-white mx-3 fs-5" href="/about">About</a>
        <a class="nav-link text-white mx-3 fs-5" href="/plans">Plans</a>
        <a class="nav-link text-white mx-3 fs-5" href="/contact">Contact</a>
        <a class="nav-link text-white mx-3 fs-5" href="/signup">SingUp</a>
      </div>
    </div>
  </div>
</nav>
      {/* ---------------------------------------------------------Hero section -------------------------------------*/}

    
    </div>
  );
}

export default Navbar;
