import React, { useEffect, useState } from "react";
import "./HomeTeachers.css";
import HomeTeacher from "../HomeTeachers/HomeTeacher/HomeTeacher";

const HomeTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("./someTeacher.JSON")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  });

  return (
    <div className="someTeacher-part py-5">
      <div className="container">
        <div className="title mb-3">
          <h2 className="text-center">
            Our Some <span class="green-color">Teachers</span>
          </h2>
        </div>
        <div className="row g-3">
          {teachers.map((teacher) => (
            <HomeTeacher teacher={teacher}></HomeTeacher>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTeachers;
