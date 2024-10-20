import React, {useContext} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './PatientPage.css'; // Import the CSS file for styling
import { AuthContext } from '../../context/AuthContext';

function PatientPage() {
  const { auth,setAuth } = useContext(AuthContext);
  const firstName = auth.user?.firstName || 'Patient'
  const navigate = useNavigate();
  const handleSignOut = () => {
    setAuth({ token: null, user: null });
    localStorage.removeItem('token');
    navigate('/signin');
  };
  return (
    <div className="patient-container">
      <main className="content">
      {/* fetch name and show */}
      <button onClick={handleSignOut} className="signout-btn">Sign Out</button>
        <h1>Hi {firstName}! How are you?</h1> 
        <p>Welcome back! Let's continue your journey to holistic wellness. We find the best doctors for you using Modern Technologies.</p>
        <div className="button-group">
          <button className="appoint-btn">Your Appointed Doctor</button>
          <button className="match-btn">Match me Automatically</button>
        </div>
      </main>
    </div>
  );
}

export default PatientPage;