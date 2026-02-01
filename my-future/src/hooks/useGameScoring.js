import { useState, useCallback } from 'react';
import { INITIAL_STATS, applyChoiceScore, calculateEndGameResult } from '../utils/scoringSystem';

/**
 * Custom hook for managing game scoring and state
 * Tracks stats, choices, and game completion across scenarios
 * @returns {Object} Game state and action functions
 */
export function useGameScoring() {
  const [stats, setStats] = useState(INITIAL_STATS);
  const [choiceHistory, setChoiceHistory] = useState([]);
  const [gameComplete, setGameComplete] = useState(false);
  const [endGameResult, setEndGameResult] = useState(null);

  /**
   * Make a choice - apply scoring and record in history
   * @param {string} choiceId - ID of the choice selected
   * @param {number} stepNumber - Step number for tracking
   */
  const makeChoice = useCallback((choiceId, stepNumber) => {
    const newStats = applyChoiceScore(stats, choiceId);
    setStats(newStats);
    
    setChoiceHistory(prev => [
      ...prev,
      {
        step: stepNumber,
        choice: choiceId,
        statsAfter: newStats
      }
    ]);
  }, [stats]);

  /**
   * Complete the game - calculate final result
   */
  const completeGame = useCallback(() => {
    const result = calculateEndGameResult(stats);
    setEndGameResult(result);
    setGameComplete(true);
  }, [stats]);

  /**
   * Reset game to initial state for replaying
   */
  const resetGame = useCallback(() => {
    setStats(INITIAL_STATS);
    setChoiceHistory([]);
    setGameComplete(false);
    setEndGameResult(null);
  }, []);

  return {
    // State
    stats,
    choiceHistory,
    gameComplete,
    endGameResult,
    
    // Actions
    makeChoice,
    completeGame,
    resetGame
  };
}
