import React from 'react';
import './BlogsVideosScreen.css';
import logo from '../media/logo.png'; // Import the image directly

function BlogsVideosScreen() {
    const blogs = [
        {
            title: 'The Benefits of Ayurvedic Medicine',
            content: 'Ayurveda is an ancient system of medicine with its roots in India...',
            image: logo, // Use the imported image
        },
        {
            title: 'How to Integrate Ayurveda into Your Daily Life',
            content: 'Discover simple ways to incorporate Ayurvedic principles...',
            image: logo, // Use the imported image
        },
        {
            title: 'The Benefits of Ayurvedic Medicine',
            content: 'Ayurveda is an ancient system of medicine with its roots in India...',
            image: logo, // Use the imported image
        },
        {
            title: 'The Benefits of Ayurvedic Medicine',
            content: 'Ayurveda is an ancient system of medicine with its roots in India...',
            image: logo, // Use the imported image
        },
    ];

    const videos = [
        {
            title: 'Introduction to Ayurveda',
            url: 'https://www.youtube.com/embed/video1',
        },
        {
            title: 'Ayurvedic Home Remedies',
            url: 'https://www.youtube.com/embed/video2',
        },
    ];

    return (
        <div className="blogs-videos">
            <div className="container">
                <h1>Blogs and Videos</h1>

                <div className="section">
                    <h2>Blogs</h2>
                    <div className="blogs">
                        {blogs.map((blog, index) => (
                            <div key={index} className="blog-card">
                                <img src={blog.image} alt={blog.title} /> {/* Use the image directly */}
                                <div className="blog-content">
                                    <h3>{blog.title}</h3>
                                    <p>{blog.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section">
                    <h2>Videos</h2>
                    <div className="videos">
                        {videos.map((video, index) => (
                            <div key={index} className="video-card">
                                <iframe
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                                <h3>{video.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogsVideosScreen;
