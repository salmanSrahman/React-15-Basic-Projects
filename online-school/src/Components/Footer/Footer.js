import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-part ">
      <div className="container">
        <div className="row g-3">
          <div className="col-xl-3 col-md-6 text-light">
            <div className="footer-title pb-4">
              <h5 className="text-light text-uppercase">About Us</h5>
            </div>
            <div className="footer-first-text pb-3">
              <p>
                <span className="green-color">E-Online</span> Is An Online
                Learning Platform Which Will Give You The Best Teacher's Classes
                Among The Country.
              </p>
            </div>
            <div className="footer-social">
              <a href="/">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="/">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="/">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="/">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-md-6"></div>
          <div className="col-xl-3 col-md-6"></div>
          <div className="col-xl-3 col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
