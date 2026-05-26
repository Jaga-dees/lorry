import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>New Indian Cargo Carriers</h4>
            <p>Your trusted partner for logistics and cargo transport across India since 1996.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#fleet">Fleet</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">General Cargo</a></li>
              <li><a href="#services">Heavy Machinery</a></li>
              <li><a href="#services">Express Delivery</a></li>
              <li><a href="#services">Refrigerated Transport</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: <a href="mailto:indiancargoltd@gmail.com">indiancargoltd@gmail.com</a></p>
            <p>Address: Salem, Tamil Nadu, India</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 New Indian Cargo Carriers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;