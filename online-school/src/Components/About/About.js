import React from "react";
import "./About.css";
import about from "../../images/about.jpg";

const About = () => {
  return (
    <div className="about-part">
      <div className="container">
        <div className="title mb-3">
          <h2 className="text-center">
            About <span class="green-color">Us</span>
          </h2>
        </div>
        <div className="row g-3">
          <div className="col-xl-5">
            <img src={about} alt="" className="img-fluid" />
          </div>
          <div className="col-xl-7">
            <p>
              AIMERS is one of the Biggest Online Learning Platform of
              Bangladesh. Here you can get the best teachers of Bangladesh. You
              can choose your week subject and join that class. In Aimers, you
              can not only attend the classed. You have to give some exam
              according to your enrolled subject or lesson. You can also watch
              your favourite teacher's class here. You can take preperatiion of
              Admission, HSC, SSC etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
