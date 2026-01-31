import React from 'react';
import { Link } from 'react-router-dom';
import '../Grocery.css';

const Grocery = () => {
  return (
    <div className="grocery-page">
      <Link to="/" className="back-button">← Back to Town</Link>

      <div className="header">
        <h1>🛒 Fresh Market Grocery</h1>
        <p>Stock up on supplies!</p>
      </div>

      <div className="content-area">
        <img 
          src="/images/grocery_store.jpeg" 
          alt="Grocery Store" 
          className="location-image"
        />
        
        <div className="description">
          <h2>Welcome to Fresh Market!</h2>
          <p>
            Browse through aisles filled with fresh produce, daily essentials, and everything 
            you need. Our friendly staff is here to help you find what you're looking for. 
            Don't forget to check out our special deals!
          </p>
        </div>

        <div className="game-section">
          <h2>🎮 Game Content Area</h2>
          <div className="placeholder">
            <p><strong>TEAMMATE:</strong> Add your grocery store game mechanics here!</p>
            <p>Ideas: Shopping system, item catalog, currency management, checkout mini-game, etc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grocery;
