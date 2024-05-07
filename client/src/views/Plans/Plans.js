import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import "./Plans.css";
import Navbar from "../../components/Navbar/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer/Footer";
import gold from "./gold1.png";
import platinum from "./platinum.png";
import diamond from "./diamond.png";
import logo from "../logo.png";
import "../../components/Navbar/Navbar.css";
<<<<<<< HEAD
import axios from "axios";
=======

>>>>>>> 5e232e65d7e3bd0909628c06ae54a8ad2b57fb4c
function Plans() {
  useEffect(() => {
    Aos.init();
  }, []);
  const [message,setMessage]= useState('')
  const [formvalue, setFormvalue] = useState({
    username: "",
    email: "",
    mobile: "",
    address: "",
    plans: "",
    balance: "",
    reffer: "",
    password: "",
    profit: "00000"
  });
  const handleInput = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault()
      //console.log(formvalue);
      const formData={username:formvalue.username,email:formvalue.email,mobile:formvalue.mobile,address:formvalue.address,palns:formvalue.plans,balance:formvalue.balance,refferal:formvalue.reffer, password:formvalue.password,}
      const res = await axios.post("http://localhost/bigbull/api/user.php",formData);
      if(res.data.success){
        setMessage(res.data.success);
        setTimeout(()=>{
        window.location.reload()
        },800)
       
      }
    }

  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column-reverse flex-md-row justify-content-around align-items-center ">
        <div
          className="modal fade "
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content bg-dark text-white popup">
              <div className="modal-header">
                <h4 className="modal-title text-danger fw-bold bg-white px-3 rounded">
                  Plan Details
                </h4>
                <p className="text-s uccess m-1">{message}</p>
                <button
                  type="button"
                  className="btn-close bg-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
              <div className="modal-body text-white ">
                <input
                  type="text"
                  placeholder="Full name"
                  className="form-control fs-5 bg-secondary text-white"
                  name="username"
                  value={formvalue.username}
                  onChange={handleInput}
                  required
                />{" "}
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control fs-5 bg-secondary  text-white"
                  name="email"
                  value={formvalue.email}
                  onChange={handleInput}
                  required
                />{" "}
                <br />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="form-control fs-5 bg-secondary text-white"
                  name="mobile"
                  value={formvalue.mobile}
                  onChange={handleInput}
                  required
                />{" "}
                <br />
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control fs-5 bg-secondary text-white"
                  name="address"
                  value={formvalue.address}
                  onChange={handleInput}
                  required
                />{" "}
                <br />
                <input
                  type="text"
                  placeholder="Refferal ID"
                  className="form-control fs-5 bg-secondary text-white"
                  name="reffer"
                  value={formvalue.reffer}
                  onChange={handleInput}
    
                />{" "}
                <br/>
                <select
                  className="form-control  text-white fs-5 bg-secondary "
                  name="plans"
                  value={formvalue.plans}
                  onChange={handleInput}
                  required
                >
                  <option>Select Your Plan</option>
                  <option>Gold</option>
                  <option>Platinum</option>
                  <option>Diamond</option>
                </select>{" "}
                <br/>
                <input
                  type="text"
                  placeholder="Enter Amount"
                  className="form-control fs-5 bg-secondary text-white"
                  name="balance"
                  value={formvalue.balance}
                  onChange={handleInput}
                  required
                />{" "}
                <br />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control fs-5 bg-secondary text-white"
                  name="password"
                  value={formvalue.password}
                  onChange={handleInput}
                  required
                />{" "}
                <br />
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  name="submit"
                  className="btn  btn-danger mx-auto px-4 fs-5 "
                >
                  Invest Now
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="heroSec container d-flex flex-column-reverse flex-md-row justify-content-around align-items-center">
        <div className=" w-auto align-content-center ">
          <h1 className=" text-danger ">Investment Plan</h1>
          <p className="text-white fs-5 ">Home - Invest Plan</p>
        </div>
        <div className="hrsFirst ">
          <img src={logo} alt="" width={"100%"}></img>
        </div>
      </div>
      <div className="plans container mt-5 ">
        <div
          className="container align-content-center  text-center "
          data-aos="zoom-out-up"
          data-aos-duration="2000"
        >
          <h5 className=" text-danger ">Pricing Plan______</h5>
          <h1 className=" text-danger fs-1">Best Investment Packages</h1>
          <p className="text-white w-75 container mb-5">
          Joining our refer and earn program comes with a host of benefits. Not only do you have the opportunity to earn rewards for each successful referral Plus, your friends get to enjoy exclusive discounts.
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
                      <h2 className="text-danger ">25%</h2>
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

                  <h3 className="text-danger">2000₹</h3>

                  <Card.Footer>
                    {/* <Button variant="danger">Invest Now</Button> */}
                    <button
                      type="button"
                      variant="danger"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Invest Now
                    </button>
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
                      <h2 className="text-danger ">25%</h2>
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

                  <h3 className="text-danger">5000₹</h3>

                  <Card.Footer>
                    <button
                      type="button"
                      variant="danger"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Invest Now
                    </button>
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
                      <h2 className="text-danger ">25%</h2>
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

                  <h3 className="text-danger">7000₹</h3>

                  <Card.Footer>
                    <button
                       type="button"
                       variant="danger"
                       className="btn btn-danger"
                       data-bs-toggle="modal"
                       data-bs-target="#exampleModal">
                      Invest Now
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        {/* -------------------------------------------Plan information -----------------------------------*/}
        <div className="container text-light fs-5 mt-5 proper">
          <div className="Platinum d-flex flex-md-row flex-column justify-content-center align-items-center ">
            <img src={gold} alt="" width={"30%"}></img>
            <p className="w-75 ">
              <h1 className="text-danger">Gold Plan:</h1> <br></br>
              Our Gold Plan is perfect for those just starting out with our
              refer and earn program. With no upfront costs and easy sign-up,
              it's a hassle-free way to begin earning rewards for sharing your
              love of our products or services. You'll receive a unique referral
              link and have access to our Gold tracking tools to monitor your
              progress. Start referring today and watch your rewards grow!
            </p>
          </div>
          <div className="Platinum d-flex flex-md-row flex-column justify-content-center align-items-center ">
            <img src={platinum} alt="" width={"30%"}></img>
            <p className="w-75">
              <h1 className="text-danger">Platinum Plan:</h1>
              <br></br>
              Upgrade to our Platinum Plan for even more benefits and rewards.
              With advanced tracking features, personalized referral codes, and
              priority support, it's the perfect option for those looking to
              maximize their earning potential. In addition to earning rewards
              for successful referrals, you'll also unlock exclusive bonuses and
              incentives. Join the ranks of our top advocates and start earning
              Platinum rewards today!
            </p>
          </div>
          <div className="Platinum d-flex flex-md-row flex-column justify-content-center align-items-center ">
            <img src={diamond} alt="" width={"30%"}></img>
            <p className="w-75">
              <h1 className="text-danger"> Diamond Plan:</h1>
              <br></br>
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
