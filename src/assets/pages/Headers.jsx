import React from 'react';
import "./Header.css"

const Header = () => {
  return (
    <header className='header'>
      <div className="container"  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px"
  }}>
        <div className="intro-text">
          <div className="intro-lead-in">Hello Errbody</div>
          <div className="intro-heading">When in doubt,
            <br />
             shop it out</div>
          <a href="#services" className="page-scroll btn btn-xl">
            Get started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;