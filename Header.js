import React from 'react';

function Header({ setPage }) {
  return (
    <div className="navbar">
      <h2>🚚 QuickCourier</h2>
      <div>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('services')}>Services</button>
        <button onClick={() => setPage('book')}>Book Courier</button>
        <button onClick={() => setPage('contact')}>Contact</button>
      </div>
    </div>
  );
}

export default Header;