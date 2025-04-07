import React from 'react';
import './CaoCard.css';

const CaoCard = () => {
  return (
    <div className="cao-card">
      <div className="cao-card-content">
        <h2 className="cao-card-title">Joanna Alexander, PhD, MBA</h2>
        <p className="cao-card-role">Chief Administrative Officer</p>
        <p className="cao-card-text">
        For inquiries related to administration, partnerships, or executive coordination, please reach out using the contact details below.
        </p>
        <div className="cao-card-contact">
          <p><strong>Phone:</strong> (404) 513 3130</p>
          <p><strong>Email:</strong> <a href="mailto:joanna.a@thinkitech.com">joanna.a@thinkitech.com</a></p>
        </div>
      </div>
      <div className="cao-card-image">
  <div className="gradient-border">
    <img src="/assets/person.png" alt="Joanna Alexander" />
  </div>
</div>

    </div>
  );
};

export default CaoCard;
