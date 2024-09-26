import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPatientScreen.css';
import '../SignUpScreen'

function SignUpPatientScreen() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/PrakritiDetermination'); // Adjust the route as needed
  };

  return (
    <div className="signup-container">
      <h1>Sign Up - Patient</h1>
      <p>Unlock your inner balance. Start your Ayurvedic journey today.</p>
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
        </div>

        <div className="form-column">
          <div className="form-group">
            <label>Age</label>
            <input type="number" placeholder="24" required />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <input type="text" placeholder="Male/Female" required />
          </div>
          <div className="form-group">
            <label>Zip Code (Location)</label>
            <input type="text" placeholder="000001" required />
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

        <div className="form-button">
          <button type="submit" className="next-btn" onClick={handleNextClick}>Next →</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpPatientScreen;