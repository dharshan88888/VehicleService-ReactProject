import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; // Home Page Component
import LoginPage from './LoginPage'; // Login Page Component
import SignupPage from './SignupPage'; // Signup Page Component
import ServicesPage from './ServicesPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/service" element={<ServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;