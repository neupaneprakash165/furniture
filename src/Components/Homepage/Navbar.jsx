import React from "react";
// import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

export const Navbar = () => {
return(
  <nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
     
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
    <img src="/images/triveni.png" alt="Logo" class="logo-img"> 
      </img>
      <ul class="nav navbar-nav navbar-right">
      <li><Link to="/">HOME</Link></li>
        <li><Link to="/shop">SHOP</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
        {/* <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> LOGIN</a></li> */}
        {/* <li><a href="#"><span class="glyphicon glyphicon-cart"></span> <IoCartOutline />CART</a></li> */}
      </ul>
    </div>
  </div>
</nav>

)
};
    export default Navbar;