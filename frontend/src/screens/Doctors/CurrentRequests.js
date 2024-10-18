import React, { useState, useEffect } from "react";
import "./CurrentRequests.css"; // Ensure this CSS file is linked

function CurrentRequests() {
  const [requests, setRequests] = useState([]); // Initialize state to hold the requests as an array
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage any potential errors

  // Fetch data from API when component mounts
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/bookings/bookings"
        ); // Adjust API URL as needed
        if (!response.ok) {
          throw new Error("Failed to fetch requests");
        }

        const data = await response.json();

        // Log the response data to check its structure
        console.log("Fetched data:", data);

        // Ensure that we are accessing the bookings array
        const requestsArray = Array.isArray(data.bookings) ? data.bookings : [];

        setRequests(requestsArray); // Set the fetched requests to state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError(error.message); // Capture any error that occurs during the fetch
        setLoading(false);
      }
    };

    fetchRequests();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (loading) {
    return <p>Loading...</p>; // Display loading indicator
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error message if any
  }

  return (
    <div className="requests-container">
      <h1>Current Requests for Dr. Sanjay</h1>
      {console.log(requests)}
      {requests.map((request) => (
        <div key={request._id} className="request-card">
          <p>
            <strong>Patient Email:</strong> {request.patientEmail}
          </p>
          <p>
            <strong>Time Slot:</strong> {request.timeSlot}
          </p>
          <div className="action-buttons">
            <button onClick={() => acceptRequest(request._id)}>
              Accept Request
            </button>
            <button
              onClick={() => denyRequest(request._id)}
              className="deny-button"
            >
              Deny Request
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// Function to accept request
function acceptRequest(id) {
  alert(`Request ${id} accepted!`); // Placeholder for actual accept logic
}

// Function to deny request
function denyRequest(id) {
  alert(`Request ${id} denied!`); // Placeholder for actual deny logic
}

export default CurrentRequests;

// const requests = [
//   {
//     id: 1,
//     name: "John Doe",
//     age: 34,
//     gender: "Male",
//     illness: "Common Cold",
//     note: "First consultation",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     age: 29,
//     gender: "Female",
//     illness: "Back Pain",
//     note: "Follow-up after initial treatment",
//   },
//   // Additional requests can be added here
// ];
