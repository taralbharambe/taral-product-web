import React from "react";
import "./Services.css"; 

const Services = () => {
  
  const services = [
    {
      title: "Product Listings",
      description: "Explore a wide range of products from top brands.",
      icon: "📦",
    },
    {
      title: "Fast Delivery",
      description: "Get your products delivered to your doorstep in no time.",
      icon: "🚚",
    },
    {
      title: "Secure Payments",
      description: "Enjoy safe and secure payment options.",
      icon: "💳",
    },
    {
      title: "24/7 Support",
      description: "Our support team is always here to help you.",
      icon: "📞",
    },
    {
      title: "Easy Returns",
      description: "Hassle-free returns and refunds.",
      icon: "🔄",
    },
    {
      title: "Exclusive Deals",
      description: "Get access to exclusive deals and discounts.",
      icon: "🎉",
    },
  ];

  
  const brands = [
    "png-clipart-adidas-logo-brand-clothing-we-are-social-adidas-logo-angle-text-thumbnail-Photoroom.png",
    "png-clipart-brand-kenzo-fashion-clothing-logo-design-text-perfume-thumbnail-Photoroom.png",
    "png-clipart-brand-logo-levi-strauss-co-clothing-fashion-jeans-text-trademark-thumbnail-Photoroom.png",
    "png-clipart-calvin-klein-logo-ck-be-brand-clothing-ck-angle-text-thumbnail-Photoroom.png",
    "png-clipart-hollister-co-logo-brand-clothing-brand-emblem-text-thumbnail-Photoroom.png",
    "png-clipart-lacoste-logo-clothing-company-brand-others-company-text-thumbnail-Photoroom.png",
    "png-clipart-logo-h-m-brand-clothing-logo-hm-thumbnail-Photoroom.png",
    "png-clipart-puma-logo-puma-logo-sneakers-clothing-brand-adidas-cat-like-mammal-carnivoran-thumbnail-Photoroom.png",
    "pngegg (1)-Photoroom.png",
  ];

  return (
    <div className="services-page">
      {}
      <section className="video-header-section">
        {}
        <div className="video-container">
          <video autoPlay loop muted playsInline>
            <source
              src="/images/6913564_Motion Graphics_Motion Graphic_3840x2160.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {}
        <div className="header-text-container">
          <h1>Our Services</h1>
          <p>Everything you need to shop smarter and faster.</p>
        </div>
      </section>

      {}
      <section className="services-section">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      {}
      <section className="brands-section">
        <div className="brands-container">
          {brands.map((brand, index) => (
            <div key={index} className="brand-logo">
              <img src={`/images/${brand}`} alt={`Brand ${index + 1}`} />
            </div>
          ))}
          {}
          {brands.map((brand, index) => (
            <div key={`dup-${index}`} className="brand-logo">
              <img src={`/images/${brand}`} alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;