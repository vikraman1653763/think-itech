import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; import './Product.css';

const Product = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration for animations
  }, []);
  const drones = [
    {
      id:'1',
      title: 'X 15 – Logistics Drone',
      image: '/assets/xagx15.webp',  
      description: 'The X 15 Logistics Drone is designed for high efficiency in logistics and transportation, featuring a robust EO+IR camera and long endurance.',
      specs: [
        { label: 'Payload', value: '15 Kg with EO+IR Camera' },
        { label: 'Endurance', value: 'Up to 35 minutes' },
        { label: 'Operating temperature', value: '-20°C to 50°C' },
        { label: 'Wind resistance', value: '20 m/s' },
        { label: 'Max speed', value: '20 m/s' },
        { label: 'Range', value: '10 km' },
        { label: 'Waterproof Rating', value: 'IPx6' },
        { label: 'Service ceiling', value: '20000 ft AMSL' },
      ],
    },
    {
      title: 'X 20 – Logistics Drone',
      image: '/assets/xagx20.webp',  
      description: 'The X 20 Logistics Drone brings enhanced payload and endurance for heavy-duty operations.',
      specs: [
        { label: 'Payload', value: '20 kg with EO+IR Camera' },
        { label: 'Endurance', value: 'Up to 40 minutes' },
        { label: 'Operating temperature', value: '-20°C to 50°C' },
        { label: 'Wind resistance', value: '20 m/s' },
        { label: 'Max speed', value: '20 m/s' },
        { label: 'Range', value: '10 km' },
        { label: 'Waterproof Rating', value: 'IPx6' },
        { label: 'Service ceiling', value: '20000 ft AMSL' },
      ],
    },
    {
      title: 'X 25 – Logistics Drone',
      image: '/assets/xag25.webp',  
      description: 'The X 25 Logistics Drone offers unmatched endurance and a high payload for extreme logistics operations.',
      specs: [
        { label: 'Payload', value: '25 kg with EO+IR Camera' },
        { label: 'Endurance', value: 'Up to 60 minutes' },
        { label: 'Operating temperature', value: '-20°C to 50°C' },
        { label: 'Wind resistance', value: '20 m/s' },
        { label: 'Max speed', value: '20 m/s' },
        { label: 'Range', value: '10 km' },
        { label: 'Waterproof Rating', value: 'IPx6' },
        { label: 'Service ceiling', value: '20000 ft AMSL' },
      ],
    },
    {
      id:'2',
      title: 'VT-X 12 – Loitering Munition – Swarm',
      image: '/assets/vtol.webp',  
      description: 'VT-X 12 is a powerful loitering munition designed for swarm operations with a long endurance and high speed.',
      specs: [
        { label: 'Payload', value: '12 kg with EO+IR Camera' },
        { label: 'Endurance', value: 'Up to 4 hours' },
        { label: 'Operating temperature', value: '-20°C to 50°C' },
        { label: 'Wind resistance', value: '30 m/s' },
        { label: 'Max speed', value: '40 m/s' },
        { label: 'Range', value: '100 km' },
        { label: 'Waterproof Rating', value: 'IPx6' },
        { label: 'Service ceiling', value: '12000 ft AMSL' },
      ],
    },
    {
      id:'3',
      title: 'SKYWATCH 360-XS 11-ISR',
      image: '/assets/s111.webp',  
      description: 'The SKYWATCH 360-XS 11-ISR is a versatile surveillance drone designed for intelligence gathering and reconnaissance.',
      specs: [
        { label: 'Payload', value: '1000 g' },
        { label: 'Endurance', value: 'Up to 75 minutes' },
        { label: 'Operating temperature', value: '-20°C to 50°C' },
        { label: 'Wind resistance', value: '15 m/s' },
        { label: 'Max speed', value: '18 m/s' },
        { label: 'Range', value: '10 km' },
        { label: 'Waterproof Rating', value: 'IPx6' },
        { label: 'Service Ceiling', value: '20000 ft AMSL' },
      ],
    },
    {
      title: 'SKYWATCH 360-XS 12-ISR',
      image: '/assets/s11.webp',  
      description: 'The SKYWATCH 360-XS 12-ISR is used for search and rescue, with capabilities for facial and vehicle recognition and anti-terror surveillance.',
      specs: [
        { label: 'Payload', value: '1000 g' },
        { label: 'Endurance', value: 'Up to 60 minutes' },
        { label: 'Operating temperature', value: '-20°C to 50°C' },
        { label: 'Wind resistance', value: '15 m/s' },
        { label: 'Max speed', value: '18 m/s' },
        { label: 'Range', value: '10 km' },
        { label: 'Waterproof Rating', value: 'IPx6' },
        { label: 'Service Ceiling', value: '20000 ft AMSL' },
      ],
    },
    {
      title: 'SKYWATCH 360-HS 12-ISR',
      image: '/assets/s11hs12.webp',  
      description: 'The SKYWATCH 360-HS 12-ISR is designed for military and enemy movement AI tracking reconnaissance.',
      specs: [
        { label: 'Payload', value: '1000 g' },
        { label: 'Endurance', value: 'Up to 60 minutes' },
        { label: 'Operating temperature', value: '-20°C to 50°C' },
        { label: 'Wind resistance', value: '15 m/s' },
        { label: 'Max speed', value: '18 m/s' },
        { label: 'Range', value: '10 km' },
        { label: 'Waterproof Rating', value: 'IPx6' },
        { label: 'Service Ceiling', value: '20000 ft AMSL' },
      ],
    },
  ];

  return (
    <div className="pro-item-container">
      {drones.map((drone, index) => (
        <div key={index} className="pro-item-card" id={drone.id}>
          <h2 className={`pro-item-title pro-item-${drone.title.replace(/\s+/g, '-').toLowerCase()}`}>
            {drone.title}
          </h2>
          <div className="pro-item-image">
            <img src={drone.image} alt={drone.title} />
          </div>
          <p className="pro-item-description">{drone.description}</p>
          <table className="pro-item-specs"  data-aos="fade-down">
            <thead>
              <tr>
                <th>Specification</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {drone.specs.map((spec, specIndex) => (
                <tr key={specIndex}>
                  <td>{spec.label}</td>
                  <td>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Product;
