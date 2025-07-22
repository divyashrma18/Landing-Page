import React, { useRef } from 'react'
import './Section3.css'
import { motion, useInView } from 'framer-motion';

const Section3 = () => {
  const section3Ref = useRef(null);
  const isHeadInView = useInView(section3Ref, { amount: 0.2, once: true });

  const top1Ref = useRef(null);
  const top2Ref = useRef(null);
  const top3Ref = useRef(null);
  const top4Ref = useRef(null);

  const isTop1InView = useInView(top1Ref, { amount: 0.5 });
  const isTop2InView = useInView(top2Ref, { amount: 0.5 });
  const isTop3InView = useInView(top3Ref, { amount: 0.5 });
  const isTop4InView = useInView(top4Ref, { amount: 0.5 });

  return (
    <div className="section3" ref={section3Ref} id='section3'>
      <div className="section3-head">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={isHeadInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Our Process.
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={isHeadInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          Reliable process for achieving distinctiveness.
        </motion.p>
      </div>

      <div className="section3-data">
        <div className="row">
          <motion.div
            className="top"
            ref={top1Ref}
            initial={{ x: -100, opacity: 0 }}
            animate={isTop1InView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="num">01</p>
            <h1>Discovery and Research.</h1>
            <div className="section3-list">
              <ul className="custom-bullets">
                <li>Understand the client's values and audience.</li>
                <li>Conduct market research.</li>
                <li>Identify key design elements.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="top"
            ref={top2Ref}
            initial={{ x: 100, opacity: 0 }}
            animate={isTop2InView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="num">02</p>
            <h1>Concept Development.</h1>
            <div className="section3-list">
              <ul className="custom-bullets">
                <li>Brainstorm and sketch initial logo concepts.</li>
                <li>Focus on simplicity.</li>
                <li>Prioritise ideas for further development.</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="row">
          <motion.div
            className="top"
            ref={top3Ref}
            initial={{ x: -100, opacity: 0 }}
            animate={isTop3InView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="num">03</p>
            <h1>Design and Refinement.</h1>
            <div className="section3-list">
              <ul className="custom-bullets">
                <li>Create digital versions of prioritised concepts.</li>
                <li>Refine the designs, ensuring clarity.</li>
                <li>Incorporate client feedback to fine-tuning.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="top"
            ref={top4Ref}
            initial={{ x: 100, opacity: 0 }}
            animate={isTop4InView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="num">04</p>
            <h1>Finalisation and Delivery.</h1>
            <div className="section3-list">
              <ul className="custom-bullets">
                <li>Prepare the final logo in various formats.</li>
                <li>Provide a comprehensive brand guide.</li>
                <li>Deliver the final assets and support.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Section3
