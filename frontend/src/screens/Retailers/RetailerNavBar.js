import React from 'react';
import { NavLink } from 'react-router-dom';
import '../NavBar.css';
// import profilePic from '../media/retailer-profile.png'; // Add profile image

function RetailerNavBar() {
  return (
    <header className="navbar-header">
      <div className="top-navbar">
        <div className="logo-container">
          {/* <img src={profilePic} alt="Retailer Logo" className="nav-logo" /> */}
          <div className="text-container">
            <div className="logo-text">Retailer Portal</div>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/retailer-home" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/manage-products" activeClassName="active">Manage Products</NavLink>
          </li>
          <li>
            <NavLink to="/my-orders" activeClassName="active">My Orders</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default RetailerNavBar;
