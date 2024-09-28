import React from 'react';
import './AppointedDoctor.css';  // Ensure the CSS file is linked

function AppointedDoctor() {
    return (
        <div className="appointed-container">
            <div className="doctor-info">
                <h1>Your Current Doctor</h1>
                <h2>with Dr. Sanjay</h2>
                <button className="appointment-button">Request Intermediate Appointment</button>
                <ul>
                    <li>Illness: Cure Recommended</li>
                    <li>Recovery Stage</li>
                    <li>Number of Appointments Done</li>
                    <li>Next Appointment</li>
                    <li>Other comments (if any)</li>
                </ul>
            </div>
            <div className="supplements">
                <h2>Recommended Supplements</h2>
                <div className="medicines">
                    {['Medicine 1', 'Medicine 1', 'Medicine 1'].map((medicine, index) => (
                        <div key={index} className="medicine">
                            <p>Name of Medicine: {medicine}</p>
                            <p>Cures Illness</p>
                            <p>Price</p>
                            <button>Buy Item</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AppointedDoctor;
