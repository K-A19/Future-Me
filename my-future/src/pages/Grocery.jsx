import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Grocery.css';
import '../index.css';
import PlayerProfile from './PlayerProfile';
import { useGameContext } from '../context/GameContext';
import ScenarioModal from '../components/ScenarioModal';

const Grocery = () => {
  const { stats } = useGameContext();
  const [scenario, setScenario] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    fetch('/scenarios/groceries.json')
      .then(res => res.json())
      .then(data => {
        // Shuffle the steps array to randomize order
        const shuffledSteps = [...data.steps].sort(() => Math.random() - 0.5);
        setScenario({ ...data, steps: shuffledSteps });
      })
      .catch(err => console.error('Failed to load scenario:', err));
  }, []);

  // Calculate percentages for stat bars
  const savingsPercent = (stats.savings / 200) * 100;
  const happinessPercent = (stats.happiness / 200) * 100;
  const smartsPercent = (stats.moneySmarts / 200) * 100;

  const handleChoiceMade = (choiceId) => {
    if (scenario && currentStep < scenario.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowModal(false);
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
          <div className="stat-label">😊 Happiness</div>
          <div className="stat-bar-bg">
            <div className="stat-bar-fill" style={{ width: `${happinessPercent}%` }}></div>
          </div>
          <div className="stat-value">{stats.happiness}</div>
        </div>

        <div className="stat-bar">
          <div className="stat-label">🧠 Money Smarts</div>
          <div className="stat-bar-bg">
            <div className="stat-bar-fill" style={{ width: `${smartsPercent}%` }}></div>
          </div>
          <div className="stat-value">{stats.moneySmarts}</div>
        </div>
        <img 
          src="../../images/futuremelogo.png" 
          alt="Future Me Logo" 
          className="sidebar-logo" 
        />
      </div>

      {/* Main Content Area */}
      <div className="map-wrapper" style={{ backgroundImage: 'url(/images/grocery_store.jpeg)' }}>
        <Link to="/" className="back-button">← Back to Town</Link>
      </div>
      {/* Scenario Modal */}
      {showModal && scenario && (
        <ScenarioModal
          scenario={scenario}
          step={scenario.steps[currentStep]}
          onChoiceMade={handleChoiceMade}
          onClose={() => setShowModal(false)}
        />
      )}    </div>
  );
};

export default Grocery;
