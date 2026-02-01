import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import PlayerProfile from './PlayerProfile';
import { useGameContext } from '../context/GameContext';

const Index = () => {
  const { stats } = useGameContext();

  const handleLocationClick = (location) => {
    console.log(`Navigating to ${location}...`);
  };

  return (
    <div className="page-wrapper">
      {/* Player Stats Sidebar */}
      <div className="player-sidebar">
        <div className="player-emoji"><PlayerProfile size="150px" /></div>

        <div className="stat-bar">
          <div className="stat-label">💰 Savings</div>
          <div className="stat-bar-bg">
            <div className="stat-bar-fill" style={{ width: `${(stats.savings / 200) * 100}%` }}></div>
          </div>
          <div className="stat-value">${stats.savings}</div>
        </div>

        <div className="stat-bar">
          <div className="stat-label">😊 Happiness</div>
          <div className="stat-bar-bg">
            <div className="stat-bar-fill" style={{ width: `${(stats.happiness / 200) * 100}%` }}></div>
          </div>
          <div className="stat-value">{stats.happiness}</div>
        </div>

        <div className="stat-bar">
          <div className="stat-label">🧠 Money Smarts</div>
          <div className="stat-bar-bg">
            <div className="stat-bar-fill" style={{ width: `${(stats.moneySmarts / 200) * 100}%` }}></div>
          </div>
          <div className="stat-value">{stats.moneySmarts}</div>
        </div>
        <img
          src="../../images/futuremelogo.png"
          alt="Future Me Logo"
          className="sidebar-logo"
        />
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
