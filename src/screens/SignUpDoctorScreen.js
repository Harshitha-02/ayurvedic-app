import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPatientScreen.css';
import './SignUpScreen.css';
import './SignUpDoctorScreen.css';

function SignUpDoctorScreen() {
  const [certificate, setCertificate] = useState(null);
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (!certificate) {
      alert('Please upload your ayurvedic degree certificate.');
      return;
    }
    navigate('/PrakritiDetermination'); // Adjust the route as needed
  };

  const handleFileChange = (e) => {
    setCertificate(e.target.files[0]);
  };

  return (
    <div className="signup-container">
      <h1>Sign Up - Doctor</h1>
      <p>Expand your practice. Reach new patients seeking ayurvedic care.</p>
      <form className="signup-form">
        <div className="form-column">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="Ram" required />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Singh" required />
          </div>
          <div className="form-group">
            <label>Email ID</label>
            <input type="email" placeholder="abc@gmail.com" required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="0123456789" required />
          </div>
          <div className="form-group">
            <label>Date of Birth (DD/MM/YYYY)</label>
            <input type="date" placeholder="01/01/2000" required />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input type="number" placeholder="24" required />
          </div>
          <div className="form-group">
            <label>Experience (in years)</label>
            <input type="number" placeholder="24" required />
          </div>
        </div>

        <div className="form-column">
          <div className="form-group">
            <label>Gender</label>
            <input type="text" placeholder="Male/Female" required />
          </div>
          <div className="form-group">
            <label>Zip Code (Location)</label>
            <input type="text" placeholder="000001" required />
          </div>
          <div className="form-group">
            <label>Education (College)</label>
            <input type="text" placeholder="Ayurvedic College" required />
          </div>
          <div className="form-group">
            <label>Designation</label>
            <input type="text" placeholder="Vaidya" required />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input type="number" placeholder="250" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password" required />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Password" required />
          </div>
        </div>

        <div className="form-group fileupload">
          <label>Upload Ayurvedic Degree Certificate</label>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={handleFileChange}
            required
          />
          <p className="file-info">Supported file formats: png, jpg. File size limit: 5MB</p>
        </div>

        <div className="form-button">
          <button type="button" className="next-btn" onClick={handleNextClick}>Next →</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpDoctorScreen;
