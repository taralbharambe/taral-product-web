import React from 'react';
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top navbar-shrink">
      <div className="container">
        <div className="navbar-header page-scroll">

          <a className="navbar-brand page-scroll" href="#page-top">
          Shopaholic
          </a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li className="hidden active">
              <a href="#page-top"></a>
            </li>
            <li>
              <a className="page-scroll" href="#services">Services</a>
            </li>
            <li>
              <a className="page-scroll" href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a className="page-scroll" href="#about">About</a>
            </li>
            <li>
              <a className="page-scroll" href="#team">Team</a>
            </li>
            <li>
              <a className="page-scroll" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;