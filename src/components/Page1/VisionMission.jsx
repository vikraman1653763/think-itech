import React, { useEffect } from 'react';
import { GoGoal } from 'react-icons/go';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const VisionMission = () => {
  const visionAndMission = [
    {
      title: "Our Vision",
      content: "To establish the United States as the global leader in drone manufacturing by fostering innovation, enhancing national security, and driving economic growth through advanced unmanned aerial systems.",
    },
    {
      title: "Our Mission",
      content: "We are committed to reshoring and expanding drone manufacturing in the U.S., delivering cutting-edge solutions for defense, commercial, agriculture, and logistical applications. By leveraging our established presence in India and investing in state-of-the-art U.S. production facilities, we ensure a secure supply chain, create high-tech jobs, and advance American technological leadership.",
    },
  ];

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Animation will only happen once
    });
  }, []);

  return (
    <section className="vision-mission">
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
