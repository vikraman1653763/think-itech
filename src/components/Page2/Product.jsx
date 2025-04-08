import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Product.css';
import drone from '/assets/drone.svg'
const Product = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const droneCategories = [
    {
      category: 'Logistics Drones',
      drones: [
        {
          id: '1',
          title: 'X 15 – Logistics Drone',
          image: '/assets/xagx15.webp',
          description: 'The X 15 Logistics Drone is designed for high efficiency in logistics and transportation, featuring a robust EO+IR camera and long endurance.',
          specs: [
            { label: 'Payload', value: '33.07 lb (15 Kg with EO+IR Camera)' },
            { label: 'Endurance', value: 'Up to 35 minutes' },
            { label: 'Operating temperature', value: '-4°F to 122°F (-20°C to 50°C)' },
            { label: 'Wind resistance', value: '44.74 mph (20 m/s)' },
            { label: 'Max speed', value: '44.74 mph (20 m/s)' },
            { label: 'Range', value: '6.21 mi (10 km)' },
            { label: 'Waterproof Rating', value: 'IPx6' },
            { label: 'Service ceiling', value: '20000 ft AMSL' },
            { label: 'Use Case', value: 'Logistics delivery for military, disaster relief, and critical infrastructure' }
          ]
        },
        {
          id: '2',
          title: 'X 20 – Logistics Drone',
          image: '/assets/xagx20.webp',
          description: 'The X 20 Logistics Drone brings enhanced payload and endurance for heavy-duty operations.',
          specs: [
            { label: 'Payload', value: '44.09 lb (20 kg with EO+IR Camera)' },
            { label: 'Endurance', value: 'Up to 40 minutes' },
            { label: 'Operating temperature', value: '-4°F to 122°F (-20°C to 50°C)' },
            { label: 'Wind resistance', value: '44.74 mph (20 m/s)' },
            { label: 'Max speed', value: '44.74 mph (20 m/s)' },
            { label: 'Range', value: '6.21 mi (10 km)' },
            { label: 'Waterproof Rating', value: 'IPx6' },
            { label: 'Service ceiling', value: '20000 ft AMSL' },
            { label: 'Use Case', value: 'Heavy-duty logistics support for defense, energy sites, and remote operations' }
          ]
        },
        {
          id: '3',
          title: 'X 25 – Logistics Drone',
          image: '/assets/xag25.webp',
          description: 'The X 25 Logistics Drone offers unmatched endurance and a high payload for extreme logistics operations.',
          specs: [
            { label: 'Payload', value: '55.12 lb (25 kg with EO+IR Camera)' },
            { label: 'Endurance', value: 'Up to 60 minutes' },
            { label: 'Operating temperature', value: '-4°F to 122°F (-20°C to 50°C)' },
            { label: 'Wind resistance', value: '44.74 mph (20 m/s)' },
            { label: 'Max speed', value: '44.74 mph (20 m/s)' },
            { label: 'Range', value: '6.21 mi (10 km)' },
            { label: 'Waterproof Rating', value: 'IPx6' },
            { label: 'Service ceiling', value: '20000 ft AMSL' },
            { label: 'Use Case', value: 'Critical logistics for military, emergency response, and large-scale infrastructure support' }
          ]
        }
      ]
    },
    {
      category: 'VTOL Drones',
      drones: [
        {
          id: '4',
          title: 'VT-X 12 – Loitering Munition – Swarm',
          image: '/assets/vtol.webp',
          description: 'VT-X 12 is a powerful loitering munition designed for swarm operations with a long endurance and high speed.',
          specs: [
            { label: 'Payload', value: '26.46 lb (12 kg with EO+IR Camera)' },
            { label: 'Endurance', value: 'Up to 4 hours' },
            { label: 'Operating temperature', value: '-4°F to 122°F (-20°C to 50°C)' },
            { label: 'Wind resistance', value: '67.11 mph (30 m/s)' },
            { label: 'Max speed', value: '89.48 mph (40 m/s)' },
            { label: 'Range', value: '62.14 mi (100 km)' },
            { label: 'Waterproof Rating', value: 'IPx6' },
            { label: 'Service ceiling', value: '12000 ft AMSL' },
            { label: 'Use Case', value: 'Swarm missions, ISTAR surveillance, and battlefield reconnaissance' }
          ]
        }
      ]
    },
    {
      category: 'Surveillance Drones',
      drones: [
        {
          id: '5',
          title: 'SKYWATCH 360-XS 11-ISR',
          image: '/assets/s111.webp',
          description: 'The SKYWATCH 360-XS 11-ISR is a versatile surveillance drone designed for intelligence gathering and reconnaissance.',
          specs: [
            { label: 'Payload', value: '2.2 lb (1000 g)' },
            { label: 'Endurance', value: 'Up to 75 minutes' },
            { label: 'Operating temperature', value: '-4°F to 122°F (-20°C to 50°C)' },
            { label: 'Wind resistance', value: '33.55 mph (15 m/s)' },
            { label: 'Max speed', value: '40.26 mph (18 m/s)' },
            { label: 'Range', value: '6.21 mi (10 km)' },
            { label: 'Waterproof Rating', value: 'IPx6' },
            { label: 'Service Ceiling', value: '20000 ft AMSL' },
            { label: 'Use Case', value: 'Law enforcement, border security, crowd monitoring, and anti-terror operations' }
          ]
        },
        {
          id: '6',
          title: 'SKYWATCH 360-XS 12-ISR',
          image: '/assets/s11.webp',
          description: 'The SKYWATCH 360-XS 12-ISR is used for search and rescue, with capabilities for facial and vehicle recognition and anti-terror surveillance.',
          specs: [
            { label: 'Payload', value: '2.2 lb (1000 g)' },
            { label: 'Endurance', value: 'Up to 60 minutes' },
            { label: 'Operating temperature', value: '-4°F to 122°F (-20°C to 50°C)' },
            { label: 'Wind resistance', value: '33.55 mph (15 m/s)' },
            { label: 'Max speed', value: '40.26 mph (18 m/s)' },
            { label: 'Range', value: '6.21 mi (10 km)' },
            { label: 'Waterproof Rating', value: 'IPx6' },
            { label: 'Service Ceiling', value: '20000 ft AMSL' },
            { label: 'Use Case', value: 'Search and rescue, surveillance, and urban security for smart cities' }
          ]
        },
        {
          id: '7',
          title: 'SKYWATCH 360-HS 12-ISR',
          image: '/assets/s11hs12.webp',
          description: 'The SKYWATCH 360-HS 12-ISR is designed for military and enemy movement AI tracking reconnaissance.',
          specs: [
            { label: 'Payload', value: '2.2 lb (1000 g)' },
            { label: 'Endurance', value: 'Up to 60 minutes' },
            { label: 'Operating temperature', value: '-4°F to 122°F (-20°C to 50°C)' },
            { label: 'Wind resistance', value: '33.55 mph (15 m/s)' },
            { label: 'Max speed', value: '40.26 mph (18 m/s)' },
            { label: 'Range', value: '6.21 mi (10 km)' },
            { label: 'Waterproof Rating', value: 'IPx6' },
            { label: 'Service Ceiling', value: '20000 ft AMSL' },
            { label: 'Use Case', value: 'Military reconnaissance, border patrol, and tactical surveillance' }
          ]
        }
      ]
    },
    {
      category: 'Agricultural Drones',
      drones: [
        {
          id: '8',
          title: 'AGR10 – Agricultural Drone',
          image: '/assets/agr10.webp',
          description: 'The AGR10 is a compact agricultural drone designed for efficient crop spraying and spreading operations with fast deployment and intelligent flight control.',
          specs: [
            { label: 'Max Speed', value: '13.4 mph (6 m/s)' },
            { label: 'Wind Resistance', value: '17.9 mph (8 m/s)' },
            { label: 'Payload Options', value: 'Sprayer (2.64 gal)' },
            { label: 'Operating Altitude', value: '98.4 ft (30 meters)' },
            { label: 'Range', value: '0.62 mi (1000 meters)' },
            { label: 'Dimensions', value: '6.53 x 5.9 x 1.4 ft (1992 x 1799 x 427 mm)' },
            { label: 'Use Case', value: 'Precision agriculture, spraying and field monitoring' }
          ]
        },
        {
          id: '9',
          title: 'AGR16 – Agricultural Drone',
          image: '/assets/agr16.webp',
          description: 'The AGR16 drone is a powerful solution for large-scale agricultural tasks. With extended range, speed, and payload, it ensures precise spraying and efficient crop monitoring.',
          specs: [
            { label: 'Camera', value: 'MIPI-DCAM (high-resolution agricultural imaging)' },
            { label: 'Range', value: '0.62 mi (1 km)' },
            { label: 'Flight Time', value: '14.2 minutes' },
            { label: 'Payload', value: 'Sprayer (3.96 gal), Spreader (3.96 gal) [15 L]' },
            { label: 'Max Speed', value: '13.4 mph (6 m/s)' },
            { label: 'Weight', value: '94.4 lb (42.8 kg)' },
            { label: 'Use Case', value: 'Large-scale crop spraying, seed spreading, fertilizer distribution, fish feeding, and environmental monitoring' }
          ]
        }
      ]
    }
  ];
  
  return (
    <div className="pro-item-container">
      {droneCategories.map((group, index) => (
        <div key={index} className="category-section">
          <h1 className="category-title" data-aos="fade-up">
            <img src={drone} className='category-title-icon'/>
              {group.category}
            <img src={drone} className='category-title-icon'/>
            
            </h1>

          {group.drones.map((drone) => (
            <div key={drone.id} className="pro-item-card" id={drone.id}>
              <h2 className="pro-item-title">{drone.title}</h2>
              <div className="pro-item-image">
                <img src={drone.image} alt={drone.title} />
              </div>
              <p className="pro-item-description">{drone.description}</p>
              <table className="pro-item-specs" data-aos="fade-down">
                <thead>
                  <tr>
                    <th>Specification</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {drone.specs.map((spec, idx) => (
                    <tr key={idx}>
                      <td>{spec.label}</td>
                      <td>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Product;
