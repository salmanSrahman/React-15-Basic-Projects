import React from "react";
import "./ContactMessage.css";
import contact from '../../../images/Contact us-pana.svg'

const ContactMessage = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <img src={contact} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMessage;
