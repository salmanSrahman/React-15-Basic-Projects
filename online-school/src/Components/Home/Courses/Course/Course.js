import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";

const Course = (props) => {
  console.log(props.course);
  const { img, mentor, name } = props.course;
  return (
    <div className="col-xl-3">
      <div className="course-card">
        <img src={img} alt="" className="img-fluid" />
        <div className="course-des px-2 py-3">
          <h4>{name}</h4>
          <h6 className="">Conducted By {mentor}</h6>
          <div className="overlay">
            <Link to="/home">See Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
