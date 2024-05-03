import React from "react";
import Button from "react-bootstrap/Button";
import Deposite from "./Deposite";
import { HiUserAdd } from "react-icons/hi";
import { Col, Row } from "react-bootstrap";
import "./Home.css";
import logo from "../About/logo2.png";
import { FaUserCheck } from "react-icons/fa6";
import { TbArrowsRightLeft } from "react-icons/tb";
import { BsArrowRightCircleFill } from "react-icons/bs";
import logo1 from "./Images/steps1.png";
import logo2 from "./Images/refer.png";
import Review from "./Review";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
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
        <div className="hrsFirst w-md-50">
          <img src={logo} alt='' className="w-100 h-100"></img>
        </div>
      </div>

      <div className="mt-5">
        <div className="container mt-5 d-flex justify-content-center  ">
          {/* <Link to="withdraw"  className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          
          </Link>
          <Link to="withdraw"  className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <Button variant="outline-danger ">Withdraw Log</Button>
          </Link> */}
        </div>
      </div>

      {/* ------------------------------section easy stapes---------------------------------------- */}
      <div className="container my-5 d-flex flex-column-reverse flex-md-row justify-content-around align-items-center">
        <div className="mt-5">
          <div className="text-md-end ">
            <h6 className="text-danger">How To Get Started________</h6>
            <h1 className="text-white">We have some easy steps!</h1>
            <p className="text-white para1">
              Joining our refer and earn program comes with a host of benefits.
              Join us today and discover the power of referral marketing!
            </p>
          </div>
          <Row className=" mt-3 ">
            <Col className="text-md-end col-8 ">
              <h5 className="text-danger">Create Account</h5>
              <p className="text-white para1">
                Begin your journey by creating an account on our platform. It's
                a quick and hassle-free process that puts you one step closer to
                earning rewards for your referrals. Simply provide some basic
                information, and you'll be ready to start sharing your unique
                referral link.
              </p>
            </Col>
            <Col className=" align-content-center col-4 ">
              <HiUserAdd className="add " />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-md-end col-8">
              <h5 className="text-danger">Purchase Investment Plan</h5>
              <p className="text-white para1">
                Select the plan that best fits your needs and aspirations.
                Whether you're a casual advocate or a business looking to scale
                your referral strategy, we have options for everyone. Choose
                from our Gold, Platinum,Diamond plans to unlock
                a range of benefits and rewards.
              </p>
            </Col>
            <Col className=" align-content-center col-4  ">
              <FaUserCheck className="add " />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-md-end col-8 ">
              <h5 className="text-danger">Get Profit</h5>
              <p className="text-white para1">
                Once you've signed up and selected your plan, it's time to start
                referring! Share your unique referral link or code with friends,
                family, and followers, and watch as the rewards start rolling
                in. For each successful referral, you'll earn a generous 25%
                profit, making it a win-win for everyone involved.
              </p>
            </Col>
            <Col className=" col-4 align-content-center ">
              <TbArrowsRightLeft className="add " />
            </Col>
          </Row>
        </div>
        <div className="hrsFirst w-md-50">
          <img src={logo1} alt='' className="w-100 h-100"></img>
        </div>
      </div>

      {/* -------------------------------------refer and earn =-----------------------------------------------*/}

      <Row className=" container-fluid mt-5 mb-5 d-flex flex-column flex-md-row justify-content-around align-items-center w-100">
        <Col className="col-md-6 col-lg-6 ">
          <img src={logo2} alt="" className="w-75 float-end " />
        </Col>
        <Col className="col-md-6 col-lg-6 mt-5 ">
          <h6 className="text-danger">Referral Comission________</h6>
          <h1 className="text-white">Refer your friend and earn money</h1>
          <p className="text-white para1">
            Our referral program was created as an additional way for our
            investors to make money. By attracting new investors to join us, our
            members are getting an additional source of income. The referral
            program has three levels of participation, with the following
            percentage accordingly: 25%, 10% and 5%.
          </p>
          <Row className="d-flex justify-content-lg-around text-light">
            <Col className="d-flex justify-content-around">
              <h2 className="bg-black p-1 rounded-3 text-danger">25%</h2>
              <p className="m-2">Level 01</p>{" "}
            </Col>
            <Col className="d-flex justify-content-around">
              <h2 className="bg-black p-1 rounded-3 text-danger">10%</h2>
              <p className="m-2">Level 02</p>{" "}
            </Col>
            <Col className="d-flex justify-content-around ">
              <h2 className="bg-black p-1 rounded-3 text-danger">5%</h2>
              <p className=" m-2">Level 03</p>{" "}
            </Col>
          </Row>
          <button type="button" class="btn btn-outline-danger mt-1 ">
            Get Start <BsArrowRightCircleFill />
          </button>
        </Col>
      </Row>

      {/* ------------------------------------testimonial of experts------------------------------------*/}
      <div className="mx-auto w-100 d-flex  justify-content-center ">
        <Button variant="outline-danger mx-3">Deposite Log</Button>
        <Button variant="outline-danger ">Withdraw Log</Button>
      </div>

      <div className="m-4">
        <Deposite />
      </div>

      <Review />
      <Footer />
    </div>
  );
}

export default Home;
