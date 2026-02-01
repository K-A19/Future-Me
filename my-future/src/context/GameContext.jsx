import React, { createContext, useState, useCallback, ReactNode } from 'react';
import { INITIAL_STATS, applyChoiceScore, calculateEndGameResult } from '../utils/scoringSystem';

/**
 * GameContext - Global state for player stats across all scenarios
 * Stats: savings, lifeBalance, moneySkills
 * Persists stats to localStorage for continuity across sessions
 */
export const GameContext = createContext();

export function GameProvider({ children }) {
  // Initialize stats from localStorage or use defaults
  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem('playerStats');
    return saved ? JSON.parse(saved) : INITIAL_STATS;
  });

  // Save stats to localStorage whenever they change
  const updateStats = useCallback((newStats) => {
    setStats(newStats);
    localStorage.setItem('playerStats', JSON.stringify(newStats));
  }, []);

  // Make a choice and update global stats
  const makeChoice = useCallback((choiceId) => {
    const newStats = applyChoiceScore(stats, choiceId);
    updateStats(newStats);
    return newStats;
  }, [stats, updateStats]);

  // Complete a scenario and get result
  const completeScenario = useCallback(() => {
    return calculateEndGameResult(stats);
  }, [stats]);

  // Reset stats to initial values
  const resetStats = useCallback(() => {
    updateStats(INITIAL_STATS);
  }, [updateStats]);

  // Reset stats after viewing results (for replay)
  const resetForReplay = useCallback(() => {
    updateStats(INITIAL_STATS);
  }, [updateStats]);

  return (
    <GameContext.Provider
      value={{
        stats,
        makeChoice,
        completeScenario,
        resetStats,
        resetForReplay,
        updateStats,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

/**
 * Custom hook to use GameContext
 * @returns {Object} Game context value with stats and actions
 */
export function useGameContext() {
  const context = React.useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within GameProvider');
  }
  return context;
}
