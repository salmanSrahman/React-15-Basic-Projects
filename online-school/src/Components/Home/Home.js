import React from "react";
import Banner from "./Banner/Banner";
import Courses from "./Courses/Courses";
import Success from "./Success/Success";

const Home = () => {
  return (
    <div>
      <Banner />
      <Success />
      <Courses/>
    </div>
  );
};

export default Home;
