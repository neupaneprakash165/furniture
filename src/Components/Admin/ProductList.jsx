import React, { useState, useEffect } from 'react';
import AdminNav from './AdminNav';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

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

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/delete/${productId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      // Refetch data after deletion
      fetchData();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <>
      <AdminNav />
      <div>
        <h2 className="text-center">Product List</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <div key={product.ID} className="col">
              <div className="card h-100">
                <img src={`http://127.0.0.1:8000/${product.file_path}`} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-danger mr-2" onClick={() => handleDelete(product.ID)}>Delete</button>
                  <Link to={`/Updateproducts/${product.ID}`} className="btn btn-primary">Update</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
