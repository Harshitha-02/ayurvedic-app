import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './SignInScreen.css';
import logo from '../media/logo.png'; // Import your logo

function SignInScreen() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUp = () => {
    navigate('/signup'); // Navigate to the SignUpScreen
  };

  return (
    <div className="signin-container">
      <div className="signin-left">
        <img src={logo} alt="Ayurvedic Logo" className="ayurvedic-logo" />
        <h1>AYURVEDIC</h1>
        <h2>Consultations</h2>
        <div className='outbox'>
        <button className="consult-btn">Consult an Ayurvedic Doctor <br /> Book a Session</button>
        </div>
      </div>
      <div className="signin-right">
        <div className='signin-heading'>Sign in to your account</div>
        <p className='welcome'>Welcome Back! We're happy to see you again</p>
        <form className='signin-form'>
          <input type="email" placeholder="Mail ID" required />
          <input type="password" placeholder="Password" required />
          <a href="#" className="forgot-password">Forgot Password?</a>
          <button type="submit" className="signin-btn">SIGN IN</button>
        </form>
        <p>Don’t have an account? <a href="#" onClick={handleSignUp}>Sign Up</a></p> {/* Add onClick to handleSignUp */}
      </div>
    </div>
  );
}

export default SignInScreen;
