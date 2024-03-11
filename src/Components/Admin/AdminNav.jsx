import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <a class="navbar-brand" href="#">Admin Dashboard</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      <li className="nav-item">
              <Link className="nav-link" to="/productlist">Product List</Link>
            </li>
        <li class="nav-item">
          <Link class="nav-link" to="/addproduct">Add products</Link>
        </li>   
        <li class="nav-item">
          <Link class="nav-link" to="/Updateproducts">Update Products</Link>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default AdminNav;
