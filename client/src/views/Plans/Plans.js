import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import "../Plans/Plans.css";
import Navbar from "../../components/Navbar/Navbar";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer/Footer";
import gold from "./gold1.png";
import platinum from "./platinum.png";
import diamond from "./diamond.png";
import logo from '../About/logo2.png'

function Plans() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <div className="heroSec container d-flex flex-column-reverse flex-md-row justify-content-around align-items-center ">
       
        <div className=" w-auto">
          <h1 className=" text-danger ">
           Investment Plan
          </h1>
          <p className="text-white fs-5 ">
          Home - Invest Plan
          </p>
        </div>
        <div className='hrsFirst w-md-50'>
       <img src={logo} className='w-100 h-100'></img>
        </div>
      </div>
      <div className="plans container mt-5 ">
        <div
          className="container align-content-center  text-center "
          data-aos="zoom-out-up"
          data-aos-duration="2000"
        >
          <h5 className=" text-danger mt-5 ">Pricing Plan______</h5>
          <h1 className=" text-danger fs-1">Best Investment Packages</h1>
          <p className="text-white w-75 container mb-5">
            Deserunt hic consequatur ex placeat! atque repellendus inventore
            quisquam, perferendis, eum reiciendis quia nesciunt fuga magni.
          </p>
        </div>
        <div className=" d-grid card-group  ">
          <div>
            <Row>
              <Col xs={12} md={4}>
                <Card className="text-center mx-0 bg-dark text-white">
                  <Card.Header className="d-flex justify-content-between align-content-center ">
                    <div>
                      <h4>Gold</h4>
                      <h6>Most Popular </h6>
                    </div>
                    <div className="px-1 rounded-2  perce">
                      <h2 className="text-danger ">9%</h2>
                      <p className="fs-6">Return</p>
                    </div>
                  </Card.Header>

                  <p>
                    <IoMdCheckmarkCircleOutline />
                    Profit -- Every Day
                  </p>
                  <p>
                    <IoMdCheckmarkCircleOutline />
                    Capital will come back -- <span className="sign">yes</span>
                  </p>
                  <p>
                    <IoMdCheckmarkCircleOutline />
                    Repeatable -- 10 Times
                  </p>

                  <h3 className="text-danger">7000₹</h3>

                  <Card.Footer>
                    <Button variant="danger">Invest Now</Button>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className="text-center mx-0 bg-dark text-white">
                  <Card.Header className="d-flex justify-content-between align-content-center ">
                    <div>
                      <h4>Platinum</h4>
                      <h6>Most Popular </h6>
                    </div>
                    <div className="px-1 rounded-2  perce">
                      <h2 className="text-danger ">11%</h2>
                      <p className="fs-6">Return</p>
                    </div>
                  </Card.Header>

                  <p>
                    <IoMdCheckmarkCircleOutline />
                    Profit -- Every Day
                  </p>
                  <p>
                    <IoMdCheckmarkCircleOutline />
                    Capital will come back -- <span className="sign">yes</span>
                  </p>
                  <p>
                    <IoMdCheckmarkCircleOutline />
                    Repeatable -- 20 Times
                  </p>

                  <h3 className="text-danger">10000₹</h3>

                  <Card.Footer>
                    <Button variant="danger">Invest Now</Button>
                  </Card.Footer>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className="text-center mx-0 bg-dark text-white">
                  <Card.Header className="d-flex justify-content-between align-content-center ">
                    <div>
                      <h4>Diamond</h4>
                      <h6>Most Popular </h6>
                    </div>
                    <div className="px-1 rounded-2  perce">
                      <h2 className="text-danger ">15%</h2>
                      <p className="fs-6">Return</p>
                    </div>
                  </Card.Header>

                  <p>
                    <IoMdCheckmarkCircleOutline />
                    Profit -- Every Day
                  </p>
                  <p>
                    <IoMdCheckmarkCircleOutline />
                    Capital will come back -- <span className="sign">yes</span>
                  </p>
                  <p>
                    <IoMdCheckmarkCircleOutline />
                    Repeatable --30 Times
                  </p>

                  <h3 className="text-danger">15000₹</h3>

                  <Card.Footer>
                    <Button variant="danger">Invest Now</Button>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        {/* -------------------------------------------Plan information -----------------------------------*/}
        <div className="container text-light fs-5 mt-5 ">
        <div className="Platinum d-flex flex-row justify-content-center align-items-center ">
            <img src={gold} width={"23%"}></img>
            <p className="w-50">
             <h1 className="text-danger">Gold Plan:</h1> <br></br>
              Our Gold Plan is perfect for those just starting out with our
              refer and earn program. With no upfront costs and easy sign-up,
              it's a hassle-free way to begin earning rewards for sharing your
              love of our products or services. You'll receive a unique referral
              link and have access to our Gold tracking tools to monitor your
              progress. Start referring today and watch your rewards grow!
            </p>
          </div>
          <div className="Platinum d-flex flex-row justify-content-center align-items-center ">
            <img src={platinum} width={"23%"}></img>
            <p className="w-50">
            <h1 className="text-danger">Platinum Plan:</h1><br></br>
              Upgrade to our Platinum Plan for even more benefits and rewards.
              With advanced tracking features, personalized referral codes, and
              priority support, it's the perfect option for those looking to
              maximize their earning potential. In addition to earning rewards
              for successful referrals, you'll also unlock exclusive bonuses and
              incentives. Join the ranks of our top advocates and start earning
              Platinum rewards today!
            </p>
          </div>
          <div className="Platinum d-flex flex-row justify-content-center align-items-center ">
            <img src={diamond} width={"23%"}></img>
            <p className="w-50">
            <h1 className="text-danger"> Diamond Plan:</h1><br></br>
              Are you a Diamond owner or influencer looking to monetize your
              network? Our Diamond Plan is tailored to meet your needs. With
              customizable referral programs, branded marketing materials, and
              dedicated account management, it's the ultimate solution for
              scaling your referral strategy. Whether you're looking to boost
              sales, increase brand awareness, or drive traffic to your website,
              our Diamond Plan has you covered. Take your referral game to the
              next level and start growing your Diamond with us!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Plans;
