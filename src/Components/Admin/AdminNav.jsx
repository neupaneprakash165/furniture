import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Admin Dashboard</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Products List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Add products</a>
        </li>   
      </ul>
    </div>
  </nav>
  );
};

export default AdminNav;
