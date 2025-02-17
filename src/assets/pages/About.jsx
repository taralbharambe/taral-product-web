import React, { useState } from "react";
import "./About.css"; 

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const years = [2021, 2022, 2023, 2024]; 
  const details = [
    {
      title: "Our Journey: Turning Lockdown into Opportunity",
      description: `In 2021, during the complete lockdown, the world stood still, but our vision came alive. With businesses shutting down and people struggling to access essentials, we saw an opportunity—not just to sell, but to solve a problem 
      What started as a small idea in isolation turned into Shopaholics—a platform built to make shopping seamless, reliable, and accessible from home. We faced challenges, uncertainty, and doubt, but our passion kept us going.`,
      image: "./images/covid-virus-3d-modeling.jpg"
    },
    {
      title: "Growing Stronger in 2022",
      description: `In 2022, we took Shopaholics to the next level by enhancing our services and focusing on customer experience. We streamlined our delivery process, expanded our product range, and introduced better deals and faster support.
      Through smart marketing and a customer-first approach, we built trust and loyalty, attracting a growing community of shoppers. From a startup born in lockdown to a thriving platform, our journey is proof that adaptation and innovation lead to success!🚀 `,
      image: "./images/dynamic-data-visualization-3d.jpg"
    },
    {
      title: "Overcoming Challenges in 2023",
      description: `In 2023, as Shopaholics grew, we faced new challenges—customers struggled with navigation, slow load times, and checkout issues. Recognizing this, we revamped our website with a faster interface, better UI/UX, and a seamless payment system.
      We also improved customer support and order tracking, making shopping effortless. Every challenge became an opportunity to refine, adapt, and grow, ensuring a smoother experience for our users. 🚀`,
      image: "./images/problem-solving-concept-with-graphic.jpg"
    },
    {
      title: "Achieving Success in 2024",
      description: `By 2024, Shopaholics had grown into a trusted e-commerce brand. Our commitment to innovation, customer satisfaction, and seamless shopping paid off. With a strong community of loyal customers, expanded product lines, and cutting-edge technology, we turned challenges into milestones.

What started as an idea in lockdown is now a thriving success story—proving that determination and vision create endless possibilities! 🚀`,
      image: "./images/businessman-drawing-keys-success.jpg"
    }
  ];

  const handleYearClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="history-area">
            <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0',textAlign:'center' }}>
  <div className="col-lg-12 text-center" style={{ width: '100%' }}>
    <p className="title-bg-small wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="300ms">
      About us
    </p>
    <h3 className="section-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms">
      Our <span className="highlight-text">History</span>
    </h3>
  </div>
</div>
      <div className="container">


        <div className="row">
          <div className="col-lg-12">
            <div id="history-slid" className="carousel slide">
              
              <div className="carousel-inner">
                
                {details.map((detail, index) => (
                  <div
                    key={index}
                    className={`carousel-item row ${index === activeIndex ? "active" : ""}`}
                  >
                    <div className="col-lg-6 col-md-12 pl-0">
                      <div className="history-img">
                        <img
                          className="img-fluid history-image"
                          src={detail.image}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 pr-0">
                      <div className="history-content">
                        <p className="title-bg-small primary-bg wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="500ms">
                          Year {years[index]}
                        </p>
                        <h2 className="column-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="700ms">
                          {detail.title}
                        </h2>
                        <p className="history-description">
                          {detail.description}
                        </p>
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              
              <ol className="carousel-indicators text-center">
                {years.map((year, index) => (
                  <li
                    key={index}
                    onClick={() => handleYearClick(index)}
                    className={`indicator-item ${index === activeIndex ? "active" : ""}`}
                  >
                    {year}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;