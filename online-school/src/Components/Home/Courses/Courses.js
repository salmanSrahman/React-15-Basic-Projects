import React, { useEffect, useState } from "react";
import Course from "./Course/Course";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./popularCourseData.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  });

  return (
    <section className="courses-part">
      <div className="container">
        <div className="title mb-3">
          <h2 className="text-center">
            Popular <span class="green-color">Courses</span>
          </h2>
        </div>
        <div className="row g-4">
          {courses.map((course) => (
            <Course course={course}></Course>
          ))}
        </div>
        <button className="btn-regular enroll mt-5 text-center d-block mx-auto">
          See All Courses
        </button>
      </div>
    </section>
  );
};

export default Courses;
