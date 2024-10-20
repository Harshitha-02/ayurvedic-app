import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../NavBar.css'; // Ensure styles from NavBar are included
import logo from '../../media/logo.png'; // Adjust the path if needed
import locationIcon from '../../media/location.png'; // Adjust the path if needed
import defaultProfilePic from '../../media/default-profile.png'; // Default profile picture
import { AuthContext } from '../../context/AuthContext'; // Import AuthContext

function DoctorNavBar() {
  const { auth } = useContext(AuthContext); // Get auth context to access user info

  const profilePic = ''; // Logic to fetch user's profile picture URL
  const doctorName = auth.user ? auth.user.name : 'Guest'; // Display the doctor's name or 'Guest'

  return (
    <header className="navbar-header">
      <div className="top-navbar">
        <div className="logo-container">
          <img src={logo} alt="Doctor Logo" className="nav-logo" />
          <div className="text-container">
            <div className="logo-text">AYURVEDIC</div>
            <div className="consultations-text">Consultations</div>
          </div>
        </div>
        <div className="search-signin">
          <div className="search-bar">
            <div className="dropdown">
            <select>
                <option value="doctor">Doctor</option>
                <option value="disease">Diseases</option>
                <option value="medicine">Medicines</option>
                <option value="diet-yoga">Diet And Yoga</option>
                <option value="blog">Blogs</option>
              </select>
            </div>
            <input type="text" placeholder="Search" className="search-input" />
          </div>
        </div>
        <div className="auth">
          {doctorName} {/* Show doctor's name */}
          <NavLink to="/doctor-profile" className="signin-btn">
            <img
              src={profilePic || defaultProfilePic}
              alt="Profile"
              className="profile-pic"
            />
          </NavLink>
        </div>
      </div>

      <nav className="navbar">
        <div className="left-item">
          <img src={locationIcon} alt="Location Icon" className="location-icon" />
          <span className="location-text">Location</span>
        </div>
        <div className="center-items">
          <ul>
            <li>
              <NavLink to="/doctor-home" activeClassName="active">Home</NavLink> {/* Home Option */}
            </li>
            <li>
              <NavLink to="/current-requests" activeClassName="active">Current Requests</NavLink>
            </li>
            <li>
              <NavLink to="/appointment-slots" activeClassName="active">Appointment Slots</NavLink>
            </li>
            <li>
              <NavLink to="/patient-list" activeClassName="active">Patient List</NavLink>
            </li>
            <li>
              <NavLink to="/analytics" activeClassName="active">Analytics</NavLink>
            </li>
            <li>
              <NavLink to="/my-health-blogs" activeClassName="active">My Health Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/history" activeClassName="active">History</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default DoctorNavBar;
