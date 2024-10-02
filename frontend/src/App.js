import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import MedicinesScreen from './screens/Medicines';
import DietYogaScreen from './screens/Patients/DietYogaComponent';
import NavBar from './screens/Navbar';
import BlogsVideosScreen from './screens/BlogsVideosScreen';
import DoctorsScreen from './screens/DoctorsScreen';
import DoctorDetailPage from './screens/Patients/DoctorDetailPage';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen'; 
import SignUpPatientScreen from './screens/Patients/SignUpPatientScreen';
import SignUpDoctorScreen from './screens/Doctors/SignUpDoctorScreen';
import SignUpRetailerScreen from './screens/Retailers/SignUpRetailerScreen';
import PrakritiDetermination from './screens/PrakritiDetermination';
import TreatmentsScreen from './screens/Treatments';
import AppointedDoctor from './screens/Patients/AppointedDoctor';

import DoctorHomeScreen from './screens/Doctors/DoctorHomeScreen';
import CurrentRequests from './screens/Doctors/CurrentRequests';  
import AppointmentSlots from './screens/Doctors/AppointmentSlots';  
import PatientList from './screens/Doctors/PatientList';  
import HealthBlogs from './screens/Doctors/HealthBlogs';  

import RetailerDashboard from './screens/Retailers/RetailerDashboard';
import ManageProducts from './screens/Retailers/ManageProducts';
// import Analytics from './screens/Retailers/Analytics';
import MyOrders from './screens/Retailers/MyOrders';
// import CustomerSupport from './screens/Retailers/CustomerSupport';

function App() {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/treatments" element={<TreatmentsScreen />} />
        <Route path="/medicines" element={<MedicinesScreen />} />
        <Route path="/diet-yoga" element={<DietYogaScreen />} />
        <Route path="/blogs" element={<BlogsVideosScreen />} />
        <Route path="/doctors" element={<DoctorsScreen />} />
        <Route path="/doctor-detail" element={<DoctorDetailPage />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/signup-patient" element={<SignUpPatientScreen />} />
        <Route path="/signup-doctor" element={<SignUpDoctorScreen />} />
        <Route path="/signup-retailer" element={<SignUpRetailerScreen />} />
        <Route path="/prakritidetermination" element={<PrakritiDetermination />} />
        <Route path="/appointeddoctor" element={<AppointedDoctor />} />

        <Route path="/doctor-home" element={<DoctorHomeScreen />} />
        <Route path="/current-requests" element={<CurrentRequests />} />
        <Route path="/appointment-slots" element={<AppointmentSlots />} />
        <Route path="/patient-list" element={<PatientList />} />
        <Route path="/health-blogs" element={<HealthBlogs />} />

        <Route path="/retailer-home" element={<RetailerDashboard />} />
        <Route path="/manage-products" element={<ManageProducts />} />
        {/* <Route path="/analytics" element={<Analytics />} /> */}
        <Route path="/my-orders" element={<MyOrders />} />
        {/* <Route path="/customer-support" element={<CustomerSupport />} /> */}

      </Routes>
    </Router>
  );
}

export default App;