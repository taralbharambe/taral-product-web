import React from 'react';
import { useNavigate } from 'react-router-dom';
import './productnav.css';

const ProNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav id="navbar">
      <div id="navbar-left">
        <h1 id="website-name">Shopaholic</h1>
      </div>
      <div id="navbar-right">
        <button id="cart-button" onClick={() => navigate('/cart')}>Cart</button>
      </div>
    </nav>
  );
};

export default ProNavbar;