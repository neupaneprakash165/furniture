
import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaPhoneAlt className="me-2" />
                9855069837
              </li>
              <li>
                <FaPhoneAlt className="me-2" />
                9845459180
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Email</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaEnvelope className="me-2" />
                trivenifurniture@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
