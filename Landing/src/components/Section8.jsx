import React, { useRef, useState, useEffect } from 'react';
import './Section8.css';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  "What is the logo design process?",
  "How much does a logo design cost?",
  "How long does it take to design a logo?",
  "Do you offer custom logo designs or use templates?",
  "Can you redesign my existing logo?",
  "What if I don’t like the initial concepts?",
  "How do I get started?",
  "What payment methods do you accept?"
];

const Section8 = () => {
  const ref = useRef(null);
  const faqRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [activeIndex, setActiveIndex] = useState(null);
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const [isCursorInside, setIsCursorInside] = useState(false);

  // Lerp animation for smooth cursor follow
  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setSmoothPos((prev) => {
        const dx = targetPos.x - prev.x;
        const dy = targetPos.y - prev.y;
        const speed = 0.1; // adjust for smoothness (lower = slower)
        return {
          x: prev.x + dx * speed,
          y: prev.y + dy * speed
        };
      });
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [targetPos]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleMouseMove = (e) => {
    const bounds = faqRef.current.getBoundingClientRect();
    setTargetPos({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top
    });
  };

  return (
    <div className="section8" ref={ref}>
      <div className="section8-head">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Our faqs.
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          The most common questions we get asked.
        </motion.p>
      </div>

      <div
        className="faq"
        ref={faqRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsCursorInside(true)}
        onMouseLeave={() => setIsCursorInside(false)}
      >
        {isCursorInside && (
          <div
            className="faq-cursor-button"
            style={{
              left: `${smoothPos.x}px`,
              top: `${smoothPos.y}px`
            }}
          >
            Open
          </div>
        )}

        {faqs.map((question, index) => (
          <motion.div
            key={index}
            className="faq-item"
            onClick={() => toggleFAQ(index)}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 * index }}
          >
            <div className="faq-question">
              <span>{question}</span>
              <span className="faq-icon">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  exit={{ scaleY: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ transformOrigin: 'top' }}
                >
                  <p>This is a sample answer for: {question}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Section8;
