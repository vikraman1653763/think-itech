import React ,{useEffect}from 'react';
import './ProductIntro.css';  // Optional CSS file for styling

const ProductIntro = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page
  }, []);

  return (
    <div className="product-intro" id='product-intro'>
      <div className="product-intro-text">
        <h2 className="product-title">Introducing Our Latest Drone</h2>
        <p className="product-description">
          Our high-performance drone, built with cutting-edge technology, is designed to meet the needs of various industries, including agriculture, surveillance, and delivery.
          It offers unmatched efficiency, precision, and reliability to revolutionize your operations.
        </p>
       <div className='product-btns'>

        <button
          className="learn-more-button"
          onClick={() => handleScroll('1')}
          >
          LOGISTICS
        </button>
        <button
          className="learn-more-button"
          onClick={() => handleScroll('2')}
          >
          VTOL
        </button>
        <button
          className="learn-more-button"
          onClick={() => handleScroll('3')}
          >
          SURVEILLANCE
        </button>
          </div>
      </div>
      <div className="product-intro-image">
        <img src="/assets/multi.webp" alt="Drone" className="product-image" />
      </div>
    </div>
  );
};

export default ProductIntro;
