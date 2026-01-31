import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import '../index.css';

const Home = () => {
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

      {/* Main Content Area */}
      <div className="map-wrapper" style={{ backgroundImage: 'url(/images/home.jpeg)' }}>
        <Link to="/" className="back-button">← Back to Town</Link>
      </div>
    </div>
  );
};

export default Home;
