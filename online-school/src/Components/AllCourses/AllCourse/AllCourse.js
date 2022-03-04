import React from "react";
import { Link } from "react-router-dom";

const AllCourse = (props) => {
  const { img, mentor, name } = props.course;
  return (
    <div className="col-xl-3 col-md-6">
      <div className="course-card">
        <img src={img} alt="" className="img-fluid" />
        <div className="course-des px-2 py-4">
          <h4>{name}</h4>
          <h6 className="mb-3">Conducted By {mentor}</h6>
          <div className="d-flex justify-content-between">
            <Link to="/home" className="btn-details">
              See Details
            </Link>
            <Link to="/home" className="btn btn-outline-success fw-bold enroll">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourse;
