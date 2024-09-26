import React from 'react';
import './Treatments.css';  // Import the CSS for styling

function TreatmentsScreen() {
  const treatments = [
    { category: 'Pain Problems', items: ['Headache Relief', 'Back Pain Therapy', 'Joint Pain Treatment'] },
    { category: 'Kidney Problems', items: ['Kidney Cleansing', 'Urinary Health Therapy', 'Kidney Stones Prevention'] },
    { category: 'Liver Problems', items: ['Liver Detoxification', 'Hepatitis Treatment', 'Fatty Liver Management'] },
    { category: 'Female Problems', items: ['Menstrual Health', 'PCOS Management', 'Menopause Support'] }
  ];

  return (
    <div className="treatmentsScreen">
      <div className="content">
        <h1>Treatments</h1>
        <div className="treatments-list">
          {treatments.map((treatment, index) => (
            <div key={index} className="treatment-category">
              <h2>{treatment.category}</h2>
              <ul>
                {treatment.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TreatmentsScreen;