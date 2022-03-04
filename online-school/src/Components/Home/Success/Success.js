import React from "react";
import "./Success.css";
import s1 from "../../../images/card-1.png";
import s2 from "../../../images/card-2.png";
import s3 from "../../../images/card-3.png";
import s4 from "../../../images/card-4.png";
import SuccessDetails from "./SuccessDetails/SuccessDetails";

const successInfo = [
  {
    title: "Topic",
    number: "1500+",
    img: s1,
  },
  {
    title: "Students",
    number: "1800+",
    img: s2,
  },
  {
    title: "Test Token",
    number: "9k+",
    img: s3,
  },
  {
    title: "Books",
    number: "200+",
    img: s4,
  },
];

const Success = () => {
  return (
    <section className="success-part">
      <div className="title">
        <h2 className="text-center">
          Our <span class="green-color">Achievements</span>
        </h2>
      </div>
      <div className="container">
        <div className="row g-4">
          {successInfo.map((success) => (
            <SuccessDetails
              key={success.title}
              success={success}
            ></SuccessDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Success;
