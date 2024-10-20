import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './BlogsVideosScreen.css';
import logo from '../media/logo.png'; // Import the image directly

function BlogsVideosScreen() {
    const navigate = useNavigate(); // Initialize useNavigate

    const blogs = [
        {
            title: 'The Benefits of Ayurvedic Medicine',
            content: 'Ayurveda is an ancient system of medicine with its roots in India...',
            image: logo, 
        },
        {
            title: 'How to Integrate Ayurveda into Your Daily Life',
            content: 'Discover simple ways to incorporate Ayurvedic principles...',
            image: logo, 
        },
        // Add more blog objects as needed
    ];

    // Function to navigate to the Blogs page with the selected blog details
    const handleBlogClick = (blog) => {
        navigate('/blogs', { state: { blog } }); // Pass blog data via state
    };

    return (
        <div className="blogs-videos">
            <div className="container">
                <h1>Blogs and Videos</h1>

                <div className="section">
                    <h2>Blogs</h2>
                    <div className="blogs">
                        {blogs.map((blog, index) => (
                            <div 
                                key={index} 
                                className="blog-card"
                                onClick={() => handleBlogClick(blog)} // Add click handler
                            >
                                <img src={blog.image} alt={blog.title} />
                                <div className="blog-content">
                                    <h3>{blog.title}</h3>
                                    <p>{blog.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogsVideosScreen;
