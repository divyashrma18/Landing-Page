import React, { useRef } from 'react';
import './Section2.css';
import { motion, useInView } from 'framer-motion';

const Section2 = () => {
  const ref = useRef();
  const isInView = useInView(ref, {
    once: true,
    amount: 0.6, // Trigger when 50% of the section is visible
  });
  
  return (
    <div className="section2" ref={ref}>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        We specialise in crafting minimal logos that embody the essence of your brand.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      >
        First impressions matter. That's why our mission is to create clean, enduring designs that elevate your brand with simplicity and elegance. Captivate your audience with your timeless presence.
      </motion.p>
    </div>
  );
};

export default Section2;
