import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Common Header */}
        <Header />
        
        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<homepage />} />
          </Routes>
        </main>
        
        {/* Common Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
