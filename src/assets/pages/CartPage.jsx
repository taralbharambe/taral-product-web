import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import app from './firebase';
import './cart.css'; 

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const database = getDatabase(app);
  const auth = getAuth(app);
  const navigate = useNavigate();

 
  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      navigate('/signup'); 
    }
  }, [auth, navigate]);


  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const uid = user.uid;
      const cartRef = ref(database, `carts/${uid}/items`);
      onValue(cartRef, (snapshot) => {
        const cartData = snapshot.val();
        if (cartData) {
          const cartItems = Object.entries(cartData).map(([key, value]) => ({
            id: key, 
            ...value,
          }));
          setCart(cartItems);
        } else {
          setCart([]);
        }
      });
    }
  }, [auth, database]);

  
  const removeFromCart = (itemId) => {
    const user = auth.currentUser;
    if (!user) {
      console.error('User is not authenticated.');
      return;
    }

    const uid = user.uid;
    const cartRef = ref(database, `carts/${uid}/items/${itemId}`);

    console.log(`Removing item with ID: ${itemId}`);
    console.log(`Firebase path: carts/${uid}/items/${itemId}`); 

    remove(cartRef)
      .then(() => {
        alert('Item removed from cart!');
        
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
      })
      .catch((error) => {
        console.error('Error removing item from cart:', error);
        alert(`Failed to remove item. Error: ${error.message}`);
      });
  };

  
  const totalValue = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page">
      <h2 className="cart-heading">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img className="cart-item-image" src={item.image} alt={item.title} />
              <h3 className="cart-item-title">{item.title}</h3>
              <p className="cart-item-price">${item.price}</p>
              <button className="remove-item-button" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="cart-total">
        <h3>Total: ${totalValue.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CartPage;