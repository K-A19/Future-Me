import React, { useState, useMemo } from 'react';
import './ScenarioModal.css';
import { useGameContext } from '../context/GameContext';

/**
 * ScenarioModal - Displays game scenarios as popup modals
 * Shows choices and immediate feedback on stat changes
 */
const ScenarioModal = ({ 
  scenario, 
  step, 
  onChoiceMade, 
  onClose 
}) => {
  const { stats, makeChoice } = useGameContext();
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackStats, setFeedbackStats] = useState(null);

  if (!scenario || !step) return null;

  // Randomize choice order (left/right positions) for each step
  const shuffledOptions = useMemo(() => {
    return [...step.options].sort(() => Math.random() - 0.5);
  }, [step]);

  const handleChoiceClick = (choiceId) => {
    // Make the choice and get updated stats (with scaled deltas)
    const oldStats = { ...stats };
    const newStats = makeChoice(choiceId);

    // Use the scaled deltas from the choice system if available
    const changes = newStats._deltas || {
      savings: newStats.savings - oldStats.savings,
      lifeBalance: newStats.lifeBalance - oldStats.lifeBalance,
      moneySkills: newStats.moneySkills - oldStats.moneySkills,
    };

    // Remove the private _deltas field before storing stats
    const cleanedStats = { ...newStats };
    delete cleanedStats._deltas;

    setSelectedChoice(choiceId);
    setFeedbackStats({ newStats: cleanedStats, changes });
    setShowFeedback(true);

    // Call the callback after a brief delay to show feedback
    setTimeout(() => {
      onChoiceMade(choiceId);
      setShowFeedback(false);
      setSelectedChoice(null);
      setFeedbackStats(null);
    }, 2000);
  };

  const currentOption = step.options.find(opt => opt.id === selectedChoice);

  return (
    <div className="scenario-modal-overlay" onClick={onClose}>
      <div className="scenario-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="scenario-header">
          <h2>{scenario.title}</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Main Content */}
        {!showFeedback ? (
          <>
            {/* Subtitle */}
            <div className="scenario-subtitle">
              {scenario.subtitle}
            </div>

            {/* Prompt */}
            <div className="scenario-prompt">
              {step.prompt}
            </div>

            {/* Choices */}
            <div className="choices-container">
              {shuffledOptions.map((option) => (
                <button
                  key={option.id}
                  className="choice-button"
                  onClick={() => handleChoiceClick(option.id)}
                >
                  <div className="choice-icon">{option.icon}</div>
                  <div className="choice-label">{option.label}</div>
                </button>
              ))}
            </div>

            {/* Current Stats */}
            <div className="current-stats">
              <div className="stat-item">
                <span className="stat-emoji">💰</span>
                <span className="stat-text">${stats.savings}</span>
              </div>
              <div className="stat-item">
                <span className="stat-emoji">😊</span>
                <span className="stat-text">{stats.lifeBalance}</span>
              </div>
              <div className="stat-item">
                <span className="stat-emoji">🧠</span>
                <span className="stat-text">{stats.moneySkills}</span>
              </div>
            </div>
          </>
        ) : (
          /* Feedback Screen */
          <div className="feedback-screen">
            <div className="feedback-choice">
              <div className="feedback-icon">{currentOption.icon}</div>
              <div className="feedback-label">{currentOption.label}</div>
            </div>

            <div className="stat-changes">
              <div className={`stat-change ${feedbackStats.changes.savings > 0 ? 'positive' : feedbackStats.changes.savings < 0 ? 'negative' : 'neutral'}`}>
                <span className="emoji">💰</span>
                <span className="change-text">
                  Savings: {feedbackStats.changes.savings > 0 ? '+' : ''}{feedbackStats.changes.savings}
                </span>
              </div>
              <div className={`stat-change ${feedbackStats.changes.lifeBalance > 0 ? 'positive' : feedbackStats.changes.lifeBalance < 0 ? 'negative' : 'neutral'}`}>
                <span className="emoji">😊</span>
                <span className="change-text">
                  Balance: {feedbackStats.changes.lifeBalance > 0 ? '+' : ''}{feedbackStats.changes.lifeBalance}
                </span>
              </div>
              <div className={`stat-change ${feedbackStats.changes.moneySkills > 0 ? 'positive' : feedbackStats.changes.moneySkills < 0 ? 'negative' : 'neutral'}`}>
                <span className="emoji">🧠</span>
                <span className="change-text">
                  Skills: {feedbackStats.changes.moneySkills > 0 ? '+' : ''}{feedbackStats.changes.moneySkills}
                </span>
              </div>
            </div>

            <div className="feedback-animation">
              ✨ Choice Applied! ✨
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScenarioModal;
