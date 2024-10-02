import React from 'react';
import './CurrentRequests.css';  // Ensure this CSS file is linked

function CurrentRequests() {
  const requests = [
    {
      id: 1,
      name: "John Doe",
      age: 34,
      gender: "Male",
      illness: "Common Cold",
      note: "First consultation"
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 29,
      gender: "Female",
      illness: "Back Pain",
      note: "Follow-up after initial treatment"
    }
    // Additional requests can be added here
  ];

  return (
    <div className="requests-container">
      <h1>Current Requests for Dr. Sanjay</h1>
      {requests.map(request => (
        <div key={request.id} className="request-card">
          <p><strong>{request.id} Name of the Patient:</strong> {request.name}</p>
          <p><strong>Age:</strong> {request.age}</p>
          <p><strong>Gender:</strong> {request.gender}</p>
          <p><strong>Illness:</strong> {request.illness}</p>
          <p><strong>Patient's Note:</strong> {request.note}</p>
          <button onClick={() => acceptRequest(request.id)}>Accept Request</button>
        </div>
      ))}
    </div>
  );
}

function acceptRequest(id) {
  alert(`Request ${id} accepted!`);  // Placeholder for actual accept logic
}

export default CurrentRequests;