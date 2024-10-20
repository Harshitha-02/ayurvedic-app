import React from 'react';
import './Treatments.css';  // Import the CSS for styling

function TreatmentsScreen() {
  const treatments = [
    { category: 'Digestive Health', items: ['Acid Reflux', 'Constipation', 'Diarrhea', 'Indigestion', 'Irritable Bowel Syndrome (IBS)'] },
    { category: 'Respiratory Health', items: ['Asthma', 'Bronchitis', 'Common Cold', 'Cough', 'Sinusitis'] },
    { category: 'Skin Care', items: ['Acne', 'Eczema', 'Psoriasis', 'Rashes', 'Skin Allergies'] },
    { category: 'Joint and Bone Health', items: ['Arthritis', 'Back Pain', 'Joint Pain', 'Osteoporosis', 'Rheumatism'] },
    { category: 'Cardiovascular Health', items: ['High Blood Pressure', 'High Cholesterol', 'Heart Health', 'Circulatory Issues'] },
    { category: 'Mental Health and Wellness', items: ['Anxiety', 'Depression', 'Insomnia', 'Stress', 'Memory Support'] },
    { category: 'Metabolic and Endocrine Health', items: ['Diabetes', 'Thyroid Disorders', 'Weight Management', 'Metabolism Boosters'] },
    { category: 'Immune Support', items: ['General Immune Boosters', 'Allergies', 'Autoimmune Support'] },
    { category: 'Women\'s Health', items: ['Menstrual Disorders', 'Menopause', 'Fertility Support', 'PCOS/PCOD', 'Vaginal Health'] },
    { category: 'Men\'s Health', items: ['Prostate Health', 'Sexual Health', 'Testosterone Support', 'Hair Loss', 'Erectile Dysfunction'] },
    { category: 'Liver and Kidney Health', items: ['Liver Detox', 'Kidney Stones', 'Urinary Tract Health', 'Hepatitis'] },
    { category: 'Eye Health', items: ['Dry Eyes', 'Vision Support', 'Conjunctivitis', 'Glaucoma'] },
    { category: 'Oral Health', items: ['Gum Disease', 'Tooth Decay', 'Bad Breath', 'Mouth Ulcers'] },
    { category: 'General Wellness', items: ['Detoxification', 'Anti-Aging', 'Energy Boosters', 'General Weakness', 'Nutritional Supplements'] },
    { category: 'Infections', items: ['Bacterial Infections', 'Fungal Infections', 'Viral Infections', 'Parasitic Infections'] }
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
