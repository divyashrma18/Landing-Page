import React, { useState, useEffect } from 'react';
import { IoTennisballOutline } from "react-icons/io5";
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.1); // adjust threshold if needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
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
  );
};

export default Navbar;
