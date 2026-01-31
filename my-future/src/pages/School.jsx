import React from 'react';
import { Link } from 'react-router-dom';
import '../School.css';
import '../index.css';
import PlayerProfile from './PlayerProfile';

const School = () => {
  return (
    <div className="page-wrapper">
      {/* Player Stats Sidebar */}
      <div className="player-sidebar">
        <div className="player-emoji"><PlayerProfile size="150px" /></div>
        
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
        <img 
          src="../../images/futuremelogo.png" 
          alt="Future Me Logo" 
          className="sidebar-logo" 
        />
      </div>

      {/* Main Content Area */}
      <div className="map-wrapper" style={{ backgroundImage: 'url(/images/school.jpeg)' }}>
        <Link to="/" className="back-button">← Back to Town</Link>
      </div>
    </div>
  );
};

export default School;
