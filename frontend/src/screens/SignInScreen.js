import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './SignInScreen.css';
import logo from '../media/logo.png'; // Import your logo

function SignInScreen() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'doctor', // Default role, can be changed based on user input
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = () => {
    navigate('/signup'); // Navigate to the SignUpScreen
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Login successful');
        navigate('/dashboard')
      } else {
        alert(result.error || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-left">
        <img src={logo} alt="Ayurvedic Logo" className="ayurvedic-logo" />
        <h1>AYURVEDIC</h1>
        <h2>Consultations</h2>
        <div className='outbox'>
          <button className="consult-btn">
            Consult an Ayurvedic Doctor <br /> Book a Session
          </button>
        </div>
      </div>
      <div className="signin-right">
        <div className='signin-heading'>Sign in to your account</div>
        <p className='welcome'>Welcome Back! We're happy to see you again</p>
        
        {/* Form for sign-in, with onSubmit triggering handleSignIn */}
        <form className='signin-form' onSubmit={handleSignIn}>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Mail ID" required />
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" required />

          {/* Role Selection Dropdown */}
          {/* <div className="form-group"> */}
            <label htmlFor="role">Select Role:</label>
            <select name="role" value={formData.role} onChange={handleInputChange} required>
              <option value="doctor">Doctor</option>
              <option value="retailer">Retailer</option>
              <option value="patient">Patient</option>
            </select>
          {/* </div> */}

          <a href="#" className="forgot-password">Forgot Password?</a>
          <button type="submit" className="signin-btn">SIGN IN</button> {/* onSubmit handles this */}
        </form>

        <p>
          Don’t have an account? 
          <a href="#" onClick={handleSignUp}>Sign Up</a> {/* Add onClick to handleSignUp */}
        </p>
      </div>
    </div>
  );
}

export default SignInScreen;
