import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar';
// import profilePic from '../media/patient-profile.png'; // Add profile image

function PatientNavBar() {
  return (
    <header className="navbar-header">
      <div className="top-navbar">
        <div className="logo-container">
          {/* <img src={profilePic} alt="Patient Logo" className="nav-logo" /> */}
          <div className="text-container">
            <div className="logo-text">Patient Portal</div>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/home" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/appointeddoctor" activeClassName="active">My Doctor</NavLink>
          </li>
          <li>
            <NavLink to="/prakritidetermination" activeClassName="active">Prakriti Determination</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default PatientNavBar;
