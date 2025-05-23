import React, { useRef } from 'react';
import './Section6.css';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Section6 = () => {
  const headRef = useRef(null);
  const cardsRef = useRef(null);
  const isHeadInView = useInView(headRef, { amount: 0.4, once: true });
  const areCardsInView = useInView(cardsRef, { amount: 0.4, once: true });

  const cards = [
    {
      title: 'Lite',
      price: '$1,495',
      desc: 'Quickly receive a high-quality brand logo, representing your business vision.',
      bullets: ['Primary logo', 'Brand colours', '72hr delivery', 'Max 1 revision', 'Figma files'],
      glow: false,
    },
    {
      title: 'Standard',
      price: '$2,225',
      desc: 'Full scale brand identity promoting and connecting with your target audience.',
      bullets: ['Primary and secondary logos', 'Full brand guidebook', '2 weeks delivery', 'Max 3 revisions', 'Figma files'],
      glow: true,
    },
    {
      title: 'Monthly',
      price: '$2,495/m',
      desc: 'Monthly design support, perfect for companies who require ongoing design work.',
      bullets: ['Unlimited banners', 'Brand colours', 'Updates every 24 hours', 'Max 1 revision', 'Figma files'],
      glow: false,
    },
  ];

  return (
    <div className="section6" id='section6'>
      <div className="section6-head" ref={headRef}>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={isHeadInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Our services.
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={isHeadInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          Fixed-cost plans to avoid negotiations and start creating.
        </motion.p>
      </div>

      <div className="section6-data">
        <motion.div
          className="section6-cards"
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          animate={areCardsInView ? 'visible' : 'hidden'}
        >
          {cards.map((card, i) => {
            const CardContent = (
              <motion.div key={i} className="section6-card1" variants={cardVariants}>
                <p>{card.title}</p>
                <h1>{card.price}</h1>
                <h3>{card.desc}</h3>
                <ul className="custom-bullets">
                  {card.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
                <div className={`section6-button${i === 1 ? '1' : ''}`}>
                  <p>
                    <span>Get Started</span>
                    <span>Get Started</span>
                  </p>
                </div>
              </motion.div>
            );

            return card.glow ? (
              <div key={i} className="section6-glow-wrapper">{CardContent}</div>
            ) : (
              CardContent
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Section6;
