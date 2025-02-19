import React, { useState, useEffect } from 'react';
import './CategorySlider.css'; 

const categories = [
  { id: 1, name: 'tv', image: './images/modern-monitor-elegant-table.jpg' },
  { id: 2, name: 'audio', image: './images/still-life-tech-device.jpg' },
  { id: 3, name: 'laptop', image: './images/workplace-business-modern-male-accessories-laptop-white.jpg' },
  { id: 4, name: 'mobile', image: './images/modern-desktop-with-phone-tablet-glasses-blue-light-pink-background.jpg' },
  { id: 5, name: 'gaming', image: './images/high-angle-controllers-headphones.jpg' },
  { id: 6, name: 'appliances', image: './images/view-hands-packing-small-products.jpg' },
];

const CategorySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  return (
    <div className="unique-category-slider">
    
      <button className="unique-slide-button unique-slide-button-prev" onClick={goToPrevious}>
        &lt;
      </button>
      <button className="unique-slide-button unique-slide-button-next" onClick={goToNext}>
        &gt;
      </button>

      
      <div className="unique-slider-container">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`unique-slide ${index === currentIndex ? 'unique-slide-active' : ''}`}
            style={{ backgroundImage: `url(${category.image})` }}
          >
            <div className="unique-slide-content">
              <h2>{category.name.toUpperCase()}</h2>
              <button className="unique-shop-now-button">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;