import React from 'react';
import './MedicineCard.css'; // Import the CSS file for styling

const MedicineCard = ({ medicine }) => {
    return (
        <div className="medicine-card">
            <div className="medicine-image">
                {/* Placeholder for image */}
            </div>
            <div className="medicine-info">
                <h4>{medicine.name}</h4>
                <p>{medicine.price}</p>
                <div className="prescription-info">
                    {medicine.prescription ? (
                        <p><span role="img" aria-label="required">💊</span> Prescription Required</p>
                    ) : (
                        <p><span role="img" aria-label="not-required">🔓</span> Prescription Not Required</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MedicineCard;
