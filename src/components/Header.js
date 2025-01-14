import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="header-container">
      <h1 className="logo">Skill Tester</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/typing-test">Typing Test</Link></li>
          <li><Link to="/click-test">Click Test</Link></li>
          <li><Link to="/bubble-game">Bubble Game</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
