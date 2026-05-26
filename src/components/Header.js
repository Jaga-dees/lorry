import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>🚚 New Indian Cargo Carriers</h1>
            <p className="tagline">Transport Contractors for All Over India</p>
          </div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#fleet">Fleet</a>
            <a href="#why-us">Why Us</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
