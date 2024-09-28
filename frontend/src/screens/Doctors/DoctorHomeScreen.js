import React from 'react';
import './DoctorHomeScreen.css';

function DoctorHomeScreen() {
  return (
    <div className="doctor-home-container">
      <h1>Hi Dr. Saurabh!</h1>
      <p>Welcome back! Let's manage appointments and patients records efficiently.</p>
      
      <div className="current-requests-container">
        <button className="current-requests-btn">Current Requests</button>
      </div>
      
      <div className="doctor-options">
        <button className="option-btn">Appointment Slots</button>
        <button className="option-btn">Patient List</button>
        <button className="option-btn">Analytics</button>
        <button className="option-btn">My Health Blogs</button>
      </div>
    </div>
  );
}

export default DoctorHomeScreen;
