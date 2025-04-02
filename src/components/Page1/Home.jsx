import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Think ITECH</h1>
        <p className="home-description">
        At Think ITECH, we're more than tech pioneers—we're problem-solvers shaping the future of aerospace with advanced drone manufacturing. Based in the United States, we are transforming industries through cutting-edge innovation in autonomous UAV systems.
                </p>
      <img src="/assets/made.webp" alt="Made in Use" className="made-in-use" />
      </div>
    </div>
  );
};

export default Home;
