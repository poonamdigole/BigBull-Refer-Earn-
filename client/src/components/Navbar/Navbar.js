import React, { useState } from "react";
import "../Navbar/Navbar.css";
import logo from "./logo.png";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";

function Navbar() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    // Check if the email and password match the admin credentials
    if (email === "vivekshejole143@gmail.com" && password === "12345678") {
      // If matched, set the user as admin
      setUser({ email: email, isAdmin: true });
    } else {
      // If not matched, set the user as a regular user
      setUser({ email: email, isAdmin: false });
    }
  };

  return (
    <div className="NavSection fixed-top mb-5">
      <div className="bg-danger p-1 d-flex flex-row justify-content-between align-item-center  ">
        <div>
          <a href="/" target="/blank">
            {" "}
            <FaTelegram className=" text-white p-1 fs-2 rounded-1 shadow-lg-hover m-auto" />{" "}
          </a>
          <a href="/" target="/blank">
            {" "}
            <FaInstagram className="text-white p-1 fs-2 rounded-1 shadow-lg-hover m-auto" />
          </a>
          <a href="/" target="/blank">
            {" "}
            <TfiFacebook className="text-white p-1 fs-2 rounded-1 shadow-lg-hover m-auto " />{" "}
          </a>
        </div>
  
      </div>

      <nav class="navbar navbar-expand-lg bg-body-tertiary p-0  w-full">
        <img src={logo} alt="" className="" height={'70px'} width={'100px'}></img>
        <button class="navbar-toggler text-bg-light text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active text-white mx-3 fs-5" aria-current="page" href="/">Home</a>
              <a class="nav-link text-white mx-3 fs-5" href="/about">About</a>
              <a class="nav-link text-white mx-3 fs-5" href="/plans">Plans</a>
              {user && user.isAdmin && <a class="nav-link text-white mx-3 fs-5" href="/admin">Admin</a>}
              <a class="nav-link text-white mx-3 fs-5" href="/Login">DashBoard</a>
              <a class="nav-link text-white mx-3 fs-5" href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;