import React, { useEffect } from 'react';
import Navbar from './Navebar'; // Ensure the correct path
import Header from './Headers'; // Ensure the correct path
import Services from './Services'; // Ensure the correct path
import About from './About'; // Ensure the correct path
import Contact from './Contact'; // Ensure the correct path
import Footer from './Footer'; // Ensure the correct path

const Home = () => {
  useEffect(() => {
    // Smooth scrolling
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

    // Scrollspy (optional)
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      // Add logic to highlight the active section in the navbar
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