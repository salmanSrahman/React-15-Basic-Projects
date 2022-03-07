import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCourses from "./Components/AllCourses/AllCourses";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import ContactMessage from "./Components/Contact/ContactMessage/ContactMessage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/ALLcourses" element={<AllCourses />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/contactMessage" element={<ContactMessage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
