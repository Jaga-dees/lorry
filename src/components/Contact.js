import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="label">📞 Phone:</span>
              <p>Not publicly displayed - Available on request</p>
            </div>
            <div className="info-item">
              <span className="label">📧 Email:</span>
              <p><a href="mailto:indiancargoltd@gmail.com">indiancargoltd@gmail.com</a></p>
            </div>
            <div className="info-item">
              <span className="label">📍 Address:</span>
              <p>100/4, 1st Floor, CN Building<br />Banglore Main Road<br />Narasothipatty<br />Salem 636004<br />Tamil Nadu, India</p>
            </div>
            <div className="info-item">
              <span className="label">🕐 Business Hours:</span>
              <p>Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
            </div>
          </div>
          <div className="contact-message">
            <h3>Ready to Transport?</h3>
            <p>
              Contact us today to discuss your transport needs. Our team is ready to provide you with a customized 
              solution that fits your requirements and budget.
            </p>
            <p>
              With 30 years of experience and a proven track record, New Indian Cargo Carriers is your reliable 
              partner for all cargo transport needs across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;