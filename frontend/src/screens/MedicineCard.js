import React from "react";
import "./MedicineCard.css"; // Import the CSS file for styling

const MedicineCard = ({ medicine }) => {
  const imageUrl = `http://localhost:8080/${medicine.image}`;
  return (
    <div className="medicine-card">
      <div className="medicine-image">
        {medicine.image && <img src={imageUrl} alt={medicine.name} width="160" />}
      </div>
      <div className="medicine-info">
        <h4>{medicine.name}</h4>
        <p className="medicine-price">{medicine.price}</p>
        <div className="prescription-info">
          {medicine.prescription ? (
            <p>
              <span role="img" aria-label="required">
                💊
              </span>{" "}
              Prescription Required
            </p>
          ) : (
            <p>
              <span role="img" aria-label="not-required">
                🔓
              </span>{" "}
              Prescription Not Required
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
