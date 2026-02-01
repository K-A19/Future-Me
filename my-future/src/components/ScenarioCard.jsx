import React from 'react';
import './ScenarioCard.css';

/**
 * ScenarioCard - Interactive card that triggers a scenario modal
 * Shows scenario info and quick action to start
 */
const ScenarioCard = ({ 
  title, 
  description, 
  icon, 
  emoji, 
  color, 
  onClick 
}) => {
  return (
    <div className="scenario-card" onClick={onClick} style={{ borderColor: color }}>
      <div className="card-header" style={{ background: color }}>
        <div className="card-emoji">{emoji}</div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>

      <button className="card-action-btn" style={{ background: color }}>
        <span>START SCENARIO</span>
        <span className="arrow">→</span>
      </button>

      <div className="card-footer">
        <span className="xp-reward">💰 Earn Points!</span>
      </div>
    </div>
  );
};

export default ScenarioCard;
