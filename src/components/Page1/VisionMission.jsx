import React, { useEffect } from 'react';
import { GoGoal } from 'react-icons/go';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

const VisionMission = () => {
  const visionAndMission = [
    {
      title: "Our Vision",
      content: "To position the United States as the global leader in drone manufacturing by driving innovation, strengthening national security, and fueling economic growth through advanced unmanned aerial systems.",
    },
    {
      title: "Our Mission",
      content: "We are committed to expanding drone manufacturing in the U.S., delivering cutting-edge solutions for defense, surveillance, commercial, agriculture, and logistical applications. By leveraging our established and ongoing Research and Development (R&D) presence in-house and investing in state-of-the-art U.S. production facilities, we ensure a secure supply chain, create high-tech jobs, and advance American technological leadership.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="vision-mission">
        <h2 className='vis-title'>Pioneering the Future of Unmanned Aerial Systems</h2>
        <p className='vis-desc'>Leading the evolution of next-generation drone technology, we are transforming multiple industries across the United States with cutting-edge unmanned aerial systems (UAS). Our advanced solutions serve the defense, commercial, agricultural, and logistical sectors, integrating patented innovations and USA-made Original Equipment Manufacturer (OEM) products. By setting new benchmarks in aerial intelligence, security, and automation, we are redefining the possibilities of unmanned flight.</p>
      <div className="background-icon">
        <GoGoal />
      </div>
      {visionAndMission.map((item, index) => (
        <div
          className="vision-mission-item card"
          key={index}
          data-aos="fade-left"   data-aos-delay={index * 200}
        >
          <h2 className="vision-mission-title">{item.title}</h2>
          <p className="vision-mission-content">{item.content}</p>
        </div>
      ))}
    </section>
  );
};

export default VisionMission;
