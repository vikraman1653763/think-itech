import React from 'react';
import './Proto.css';

const droneData = [
  { name: 'X-15', type: 'Logistics Drone', image: '/assets/l3.webp' },
  { name: 'VT-X 12', type: 'Swarm Drone', image: '/assets/l7.webp' },
  { name: 'AGR-16', type: 'Agricultural Drone', image: '/assets/l2.webp' },
  { name: 'X-25', type: 'Heavy Lift Drone', image: '/assets/l1.webp' },
  { name: 'XS 12-ISR', type: 'Surveillance Drone', image: '/assets/l4.webp' },
  { name: 'HS 12-ISR', type: 'Military Drone', image: '/assets/l6.webp' },
  { name: 'AGR-10', type: 'Precision Farming Drone', image: '/assets/l8.webp' },
  { name: 'X-20', type: 'Mid-Range Cargo Drone', image: '/assets/l5.webp' },
  { name: 'XS 11-ISR', type: 'Reconnaissance Drone', image: '/assets/l9.webp' },
];

const Prototype = () => {
  return (
    <div className="prototype-container">
      <h2 className="prototype-title">UAV Product Range in Production</h2>
      <div className="prototype-row-wrapper">
        {droneData.map((drone, index) => (
          <div className="prototype-card" key={index}>
            <img src={drone.image} alt={drone.name} className="prototype-image" />
            <h3 className="prototype-name">{drone.name}</h3>
            <h2 className="prototype-type">{drone.type}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prototype;
