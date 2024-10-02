import React from 'react';
import { useLocation } from 'react-router-dom';
import './DoctorDetailPage.css';  // Ensure this path matches the location of your CSS file

function DoctorDetail() {
  const location = useLocation();
  const { doctor } = location.state;

  return (
    <div className="doctor-detail-container">
      <div className="left-section">
        <div className="doctor-info">
          <div className="doctor-image"></div>
          <div className="text-info">
            <h1>Dr. {doctor.name}</h1>
            <p>Specialization: {doctor.specialization}</p>
            <p>Experience: {doctor.experience} years</p>
          </div>
        </div>
        <div className="about-doctor">
          <h2>About Doctor</h2>
          <p>B.A.M.S. Ex. Senior Doctor, Patanjali chikitsalaya Kanker(C.G.)</p>
          <p>Education: B.A.M.S. & M.D.</p>
          {/* Additional details can be listed here */}
        </div>
      </div>
      <div className="right-section">
        <div className="consultation-info">
          <h2>Consultation Type:</h2>
          <p>Availability:</p>
          <div className="availability-slots">
            <button>09:00 AM</button>
            <button>12:00 PM</button>
            <button>03:00 PM</button>
          </div>
          <button className="book-appointment">Book Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetail;