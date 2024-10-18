import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RetailerDashboard.css';

function RetailerDashboard() {
  const [retailer, setRetailer] = useState(null);  // State to hold retailer info

  // Fetch retailer data when the component mounts
  useEffect(() => {
    const fetchRetailerData = async () => {
      try {
        const token = localStorage.getItem('token');  // Retrieve JWT token from localStorage
        const response = await fetch('http://localhost:8080/api/auth/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,  // Send token in Authorization header
          },
        });
        const data = await response.json();
        if (response.ok) {
          setRetailer(data);  // Set retailer data to state
        } else {
          console.error('Failed to fetch retailer data:', data.message);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchRetailerData();  // Call the function to fetch retailer data
  }, []);

  return (
    <div className="retailer-dashboard">
      <h1>Hi {retailer ? retailer.firstName : 'Retailer'}!</h1>  {/* Dynamically display retailer's first name */}
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
