import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import './App.css';
// import Navbar from '../src/Components/Homepage/Navbar';
// import Footer from '../src/Components/Homepage/Footer';
import Shop from './Components/Pages/Shop';
import Home from './Components/Homepage/Home';
import Contact from './Components/Pages/Contact';
import Cart from './Components/Pages/Cart';
import LOGIN from './Components/Pages/Login';
import AddProduct from './Components/Admin/AddProduct';
import ProductList from './Components/Admin/ProductList';
// import UpdateProduct from './Components/Admin/UpdateProduct';
import EditProducts from './Components/Admin/EditProducts';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null); // State to manage user information
  
  const logout = () => {
    setUser(null);
  };
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
      

         {/* <Navbar user={user} logout={logout} />  */}
        <Routes>
          <Route path='/shop' element={<Shop addToCart={addToCart} />} />
          <Route path='/contact' element={<Contact />} />
          {/* Pass setUser function to the LOGIN component to update user state */}
          <Route path='/login' element={<LOGIN setUser={setUser} />} />
          {/* Pass the user state and cart functions to the Cart component */}
          <Route path='/cart' element={<Cart user={user} cartItems={cartItems} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem} />} />
          <Route path='/' element={<Home />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/Updateproducts/:id' element={<EditProducts/>} />
        </Routes>
      </Router>
    </div>
  );
};


export default App;
