import React, { useState } from 'react';
import Shop from './Shop';
import Cart from './Cart';

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item);
    setCartItems(updatedCartItems);
  };

  const checkout = () => {
    // Implement your checkout logic here
    console.log("Checkout clicked");
  };

  return (
    <div>
      <Shop addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} checkout={checkout} />
    </div>
  );
};

export default AddToCart;
