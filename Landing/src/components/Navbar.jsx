import React from 'react'
import { IoTennisballOutline } from "react-icons/io5";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
        <IoTennisballOutline size={42} />
       
        </div>

        <div className="nav-items">
  <p><span>Process</span><span>Process</span></p>
  <p><span>Work</span><span>Work</span></p>
  <p><span>Services</span><span>Services</span></p>
  <p><span>About</span><span>About</span></p>
  <p><span>FAQs</span><span>FAQs</span></p>
</div>

<div className="book-call">
  <p><span>Book a call</span><span>Book a call</span></p>
</div>


    </div>
  )
}

export default Navbar