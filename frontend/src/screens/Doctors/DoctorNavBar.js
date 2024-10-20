import React from 'react';
import { NavLink } from 'react-router-dom';
import '../NavBar.css';
// import profilePic from '../media/doctor-profile.png'; // Add profile image

function DoctorNavBar() {
  return (
    <header className="navbar-header">
      <div className="top-navbar">
        <div className="logo-container">
          {/* <img src={profilePic} alt="Doctor Logo" className="nav-logo" /> */}
          <div className="text-container">
            <div className="logo-text">Doctor Portal</div>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/doctor-home" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/current-requests" activeClassName="active">Current Requests</NavLink>
          </li>
          <li>
            <NavLink to="/appointment-slots" activeClassName="active">Appointment Slots</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default DoctorNavBar;
