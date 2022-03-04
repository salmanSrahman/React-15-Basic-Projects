import React from "react";
import "./SuccessDetails.css";

const SuccessDetails = (props) => {
  const { title, img, number } = props.success;
  return (
    <div className="col-xl-3 col-md-6">
      <div className="success-card text-center">
        <img src={img} alt="" />
        <h3 className="my-3">{number}</h3>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default SuccessDetails;
