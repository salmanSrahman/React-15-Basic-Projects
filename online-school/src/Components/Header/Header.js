import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/Logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="nav-part">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to="/home" className="header-nav">
                Home
              </NavLink>
              <NavLink to="/about" className="header-nav">
                About Us
              </NavLink>
              <NavLink to="/courses" className="header-nav">
                Courses
              </NavLink>
              <NavLink to="/contact" className="header-nav">
                Contact Us
              </NavLink>
              <NavLink to="/login" className="btn btn-success fw-bold">
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
