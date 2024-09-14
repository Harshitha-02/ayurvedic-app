import React from 'react';
import FilterSidebar from './FilterSidebar';
import MedicineCard from './MedicineCard';
import './Medicines.css'; // Import the CSS file for styling

const Medicines = () => {
    // Dummy data for medicines
    const medicines = [
        { name: 'Medicine 1', price: 'Rs.1234', prescription: true },
        { name: 'Medicine 2', price: 'Rs.1234', prescription: false },
        { name: 'Medicine 3', price: 'Rs.1234', prescription: true },
    ];

    return (
        <div className="medicines-page">
            <FilterSidebar />
            <div className="medicine-list">
                {medicines.map((medicine, index) => (
                    <MedicineCard key={index} medicine={medicine} />
                ))}
            </div>
        </div>
    );
};

export default Medicines;
