import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Link to="/" className="back-button">← Back to Town</Link>

      <div className="header">
        <h1>🏠 Home Sweet Home</h1>
        <p>Your cozy living space</p>
      </div>

      <div className="content-area">
        <img 
          src="/images/home.jpeg" 
          alt="Home Interior" 
          className="location-image"
        />
        
        <div className="description">
          <h2>Welcome Home!</h2>
          <p>
            Relax in your comfortable living room with a cozy fireplace, comfy sofas, 
            and all the amenities you need. This is your personal space to unwind after 
            a long day of adventures in town.
          </p>
        </div>

        <div className="game-section">
          <h2>🎮 Game Content Area</h2>
          <div className="placeholder">
            <p><strong>TEAMMATE:</strong> Add your home-related game mechanics here!</p>
            <p>Ideas: Inventory system, character customization, rest/save feature, etc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
