import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../media/logo.png';
import locationIcon from '../media/location.png';
import defaultProfilePic from '../media/default-profile.png'; // Add your default profile picture here

function NavBar() {
  
  const profilePic = ''; // Add logic to fetch the user's profile picture URL

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
        Sign In
          <NavLink to="/signin" className="signin-btn">
            
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
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/treatments" activeClassName="active">
                Treatments
              </NavLink>
            </li>
            <li>
              <NavLink to="/doctors" activeClassName="active">
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink to="/medicines" activeClassName="active">
                Medicines
              </NavLink>
            </li>
            <li>
              <NavLink to="/diet-yoga" activeClassName="active">
              Diet And Yoga
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" activeClassName="active">
                Blogs and Videos
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
