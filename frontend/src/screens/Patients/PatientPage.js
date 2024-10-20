import React from 'react';
import './PatientPage.css'; // Import the CSS file for styling

function PatientPage() {
  return (
    <div className="patient-container">
      <main className="content">
      {/* fetch name and show */}
        <h1>Hi Ram! How are you?</h1> 
        <p>Welcome back! Let's continue your journey to holistic wellness. We find the best doctors for you using Modern Technologies.</p>
        <div className="button-group">
          <button className="appoint-btn">Your Appointed Doctor</button>
          <button className="match-btn">Match me Automatically</button>
        </div>
      </main>
    </div>
  );
}

export default PatientPage;
