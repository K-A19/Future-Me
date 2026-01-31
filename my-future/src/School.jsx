import React from 'react';
import { Link } from 'react-router-dom';
import './School.css';

const School = () => {
  return (
    <div className="school-page">
      <Link to="/" className="back-button">← Back to Town</Link>

      <div className="header">
        <h1>🏫 School - Learning Center</h1>
        <p>Education and growth await!</p>
      </div>

      <div className="content-area">
        <img 
          src="/images/school.jpeg" 
          alt="School Hallway" 
          className="location-image"
        />
        
        <div className="description">
          <h2>Welcome to School!</h2>
          <p>
            Walk through the halls lined with lockers, attend classes, and expand your knowledge. 
            The school is a place for learning, socializing, and discovering new opportunities. 
            Check the bulletin board for announcements and upcoming events!
          </p>
        </div>

        <div className="game-section">
          <h2>🎮 Game Content Area</h2>
          <div className="placeholder">
            <p><strong>TEAMMATE:</strong> Add your school game mechanics here!</p>
            <p>Ideas: Class attendance, quizzes/tests, skill learning, social interactions, etc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
