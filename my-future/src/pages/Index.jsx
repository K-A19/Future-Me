import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Index = () => {
  const handleLocationClick = (location) => {
    console.log(`Navigating to ${location}...`);
  };

  return (
    <div className="page-wrapper">
      {/* Player Stats Sidebar */}
      <div className="player-sidebar">
        <div className="player-emoji">👤</div>
        
        <div className="stat-bar">
          <div className="stat-label">Health</div>
          <div className="stat-bar-bg">
            <div className="stat-bar-fill" style={{ width: '100%' }}></div>
          </div>
        </div>

        <div className="stat-bar">
          <div className="stat-label">Energy</div>
          <div className="stat-bar-bg">
            <div className="stat-bar-fill" style={{ width: '75%' }}></div>
          </div>
        </div>

        <div className="stat-bar">
          <div className="stat-label">Happiness</div>
          <div className="stat-bar-bg">
            <div className="stat-bar-fill" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="map-wrapper" style={{ backgroundImage: 'url(/images/homepage.jpeg)' }}>
        {/* School Button */}
        <Link 
          to="/school" 
          className="clickable-area school-btn"
          onClick={() => handleLocationClick('School')}
        >
          <span className="location-label">🏫 School</span>
        </Link>

        {/* Home Button */}
        <Link 
          to="/home" 
          className="clickable-area home-btn"
          onClick={() => handleLocationClick('Home')}
        >
          <span className="location-label">🏠 Home</span>
        </Link>

        {/* Grocery Store Button */}
        <Link 
          to="/grocery" 
          className="clickable-area grocery-btn"
          onClick={() => handleLocationClick('Grocery')}
        >
          <span className="location-label">🛒 Grocery Store</span>
        </Link>

        {/* Office Button */}
        <Link 
          to="/office" 
          className="clickable-area office-btn"
          onClick={() => handleLocationClick('Office')}
        >
          <span className="location-label">🏢 Office</span>
        </Link>
      </div>
    </div>
  );
};

export default Index;
