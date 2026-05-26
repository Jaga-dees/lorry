import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      icon: '📦',
      title: 'General Cargo Transport',
      description: 'Reliable transport for all types of general cargo across India with full insurance coverage.'
    },
    {
      icon: '🏭',
      title: 'Heavy Machinery Logistics',
      description: 'Expert handling and transportation of heavy industrial equipment and machinery.'
    },
    {
      icon: '❄️',
      title: 'Refrigerated Transport',
      description: 'Temperature-controlled transport for perishable goods and sensitive cargo.'
    },
    {
      icon: '🔒',
      title: 'Fragile Goods',
      description: 'Safe and secure transport of delicate items with special packaging and handling.'
    },
    {
      icon: '🛣️',
      title: 'Long-Haul Interstate',
      description: 'Pan-India coverage with experienced drivers for long-distance transport.'
    },
    {
      icon: '⚡',
      title: 'Express Delivery',
      description: 'Fast and efficient delivery services for time-sensitive shipments.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;