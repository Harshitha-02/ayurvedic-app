import React from 'react';
import './FilterSidebar.css'; // Import the CSS file for styling

const FilterSidebar = () => {
    return (
        <div className="filter-sidebar">
            <h3>Filters <span className="clear-all">Clear All</span></h3>
            <div className="filter-section">
                <h4>Diseases</h4>
                {/* Add filter options here */}
            </div>
            <div className="filter-section">
                <h4>Brand</h4>
                {/* Add filter options here */}
            </div>
            <div className="filter-section">
                <h4>Price Range</h4>
                {/* Add filter options here */}
            </div>
            <div className="filter-section">
                <h4>Form</h4>
                {/* Add filter options here */}
            </div>
            <div className="filter-section">
                <h4>Ingredients</h4>
                {/* Add filter options here */}
            </div>
            <div className="filter-section">
                <h4>Sort</h4>
                <label><input type="radio" name="sort" /> low to high</label>
                <label><input type="radio" name="sort" /> high to low</label>
            </div>
            <div className="filter-section">
                <h4>Prescription Required</h4>
                {/* Add filter options here */}
            </div>
        </div>
    );
};

export default FilterSidebar;
