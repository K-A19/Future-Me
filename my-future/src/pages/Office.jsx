import React from 'react';
import { Link } from 'react-router-dom';
import '../Office.css';

const Office = () => {
  return (
    <div className="office-page">
      <Link to="/" className="back-button">← Back to Town</Link>

      <div className="header">
        <h1>🏢 The Office</h1>
        <p>Time to get to work!</p>
      </div>

      <div className="content-area">
        <img 
          src="/images/Office.jpeg" 
          alt="Office Space" 
          className="location-image"
        />
        
        <div className="description">
          <h2>Welcome to the Workplace!</h2>
          <p>
            Enter the modern office space with cubicles, computers, and everything you need 
            to be productive. Complete tasks, interact with coworkers, and climb the corporate 
            ladder in this professional environment.
          </p>
        </div>

        <div className="game-section">
          <h2>🎮 Game Content Area</h2>
          <div className="placeholder">
            <p><strong>TEAMMATE:</strong> Add your office game mechanics here!</p>
            <p>Ideas: Work tasks/mini-games, skill progression, meetings, career advancement, etc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
