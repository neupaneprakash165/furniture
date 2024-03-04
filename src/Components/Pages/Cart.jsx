import React, { useState } from 'react';

const Cart = ({ cartItems, increaseQuantity, decreaseQuantity, removeItem }) => {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      address: '',
      city: '',
      zip: '',
      phone: '',
      cardNumber: '',
      expiry: '',
      cvv: ''
    });
    // Close the checkout form
    setShowCheckoutForm(false);
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-3">
                 
                  <img src={`http://127.0.0.1:8000/${item.file_path}`} className="img-fluid rounded-start" alt={item.name} style={{ maxHeight: '100px' }} />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Price: ${item.price}</p>
                    <div className="input-group">
                      <button className="btn btn-outline-secondary" type="button" onClick={() => decreaseQuantity(item.id)}>-</button>
                      <input type="text" className="form-control" value={item.quantity} readOnly />
                      <button className="btn btn-outline-secondary" type="button" onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                    <p className="mt-2">Subtotal: ${item.price * item.quantity}</p>
                    <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-end">
            <h5>Total: ${getTotalPrice().toFixed(2)}</h5>
            <button className="btn btn-primary" onClick={() => setShowCheckoutForm(true)}>Checkout</button>
          </div>
          {showCheckoutForm && (
            <form onSubmit={handleSubmit} className="mt-4 p-3 border rounded" style={{ maxWidth: '500px' }}>
              <h2>Checkout Form</h2>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone:</label>
                <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address:</label>
                <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />
              </div>
              <div className="row g-3">
                <div className="col">
                  <label htmlFor="city" className="form-label">City:</label>
                  <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div className="col">
                  <label htmlFor="zip" className="form-label">ZIP Code:</label>
                  <input type="text" className="form-control" id="zip" name="zip" value={formData.zip} onChange={handleChange} required />
                </div>
              </div>
              <hr />
              <h2>Card Details</h2>
              <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label">Card Number:</label>
                <input type="text" className="form-control" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
              </div>
              <div className="row g-3">
                <div className="col">
                  <label htmlFor="expiry" className="form-label">Expiry:</label>
                  <input type="text" className="form-control" id="expiry" name="expiry" value={formData.expiry} onChange={handleChange} required />
                </div>
                <div className="col">
                  <label htmlFor="cvv" className="form-label">CVV:</label>
                  <input type="text" className="form-control" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} required />
                </div>
              </div>
              <button type="submit" className="btn btn-success mt-3">Submit</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
