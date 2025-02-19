import React from 'react';
import { Link, Navigate, useLocation , useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'; 
import './Navbar.css';


const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate()

  
  const handleLinkClick = (e, target) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const targetElement = document.querySelector(target);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className="navbar navbar-default navbar-fixed-top navbar-shrink">
      <div className="container">
        <div className="navbar-header page-scroll">
          <Link className="navbar-brand page-scroll" to="/">
            Shopaholic
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link className="page-scroll" to="/services" onClick={(e) => handleLinkClick(e, '#services')}>Services</Link>
            </li>
            <li>
              <Link className="page-scroll" to="/about" onClick={(e) => handleLinkClick(e, '#about')}>About</Link>
            </li>
            <li>
              <Link className="page-scroll" to="/contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</Link>
            </li>
            <li onClick={()=> navigate("/signup")}>
              <Link className="page-scroll login-button" to="/signup">
                <FaUser className="login-icon" /> Login
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;