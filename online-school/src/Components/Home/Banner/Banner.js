import React from "react";
import banner from "../../../images/Illustration.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-part">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="banner-text">
              <h5>Are you ready to Learn?</h5>
              <h1>
                Learn with fun
                <span className="d-block">
                  on <span className="green-color">any schedule</span>
                </span>
              </h1>
              <p>
                Convert your Dream to Aim and focus on your aim. We prepared a
                very useful course for you. You can complete this from home.
                Here you can learn what you need and get opportunities to
                participate in exams. You will get-
                <span className="d-block">24/7 support from us.</span>
                <span className="d-block">Let's get it together.</span>
              </p>
              <button className="btn-regular">Get Started</button>
            </div>
          </div>
          <div className="col-xl-7">
            <img src={banner} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
