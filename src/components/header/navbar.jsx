import React from "react";
import logo from '../../assets/logo.png'
import './Navbar.css';
import phone from '../../assets/phone.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
       <img src={logo} width={110} alt="logo"/>
      </div>
      <div className="menu">
      <img src={phone}  style={{}} />  <span className="number">     +91 9876543210</span>
        <a href="#home">Home</a>
        <a href="#aboutus">About Us</a>
        <a href="#courses">Courses</a>
        <a href="#training">Training</a>
        <button className="contact-btn">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;