import React, { useRef, useState, useEffect } from 'react';
import './Section7.css';
import { motion, useInView } from 'framer-motion';

const teamData = [
  { id: 1, name: 'Jane Doe', position: 'Lead Designer', img: './images/section7-1.avif' },
  { id: 2, name: 'John Smith', position: 'Developer', img: './images/section7-2.avif' },
  { id: 3, name: 'Alice Johnson', position: 'Marketing Head', img: './images/section7-3.avif' },
  { id: 4, name: 'Bob Brown', position: 'Product Manager', img: './images/section7-4.webp' },
  { id: 5, name: 'Eva Green', position: 'UX Designer', img: './images/section7-5.avif' },
  { id: 6, name: 'Mark Black', position: 'QA Engineer', img: './images/section7-6.avif' },
];

const Section7 = () => {
  const headRef = useRef(null);
  const isInView = useInView(headRef, { amount: 0.4, once: true });

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const cardWidth = 310; // Approx width of a card, adjust to your CSS
  const gap = 30;        // Gap between cards

  useEffect(() => {
    let animationFrame;
    const animateBtn = () => {
      setBtnPos((prev) => {
        const dx = cursorPos.x - prev.x;
        const dy = cursorPos.y - prev.y;
        return {
          x: prev.x + dx * 0.3,
          y: prev.y + dy * 0.3,
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
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left + 20;
    const y = e.clientY - rect.top - 20;
    setCursorPos({ x, y });
    setBtnPos({ x, y });
    setHoveredIndex(index);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left + 20;
    const y = e.clientY - rect.top - 20;
    setCursorPos({ x, y });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const slideLeft = () => {
    setStartIndex((prev) =>
      prev === 0 ? teamData.length - visibleCount : prev - 1
    );
  };

  const slideRight = () => {
    setStartIndex((prev) =>
      (prev + 1) % teamData.length
    );
  };

  const getWrappedIndex = (index) => {
    return index % teamData.length;
  };

  const getVisibleCards = () => {
    let cards = [];
    for (let i = 0; i < teamData.length; i++) {
      cards.push(teamData[getWrappedIndex(i)]);
    }
    return cards;
  };

  const offsetX = -((cardWidth + gap) * startIndex);

  return (
    <div className="section7">
      <div className="section7-head" ref={headRef}>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Our Team.
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          Meet our talented team proud in delivering your brand's logo.
        </motion.p>
      </div>

      <div className="carousel-wrapper">
        <button className="carousel-arrow left-arrow" onClick={slideLeft}>&#8592;</button>
        <button className="carousel-arrow right-arrow" onClick={slideRight}>&#8594;</button>

        <div className="carousel-viewport" style={{ overflow: 'hidden', width: `${(cardWidth + gap) * visibleCount}px` }}>
          <motion.div
            className="carousel-inner"
            animate={{ x: offsetX }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{
              display: 'flex',
              gap: `${gap}px`,
              width: `${(cardWidth + gap) * teamData.length}px`,
            }}
          >
            {getVisibleCards().map((team, idx) => (
              <div
                key={team.id}
                className="team-image-wrapper"
                style={{ width: `${cardWidth}px`, flexShrink: 0 }}
                onMouseEnter={(e) => handleMouseEnter(e, idx)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img src={team.img} alt={team.name} />
                <div className="image-overlay"></div>

                <div className="team-info">
                  <h3>{team.name}</h3>
                  <p>{team.position}</p>
                </div>

                {hoveredIndex === idx && (
                  <motion.div
                    className="view-profile-btn"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      top: btnPos.y,
                      left: btnPos.x,
                      pointerEvents: 'none',
                      transform: 'translate(-50%, -100%)',
                      backgroundColor: '#FF520E',
                      color: 'white',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      boxShadow: '0 3px 6px rgba(255, 82, 14, 0.5)',
                      whiteSpace: 'nowrap',
                      userSelect: 'none',
                      zIndex: 10,
                    }}
                  >
                    View Profile
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
