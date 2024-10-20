import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './Blogscss.css'; // Create a new CSS file for this page

function BlogScreen() {
    const location = useLocation();
    const { blog } = location.state || {}; // Get blog data from state

    if (!blog) {
        return <p>No blog selected</p>; // Handle case where no blog is passed
    }

    return (
        <div className="blog-page">
            <div className="blog-container">
                <h1>{blog.title}</h1>
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <p>{blog.content}</p>
            </div>
        </div>
    );
}

export default BlogScreen;
