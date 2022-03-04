import React, { useEffect, useState } from "react";
import AllCourse from "./AllCourse/AllCourse";
import "./AllCourses.css";

const AllCourses = () => {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    fetch("./mainCoursesData.JSON")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  });
  return (
    <section className="allCourses-part">
      <div className="container">
        <div className="title mb-3">
          <h2 className="text-center">
            Popular <span class="green-color">Courses</span>
          </h2>
        </div>
        <div className="row g-4">
          {allCourses.map((course) => (
            <AllCourse course={course}></AllCourse>
          ))}
        </div>
        <button className="btn-regular enroll mt-5 d-block mx-auto">
          Go Back
        </button>
      </div>
    </section>
  );
};

export default AllCourses;
