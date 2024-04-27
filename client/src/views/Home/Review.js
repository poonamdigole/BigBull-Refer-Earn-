import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import Slider from "react-slick";
import client1 from "./Images/pe.png";
import client2 from "./Images/person.png";
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
        style={{ fontFamily: "brush script mt" }}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                accusamus? Quam excepturi, dignissimos nobis reprehenderit
                delectus id vel quasi quaerat, esse qui omnis deserunt, minima
                consequuntur inventore molestiae libero architecto.
              </p>
              <h5>Moana Michell</h5>
              <p>Magna Aliqua</p>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                accusamus? Quam excepturi, dignissimos nobis reprehenderit
                delectus id vel quasi quaerat, esse qui omnis deserunt, minima
                consequuntur inventore molestiae libero architecto.
              </p>
              <h5>Mike Hamell</h5>
              <p>Magna Aliqua</p>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                accusamus? Quam excepturi, dignissimos nobis reprehenderit
                delectus id vel quasi quaerat, esse qui omnis deserunt, minima
                consequuntur inventore molestiae libero architecto.
              </p>
              <h5>Moana Michell</h5>
              <p>Magna Aliqua</p>
            </div>
            <img
              src={client1}
              alt="moana"
              className="img-fluid mx-auto mt-3 d-block rounded-circle border-4 border-danger user border float-start"
            />
          </div>
          <div className="p-4  d-flex flex-md-row flex-column-reverse">
            <div className="bg-dark m-4 text-white border border-2 rounded-3 flex-sm-row border-danger p-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                accusamus? Quam excepturi, dignissimos nobis reprehenderit
                delectus id vel quasi quaerat, esse qui omnis deserunt, minima
                consequuntur inventore molestiae libero architecto.
              </p>
              <h5>Mike Hamella</h5>
              <p>Magna Aliqua</p>
            </div>
            <img
              src={client2}
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
