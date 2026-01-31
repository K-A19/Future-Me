import React from 'react';
import Avatar from 'avataaars';

const PlayerProfile = ({ size = '200px' }) => {
  // Grab the saved avatar from storage
  const savedData = localStorage.getItem('userAvatar');
  
  // Parse it, or provide a fallback if they haven't made one yet
  const avatarConfig = savedData ? JSON.parse(savedData) : {
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