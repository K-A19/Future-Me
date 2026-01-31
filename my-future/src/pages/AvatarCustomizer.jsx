import React, { useState } from 'react';
import Avatar from 'avataaars';
import { useNavigate } from 'react-router-dom';
import '../AvatarCustomizer.css';

const AvatarCustomizer = () => {
  const navigate = useNavigate();

  // 1. Define all available options for the arrows to cycle through
  const options = {
    topType: ['NoHair', 'LongHairStraight', 'LongHairCurly', 'ShortHairShortFlat', 'ShortHairDreads01', 'Bob', 'LongHairNotTooLong'],
    hairColor: ['Black', 'BrownDark', 'Brown', 'BlondeGolden', 'SilverGray', 'Red'],
    skinColor: ['Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black'],
    clotheType: ['BlazerShirt', 'BlazerSweater', 'GraphicShirt', 'Hoodie', 'Overall', 'ShirtVNeck'],
    accessoriesType: ['Blank', 'Prescription01', 'Prescription02', 'Round',],
  };

  const labels = {
    topType: "HAIR STYLE",
    hairColor: "HAIR COLOR",
    skinColor: "SKIN TONE",
    clotheType: "OUTFIT",
    accessoriesType: "ACCESSORIES"
  };

  // 2. State: Fixed facial presets + Dynamic style choices
  const [config, setConfig] = useState({
    eyeType: 'Default',
    eyebrowType: 'Default',
    mouthType: 'Serious',
    avatarStyle: 'Transperent',
    topType: 'NoHair',
    hairColor: 'BrownDark',
    skinColor: 'Yellow',
    clotheType: 'Hoodie',
    accessoriesType: 'Blank',
  });

  // 3. Logic to cycle through options (The Arrow Function)
  const handleCycle = (key, direction) => {
    const list = options[key];
    const currentIndex = list.indexOf(config[key]);
    let nextIndex = currentIndex + direction;

    // Wrap around logic
    if (nextIndex < 0) nextIndex = list.length - 1;
    if (nextIndex >= list.length) nextIndex = 0;

    setConfig(prev => ({ ...prev, [key]: list[nextIndex] }));
  };

  const handleSave = () => {
    localStorage.setItem('userAvatar', JSON.stringify(config));
    navigate('/'); // Redirect to the town map
  };

  return (
    
   <div className="customizer-container">
      {/* THE LOGO */}
        <img 
        src="../../images/futuremelogo.png" 
        alt="Future Me Logo" 
        className="main-logo" 
        />
      {/* LEFT SIDE: PREVIEW */}
      <div className="preview-side">
        <div className="avatar-wrapper">
          <Avatar style={{ width: '400px', height: '400px' }} {...config} />
        </div>
        <button className="save-button" onClick={handleSave}>CONFIRM CHARACTER</button>
      </div>

      {/* RIGHT SIDE: THE CONTROLS */}
      <div className="control-side">
        <h1 className="menu-title">APPEARANCE</h1>
        
        {Object.keys(options).map((key) => (
          <div key={key} className="selector-wrapper">
            <div className="arrow-row">
              <button className="arrow-btn" onClick={() => handleCycle(key, -1)}>‹</button>
              <div className="fixed-label">{labels[key]}</div>
              <button className="arrow-btn" onClick={() => handleCycle(key, 1)}>›</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarCustomizer;