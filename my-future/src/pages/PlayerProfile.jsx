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

  // 1. Calculate Average Vibe (0-200)
  const average = (savings + lifeBalance + moneySkills) / 3;

  // 2. Calculate Tension (How far apart are the stats?)
  // High tension = a "Conflicted" face (e.g., rich but stressed and unskilled)
  const max = Math.max(savings, lifeBalance, moneySkills);
  const min = Math.min(savings, lifeBalance, moneySkills);
  const tension = max - min;

  let eyeType = 'Default';
  let mouthType = 'Serious';
  let eyebrowType = 'Default';

  // --- BASE EMOTION (The Average) ---
  if (average < 60) {
    // Struggling overall
    eyeType = 'Default';
    mouthType = 'Sad';
    eyebrowType = 'SadConcerned';
  } else if (average < 140) {
    // Doing okay / Middle ground
    eyeType = 'Default';
    mouthType = 'Twinkle';
    eyebrowType = 'Default';
  } else {
    // Excellence
    eyeType = 'Happy';
    mouthType = 'Smile';
    eyebrowType = 'RaisedExcited';
  }

  // --- THE "BALANCE" POLISH (Tension Adjustments) ---

  // CRITICAL FAILURE: If any one stat is abysmal, it "taints" the expression
  if (min < 30) {
    eyeType = (moneySkills < 30) ? 'Cry' : eyeType;
    mouthType = (lifeBalance < 30) ? 'Grimace' : 'Serious';
    eyebrowType = 'SadConcerned';
  }

  // THE CONFLICTED LOOK: If stats are wildly different (High Tension)
  if (tension > 100) {
    // The "I have money but no life/skills" look
    eyeType = 'Default'; 
    eyebrowType = 'UpDown'; // One up, one down shows confusion/imbalance
    mouthType = 'Serious';
  }

  // THE "ZEN" LOOK: If stats are very close together and high (Low Tension)
  if (tension < 40 && average > 150) {
    eyeType = 'Hearts'; // Only get the "Best" eyes if stats are balanced AND high
    mouthType = 'Smile';
    eyebrowType = 'Default'; // Calm, confident brow
  }

  return { eyeType, mouthType, eyebrowType };
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

    // High savings (130+), low life balance (< 80)
    if (savings >= 130 && lifeBalance < 80) {
      return {
        emoji: '⚠️',
        message: "You're saving well, but are you still having fun?",
        color: '#FFB366',
      };
    }

    // High life balance (130+), low savings (< 80)
    if (lifeBalance >= 130 && savings < 80) {
      return {
        emoji: '⚠️',
        message: "You're having fun! But Future You is worried about money.",
        color: '#FFB366',
      };
    }

    // High money skills (130+), low life balance (< 80)
    if (moneySkills >= 130 && lifeBalance < 80) {
      return {
        emoji: '💡',
        message: "Smart choices! Remember: money is a tool, not the goal.",
        color: '#FFD699',
      };
    }

    // High life balance (130+), low money skills (< 80)
    if (lifeBalance >= 130 && moneySkills < 80) {
      return {
        emoji: '💡',
        message: "Good vibes! Try learning one money skill this round.",
        color: '#FFD699',
      };
    }

    // Both savings and life balance low (< 80)
    if (savings < 80 && lifeBalance < 80) {
      return {
        emoji: '🤝',
        message: "You've got this! Try choosing balanced options.",
        color: '#FF9999',
      };
    }

    // Perfect balance (160+, 150+, 150+)
    if (savings >= 160 && lifeBalance >= 150 && moneySkills >= 150) {
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
    </div>
  );
};

export default PlayerProfile;