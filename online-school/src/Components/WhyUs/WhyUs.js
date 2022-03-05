import React from "react";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <div>
      <div className="container">
        <div className="title mb-3">
          <h2 className="text-center">
            Why <span class="green-color">Courses</span>
          </h2>
        </div>
        <div className="row g-2">
          <div className="col-xl-4">
            <div className="why-us-item item1">
              <div className="icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="mb-4">experience trainers</h3>
              <p>
                We have some great teachers. Some Students says, they were the
                real hero behind their success. Our Teachers are well trained
                and they have so much experience in this field.
              </p>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="why-us-item item2">
              <div className="icon">
                <i className="fas fa-laptop"></i>
              </div>
              <h3 className="mb-4">Exams</h3>
              <p>
                Some organization will give you video classes. But we will give
                you enough support from our side. After the class you have to
                attend the exam. Otherwise, you will not be eligible to attend
                the next class. We take also, weekly and monthly test.
              </p>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="why-us-item item3">
              <div className="icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="mb-4">certification</h3>
              <p>
                After completing the classes and attend the exams, your will be
                awarded certificate based on your mark. This marks will help you
                to motivate or boost you. You will compete with yourself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
