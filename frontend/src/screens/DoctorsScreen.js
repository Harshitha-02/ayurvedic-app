import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorsScreen.css";

function DoctorsScreen() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    specialization: "",
    experience: "",
    priceRange: "",
    location: "",
    language: "",
    sort: "",
    rating: "",
    gender: "",
  });

  // State for storing doctors fetched from backend
  const [doctors, setDoctors] = useState([]);

  // Fetch doctors from backend on component mount
  useEffect(() => {
    fetch("http://localhost:8080/api/doctors")
      .then((response) => response.json())
      .then((data) => {
        const mappedDoctors = data.map((doctor) => ({
          id: doctor._id,
          name: `${doctor.firstName} ${doctor.lastName}`,
          specialization: doctor.designation || "N/A",
          experience: `${doctor.experience} years`,
          priceRange:
            doctor.price < 500
              ? "Low"
              : doctor.price >= 500 && doctor.price <= 1000
              ? "Medium"
              : "High",
          location: doctor.zipCode || "N/A",
          language: "English",
          rating: 4.0,
          gender:
            doctor.gender.charAt(0).toUpperCase() + doctor.gender.slice(1),
          nextAvailable: "05:30 PM, 10/08/2024",
        }));
        setDoctors(mappedDoctors);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);

  const filteredDoctors = doctors.filter(
    (doctor) =>
      (filters.specialization
        ? doctor.specialization === filters.specialization
        : true) &&
      (filters.experience ? doctor.experience === filters.experience : true) &&
      (filters.priceRange ? doctor.priceRange === filters.priceRange : true) &&
      (filters.location ? doctor.location === filters.location : true) &&
      (filters.language ? doctor.language.includes(filters.language) : true) &&
      (filters.rating ? doctor.rating === parseFloat(filters.rating) : true) &&
      (filters.gender ? doctor.gender === filters.gender : true)
  );

  const sortedDoctors = [...filteredDoctors].sort((a, b) => {
    if (filters.sort === "lowToHigh") {
      return a.rating - b.rating;
    } else if (filters.sort === "highToLow") {
      return b.rating - a.rating;
    }
    return 0;
  });

  const handleDoctorClick = (doctor) => {
    navigate("/doctor-detail", { state: { doctor } });
  };

  return (
    <div className="doctors-container">
      <div className="filters">
        <h2>Filters</h2>
        <button
          className="clear-all"
          onClick={() =>
            setFilters({
              specialization: "",
              experience: "",
              priceRange: "",
              location: "",
              language: "",
              sort: "",
              rating: "",
              gender: "",
            })
          }
        >
          Clear All
        </button>

        {/* Specialization Filter */}
        <div className="filter-group">
          <label htmlFor="specialization">Specialization:</label>
          <select
            id="specialization"
            value={filters.specialization}
            onChange={(e) =>
              setFilters({ ...filters, specialization: e.target.value })
            }
          >
            <option value="">All Specializations</option>
            <option value="Skin Diseases">Skin Diseases</option>
            <option value="Digestive and Metabolic">
              Digestive and Metabolic
            </option>
            <option value="Respiratory Diseases">Respiratory Diseases</option>
          </select>
        </div>

        {/* Experience Filter */}
        <div className="filter-group">
          <label htmlFor="experience">Experience:</label>
          <select
            id="experience"
            value={filters.experience}
            onChange={(e) =>
              setFilters({ ...filters, experience: e.target.value })
            }
          >
            <option value="">Any</option>
            <option value="6 years">6 years</option>
            <option value="7 years">7 years</option>
            <option value="10 years">10 years</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="filter-group">
          <label htmlFor="priceRange">Price Range:</label>
          <select
            id="priceRange"
            value={filters.priceRange}
            onChange={(e) =>
              setFilters({ ...filters, priceRange: e.target.value })
            }
          >
            <option value="">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Location Filter */}
        <div className="filter-group">
          <label htmlFor="location">Location:</label>
          <select
            id="location"
            value={filters.location}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
          >
            <option value="">All Locations</option>
            <option value="Jamshedpur, Jharkhand">Jamshedpur, Jharkhand</option>
            <option value="Gurugram, Haryana">Gurugram, Haryana</option>
          </select>
        </div>

        {/* Language Filter */}
        <div className="filter-group">
          <label htmlFor="language">Language:</label>
          <select
            id="language"
            value={filters.language}
            onChange={(e) =>
              setFilters({ ...filters, language: e.target.value })
            }
          >
            <option value="">All Languages</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        {/* Rating Filter */}
        <div className="filter-group">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            value={filters.rating}
            onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
          >
            <option value="">Any</option>
            <option value="4.0">4.0 and above</option>
            <option value="3.5">3.5 and above</option>
            <option value="5.0">5.0</option>
          </select>
        </div>

        {/* Gender Filter */}
        <div className="filter-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={filters.gender}
            onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
          >
            <option value="">Any</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Sorting Filter */}
        <div className="filter-group">
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            value={filters.sort}
            onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
          >
            <option value="">None</option>
            <option value="lowToHigh">Rating Low to High</option>
            <option value="highToLow">Rating High to Low</option>
          </select>
        </div>
      </div>

      <div className="doctors-list">
        {sortedDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="doctor-card"
            onClick={() => handleDoctorClick(doctor)}
          >
            <div className="doctor-info">
              <div className="doctor-name">
                Dr. {doctor.name}{" "}
                <span className="doctor-rating">{doctor.rating} ⭐</span>
              </div>
              <div className="doctor-specialization">
                {doctor.specialization}
              </div>
              <div className="doctor-experience">
                {doctor.experience} of experience
              </div>
              <div className="doctor-priceRange">{doctor.priceRange} Price</div>
              <div className="doctor-location">Zip Code: {doctor.location}</div>
              <div className="doctor-language">
                Languages: {doctor.language}
              </div>
              <div className="doctor-gender">Gender: {doctor.gender}</div>
              {doctor.nextAvailable && (
                <div className="next-available">
                  NEXT AVAILABLE AT <b>{doctor.nextAvailable}</b>
                </div>
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
