import React from 'react'
import './Footer.css'
import { IoTennisballOutline } from 'react-icons/io5'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="flex flex-col gap-[30px]">
          <div className="logo flex items-center gap-[15px] ">
            <IoTennisballOutline size={42} />
            <h1 className="text-[22px]">LOGO.</h1>
          </div>
          <div className="section6-button">
            <p>
              <span>Book a call</span>
              <span>Book a call</span>
            </p>
          </div>
        </div>
        <div>
          <div className="frows">
            <div className="frow1">
              {["Process", "Work", "About", "FAqs"].map((text, idx) => (
                <p className='footer-animate' key={idx}>
                  <span>{text}</span>
                  <span>{text}</span>
                </p>
              ))}
            </div>
            <div className="frow2">
              {["Twitter", "Linkedin"].map((text, idx) => (
                <p className="footer-animate" key={idx}>
                  <span>{text}</span>
                  <span>{text}</span>
                </p>
              ))}
            </div>
            <div className="frow3">
              <p className="footer-animate">
                <span>Developed by Divya Sharma</span>
                <span>Developed by Divya Sharma</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
