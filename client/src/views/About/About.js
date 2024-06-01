import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { HiUserGroup } from "react-icons/hi2";
import { MdAccountBalanceWallet } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
const MainCard = () => {
  return (
    <div className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <img
              src="https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2417.jpg?t=st=1715757660~exp=1715761260~hmac=e9edba0fca9730f07f80a132ea28cb3f3527a7ed4fedf5ff55a666e16d3b46c5&w=740"
              className="img-fluid rounded-circle border border-danger"
              alt="..."
              height="150px"
              width="150px"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h3 className="text-danger text-start mt-md-0 mt-3">who we are__</h3>
            <h1 className="text-danger text-start font-weight-bold fs-md-3 fs-2 mb-3">
              Know About us
            </h1>
            <p className="text-light text-start">
              We are India’s largest fully integrated logistics provider. We aim
              to build the operating system for commerce, through a combination
              of world-class infrastructure, logistics operations of the highest
              quality and cutting-edge engineering and technology capabilities.
              <br />
              <br />
              Since its inception in 2011, our team has successfully fulfilled
              over 2 billion orders across India. We have built a nation-wide
              network with a presence in every state, servicing over 18,600 pin
              codes. 24 automated sort centres, 94 gateways, 2880 direct
              delivery centres, and a team of over 57,000 people make it
              possible for us to deliver 24 hours a day, 7 days a week, 365 days
              a year.
            </p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <HiUserGroup className="rounded-circle hover-opacity-50" style={{ width: "40px", height: "40px" }} />
              <h6 className="text-light mx-2">58k <br /> Happy users</h6>
              <MdAccountBalanceWallet className="rounded-circle hover-opacity-50" style={{ width: "40px", height: "40px" }} />
              <h6 className="text-light mx-2">30+ <br /> Total Wallet</h6>
              <GiWallet className="rounded-circle hover-opacity-50" style={{ width: "40px", height: "40px" }} />
              <h6 className="text-light mx-2">235m <br /> Deposit</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondParagraph = () => {
  return (
    <div className="bg-danger py-5 text-white">
      <div className="container">
        <p className="text-light text-center">
          Quibusdam at sunt molestias et iusto eos rerum minima facere Amet error
          praesentium perspiciatis harum ratione vitae ipsam accusamus, rem rerum.
          Molestias explicabo laborum sint voluptate totam incidunt repellendus
          dignissimos ipsam adipisci. Placeat consequuntur, iure quibusdam at sunt
          molestias et iusto eos rerum minima facere, dolores tempore. Accusamus
          quo omnis nam natus, temporibus eaque labore. Quasi architecto vitae
          veniam laudantium. Voluptates, incidunt.
          <br />
          <br />
          Quibusdam at sunt molestias et iusto eos rerum minima facere Amet error
          praesentium perspiciatis harum ratione vitae ipsam accusamus, rem rerum.
          Molestias explicabo laborum sint voluptate totam incidunt repellendus
          dignissimos ipsam adipisci. Placeat consequuntur, iure quibusdam at sunt
          molestias et iusto eos rerum minima facere, dolores tempore. Accusamus
          quo omnis nam natus, temporibus eaque labore. Quasi architecto vitae
          veniam laudantium. Voluptates, incidunt.
        </p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <h3 className="text-danger text-center mb-3">Features_</h3>
        <h1 className="text-danger text-center font-weight-bold fs-md-3 fs-2 mb-5">
          Why choose us
        </h1>
        <p className="text-dark text-center font-weight-bold fs-2 mb-5">
          Deserunt hic consequatur ex placeat! atque  repellendus inventore.
        </p>
        <div className="row">
          <FeatureCard
            title="Limitless Investment"
            description="INVESTING WITHOUT BORDERS. You can invest in our company from anywhere in the world."
          />
          <FeatureCard
            title="Extreme Support"
            description="Our specialists are available around the clock to help you. Please let us know your questions."
          />
          <FeatureCard
            title="Special Security"
            description="Your deposits are insured by our Special Trust Fund. Your deposits are safe."
          />
          <FeatureCard
            title="Daily Profit"
            description="DAILY PROFIT. You can make profit every day with our investment proposals!"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="bg-white text-dark rounded p-4 shadow-sm">
        <h4 className="text-danger fs-4 font-weight-bold mb-2">{title}</h4>
        <p className="text-dark">{description}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
   <div>
   <Navbar></Navbar>
   </div>
    <div className="mt-5 pt-5">
      
      <MainCard />
      <SecondParagraph />
      <Features />
    </div>
    </>
  );
};

export default About;