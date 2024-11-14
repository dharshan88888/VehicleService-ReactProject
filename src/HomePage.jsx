import React from 'react';
import './homepage.css';

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="https://www.cars24.com/images/logo.svg" alt="Cars24 Logo" />
        </div>
        <ul>
          <li><a href="/">Buy used car</a></li>
          <li><a href="/">Sell car</a></li>
          <li><a href="/">Car finance</a></li>
          <li><a href="/">New cars</a></li>
          <li><a href="/service">Car services</a></li>
        </ul>
        <div className="account">
          <span style={{padding:10}}><a href="/login">Login</a></span>
          <span style={{padding:10}}><a href="/signup">Sign in</a></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to CARS24</h1>
        <p>Your all-in-one car universe</p>
        <div className="search-bar">
          <input type="text" placeholder="Search cars by" />
          <button>View all cars</button>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <h2>Top Brands</h2>
        <div className="brands-list">
          <img src="https://www.cars24.com/assets/brand/maruti.svg" alt="Maruti" />
          <img src="https://www.cars24.com/assets/brand/hyundai.svg" alt="Hyundai" />
          <img src="https://www.cars24.com/assets/brand/honda.svg" alt="Honda" />
          <img src="https://www.cars24.com/assets/brand/tata.svg" alt="Tata" />
          <img src="https://www.cars24.com/assets/brand/renault.svg" alt="Renault" />
          <img src="https://www.cars24.com/assets/brand/kia.svg" alt="Kia" />
          <img src="https://www.cars24.com/assets/brand/mahindra.svg" alt="Mahindra" />
          <img src="https://www.cars24.com/assets/brand/ford.svg" alt="Ford" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 CARS24. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
