import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { FaHome, FaShoppingCart, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/triveni.png';

const Navbar = ({ user, logout }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-transparent py-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Triveni Logo" className="navbar-logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/"><FaHome/> HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop"><FaShoppingCart/> SHOP</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact"><FaPhoneAlt/> CONTACT US</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart"><IoCartOutline /> CART</Link>
            </li>
            <li className="nav-item">
              {user ? (
                <>
                  <span className="nav-link">Welcome, {user.Name}</span>
                  <button className="btn btn-link text-white" onClick={logout}>Logout</button>
                </>
              ) : (
                <Link className="nav-link" to="/login"><FaUser /> LOGIN</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
