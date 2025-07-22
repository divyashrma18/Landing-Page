import React, { useRef, useState, useEffect } from 'react';
import './Section4.css';
import { motion, useInView } from 'framer-motion';

const Section4 = () => {
  const headRef = useRef(null);
  const isInView = useInView(headRef, { amount: 0.5, once: true });

  const cardRefs = useRef([]);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame;

    const animateBtn = () => {
      setBtnPos((prev) => {
        const dx = cursorPos.x - prev.x;
        const dy = cursorPos.y - prev.y;
        return {
          x: prev.x + dx * 0.8,
          y: prev.y + dy * 0.8,
        };
      });
      animationFrame = requestAnimationFrame(animateBtn);
    };

    if (hoveredIndex !== null) {
      animationFrame = requestAnimationFrame(animateBtn);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [cursorPos, hoveredIndex]);

  const handleMouseEnter = (e, index) => {
    const rect = cardRefs.current[index].getBoundingClientRect();
    const x = e.clientX - rect.left + 30;
    const y = e.clientY - rect.top - 20;
    setCursorPos({ x, y });
    setBtnPos({ x, y });
    setHoveredIndex(index);
  };

  const handleMouseMove = (e, index) => {
    const rect = cardRefs.current[index].getBoundingClientRect();
    const x = e.clientX - rect.left + 30;
    const y = e.clientY - rect.top - 20;
    setCursorPos({ x, y });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const cardImages = [
    './images/section4-1.webp',
    './images/section4-2.webp',
    './images/section4-3.webp',
    './images/section4-4.webp',
    './images/section4-5.webp',
    './images/section4-6.webp'
  ];

  return (
    <div className="section4" id='section4'>
      <div className="section4-head" ref={headRef}>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Our work.
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          View our expertly crafted minimal logos, designed to convey simplicity and elegance.
        </motion.p>
      </div>

      <div className="section4-data">
        {Array.from({ length: 3 }).map((_, rowIndex) => {
          const rowRef = useRef(null);
          const isRowInView = useInView(rowRef, { amount: 0.4 });

          const fromX = rowIndex % 2 === 0 ? -100 : 100;

          return (
            <motion.div
              className="row"
              key={rowIndex}
              ref={rowRef}
              initial={{ x: fromX, opacity: 0 }}
              animate={isRowInView ? { x: 0, opacity: 1 } : { x: fromX, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {[0, 1].map((offset) => {
                const index = rowIndex * 2 + offset;
                return (
                  <div
                    key={index}
                    className="card1"
                    ref={(el) => (cardRefs.current[index] = el)}
                    onMouseEnter={(e) => handleMouseEnter(e, index)}
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={handleMouseLeave}
                    style={{ cursor: 'pointer', position: 'relative' }}  
                  >
                    <img src={cardImages[index]} alt={`Logo ${index + 1}`} />

                    {hoveredIndex === index && (
                      <button
                        className="view-project-btn"
                        style={{
                          position: 'absolute',
                          top: btnPos.y,
                          left: btnPos.x,
                          transform: 'translate(-50%, -100%)',
                          pointerEvents: 'none',
                          transition: 'top 0.1s ease, left 0.1s ease',
                          backgroundColor: '#FF520E',
                          color: '#fff',
                          padding: '6px 14px',
                          borderRadius: '20px',
                          fontWeight: '600',
                          fontSize: '0.9rem',
                          boxShadow: '0 3px 6px rgba(255, 82, 14, 0.5)',
                          userSelect: 'none',
                          whiteSpace: 'nowrap',
                          zIndex: 10,
                        }}
                      >
                        View Project
                      </button>
                    )}
                  </div>
                );
              })}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Section4;
