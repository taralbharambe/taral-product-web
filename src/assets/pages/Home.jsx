import React, { useEffect } from 'react';
import Navbar from './Navebar'
import Header from './Headers'
import Services from './Services'
import Portfolio from './Portfolio'
import About from './About'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'
import Card from './Cardslider';


const Home = () => {
  useEffect(() => {
    // Smooth scrolling
    document.querySelectorAll('a.page-scroll').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Scrollspy
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      // Add logic to highlight the active section in the navbar
    });
  }, []);
  return (
    <div>
      <Navbar/>
      <Header/>
      <Services/>
      <Portfolio/>
      <About/>
      <Team/>
      <Contact/>
      <Footer/>
      

    </div>
  )
}

export default Home