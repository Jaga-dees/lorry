import React from 'react';
import './WhyChooseUs.css';

function WhyChooseUs() {
  const reasons = [
    {
      title: '30 Years Experience',
      description: 'Three decades of proven track record in logistics and transport industry.'
    },
    {
      title: 'Pan-India Network',
      description: 'Extensive network covering all major cities and regions across India.'
    },
    {
      title: 'Professional Team',
      description: 'Experienced and trained drivers with excellent safety records.'
    },
    {
      title: 'Modern Fleet',
      description: 'Well-maintained, GPS-equipped vehicles for reliable transport.'
    },
    {
      title: 'Insurance Coverage',
      description: 'Full insurance coverage for complete peace of mind with every shipment.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your transport queries.'
    }
  ];

  return (
    <section id="why-us" className="why-choose-us">
      <div className="container">
        <h2>Why Choose New Indian Cargo Carriers?</h2>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-number">{index + 1}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;