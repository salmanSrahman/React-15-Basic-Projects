import React, { useEffect } from "react";
import "./HomeTeachers.css";

const HomeTeachers = () => {
  useEffect(() => {
    fetch("./");
  });

  return (
    <div>
      <div className="container">
        <div className="title mb-3">
          <h2 className="text-center">
            All <span class="green-color">Courses</span>
          </h2>
        </div>
        <div className="row g-3"></div>
      </div>
    </div>
  );
};

export default HomeTeachers;
