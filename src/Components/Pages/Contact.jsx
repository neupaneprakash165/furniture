import React, { useState } from 'react';
import Navbar from '../Homepage/Navbar';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Footer from '../Homepage/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setMessage('Please fill out all fields.');
      return;
    }
  
    try {
      // Make POST request to the backend API
      const response = await fetch('http://127.0.0.1:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Failed to submit the form.');
      }
  
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setMessage('Thank you for your submission!');
    } catch (error) {
      setMessage('An error occurred while submitting the form.');
      console.error(error);
    }
  }

  return (
    <>
      <Navbar />
      <section className="mb-4">
        <div className="container">
          <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us directly.
            Our team will come back to you within a matter of hours to help you.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form id="contact-form" name="contact-form" onSubmit={handleSubmit} className="shadow p-4 rounded">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Send</button>
                </div>
                <div className="status mt-3">{message}</div>
              </form>
            </div>
            <div className="col-md-3">
              <div className="d-flex flex-column justify-content-center h-100">
                <div className="text-center mb-4"><FaMapMarkerAlt size="2em" />
                  <p>Makwanpur, Hetauda, Nepal</p>
                </div>
                <div className="text-center mb-4"><FaPhone size="2em" />
                  <p>+9779855069837</p>
                </div>
                <div className="text-center"><FaEnvelope size="2em" />
                  <p>Trivenifurniture@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
