

import React from "react";

const products = [
  {
    name: "AGR10 Agricultural Drone",
    description: "The AGR-10 is a hexacopter UAS from Xagrotor Tek, built for precise farming. It uses advanced technology and a custom flight controller to help farmers work more efficiently and improve productivity.",
    image:"/assets/agr10.webp"
  },
  {
    name: "AGR16 Agricultural Drone",
    description: "The AGR-16 by Xagrotor Tek is a high-tech farming drone designed to enhance precision and productivity and ensures smooth, accurate flying, making it an excellent tool for modern farming.",
    image:"/assets/agr16.webp"
  },
  {
    name: "X Power Plus Battery",
    description: "Reliable and long-lasting drone battery.",
    image:"/assets/battery.webp"
  },
  {
    name: "Flight Controller X rotor tek India",
    description: "Xpower Plus is designed for long-lasting power in drones, ensuring extended flight times and reliable performance for agricultural and industrial tasks.",
    image:"/assets/fc.webp"
  },
  {
    name: "S11 Industrial Drone",
    description: "The S11 Industrial Drone is a powerful, heavy-duty UAV designed for large-scale operations. Engineered with a robust frame and high-endurance capabilities.",
    image:"/assets/s11.webp"
  },
];

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="header">
        <h1>Xagrotor Tek Pvt Ltd</h1>
        <p>Innovating the Future of Drones</p>
      </header>

      <section className="products-section">
        <h2>Our Products</h2>
        <div className="products-container">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Xagrotor Tek Pvt Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
