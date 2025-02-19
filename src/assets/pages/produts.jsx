import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProNavbar from './productnav';
import CategorySlider from './CategorySlider';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import app from './firebase';
import './product.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const database = getDatabase(app);
  const auth = getAuth(app);
  const navigate = useNavigate();

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/signup'); 
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.in/api/products');
        if (response.data.status === 'SUCCESS') {
          setProducts(response.data.products);
        } else {
          setError('Failed to fetch products');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Fetch user's cart from Firebase
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const uid = user.uid;
      const cartRef = ref(database, `carts/${uid}/items`);
      onValue(cartRef, (snapshot) => {
        const cartData = snapshot.val();
        if (cartData) {
          const cartItems = Object.values(cartData);
          setCart(cartItems);
        } else {
          setCart([]);
        }
      });
    }
  }, [auth, database]);


  const addToCart = (product) => {
    const user = auth.currentUser;
    if (user) {
      const uid = user.uid;
      const cartRef = ref(database, `carts/${uid}/items`);
      push(cartRef, product)
        .then(() => {
          alert(`${product.title} added to cart!`);
        })
        .catch((error) => {
          console.error('Error adding to cart:', error);
        });
    } else {
      alert('You need to be logged in to add items to the cart.');
    }
  };

 
  const showProductDetails = (product) => {
    setSelectedProduct(product);
  };

 
  const closePopup = () => {
    setSelectedProduct(null);
  };

  if (loading) {
    return <div id="loading">Loading...</div>;
  }

  if (error) {
    return <div id="error">Error: {error}</div>;
  }

  return (
    <div id="product-page">
     
      <ProNavbar />

      
      <CategorySlider />

     
      <div id="products-section">
        <h2 id="products-heading">All Products</h2>
        <div id="products-grid">
          {products.map((product) => (
            <div
              key={product.id}
              id="product-card"
              onClick={() => showProductDetails(product)}
            >
              <div id="product-image-container">
                <img
                  id="product-image"
                  src={product.image}
                  alt={product.title}
                />
                {product.discount && (
                  <div id="discount-badge">{product.discount}% off</div>
                )}
              </div>
              <h3 id="product-title">{product.title}</h3>
              <p id="product-price">${product.price}</p>
              <div id="product-buttons">
                <button
                  id="buy-now-button"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    alert(`Buy Now: ${product.title}`);
                  }}
                >
                  Buy Now
                </button>
                <button
                  id="add-to-cart-button"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    addToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {selectedProduct && (
        <div id="product-popup">
          <div id="popup-content">
            <button id="close-popup" onClick={closePopup}>
              &times;
            </button>
            <img
              id="popup-image"
              src={selectedProduct.image}
              alt={selectedProduct.title}
            />
            <h2 id="popup-title">{selectedProduct.title}</h2>
            <p id="popup-price">${selectedProduct.price}</p>
            <p id="popup-description">{selectedProduct.description}</p>
            <p id="popup-brand">Brand: {selectedProduct.brand}</p>
            <p id="popup-model">Model: {selectedProduct.model}</p>
            <p id="popup-color">Color: {selectedProduct.color}</p>
            <p id="popup-category">Category: {selectedProduct.category}</p>
            {selectedProduct.discount && (
              <p id="popup-discount">Discount: {selectedProduct.discount}% off</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;