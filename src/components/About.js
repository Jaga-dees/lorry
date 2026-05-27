import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="lorry-animation-container">
            <div className="lorry-road">
              <div className="lorry">
                <div className="lorry-cabin">🚛</div>
              </div>
            </div>
            <p className="animation-text">30 Years on the Road, Still Delivering Excellence</p>
          </div>
          <div className="about-text">
            <h3>30 Years of Trust & Excellence</h3>
            <p>
              New Indian Cargo Carriers has been serving the logistics and transport industry for over three decades. 
              We have built our reputation on reliability, efficiency, and customer satisfaction.
            </p>
            <p>
              Our fleet of modern lorries and experienced drivers ensure that your cargo reaches its destination 
              safely and on time, no matter where in India it needs to go.
            </p>
            <ul className="highlights">
              <li>✓ 30+ Years in Business</li>
              <li>✓ Pan-India Network</li>
              <li>✓ Trusted by Hundreds of Businesses</li>
              <li>✓ Professional & Experienced Team</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
