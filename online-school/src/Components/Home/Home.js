import React from "react";
import WhyUs from "../WhyUs/WhyUs";
import Banner from "./Banner/Banner";
import Courses from "./Courses/Courses";
import HomeTeachers from "./HomeTeachers/HomeTeachers";
import Success from "./Success/Success";

const Home = () => {
  return (
    <div>
      <Banner />
      <Success />
      <Courses />
      <WhyUs />
      <HomeTeachers />
    </div>
  );
};

export default Home;
