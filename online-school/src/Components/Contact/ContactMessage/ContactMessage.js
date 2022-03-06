import React from "react";
import "./ContactMessage.css";
import contact from "../../../images/Contact us-pana.svg";

const ContactMessage = () => {
  return (
    <div className="contactMessage-part text-center pt-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 mx-auto">
            <div className="contact-img pt-5">
              <img src={contact} alt="" className="img-fluid" />
            </div>
            <h5>We will contact you soon !</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMessage;
