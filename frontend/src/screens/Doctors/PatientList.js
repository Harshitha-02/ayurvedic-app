import React from 'react';
import './PatientList.css';  // Ensure this CSS file is linked

function PatientList() {
  const patients = [
    {
      id: 1,
      name: "John Doe",
      age: 32,
      gender: "Male",
      illness: "Flu",
      note: "Needs follow-up",
      cureRecommended: "Bed rest and hydration",
      recoveryStage: "Recovering",
      appointmentsDone: 3,
      nextAppointment: "2023-10-03"
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      gender: "Female",
      illness: "Allergies",
      note: "Review diet",
      cureRecommended: "Antihistamines",
      recoveryStage: "Ongoing",
      appointmentsDone: 2,
      nextAppointment: "2023-10-10"
    }
    // More patients can be added here
  ];

  return (
    <div className="patient-list-container">
      <h1>Patient List</h1>
      {patients.map((patient) => (
        <div key={patient.id} className="patient-card">
          <h2>{patient.id}. Name of the Patient: {patient.name}</h2>
          <p>Age: {patient.age}</p>
          <p>Gender: {patient.gender}</p>
          <p>Illness: {patient.illness}</p>
          <p>Patient’s Note: {patient.note}</p>
          <p>Cure Recommended: {patient.cureRecommended}</p>
          <p>Recovery Stage: {patient.recoveryStage}</p>
          <p>Number of Appointments Done: {patient.appointmentsDone}</p>
          <p>Next Appointment: {patient.nextAppointment}</p>
        </div>
      ))}
    </div>
  );
}

export default PatientList;
