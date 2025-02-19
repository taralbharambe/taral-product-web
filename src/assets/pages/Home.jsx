import React, { useEffect } from 'react';
import Navbar from './Navebar'; 
import Header from './Headers'; 
import Services from './Services'; 
import About from './About';
import Contact from './Contact';
import Footer from './Footer'; 

const Home = () => {
  useEffect(() => {
    
    document.querySelectorAll('a.page-scroll').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Home;