import React from "react";
import "./HomeTeacher.css";

const HomeTeacher = (props) => {
  console.log(props.teacher);
  const { img, title, name } = props.teacher;
  return (
    <div className="col-xl-3 col-md-6">
      <div className="teacher-card">
        <div className="teacher-img">
          <img src={img} alt="" className="img-fluid" />
          <div className="teacher-overlay d-flex align-items-center">
            <ul>
              <li>
                <a href="/">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fab fa-pinterest-p"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="teacher-text p-3">
          <h4 className="green-color">{name}</h4>
          <h6>{title}</h6>
        </div>
      </div>
    </div>
  );
};

export default HomeTeacher;
