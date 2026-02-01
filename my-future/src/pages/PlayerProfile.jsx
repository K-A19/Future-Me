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
   * All stats use 0-200 scale for consistency
   * 
   * 👀 EYES (Money Skills - Mental Clarity)
   *   0-40:     Confused - "I don't really get money yet"
   *   40-90:    Default - "I'm learning and starting to understand"
   *   90-150:   Happy - "I know what I'm doing"
   *   150-200:  Dizzy - "Money expert—my brain is FULL of ideas!"
   * 
   * 😊 MOUTH (Life Balance - Emotional Wellbeing)
   *   0-40:     Sad - "This isn't fun anymore"
   *   40-80:    Concerned - "I'm stressed or overwhelmed"
   *   80-140:   Smile - "Life feels balanced"
   *   140-200:  Laughing - "I'm thriving!"
   * 
   * 🤨 EYEBROWS (Savings - Security & Safety)
   *   0-40:     SadConcerned - "I don't feel safe with money"
   *   40-80:    AngryNatural - "This is stressful"
   *   80-130:   Default - "I'm okay for now"
   *   130-170:  FlatNatural - "I feel secure"
   *   170-200:  RaisedExcited - "I'm confident about my future!"
   * 
   * Perfect Balance (Savings 160+, Life Balance 150+, Money Skills 150+):
   * Dizzy + Laughing + RaisedExcited = "You're smart, secure, AND happy. That's what money is for."
   */
  const getExpression = () => {
    const { savings, lifeBalance, moneySkills } = stats;

    let eyeType = 'Default';
    let mouthType = 'Smile';
    let eyebrowType = 'Default';

    // ===== EYES based on Money Skills (0-200) =====
    if (moneySkills < 40) {
      eyeType = 'Confused';  // 0-40: "I don't really get money yet"
    } else if (moneySkills < 90) {
      eyeType = 'Default';   // 40-90: "I'm learning and starting to understand"
    } else if (moneySkills < 150) {
      eyeType = 'Happy';     // 90-150: "I know what I'm doing"
    } else {
      eyeType = 'Dizzy';     // 150-200: "Money expert—my brain is FULL!"
    }

    // ===== MOUTH based on Life Balance (0-200) =====
    if (lifeBalance < 40) {
      mouthType = 'Sad';      // 0-40: "This isn't fun anymore"
    } else if (lifeBalance < 80) {
      mouthType = 'Concerned'; // 40-80: "I'm stressed or overwhelmed"
    } else if (lifeBalance < 140) {
      mouthType = 'Smile';     // 80-140: "Life feels balanced"
    } else {
      mouthType = 'Laughing';  // 140-200: "I'm thriving!"
    }

    // ===== EYEBROWS based on Savings (0-200) =====
    if (savings < 40) {
      eyebrowType = 'SadConcerned'; // 0-40: "I don't feel safe with money"
    } else if (savings < 80) {
      eyebrowType = 'AngryNatural'; // 40-80: "This is stressful"
    } else if (savings < 130) {
      eyebrowType = 'Default';       // 80-130: "I'm okay for now"
    } else if (savings < 170) {
      eyebrowType = 'FlatNatural';   // 130-170: "I feel secure"
    } else {
      eyebrowType = 'RaisedExcited'; // 170-200: "I'm confident about my future!"
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

  /**
   * Detect imbalance and suggest gentle nudges
   * Teaches that financial literacy = balance, not maxing one stat
   */
  const getBalanceWarning = () => {
    const { savings, lifeBalance, moneySkills } = stats;
    const avg = (savings + lifeBalance + moneySkills) / 3;
    const threshold = 30; // Stat difference threshold to trigger warning

    // High life balance, low savings (living for now, not future)
    if (lifeBalance > avg + threshold && savings < avg - threshold) {
      return {
        emoji: '⚠️',
        message: "You're having fun! But Future You is worried about money.",
        color: '#FFB366', // Orange
      };
    }

    // High savings, low life balance (working but not enjoying)
    if (savings > avg + threshold && lifeBalance < avg - threshold) {
      return {
        emoji: '⚠️',
        message: "You're saving well, but are you still having fun?",
        color: '#FFB366',
      };
    }

    // Very high money skills, low life balance (overconfident saver)
    if (moneySkills > avg + threshold && lifeBalance < avg - threshold) {
      return {
        emoji: '💡',
        message: "Smart choices! Remember: money is a tool, not the goal.",
        color: '#FFD699',
      };
    }

    // Very high life balance, low money skills (enjoying but not learning)
    if (lifeBalance > avg + threshold && moneySkills < avg - threshold) {
      return {
        emoji: '💡',
        message: "Good vibes! Try learning one money skill this round.",
        color: '#FFD699',
      };
    }

    // Both savings and life balance low (struggling)
    if (savings < avg - threshold && lifeBalance < avg - threshold) {
      return {
        emoji: '🤝',
        message: "You've got this! Try choosing balanced options.",
        color: '#FF9999',
      };
    }

    // Perfect or near-perfect balance (celebration!)
    if (savings > 150 && lifeBalance > 140 && moneySkills > 140) {
      return {
        emoji: '🎉',
        message: "Perfect balance! You're smart, secure, AND happy.",
        color: '#90EE90',
      };
    }

    return null;
  };

  const balanceWarning = getBalanceWarning();

  return (
    <div className="player-avatar-container">
      <Avatar 
        style={{ width: size, height: size }} 
        {...avatarConfig} 
      />
      {balanceWarning && (
        <div className="balance-warning" style={{ borderColor: balanceWarning.color }}>
          <span className="warning-emoji">{balanceWarning.emoji}</span>
          <span className="warning-text">{balanceWarning.message}</span>
        </div>
      )}
    </div>
  );
};

export default PlayerProfile;