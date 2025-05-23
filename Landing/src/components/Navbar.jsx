import React, { useState, useEffect } from 'react';
import { IoTennisballOutline } from "react-icons/io5";
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <IoTennisballOutline size={42} />
      </div>

      <div className="nav-items">
        <p onClick={() => scrollToSection('section3')}>
          <span>Process</span><span>Process</span>
        </p>
        <p onClick={() => scrollToSection('section4')}><span>Work</span><span>Work</span></p>
        <p onClick={() => scrollToSection('section6')}><span>Services</span><span>Services</span></p>
        <p onClick={() => scrollToSection('section7')}><span>About</span><span>About</span></p>
        <p onClick={() => scrollToSection('section8')}><span>FAQs</span><span>FAQs</span></p>
      </div>

      <div className="book-call">
        <p><span>Book a call</span><span>Book a call</span></p>
      </div>
    </div>
  );
};

export default Navbar;
