import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";

const Course = (props) => {
  console.log(props.course);
  const { img, mentor, name } = props.course;
  return (
    <div className="col-xl-3 col-md-6">
      <div className="course-card">
        <img src={img} alt="" className="img-fluid" />
        <div className="course-des px-2 py-4">
          <h4>{name}</h4>
          <h6 className="mb-3">Conducted By {mentor}</h6>
          <Link to="/home" className="btn-details">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
