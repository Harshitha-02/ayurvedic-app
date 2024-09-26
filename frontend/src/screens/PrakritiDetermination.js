import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PrakritiDetermination.css';
import './SignUpScreen.css'

function PrakritiDetermination() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/'); // Navigate to HomeScreen
  };

  const handleSkipClick = () => {
    navigate('/'); // Navigate to HomeScreen
  };

  return (
    <div className="signup-container">
      <h1>Prakriti Determination Form</h1>
      <p>Unlock personalized care! Complete our Prakriti determination to find the perfect doctor for you based on your needs. Saves time searching by automatically detecting doctors for you via best technology.</p>
      <form className="signup-form">
        <div className="form-column">
          <div className="form-group">
            <label>Skin</label>
            <input type="text" placeholder="Dry, Oily or Combination" required />
          </div>
          <div className="form-group">
            <label>Body Temperature</label>
            <input type="text" placeholder="Tend to feel Cold/Hot easily?" required />
          </div>
          <div className="form-group">
            <label>Digestion</label>
            <input type="text" placeholder="Regular, Irregular or Mixed" required />
          </div>
          <div className="form-group">
            <label>Seasonal Experience</label>
            <input type="text" placeholder="Prefer warm/cold?" required />
          </div>
        </div>

        <div className="form-column">
          <div className="form-group">
            <label>Sleeping hours</label>
            <input type="number" placeholder="4" required />
          </div>
          <div className="form-group">
            <label>Apetite</label>
            <input type="text" placeholder="Strong, Weak or Irregular" required />
          </div>
          <div className="form-group">
            <label>Energy Level</label>
            <input type="text" placeholder="Energetic or energy fatigue" required />
          </div>
          <div className="form-group">
            <label>Dietary Habits</label>
            <input type="text" placeholder="Heavy, Medium or Light" required />
          </div>
        </div>
        <div className="skipbutton">
          <button type="button" className="skip-btn" onClick={handleSkipClick}>Skip →</button>
        </div>
        <div className="nextbutton">
          <button type="button" className="next-btn" onClick={handleNextClick}>Next →</button>
        </div>
      </form>
    </div>
  );
}

export default PrakritiDetermination;
