

    import React from "react";
    import { IoCartOutline } from "react-icons/io5";
    import { FaHome, FaShoppingCart, FaPhoneAlt, FaUser } from "react-icons/fa";
    import { Link } from 'react-router-dom';
    import logo from '../../assets/triveni.png';
    
    export const Navbar = () => {
      return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark"style={{ height: '70px' }}>
        <div className="container-fluid">
          <Link className="navbar-brand me-auto" to="/">
            <img src={logo} alt="Triveni Logo" className="rounded-pill" width={150} height={100} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link" to="/"><FaHome/>HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop"><FaShoppingCart/>SHOP</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact"><FaPhoneAlt/>CONTACT US</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/login"><FaUser /> LOGIN</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart"><IoCartOutline /> CART</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      );
    };
export default Navbar;
    

    