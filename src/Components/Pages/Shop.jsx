import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/list');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addToCartWithNotification = (product) => {
    addToCart(product);
    setNotification(`${product.name} added to cart`);
    setTimeout(() => {
      setNotification('');
    }, 2000); // Hide notification after 2 seconds
  };

  const toggleFavorite = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, isFavorite: !product.isFavorite } : product
    );
    setProducts(updatedProducts);
  };

  const filteredProducts = products.filter((product) =>
    (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === 'All' || product.category === selectedCategory)
  );

  const categories = Array.from(new Set(products.map((product) => product.category)));

  return (
    <div className="container">
      <h2 className="text-center mb-4">Shop</h2>
      {notification && <div className="alert alert-success" role="alert">{notification}</div>}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <button
              className="btn btn-primary"
              onClick={() => console.log('Search button clicked')} // Replace with your search logic
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100">
              <img
                src={`http://127.0.0.1:8000/${product.file_path}`}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCartWithNotification(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="btn btn-outline-danger ms-2"
                  onClick={() => toggleFavorite(product.id)}
                >
                  <FaHeart color={product.isFavorite ? 'red' : 'gray'} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
