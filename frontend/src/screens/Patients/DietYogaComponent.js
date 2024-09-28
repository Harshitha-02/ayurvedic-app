import React, { useState } from 'react';
import './DietYogaComponent.css';  // Ensure this CSS file is linked in your project

function DietYogaComponent() {
  const [activeTab, setActiveTab] = useState('Diet');
  const [activeFrequency, setActiveFrequency] = useState('Daily');

  return (
    <div className="container">
      <h1>Services</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab('Diet')} 
                className={`tab ${activeTab === 'Diet' ? 'active' : ''}`}>Diet</button>
        <button onClick={() => setActiveTab('Yoga')} 
                className={`tab ${activeTab === 'Yoga' ? 'active' : ''}`}>Yoga</button>
      </div>
      <div className="frequency-tabs">
        <button onClick={() => setActiveFrequency('Daily')} 
                className={`tab ${activeFrequency === 'Daily' ? 'active' : ''}`}>Daily</button>
        <button onClick={() => setActiveFrequency('Weekly')} 
                className={`tab ${activeFrequency === 'Weekly' ? 'active' : ''}`}>Weekly</button>
      </div>

      <h2>Recommended Diet Plan</h2>
      <div className="meal-grid">
        {['Breakfast', 'Lunch', 'Dinner', 'Juices'].map(meal => (
          <div key={meal} className="meal">
            <h3>{meal}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          </div>
        ))}
      </div>

      <h2>Ayurvedic Herb Recommendations :</h2>
      <div className="herbs">
        {['Lorem ipsum dolor sit amet,', 'consectetur adipiscing elit.', 'Sed ut imperdet', 'tesque'].map((herb, index) => (
          <p key={index}>{herb}</p>
        ))}
      </div>

      <div className="actions">
        <p>Do you want to order them now?</p>
        <button className="order-button">Order Now</button>
        <p>Do you need another dietitian?</p>
        <button className="yes-button">Yes</button>
      </div>
    </div>
  );
}

export default DietYogaComponent;
