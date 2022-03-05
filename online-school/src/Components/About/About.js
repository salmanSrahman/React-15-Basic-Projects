import React from "react";
import "./About.css";
import about from "../../images/about-cover.jpg";
import Courses from "../Home/Courses/Courses";

const About = () => {
  return (
    <div className="about-part">
      <div className="about-inner pb-5">
        <div className="container">
          <div className="title mb-3">
            <h2 className="text-center">
              About <span class="green-color">Us</span>
            </h2>
          </div>
          <div className="row g-3">
            <div className="col-xl-6">
              <img src={about} alt="" className="img-fluid" />
            </div>
            <div className="col-xl-6">
              <div className="about-text pt-5">
                <h3>
                  <span class="green-color ">E-School</span> is one of the
                  Biggest Online Learning Platform of Bangladesh.
                </h3>
                <p className="pt-2 text-secondary lh-base fs-5">
                  Here you can get the best teachers of Bangladesh. You can
                  choose your week subject and join that class. In Aimers, you
                  can not only attend the classed. You have to give some exam
                  according to your enrolled subject or lesson. You can also
                  watch your favourite teacher's class here. You can take
                  preperatiion of Admission, HSC, SSC etc.
                </p>
                <button className="btn-regular">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Courses />
    </div>
  );
};

export default About;
