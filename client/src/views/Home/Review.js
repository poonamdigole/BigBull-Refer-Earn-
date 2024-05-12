import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import Slider from "react-slick";
import client1 from "./Images/pe.png";
import client2 from "./Images/person.png";
import logo3 from "./Images/client3.png";
import logo4 from "./Images/client4.png"
import "./Home.css";

function Review() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <FaChevronCircleRight />,
    prevArrow: <FaChevronCircleLeft />,
  };
  return (
    <div className=" align-content-center container-fluid ">
      <h1
        className="mt-4 text-danger "
      >
        What Says Our Customers
      </h1>
      <div className="slider-container">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
          className="testy d-flex flex-md-row justify-content-center  "
        >
          <div className="p-4 d-flex flex-md-row flex-column-reverse ">
            <div className="bg-dark text-white p-3 m-4 border border-2 rounded-3 border-danger ">
              <p>
              "I absolutely love this refer and earn program! It's so easy to use, and the rewards are fantastic. I've referred several friends already, and we've all been able to earn extra cash just by sharing our referral links. Plus, the customer support team is incredibly helpful and responsive. Highly recommend!"
              </p>
              <h5>Moana Michell - ★★★★☆</h5>
            </div>
            <img
              src={client1}
              alt="moana"
              className="img-fluid mx-auto mt-3 d-block rounded-circle border-4 border-danger user border float-start"
            />
          </div>
          <div className="p-4 flex-md-row flex-column-reverse d-flex ">
            <div className="bg-dark m-4 text-white p-3 border border-2 rounded-3 flex-sm-row border-danger">
              <p>
              "I've been using this refer and earn website for a few months now, and I'm impressed with the results. The process is straightforward, and I've earned some decent rewards for referring friends and family. The only reason I'm not giving it five stars is that I wish there were more customization options for the referral links."
              </p>
              <h5>Mike Hamell - ★★★★☆</h5>
            </div>
            <img
              src={client2}
              alt="moana"
              className="img-fluid mx-auto mt-3 d-block rounded-circle border-4 border-danger user border float-start"
            />
          </div>
          <div className="p-4  d-flex flex-md-row flex-column-reverse">
            <div className="bg-dark text-white m-4 p-3 border border-2 rounded-3 flex-sm-row border-danger">
              <p>
"This refer and earn program is a game-changer! I've been able to earn extra income just by sharing my referral link with my social media followers. The best part is that my friends get to enjoy exclusive discounts when they sign up through my link. It's a win-win for everyone, and I couldn't be happier with the results!"
              </p>
              <h5>David M. - ★★★★★</h5>
            </div>
            <img
              src={logo3}
              alt="moana"
              className="img-fluid mx-auto mt-3 d-block rounded-circle border-4 border-danger user border float-start"
            />
          </div>
          <div className="p-4  d-flex flex-md-row flex-column-reverse">
            <div className="bg-dark m-4 text-white border border-2 rounded-3 flex-sm-row border-danger p-3">
              <p>
              "I've tried other refer and earn programs in the past, but none of them compare to this one. The rewards are generous, and the platform is user-friendly. I've already earned a significant amount of money just by referring friends and colleagues. I highly recommend this program to anyone looking to earn extra income!"
              </p>
              <h5>Emily S. - ★★★★★</h5>
            </div>
            <img
              src={logo4}
              alt="moana"
              className="img-fluid mx-auto mt-3 d-block rounded-circle border-4 border-danger user border float-start"
            />
          </div>
        </Slider>
        <div className="w-100 d-flex justify-content-center  ">
          <FaChevronCircleLeft
            className="text-danger fs-2 mx-5"
            onClick={previous}
          />
          <FaChevronCircleRight
            className="text-danger fs-2 mx-5"
            onClick={next}
          />
        </div>
      </div>
    </div>
  );
}

export default Review;
