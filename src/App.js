import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import homepage from './components/homepage';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Common Header */}
        
        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<homepage />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
};

export default App;
