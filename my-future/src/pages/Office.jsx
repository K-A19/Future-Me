import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Office.css';
import '../index.css';
import PlayerProfile from './PlayerProfile';
import { useGameContext } from '../context/GameContext';
import ScenarioModal from '../components/ScenarioModal';
import { getLifeBalanceLabel, getMoneySkillsLevel, getProgressPercent } from '../utils/scoringSystem';

const Office = () => {
  const { stats } = useGameContext();
  const [scenario, setScenario] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    fetch('/scenarios/work.json')
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
  const lifeBalancePercent = (stats.lifeBalance / 200) * 100;
  const skillsPercent = (stats.moneySkills / 200) * 100;

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
      </div>

      {/* Main Content Area */}
      <div className="map-wrapper" style={{ backgroundImage: 'url(/images/Office.jpeg)' }}>
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
      )}
    </div>
  );
};

export default Office;
