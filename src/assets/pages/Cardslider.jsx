import React, { useState, useEffect, useRef } from "react";
import "./card.css";

const Card = () => {
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);

  // Fetch data from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Automatic slider functionality
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      if (slider) {
        scrollAmount += 220; // Adjust based on card width
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
          scrollAmount = 0; // Reset to the beginning
        }
        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 3000); // Adjust the interval time as needed

    return () => clearInterval(slideTimer); // Cleanup on unmount
  }, []);

  // Manual navigation functions
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -220, // Adjust based on card width
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 220, // Adjust based on card width
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="Card">
      <h1>Product Slider</h1>
      <div className="slider" ref={sliderRef}>
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      <button className="slider-nav prev" onClick={scrollLeft}>
        &#10094;
      </button>
      <button className="slider-nav next" onClick={scrollRight}>
        &#10095;
      </button>
    </div>
  );
};

export default Card;