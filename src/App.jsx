import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from '../src/Components/Homepage/Navbar';
import Shop from './Components/Pages/Shop';
import Home from './Components/Homepage/Home';
import Contact from './Components/Pages/Contact';
import Cart from './Components/Pages/Cart';
import LOGIN from './Components/Pages/Login';
import AddToCart from './Components/Pages/AddToCart'; // Import the AddToCart component directly

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Define your cart functions here
  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item);
    setCartItems(updatedCartItems);
  };

  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/shop' element={<Shop addToCart={addToCart} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Login' element={<LOGIN />} />
          {/* Pass the cart functions and state to the Cart component */}
          <Route path='/Cart' element={<Cart cartItems={cartItems} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem} />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
