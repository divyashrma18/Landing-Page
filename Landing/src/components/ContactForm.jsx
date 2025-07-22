import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [buttonText, setButtonText] = useState('Send');
  const [isSending, setIsSending] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true }); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setButtonText('Sending...');

    emailjs
      .send('service_g2o690g', 'template_8lcnf4h', formData, 'eXbDcwPI9uzegMXFY')
      .then(() => {
        setButtonText('Sent!');
        setIsSending(false);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setButtonText('Send'), 3000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setButtonText('Send');
        setIsSending(false);
      });
  };

  return (
    <div className="contactform-container" ref={ref}>
      <div className="orange-glow1"></div>

      <motion.div
        className="map-section"
        initial={{ x: '-100vw', opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.039693357321!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMTLCsDU4JzE3LjYiTiA3N8KwMzUnNDYuNiJF!5e0!3m2!1sen!2sin!4v0000000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>

      <motion.form
        className="form-section"
        onSubmit={handleSubmit}
        initial={{ x: '100vw', opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <h2>Contact Us</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" disabled={isSending} className="send-button">
          <span>{buttonText}</span>
          <span>{buttonText}</span>
        </button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
