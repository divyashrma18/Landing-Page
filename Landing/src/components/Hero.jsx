import React from 'react'
import './Hero.css'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import Section1 from './Section1'

const Hero = () => {
  return (
    <div className="hero">
      <Navbar /> 
      <div className="orange-glow"></div>
      <div className="hero-text">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Elevate your brand with a timeless minimal logo.
        </motion.h1>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Design agency crafting minimal brand identities that speaks volumes.
        </motion.p>

        <motion.div
          className="hero-btns"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <div className="view-plans">
            <p>
              <span>View Plans</span>
              <span>View Plans</span>
            </p>
          </div>
          <div className="learn-more">
            <p>
              <span>Learn More</span>
              <span>Learn More</span>
            </p>
          </div>
        </motion.div>
      </div>
      <Section1 />
    </div>
  )
}

export default Hero
