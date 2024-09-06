import React from 'react';
import './HomeScreen.css';  // Import the CSS
import logo from '../media/logo.png';  // Import the logo
import homebg from '../media/homebg1.png';  // Import the background image

function HomeScreen() {
  return (
    <div className="homeScreen" style={{ backgroundImage: `url(${homebg})` }}>
      <div className="content">
        <div className="logo-image">
          <img src={logo} alt="Ayurvedic Logo" />
        </div>
        <h1>AYURVEDIC</h1>
        <h2>Consultations</h2>
        <div className='outbox'>
          <button className="consult-btn">Consult an Ayurvedic Doctor <br /> Book a Session</button>
        </div>
        <div className='how-we-work'>
          <div className='hww-heading'>How We Work?</div>
          <div className='hww-content'></div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
