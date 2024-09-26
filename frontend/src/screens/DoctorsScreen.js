import React, { useState } from 'react';
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

  const doctors = [
    {
      id: 1,
      name: 'Dr. Neelam Sharma',
      specialization: 'Skin Diseases',
      experience: '6 years',
      priceRange: 'High',
      location: 'Jamshedpur, Jharkhand',
      language: 'English, Hindi',
      rating: 4.0,
      gender: 'Female',
      nextAvailable: '05:30 PM, 10/08/2024',
    },
    {
      id: 2,
      name: 'Dr. Abc Xyz',
      specialization: 'Digestive and Metabolic',
      experience: '10 years',
      priceRange: 'Medium',
      location: 'Gurugram, Haryana',
      language: 'English',
      rating: 3.5,
      gender: 'Male',
      nextAvailable: '05:30 PM, 10/08/2024',
    },
    {
      id: 3,
      name: 'Dr. Priyanshu',
      specialization: 'Respiratory Diseases',
      experience: '7 years',
      priceRange: 'Low',
      location: 'Gurugram, Haryana',
      language: 'Hindi',
      rating: 5.0,
      gender: 'Male',
      note: 'Dr. Priyanshu is now available for online consultation at the moment',
    },
    // Add more doctors as needed
  ];

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

        <div className="filter-group">
          <label htmlFor="experience">Experience:</label>
          <select
            id="experience"
            value={filters.experience}
            onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
          >
            <option value="">All Experience Levels</option>
            <option value="1 year">1 year</option>
            <option value="3 years">3 years</option>
            <option value="5 years">5 years</option>
            <option value="10 years">10 years</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="priceRange">Price Range:</label>
          <select
            id="priceRange"
            value={filters.priceRange}
            onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
          >
            <option value="">All Price Ranges</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="location">Location:</label>
          <select
            id="location"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          >
            <option value="">All Locations</option>
            <option value="Jamshedpur, Jharkhand">Jamshedpur, Jharkhand</option>
            <option value="Gurugram, Haryana">Gurugram, Haryana</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="language">Language:</label>
          <select
            id="language"
            value={filters.language}
            onChange={(e) => setFilters({ ...filters, language: e.target.value })}
          >
            <option value="">All Languages</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sort">Sort by Rating:</label>
          <select
            id="sort"
            value={filters.sort}
            onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
          >
            <option value="">Sort By</option>
            <option value="lowToHigh">Lowest to Highest</option>
            <option value="highToLow">Highest to Lowest</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            value={filters.rating}
            onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
          >
            <option value="">All Ratings</option>
            <option value="3">3 ⭐</option>
            <option value="4">4 ⭐</option>
            <option value="5">5 ⭐</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={filters.gender}
            onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
          >
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      <div className="doctors-list">
        {sortedDoctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card" onClick={() => handleDoctorClick(doctor)}>
            <div className="doctor-info">
              <div className="doctor-name">
                {doctor.name} <span className="doctor-rating">{doctor.rating} ⭐</span>
              </div>
              <div className="doctor-specialization">{doctor.specialization}</div>
              <div className="doctor-experience">{doctor.experience} of experience</div>
              <div className="doctor-priceRange">{doctor.priceRange} Price</div>
              <div className="doctor-location">{doctor.location}</div>
              <div className="doctor-language">Languages: {doctor.language}</div>
              {doctor.nextAvailable && (
                <div className="next-available">NEXT AVAILABLE AT <b>{doctor.nextAvailable}</b></div>
              )}
              {doctor.note && (
                <div className="doctor-note">{doctor.note}</div>
              )}
            </div>
            <button className="book-consultation">Book Consultation</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsScreen;