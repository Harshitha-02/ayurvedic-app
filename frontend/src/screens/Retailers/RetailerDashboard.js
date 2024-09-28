import React from 'react';
import { Link } from 'react-router-dom';
import './RetailerDashboard.css';  // Make sure to link the CSS file

function RetailerDashboard() {
  return (
    <div className="retailer-dashboard">
      <h1>Hi Aditya!</h1>
      <p>Welcome back! Let's showcase your products and connect with potential buyers effortlessly.</p>

      <div className="dashboard-buttons">
        <Link to="/manage-products"><button className="dashboard-btn">Manage Products</button></Link>
        <Link to="/analytics"><button className="dashboard-btn">Analytics</button></Link>
        <Link to="/my-orders"><button className="dashboard-btn">My Orders</button></Link>
        <Link to="/customer-support"><button className="dashboard-btn">Customer Support</button></Link>
      </div>
    </div>
  );
}

export default RetailerDashboard;
