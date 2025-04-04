import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        {/* <h1 className="home-title"><span className='span1'>THINK</span><span className='span2'>ITECH</span> </h1> */}
        <img src='/assets/think.webp' className='think-logo'/>
        <p className="home-description">
        At Think ITECH, we're more than tech pioneers—we're problem-solvers shaping the future of aerospace with advanced drone manufacturing. Based in the United States, we are transforming industries through cutting-edge innovation in autonomous UAV systems.
        </p>
        </div>
        <img src="/assets/made.webp" alt="Made in Use" className="made-in-use" />
        <img src="/assets/OEM.webp" alt="Made in Use" className="oem" />
    </div>
  );
};

export default Home;
