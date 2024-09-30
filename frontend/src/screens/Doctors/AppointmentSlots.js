import React from 'react';
import './AppointmentSlots.css';  // Ensure CSS is correctly linked

function AppointmentSlots() {
  const appointments = [
    { timing: "9:00 AM", name: "John Doe", age: 30, gender: "Male", illness: "Flu", note: "Follow-up in 2 weeks" },
    { timing: "10:00 AM", name: "Jane Smith", age: 25, gender: "Female", illness: "Allergy", note: "Initial consultation" },
    { timing: "11:00 AM", name: "Alice Johnson", age: 40, gender: "Female", illness: "Diabetes", note: "Routine check-up" }
  ];

  return (
    <div className="appointments-container">
      <h1>My Appointment Slots</h1>
      {appointments.map((appointment, index) => (
        <div key={index} className="appointment-card">
          <div className="appointment-timing">
            <h2>{appointment.timing}</h2>
          </div>
          <div className="appointment-details">
            <p><strong>Name of the Patient:</strong> {appointment.name}</p>
            <p><strong>Illness:</strong> {appointment.illness}</p>
            <p><strong>Note:</strong> {appointment.note}</p>
          </div>
          <div className="appointment-meta">
            <p><strong>Age:</strong> {appointment.age}</p>
            <p><strong>Gender:</strong> {appointment.gender}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AppointmentSlots;
