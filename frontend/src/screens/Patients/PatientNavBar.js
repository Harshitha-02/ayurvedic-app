import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../NavBar.css'; // Ensure styles from NavBar are included
import logo from '../../media/logo.png';
import locationIcon from '../../media/location.png';
import defaultProfilePic from '../../media/default-profile.png'; // Default profile picture

import { AuthContext } from '../../context/AuthContext'; // Import AuthContext

function PatientNavBar() {
  const { auth } = useContext(AuthContext); // Get auth context to access user info

  const profilePic = ''; // Logic to fetch user's profile picture URL
  const userName = auth.user ? auth.user.name : 'Guest'; // Display the user's name or 'Guest'

  return (
    <header className="navbar-header">
      <div className="top-navbar">
        <div className="logo-container">
          <img src={logo} alt="Ayurvedic Logo" className="nav-logo" />
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
          {userName} {/* Show patient's name */}
          <NavLink to="/profile" className="signin-btn">
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
              <NavLink to="/home" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/treatments" activeClassName="active">Treatments</NavLink>
            </li>
            <li>
              <NavLink to="/doctors" activeClassName="active">Doctors</NavLink>
            </li>
            <li>
              <NavLink to="/medicines" activeClassName="active">Medicines</NavLink>
            </li>
            <li>
              <NavLink to="/diet-yoga" activeClassName="active">Diet and Yoga Plan</NavLink> {/* Updated item name */}
            </li>
            <li>
              <NavLink to="/blogs" activeClassName="active">Blogs and Videos</NavLink>
            </li>
            <li>
              <NavLink to="/cart" activeClassName="active">Cart</NavLink> {/* Add Cart option */}
            </li>
            <li>
              <NavLink to="/orders" activeClassName="active">Orders</NavLink> {/* Add Orders option */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default PatientNavBar;
