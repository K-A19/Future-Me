import React from 'react';
import { Link } from 'react-router-dom';
import '../Index.css';

const Index = () => {
  const handleLocationClick = (location) => {
    console.log(`Navigating to ${location}...`);
  };

  return (
    <>
    <div className="game-container">
      <h1 className="title">🏘️ Welcome to My Town 🏘️</h1>
      
      <img 
        src="/images/town_map.jpeg" 
        alt="Town Map" 
        className="map-image"
        id="mapImage"
      />

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
    </>
  );
};

export default Index;
