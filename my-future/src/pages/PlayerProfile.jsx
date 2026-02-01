import React from 'react';
import Avatar from 'avataaars';
import { useGameContext } from '../context/GameContext';

const PlayerProfile = ({ size = '200px' }) => {
  const { stats } = useGameContext();

  // Grab the saved avatar from storage
  const savedData = localStorage.getItem('userAvatar');
  
  // Parse it, or provide a fallback if they haven't made one yet
  const baseAvatarConfig = savedData ? JSON.parse(savedData) : {
    avatarStyle: 'Circle',
    topType: 'ShortHairShortFlat',
    accessoriesType: 'Blank',
    hairColor: 'Brown',
    facialHairType: 'Blank',
    clotheType: 'Hoodie',
    eyeType: 'Default',
    eyebrowType: 'Default',
    mouthType: 'Smile',
    skinColor: 'Light',
  };

  /**
   * Determine facial expression based on stats
   * Stats range: 0-200 for each
   * 
   * Eyes reflect: Money Smarts (knowledge/learning)
   * Mouth reflects: Overall happiness (combination of savings & happiness)
   * Eyebrows reflect: Financial stress (savings too low vs income expectations)
   */
  const getExpression = () => {
    const { savings, happiness, moneySmarts } = stats;
    
    // Calculate overall financial health (0-100%)
    const savingsPercent = (savings / 200) * 100;
    const happinessPercent = (happiness / 200) * 100;
    const smartsPercent = (moneySmarts / 200) * 100;
    
    // Overall score (weighted average)
    const financialHealth = (savingsPercent + happinessPercent + smartsPercent) / 3;

    let eyeType = 'Default';
    let mouthType = 'Smile';
    let eyebrowType = 'Default';

    // ===== EYES based on Money Smarts (Knowledge) =====
    if (moneySmarts < 30) {
      eyeType = 'Confused';  // Learning, confused about finances
    } else if (moneySmarts < 80) {
      eyeType = 'Default';   // Learning but getting there
    } else if (moneySmarts < 150) {
      eyeType = 'Happy';     // Good financial knowledge
    } else {
      eyeType = 'WinkWacky'; // Expert level! Confident & cool
    }

    // ===== MOUTH based on Happiness & Balance =====
    if (happinessPercent < 30) {
      mouthType = 'Sad';      // Unhappy - sacrificed too much
    } else if (happinessPercent < 60) {
      mouthType = 'Concerned'; // Stressed, not balanced
    } else if (happinessPercent < 85) {
      mouthType = 'Smile';     // Content & balanced
    } else {
      mouthType = 'Laugh';     // Very happy! Good balance
    }

    // ===== EYEBROWS based on Financial Stress =====
    // Low savings = stressed, High savings = confident
    if (savingsPercent < 25) {
      eyebrowType = 'SadConcerned'; // Very worried about money
    } else if (savingsPercent < 50) {
      eyebrowType = 'AngryNatural'; // Frustrated with low savings
    } else if (savingsPercent < 75) {
      eyebrowType = 'Default';       // Neutral/stable
    } else if (savingsPercent < 90) {
      eyebrowType = 'FlatNatural';   // Confident
    } else {
      eyebrowType = 'RaisedExcited'; // Excited! Strong savings
    }

    return {
      eyeType,
      mouthType,
      eyebrowType,
    };
  };

  const expression = getExpression();
  const avatarConfig = {
    ...baseAvatarConfig,
    eyeType: expression.eyeType,
    mouthType: expression.mouthType,
    eyebrowType: expression.eyebrowType,
  };

  return (
    <div className="player-avatar-container">
      <Avatar 
        style={{ width: size, height: size }} 
        {...avatarConfig} 
      />
    </div>
  );
};

export default PlayerProfile;