import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCaretDown } from 'react-icons/fa';
import './ProductIntro.css';

const ProductIntro = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleDropdown = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleScrollToDrone = (droneId) => {
    const el = document.getElementById(droneId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setExpanded(null);
  };

  const dronesByCategory = {
    logistics: [
      { name: 'X 15', id: '1' },
      { name: 'X 20', id: '2' },
      { name: 'X 25', id: '3' },
    ],
    vtol: [
      { name: 'VT-X 12', id: '4' },
    ],
    surveillance: [
      { name: 'XS 11-ISR', id: '5' },
      { name: 'XS 12-ISR', id: '6' },
      { name: 'HS 12-ISR', id: '7' },
    ],
    agriculture: [
      { name: 'AGR10', id: '8' },
      { name: 'AGR16', id: '9' },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-intro" id="product-intro">
      <div className="product-intro-text">
        <h2 className="product-title">Introducing Our Latest Drone</h2>
        <p className="product-description">
          Our high-performance drone, built with cutting-edge technology, is designed to meet the needs of various industries, including agriculture, surveillance, and delivery.
          It offers unmatched efficiency, precision, and reliability to revolutionize your operations.
        </p>

        <div className="product-btns">
          {Object.keys(dronesByCategory).map((category) => (
            <div className="dropdown-group" key={category}>
              <button className="learn-more-button" onClick={() => toggleDropdown(category)}>
                {category.toUpperCase()}
                <FaCaretDown className={`caret-icon ${expanded === category ? 'rotate' : ''}`} />
              </button>
              {expanded === category && (
                <motion.ul
                  className="dropdown-list"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  {dronesByCategory[category].map((drone, i) => (
                    <li
                      key={i}
                      className="dropdown-item"
                      onClick={() => handleScrollToDrone(drone.id)}
                    >
                      {drone.name}
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="product-intro-image">
        <img src="/assets/multi.webp" alt="Drone" className="product-image" />
      </div>
    </div>
  );
};

export default ProductIntro;
