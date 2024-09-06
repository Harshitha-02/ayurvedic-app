import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import MedicinesScreen from './screens/Medicines';
import NavBar from './screens/Navbar';
import BlogsVideosScreen from './screens/BlogsVideosScreen';
import DoctorsScreen from './screens/DoctorsScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen'; 
import SignUpPatientScreen from './screens/SignUpPatientScreen';
import SignUpDoctorScreen from './screens/SignUpDoctorScreen';
import SignUpRetailerScreen from './screens/SignUpRetailerScreen';
import PrakritiDetermination from './screens/PrakritiDetermination';

function App() {
  return (
    <Router>
      <NavBar /> {/* Include the NavBar on every screen */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/medicines" element={<MedicinesScreen />} />
        <Route path="/blogs" element={<BlogsVideosScreen />} />
        <Route path="/doctors" element={<DoctorsScreen />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/signup-patient" element={<SignUpPatientScreen />} />
        <Route path="/signup-doctor" element={<SignUpDoctorScreen />} />
        <Route path="/signup-retailer" element={<SignUpRetailerScreen />} />
        <Route path="/prakritidetermination" element={<PrakritiDetermination />} />
      </Routes>
    </Router>
  );
}

export default App;
