// screens/DoctorDetailPage.js
import React from 'react';
import './DoctorDetailPage.css';
import { useLocation } from 'react-router-dom';

function DoctorDetailPage() {
  const location = useLocation();
  const { state } = location;

  if (!state || !state.doctor) {
    return <div>No doctor details available.</div>;
  }

  const { doctor } = state;

  return (
    <div className="doctor-detail-page">
      <div className="doctor-info-left">
        <h1>{doctor.name}</h1>
        <p><strong>Specialization:</strong> {doctor.specialization}</p>
        <p><strong>Experience:</strong> {doctor.experience}</p>
        {doctor.education && <p><strong>Education:</strong> {doctor.education}</p>}
        {doctor.posts && doctor.posts.length > 0 && (
          <>
            <p><strong>Posts:</strong></p>
            <ul>
              {doctor.posts.map((post, index) => (
                <li key={index}>{post}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="doctor-info-right">
        {doctor.availability && <p><strong>Availability:</strong> {doctor.availability}</p>}
        {doctor.reviews && doctor.reviews.length > 0 && (
          <>
            <p><strong>Reviews:</strong></p>
            {doctor.reviews.map((review, index) => (
              <div key={index} className="review">
                <p><strong>{review.reviewer}</strong> rated {review.rating} ⭐</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default DoctorDetailPage;