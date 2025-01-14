import React from 'react';
import './HomePage.css'; // Add a CSS file for styling if needed
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <header className="header">
        <h1>Skill Tester</h1>
        <p>Test and improve your skills with fun games!</p>
      </header>
      <div className="options-container">
        <div className="option-card">
          <h2>Typing Test</h2>
          <p>Improve your typing speed and accuracy. Take the challenge now!</p>
          <button onClick={() => navigate('/typing-test')}>Start Typing Test</button>
        </div>
        <div className="option-card">
          <h2>Click Test</h2>
          <p>Measure your click speed. How many clicks can you do in 10 seconds?</p>
          <button onClick={() => navigate('/click-test')}>Start Click Test</button>
        </div>
        <div className="option-card">
          <h2>Bubble Game</h2>
          <p>Pop the bubbles before they disappear. Test your reflexes!</p>
          <button onClick={() => navigate('/bubble-game')}>Play Bubble Game</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
