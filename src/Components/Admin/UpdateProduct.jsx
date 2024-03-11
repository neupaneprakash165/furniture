import React, { useState, useEffect } from 'react';
import AdminNav from './AdminNav';
import { useParams } from 'react-router-dom';

function UpdateProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        file_path: null  // Use null for file input
    });

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/product/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product');
            }
            const data = await response.json();
            setProduct(data);
            // Set form data to current product values
            setFormData({
                name: data.name,
                price: data.price,
                description: data.description,
                file_path: null  // Initialize file path to null
            });
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file_path') {
            // Handle file input separately
            setFormData({
                ...formData,
                [name]: files[0]  // Only store the first file, you might want to handle multiple files differently
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <AdminNav />
            <h1>Update Product</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input type='text' name="name" value={formData.name} onChange={handleInputChange} /> <br/><br/>
                </div>
                <div>
                    <label>Price:</label>
                    <input type='text' name="price" value={formData.price} onChange={handleInputChange} /> <br/><br/>
                </div>
                <div>
                    <label>Description:</label>
                    <input type='text' name="description" value={formData.description} onChange={handleInputChange} /> <br/><br/>
                </div>
                <div>
                    <label>File Path:</label>
                    <input type='file' name="file_path" onChange={handleInputChange} /> <br/><br/>
                </div>
                <button>Update Product</button>
            </form>
        </div>
    );
}

export default UpdateProduct;
