import React from 'react';
import './HomeScreen.css';  // Import the CSS
import logo from '../media/logo.png';  // Import the logo
import homebg from '../media/homebg.png';  // Import the background image
import step1Icon from '../media/step1.png';  // Import icons for steps
import step2Icon from '../media/step2.png';
import step3Icon from '../media/step3.png';
import step4Icon from '../media/step4.png';

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
          <h2 className='hww-heading'>How We Work?</h2>
          <div className='hww-content'>
            <div className='hww-step'>
              <img src={step1Icon} alt="Step 1" className='hww-icon' />
              <div className='hww-step-text'>
                <h3>Step 1: Consultation</h3>
                <p>Get a detailed consultation with our expert Ayurvedic doctors.</p>
              </div>
            </div>
            <div className='hww-step'>
              <img src={step2Icon} alt="Step 2" className='hww-icon' />
              <div className='hww-step-text'>
                <h3>Step 2: Diagnosis</h3>
                <p>Receive a comprehensive diagnosis based on your health profile.</p>
              </div>
            </div>
            <div className='hww-step'>
              <img src={step3Icon} alt="Step 3" className='hww-icon' />
              <div className='hww-step-text'>
                <h3>Step 3: Treatment Plan</h3>
                <p>Follow a personalized treatment plan tailored to your needs.</p>
              </div>
            </div>
            <div className='hww-step'>
              <img src={step4Icon} alt="Step 4" className='hww-icon' />
              <div className='hww-step-text'>
                <h3>Step 4: Follow-Up</h3>
                <p>Engage in follow-up sessions to track your progress and adjust the plan if needed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;