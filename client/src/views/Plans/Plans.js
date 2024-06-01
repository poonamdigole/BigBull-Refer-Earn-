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
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
function Plans() {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init();
  }, []);
  const [plan, setPlan] = useState("");
  const [balance, setBalance] = useState("");
  const [message, setMessage] = useState("");
  const [formvalue, setFormvalue] = useState({
    username: "",
    email: "",
    mobile: "",
    address: "",
    reffer: "",
    password: "",
    profit: "00000",
  });
  const handleInput = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create an order and fetch the order ID
      const Data = { balance: balance };
      console.log(Data)
      const orderResponse = await axios.post(
        "http://localhost/bigbull/api/order.php",
        Data
      );
      const { id: order_id, amount, currency } = orderResponse.data;

      // Start Razorpay payment
      const options = {
        key: "rzp_test_yWMvyDcDnYXnV6", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 2000 INR = 200000 paise
        currency: currency,
        name: "Bigbull",
        description: "Registration Payment",
        image: logo,
        order_id: order_id,
        handler: async function (response) {
          // Handle payment success
          console.log(formvalue);
          const formData = {
            username: formvalue.username,
            email: formvalue.email,
            mobile: formvalue.mobile,
            palns: plan,
            balance: balance,
            refferal: formvalue.reffer,
            password: formvalue.password,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          };
          const res = await axios.post(
            "http://localhost/bigbull/api/plan.php",
            formData
          );
          console.log(res.data.success);
          if (res.data.success) {
            setMessage(res.data.message);
            setTimeout(() => {
              navigate("/Login");
              window.location.reload();
            }, 1000);
          }
           else {
            setMessage(res.data.message);
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        },
        prefill: {
          name: formvalue.username,
          email: formvalue.email,
          mobile:formvalue.mobile

        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error(error);
      toast.error("Payment failed. Please try again.");
    }
  };
  const handalInvest = (e) => {

    setPlan(e.target.name);
    setBalance(e.target.value);
  };

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
              <form onSubmit={handleSubmit} className="bg-dark">
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
                    maxLength={10}
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
                  <br />
                  <input
                    className="form-control  text-white fs-5 bg-secondary "
                    name="plans"
                    value={plan}
                    onChange={handleInput}
                    required
                  ></input>{" "}
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Amount"
                    className="form-control fs-5 bg-secondary text-white"
                    name="balance"
                    value={balance}
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
                  <div className="form-check m-3">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="form-check-input"
                required
              />
              <label htmlFor="remember" className="form-check-label">
                I accept the <a href="/terms&conditions">Terms of Service</a> and{" "}
                <a href="/privacy">Privacy Policy</a>
              </label>
            </div>
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
          <p className="text-white w-75 container mb-5 text proper">
            Joining our refer and earn program comes with a host of benefits.
            Not only do you have the opportunity to earn rewards for each
            successful referral Plus, your friends get to enjoy exclusive
            discounts.
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
                      value="2000"
                      name="Gold"
                      onClick={(e) => handalInvest(e)}
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
                      value="5000"
                      name="Platinum"
                      onClick={(e) => handalInvest(e)}
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
                    <div className="px-1 rounded-2 perce">
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
                      data-bs-target="#exampleModal"
                      value="7000"
                      name="Diamond"
                      onClick={(e) => handalInvest(e)}
                    >
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
