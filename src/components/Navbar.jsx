import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Navbar.css'; // Optional CSS file for styling

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-right">
        <img src="/assets/logo.webp" alt="Logo" className="nav-logo" />
      </div>
      <div className="nav-left">
        <Link to="/" className="nav-link">About</Link>  {/* Use Link for navigation */}
        <Link to="/product" className="nav-link">Product</Link>  {/* Use Link for navigation */}
      </div>
    </nav>
  );
};

export default Navbar;
