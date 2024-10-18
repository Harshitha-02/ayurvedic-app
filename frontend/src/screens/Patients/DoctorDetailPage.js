import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./DoctorDetailPage.css"; // Ensure this path matches the location of your CSS file

function DoctorDetail() {
  const location = useLocation();
  const { doctor } = location.state;

  const [selectedTime, setSelectedTime] = useState(null); // Track selected time slot

  const handleTimeSlotClick = (time) => {
    setSelectedTime(time); // Set the selected time slot
  };

  const handleBookAppointment = async () => {
    if (selectedTime) {
      const email = localStorage.getItem("email");
      const role = localStorage.getItem("role");

      console.log(`Selected time: ${selectedTime}`); // Print selected time slot
      console.log(`User Email: ${email}`);
      console.log(`User Role: ${role}`);

      // Data to be sent to the backend
      let bookingData = {
        doctorName: doctor.name,
        timeSlot: selectedTime,
        email: email,
      };

      // Include email only if the role is 'patient'
      if (role === "patient") {
        bookingData.email = email; // Add email to bookingData
        console.log(`User Email: ${email}`);
      } else {
        // If the role is not 'patient', alert the user
        alert("Only patients can book appointments.");
        return; // Exit the function
      }

      try {
        const response = await fetch("http://localhost:8080/api/bookings", {
          // Replace with your API URL
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData), // Send the doctor and slot data
        });

        const result = await response.json();

        if (response.ok) {
          alert("Appointment booked successfully!");
          console.log("Booking response:", result); // Optional: log the server response
        } else {
          alert(result.error || "Failed to book appointment");
        }
      } catch (error) {
        console.error("Error booking appointment:", error);
      }
    } else {
      console.log("No time slot selected");
    }
  };

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
            {/* Time slots buttons */}
            {["09:00 AM", "12:00 PM", "03:00 PM"].map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSlotClick(time)} // Handle button click
                className={selectedTime === time ? "selected" : ""} // Add selected class conditionally
              >
                {time}
              </button>
            ))}
          </div>
          <button className="book-appointment" onClick={handleBookAppointment}>
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetail;
