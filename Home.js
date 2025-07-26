import React from 'react';
import './index.css'; // or your preferred CSS file

function Home() {
  return (
    <div className="home-page">
      <div className="home-banner">
        <h1 className="main-title">
          Deliver Smarter with <span className="brand-name">QuickCourier</span>
        </h1>
        <p className="sub-title">
          Fast, secure & affordable package delivery solutions for every customer, everywhere.
        </p>

        <div className="features">
          <div className="feature-card">📦 Real-Time Tracking</div>
          <div className="feature-card">🚚 Nationwide Delivery</div>
          <div className="feature-card">🔒 Safe & Secure Handling</div>
          
        </div>

        <button className="cta-button">Book Your Courier Now</button>
      </div>
    </div>
  );
}

export default Home;