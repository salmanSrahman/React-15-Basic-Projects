import React from "react";
import WhyUs from "../WhyUs/WhyUs";
import Banner from "./Banner/Banner";
import Courses from "./Courses/Courses";
import Success from "./Success/Success";

const Home = () => {
  return (
    <div>
      <Banner />
      <Success />
      <Courses />
      <WhyUs />
    </div>
  );
};

export default Home;
