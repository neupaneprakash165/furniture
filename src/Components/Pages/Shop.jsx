import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const Shop = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [notification, setNotification] = useState('');

  const [products, setProducts] = useState([
    { id: 1, name: 'Table', category: 'Table', price: 100, image: '/Products/7.jpg', isFavorite: false },
    { id: 2, name: 'Chair', category: 'Chair', price: 50, image: '/products/31.jpg', isFavorite: false },
    { id: 3, name: 'Sofa', category: 'Sofa', price: 300, image: '/Products/4.jpg', isFavorite: false },
    { id: 4, name: 'Bed', category: 'Bed', price: 400, image: '/Products/25.jpg', isFavorite: false },
    { id: 5, name: 'Dining Table', category: 'Dining Table', price: 200, image: '/images/5.jpg', isFavorite: false },
  ]);

  const toggleFavorite = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, isFavorite: !product.isFavorite } : product
    );
    setProducts(updatedProducts);
  };

  const addToCartWithNotification = (product) => {
    addToCart(product);
    setNotification(`${product.name} added to cart`);
    setTimeout(() => {
      setNotification('');
    }, 2000); // Hide notification after 2 seconds
  };

  const filteredProducts = products.filter((product) =>
    (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === 'All' || product.category === selectedCategory)
  );

  return (
    <div className="container">
      <h2>Shop</h2>
      {notification && <div className="alert alert-success" role="alert">{notification}</div>}
      {/* Search and filter section */}
      {/* Product list */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <button className="btn btn-primary" onClick={() => addToCartWithNotification(product)}>Add to Cart</button>
                <button className="btn btn-outline-danger" onClick={() => toggleFavorite(product.id)}>
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
