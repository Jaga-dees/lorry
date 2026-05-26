import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Manufacturing Co.',
      text: 'New Indian Cargo Carriers has been our trusted partner for 5 years. Reliable, professional, and always on time!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'E-commerce Business',
      text: 'Excellent service! They handle our daily shipments with utmost care and professionalism. Highly recommended!',
      rating: 5
    },
    {
      name: 'Amit Patel',
      company: 'Trading Company',
      text: 'Working with them for 3 years now. Their fleet is modern, drivers are courteous, and delivery is always punctual.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="text">"{testimonial.text}"</p>
              <div className="author">
                <p className="name">{testimonial.name}</p>
                <p className="company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;