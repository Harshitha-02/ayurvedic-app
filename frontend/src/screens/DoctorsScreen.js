// screens/DoctorsScreen.js
import React from 'react';
import './DoctorsScreen.css';

function DoctorsScreen() {
  const doctors = [
    {
      name: 'Dr. Neelam Sharma',
      specialization: 'Skin Diseases',
      experience: '6 years of experience',
      location: 'Jamshedpur, Jharkhand',
      rating: 4.0,
      nextAvailable: '05:30 PM, 10/08/2024',
    },
    {
      name: 'Dr. Abc Xyz',
      specialization: 'Digestive and Metabolic',
      experience: '10 years of experience',
      location: 'Gurugram, Haryana',
      rating: 'New',
      nextAvailable: '05:30 PM, 10/08/2024',
    },
    {
      name: 'Dr. Priyanshu',
      specialization: 'Respiratory Diseases',
      experience: '7 years of experience',
      location: 'Gurugram, Haryana',
      rating: 5.0,
      note: 'Dr. Priyanshu is now available for online consultation at the moment',
    },
  ];

  return (
    <div className="doctors-container">
      <div className="filters">
        <h2>Filters</h2>
        <button className="clear-all">Clear All</button>
        {/* Add your filter options here */}
        {/* ... */}
      </div>

      <div className="doctors-list">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <div className="doctor-info">
              <div className="doctor-name">
                {doctor.name} <span className="doctor-rating">{doctor.rating} ⭐</span>
              </div>
              <div className="doctor-specialization">{doctor.specialization}</div>
              <div className="doctor-experience">{doctor.experience}</div>
              <div className="doctor-location">{doctor.location}</div>
              {doctor.nextAvailable && (
                <div className="next-available">NEXT AVAILABLE AT <b>{doctor.nextAvailable}</b></div>
              )}
              {doctor.note && (
                <div className="doctor-note">{doctor.note}</div>
              )}
            </div>
            <button className="book-consultation">Book Consultation</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsScreen;
