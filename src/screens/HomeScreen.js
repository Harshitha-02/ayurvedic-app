import React from 'react';
import './HomeScreen.css';  // Import the CSS
import logo from '../media/logo.png';  // Import the logo
import homebg from '../media/homebg1.png';  // Import the background image
import locationIcon from '../media/location.png';  // Import the location icon

function HomeScreen() {
  return (
    <div className="homeScreen" style={{ backgroundImage: `url(${homebg})` }}>
      <header className="header">
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
                  <option value="blog">Blogs</option>
                </select>
              </div>
              <input type="text" placeholder="Search" className="search-input" />
            </div>
          </div>
          <div className="auth">
            <a href="/">Sign In</a>
          </div>
        </div>

        <nav className="navbar">
          <div className="left-item">
            <img src={locationIcon} alt="Location Icon" className="location-icon" />
            <span className="location-text">Location</span>
          </div>
          <div className="center-items">
            <ul>
              <li><a href="/" className="active">Home</a></li>
              <li><a href="/">Treatments</a></li>
              <li><a href="/">Doctors</a></li>
              <li><a href="/">Medicines</a></li>
              <li><a href="/">Blogs and Videos</a></li>
              <li><a href="/">Cart</a></li>
              <li><a href="/">Orders</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="main">
        <div className="content">
          <div className="logo-image">
            <img src={logo} alt="Ayurvedic Logo" />
          </div>
          <h1>AYURVEDIC Consultations</h1>
          <button className="consult-btn">Consult an Ayurvedic Doctor <br /> Book a Session</button>
        </div>
      </main>
    </div>
  );
}

export default HomeScreen;
