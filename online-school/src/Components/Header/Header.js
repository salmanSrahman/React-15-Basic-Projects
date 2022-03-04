import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/Logo.png";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="nav-part">
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
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About Us</Nav.Link>
              <Nav.Link href="#action3">Courses</Nav.Link>
              <Nav.Link href="#action4">Contact Us</Nav.Link>
              <Nav.Link href="#action4">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
