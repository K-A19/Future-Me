import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import PlayerProfile from './PlayerProfile';
import { useGameContext } from '../context/GameContext';
import { getLifeBalanceLabel, getMoneySkillsLevel, getProgressPercent } from '../utils/scoringSystem';

const Index = () => {
  const { stats } = useGameContext();

  const savingsPercent = (stats.savings / 200) * 100;
  const lifeBalancePercent = (stats.lifeBalance / 200) * 100;
  const skillsPercent = (stats.moneySkills / 200) * 100;

  const handleLocationClick = (location) => {
    console.log(`Navigating to ${location}...`);
  };

  const createNewCharacter = () => {
    const confirmReset = window.confirm("Start fresh? This will delete all your current stats.");
    
    if (confirmReset) {
      localStorage.clear(); // Wipes local storage
      window.location.reload(); // Refreshes the app state
    }
  };

  return (
    <div className="page-wrapper">
      {/* Player Stats Sidebar */}
      <div className="player-sidebar">
        <div className="player-emoji"><PlayerProfile size="150px" /></div>

        <div className="stat-bar">
          <div className="stat-label">💰 Savings</div>
          <div className="stat-bar-bg">
            <div className="stat-bar-fill" style={{ width: `${savingsPercent}%` }}></div>
          </div>
          <div className="stat-value">${stats.savings}</div>
        </div>

        <div className="stat-bar">
          <div className="stat-label">😊 Life Balance</div>
          <div className="stat-bar-bg">
            <div className="stat-bar-fill" style={{ width: `${lifeBalancePercent}%` }}></div>
          </div>
          <div className="stat-value">{getLifeBalanceLabel(stats.lifeBalance)}</div>
        </div>

        <div className="stat-bar">
          <div className="stat-label">🧠 Money Skills</div>
          <div className="stat-bar-bg">
            <div className="stat-bar-fill" style={{ width: `${skillsPercent}%` }}></div>
          </div>
          <div className="stat-value">Lvl {getMoneySkillsLevel(stats.moneySkills).level}</div>
        </div>
        <button className="reset-button" onClick={createNewCharacter}> NEW CHARACTER</button>
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
