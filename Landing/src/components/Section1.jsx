import React from 'react';
import './Section1.css';

const Section1 = () => {
  const images = [
    './images/section1-1.svg',
'./images/section1-1.svg',
'./images/section1-1.svg',
'./images/section1-1.svg', 
'./images/section1-1.svg',
'./images/section1-1.svg',  ];

  // Duplicate the array 4 times for a smoother loop
  const allImages = [...images, ...images, ...images, ...images];

  return (
    <div className="section1">
      <div className="section1-images">
        {allImages.map((src, index) => (
          <img key={index} src={src} alt={`section1-${index + 1}`} className="section1-img" />
        ))}
      </div>
    </div>
  );
};

export default Section1;