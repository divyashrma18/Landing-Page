import React, { useRef } from 'react';
import './Section5.css';
import { motion, useInView } from 'framer-motion';
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    stars: 5,
    text: "Our logo has garnered so many compliments!",
    name: "Mary",
    position: "Founder @ Plex",
    image: "./images/section5-1.avif"
  },
  {
    stars: 4,
    text: "Working with the team was a fantastic experience.",
    name: "John",
    position: "CEO @ NovaTech",
    image: "./images/section5-2.avif"
  },
  {
    stars: 5,
    text: "They nailed our brand identity perfectly.",
    name: "Lisa",
    position: "CMO @ Ripple",
    image: "./images/section5-3.avif"
  },
  {
    stars: 4,
    text: "Truly minimal, yet impactful designs. Loved it!",
    name: "David",
    position: "Co-Founder @ Beam",
    image: "./images/section5-4.avif"
  }
];

// Duplicate for infinite scroll
const loopedTestimonials = [...testimonials, ...testimonials];

const Section5 = () => {
  const headRef = useRef(null);
  const isInView = useInView(headRef, { amount: 0.4, once: true });

  return (
    <div className="section5">
      <div className="section5-head" ref={headRef}>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Our results.
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          Hear what our clients have to say about our team and our services.
        </motion.p>
      </div>

      <div className="carousel-container">
        <motion.div
          className="carousel-track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 20
          }}
        >
          {loopedTestimonials.map((item, index) => (
            <div className="section5-card" key={index}>
              <div className="stars">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <h3>{item.text}</h3>
              <div className='user-details'>
                <img src={item.image} alt={item.name} />
                <div className='user-name'>
                  <h5 className='name'>{item.name}</h5>
                  <p className='pos'>{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Section5;
