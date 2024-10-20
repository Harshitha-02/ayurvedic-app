import React, {useContext} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './DoctorHomeScreen.css';
import { AuthContext } from '../../context/AuthContext';

function DoctorHomeScreen() {
  const { auth,setAuth } = useContext(AuthContext);
  const firstName = auth.user?.firstName || 'Doctor'
  const navigate = useNavigate();
  const handleSignOut = () => {
    setAuth({ token: null, user: null });
    localStorage.removeItem('token');
    navigate('/signin');
  };
  return (
    <div className="doctor-home-container">
      
      <h1>Hi Dr. {firstName}</h1>
      <button onClick={handleSignOut} className="signout-btn">Sign Out</button>
      <p>Welcome back! Let's manage appointments and patients records efficiently.</p>
      
      <div className="current-requests-container">
        <Link to="/current-requests"><button className="current-requests-btn">Current Requests</button></Link>
      </div>
      
      <div className="doctor-options">
        <div className='left-side'>
        <Link to="/appointment-slots"><button className="option-btn">Appointment Slots</button></Link>
        <Link to="/patient-list"><button className="option-btn">Patient List</button></Link>
        </div>
        <div className='right-side'>
        <Link to="/analytics"><button className="option-btn">Analytics</button></Link> 
        <Link to="/health-blogs"><button className="option-btn">My Health Blogs</button></Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorHomeScreen;