import React, { useState } from 'react';
import './LoginPage.css'; // Make sure to create and link the CSS file

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-container">
      <div className="form-box">
        <h2>{isLogin ? 'Login' : 'Signup'}</h2>
        <form>
          {!isLogin && (
            <>
              {/* Signup form fields */}
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" required />
              </div>
            </>
          )}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="submit-btn">{isLogin ? 'Login' : 'Signup'}</button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <span onClick={toggleForm} className="toggle-link">
            {isLogin ? ' Signup' : ' Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
