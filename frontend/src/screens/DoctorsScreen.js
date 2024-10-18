import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorsScreen.css';

function DoctorsScreen() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    specialization: '',
    experience: '',
    priceRange: '',
    location: '',
    language: '',
    sort: '',
    rating: '',
    gender: ''
  });

  // State for storing doctors fetched from backend
  const [doctors, setDoctors] = useState([]);

//const doctors = [
//  {
//    id: 1,
//    name: 'Neelam Sharma',
//    specialization: 'Skin Diseases',
//    experience: '6 years',
//    priceRange: 'High',
//    location: 'Jamshedpur, Jharkhand',
//    language: 'English, Hindi',
//    rating: 4.0,
//    gender: 'Female',
//    nextAvailable: '05:30 PM, 10/08/2024',
//  },
//  {
//    id: 2,
//    name: 'Abc Xyz',
//    specialization: 'Digestive and Metabolic',
//    experience: '10 years',
//    priceRange: 'Medium',
//    location: 'Gurugram, Haryana',
//    language: 'English',
//    rating: 3.5,
//    gender: 'Male',
//    nextAvailable: '05:30 PM, 10/08/2024',
//  },
//  {
//    id: 3,
//    name: 'Priyanshu',
//    specialization: 'Respiratory Diseases',
//    experience: '7 years',
//    priceRange: 'Low',
//    location: 'Gurugram, Haryana',
//    language: 'Hindi',
//    rating: 5.0,
//    gender: 'Male',
//    note: 'Dr. Priyanshu is now available for online consultation at the moment',
//  },
//  // Add more doctors as needed
//];

  // Fetch doctors from backend on component mount
  useEffect(() => {
    fetch('http://localhost:8080/api/doctors')
      .then((response) => response.json())
      .then((data) => {
        // Assuming backend data has different field names, map to the existing frontend field structure
        const mappedDoctors = data.map(doctor => ({
          id: doctor._id,
          name: `${doctor.firstName} ${doctor.lastName}`,
          specialization: doctor.designation || 'N/A',
          experience: `${doctor.experience} years`,
          priceRange: doctor.price < 500 ? 'Low' : doctor.price >= 500 && doctor.price <= 1000 ? 'Medium' : 'High',
          location: doctor.zipCode || 'N/A', // Adjust location according to your actual data
          language: 'English', // Assuming language is static for now, as it's not in the backend data
          rating: 4.0, // Rating is not provided by backend, you may set default value or remove it
          gender: doctor.gender.charAt(0).toUpperCase() + doctor.gender.slice(1), // Capitalize gender
          nextAvailable: '05:30 PM, 10/08/2024', // Static for now, replace with actual data when available
        }));
        setDoctors(mappedDoctors);
      })
      .catch((error) => {
        console.error('Error fetching doctors:', error);
      });
  }, []);

  // Filter and sorting logic remains the same
  const filteredDoctors = doctors.filter(doctor =>
    (filters.specialization ? doctor.specialization === filters.specialization : true) &&
    (filters.experience ? doctor.experience === filters.experience : true) &&
    (filters.priceRange ? doctor.priceRange === filters.priceRange : true) &&
    (filters.location ? doctor.location === filters.location : true) &&
    (filters.language ? doctor.language.includes(filters.language) : true) &&
    (filters.rating ? doctor.rating === parseFloat(filters.rating) : true) &&
    (filters.gender ? doctor.gender === filters.gender : true)
  );

  const sortedDoctors = [...filteredDoctors].sort((a, b) => {
    if (filters.sort === 'lowToHigh') {
      return a.rating - b.rating;
    } else if (filters.sort === 'highToLow') {
      return b.rating - a.rating;
    }
    return 0;
  });

  const handleDoctorClick = (doctor) => {
    navigate('/doctor-detail', { state: { doctor } });
  };

  return (
    <div className="doctors-container">
      <div className="filters">
        <h2>Filters</h2>
        <button className="clear-all" onClick={() => setFilters({
          specialization: '',
          experience: '',
          priceRange: '',
          location: '',
          language: '',
          sort: '',
          rating: '',
          gender: ''
        })}>Clear All</button>
        
        <div className="filter-group">
          <label htmlFor="specialization">Specialization:</label>
          <select
            id="specialization"
            value={filters.specialization}
            onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
          >
            <option value="">All Specializations</option>
            <option value="Skin Diseases">Skin Diseases</option>
            <option value="Digestive and Metabolic">Digestive and Metabolic</option>
            <option value="Respiratory Diseases">Respiratory Diseases</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Add other filter groups similarly as in the original code */}

      </div>

      <div className="doctors-list">
        {sortedDoctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card" onClick={() => handleDoctorClick(doctor)}>
            <div className="doctor-info">
              <div className="doctor-name">
                Dr. {doctor.name} <span className="doctor-rating">{doctor.rating} ⭐</span>
              </div>
              <div className="doctor-specialization">{doctor.specialization}</div>
              <div className="doctor-experience">{doctor.experience} of experience</div>
              <div className="doctor-priceRange">{doctor.priceRange} Price</div>
              <div className="doctor-location">Zip Code: {doctor.location}</div>
              <div className="doctor-language">Languages: {doctor.language}</div>
              <div className="doctor-gender">Gender: {doctor.gender}</div>
              {doctor.nextAvailable && (
                <div className="next-available">NEXT AVAILABLE AT <b>{doctor.nextAvailable}</b></div>
              )}
              {/* Optionally include a note if available */}
            </div>
            <button className="book-consultation">Book Consultation</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsScreen;
