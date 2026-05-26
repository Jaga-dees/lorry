import React from 'react';
import './Fleet.css';

function Fleet() {
  const vehicles = [
    {
      name: 'Small Van',
      capacity: 'Up to 1 Ton',
      icon: '🚐',
      description: 'Perfect for small local deliveries and urban transport.'
    },
    {
      name: 'Light Truck',
      capacity: '1-3 Tons',
      icon: '🚚',
      description: 'Ideal for medium-sized cargo and regular deliveries.'
    },
    {
      name: 'Medium Truck',
      capacity: '3-7 Tons',
      icon: '🚛',
      description: 'Suitable for larger shipments and interstate transport.'
    },
    {
      name: 'Heavy Truck',
      capacity: '7-15 Tons',
      icon: '🚛',
      description: 'Heavy-duty vehicle for bulk cargo and machinery.'
    },
    {
      name: 'Semi-Trailer',
      capacity: '15+ Tons',
      icon: '🚚',
      description: 'Maximum capacity for large-scale logistics operations.'
    },
    {
      name: 'Refrigerated Truck',
      capacity: '3-7 Tons',
      icon: '❄️',
      description: 'Temperature-controlled transport for perishables.'
    }
  ];

  return (
    <section id="fleet" className="fleet">
      <div className="container">
        <h2>Our Fleet</h2>
        <p className="fleet-intro">We operate a modern fleet of well-maintained vehicles to handle all your transport needs.</p>
        <div className="fleet-grid">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="fleet-card">
              <div className="fleet-icon">{vehicle.icon}</div>
              <h3>{vehicle.name}</h3>
              <p className="capacity">{vehicle.capacity}</p>
              <p className="description">{vehicle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Fleet;